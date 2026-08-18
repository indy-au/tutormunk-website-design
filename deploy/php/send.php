<?php

/**
 * TutorMunk Request a Call mail endpoint. Phase 3B, 18 Aug 2026.
 *
 * PHPMailer version vendored in ./PHPMailer/: v7.1.1 (18 May 2026), pinned.
 * No Composer on the server, the three source files are required directly
 * below in dependency order.
 *
 * IMPORTANT: the three validators in this file (validate_name,
 * validate_phone/normalise_au_phone, validate_email) are a faithful,
 * deliberate PORT of the exact same three validators in
 * src/components/CallbackModal.tsx, proved against the same 97 named
 * cases (plus the exhaustive sweeps) as scripts/test-callback-form.mjs.
 * If either validator ever changes, change it in all three places
 * together: CallbackModal.tsx, scripts/test-callback-form.mjs, and here.
 * See CLAUDE.md's "Form endpoint" section.
 */

declare(strict_types=1);

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/SMTP.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

// ============================================================================
// Private data dir. A sibling of public_html on Hostinger (send.php itself
// lives at the web root, so __DIR__ . '/..' is one level above it), never
// web-reachable. Falls back to sys_get_temp_dir() if that location cannot
// be created or is not writable, and says so in the log, since a mail
// endpoint that cannot log is worse than one that logs somewhere less
// private during a local test.
// ============================================================================
function data_dir(): string
{
    static $dir = null;
    if ($dir !== null) {
        return $dir;
    }
    $preferred = __DIR__ . '/../mail-data/';
    if (!is_dir($preferred)) {
        @mkdir($preferred, 0700, true);
    }
    if (is_dir($preferred) && is_writable($preferred)) {
        $dir = $preferred;
        return $dir;
    }
    $fallback = rtrim(sys_get_temp_dir(), '/\\') . '/tutormunk-mail-data/';
    if (!is_dir($fallback)) {
        @mkdir($fallback, 0700, true);
    }
    $dir = $fallback;
    log_line('fallback-data-dir', '-', '-', "using $fallback instead of $preferred (not writable)");
    return $dir;
}

/**
 * timestamp, outcome, IP, normalised phone only (never the password, never
 * name/email content beyond what the outcome string itself already says).
 */
function log_line(string $outcome, string $ip, string $normalisedPhone, string $detail = ''): void
{
    $path = data_dir() . 'send.log';
    $ts = (new DateTime('now', new DateTimeZone('Australia/Sydney')))->format('Y-m-d H:i:s T');
    $line = sprintf(
        "%s\toutcome=%s\tip=%s\tphone=%s%s\n",
        $ts,
        $outcome,
        $ip,
        $normalisedPhone !== '' ? $normalisedPhone : '-',
        $detail !== '' ? "\tdetail=$detail" : '',
    );
    $fh = @fopen($path, 'a');
    if ($fh) {
        @flock($fh, LOCK_EX);
        fwrite($fh, $line);
        @flock($fh, LOCK_UN);
        fclose($fh);
    }
}

function json_response(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

function client_ip(): string
{
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

$ip = client_ip();

// ============================================================================
// 1) Method
// ============================================================================
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    json_response(405, ['ok' => false, 'error' => 'method-not-allowed']);
}

// ============================================================================
// 2) Config, loaded softly here (only to read dev_mode for the origin check
// below). The HARD failure ("refuse to run if mail.config.php is missing
// or smtp_pass is empty") is deliberately deferred to step 8, right before
// SMTP is actually touched, not here. Checking it this early would mean
// EVERY request, including an invalid field or an obvious bot, gets a 500
// "server-not-configured" instead of its real 400 / 200 outcome, which
// would both hide real validation/bot bugs behind a misconfigured-looking
// server AND tell a bot more than it should ever learn. A forgotten
// password still fails loudly, just only once a request has earned the
// right to reach SMTP at all.
// ============================================================================
$configPath = __DIR__ . '/mail.config.php';
/** @var array<string, mixed>|null $config */
$config = is_file($configPath) ? require $configPath : null;
$devMode = is_array($config) ? (bool) ($config['dev_mode'] ?? false) : false;

// ============================================================================
// 3) Same-origin check. Production allows only https://tutormunk.com.au.
// www and http://localhost:* are allowed ONLY when dev_mode is true.
// ============================================================================
function request_origin(): ?string
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? null;
    if ($origin) {
        return rtrim($origin, '/');
    }
    $referer = $_SERVER['HTTP_REFERER'] ?? null;
    if ($referer) {
        $parts = parse_url($referer);
        if (isset($parts['scheme'], $parts['host'])) {
            $originFromReferer = $parts['scheme'] . '://' . $parts['host'];
            if (isset($parts['port'])) {
                $originFromReferer .= ':' . $parts['port'];
            }
            return $originFromReferer;
        }
    }
    return null;
}

function is_allowed_origin(?string $origin, bool $devMode): bool
{
    if ($origin === null) {
        return false;
    }
    if ($origin === 'https://tutormunk.com.au') {
        return true;
    }
    if (!$devMode) {
        return false;
    }
    if ($origin === 'https://www.tutormunk.com.au') {
        return true;
    }
    return (bool) preg_match('/^http:\/\/localhost(:\d+)?$/', $origin);
}

$origin = request_origin();
if (!is_allowed_origin($origin, $devMode)) {
    json_response(403, ['ok' => false, 'error' => 'origin-not-allowed']);
}

// ============================================================================
// 4) Read + sanitise fields. \r and \n are stripped from every value before
// anything else touches them; if either was present in the RAW name or
// email, that is treated as a rejection (mail-header-injection attempt),
// not silently cleaned and accepted.
// ============================================================================
function had_crlf(string $v): bool
{
    return strpos($v, "\r") !== false || strpos($v, "\n") !== false;
}

function strip_crlf(string $v): string
{
    return str_replace(["\r", "\n"], '', $v);
}

$rawName = (string) ($_POST['name'] ?? '');
$rawPhone = (string) ($_POST['phone'] ?? '');
$rawEmail = (string) ($_POST['email'] ?? '');
$rawWebsite = (string) ($_POST['website'] ?? '');
$rawElapsed = $_POST['elapsed'] ?? null;

$nameHadCrlf = had_crlf($rawName);
$emailHadCrlf = had_crlf($rawEmail);

$name = strip_crlf($rawName);
$phone = strip_crlf($rawPhone);
$email = strip_crlf($rawEmail);
$website = strip_crlf($rawWebsite);

// ============================================================================
// 5) Validation, ported faithfully from CallbackModal.tsx / test-callback-form.mjs.
// ============================================================================

// ACMA allocates Australian mobiles as 04 plus 8 digits, and landlines as
// 02, 03, 07 or 08 plus 8 digits. Matches ALLOWED_PHONE_CHARS in
// CallbackModal.tsx exactly. This file only runs once per request (no
// loop, no re-require), so these are plain defines, no exists-guard needed.
define('TUTORMUNK_ALLOWED_PHONE_CHARS', '/^[0-9+()\-.\s]+$/');
// Mirrors AU_PHONE in CallbackModal.tsx exactly.
define('TUTORMUNK_AU_PHONE', '/^(?:04\d{8}|0[2378][2-9]\d{7})$/');
// Mirrors NAME_ALLOWED in CallbackModal.tsx exactly (Unicode letters/marks,
// must start with a letter, allowed punctuation ' \x{2019} . - and space).
define('TUTORMUNK_NAME_ALLOWED', '/^[\p{L}\p{M}][\p{L}\p{M}\'\x{2019}.\- ]*$/u');
// Mirrors EMAIL_SHAPE in CallbackModal.tsx exactly.
define('TUTORMUNK_EMAIL_SHAPE', '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/');

function normalise_au_phone(string $raw): string
{
    $value = trim($raw);
    if (!preg_match(TUTORMUNK_ALLOWED_PHONE_CHARS, $value)) {
        return '';
    }
    // "+" is only ever a leading country code marker.
    $plusPos = strpos($value, '+');
    if ($plusPos !== false && $plusPos > 0) {
        return '';
    }
    $d = preg_replace('/[^\d+]/', '', $value);
    if (str_starts_with($d, '+61')) {
        $d = '0' . substr($d, 3);
    } elseif (str_starts_with($d, '0061')) {
        $d = '0' . substr($d, 4);
    } elseif (str_starts_with($d, '61') && strlen($d) === 11) {
        $d = '0' . substr($d, 2);
    } else {
        // No country code was present, take the number exactly as typed.
        return $d;
    }
    // Only reachable when a +61/0061/61 prefix was just replaced, so this
    // collapses "+61 (0)4..." and can no longer strip the leading zero of
    // an international 00-prefixed number.
    if (str_starts_with($d, '00')) {
        $d = substr($d, 1);
    }
    return $d;
}

function validate_name(string $raw, bool $hadCrlf): ?string
{
    if ($hadCrlf) {
        return 'Please enter your full name.';
    }
    $value = trim($raw);
    $len = mb_strlen($value, 'UTF-8');
    if ($len < 2 || $len > 80) {
        return 'Please enter your full name.';
    }
    if (!preg_match(TUTORMUNK_NAME_ALLOWED, $value)) {
        return 'Please enter your full name.';
    }
    return null;
}

function validate_phone(string $raw): ?string
{
    $value = trim($raw);
    if ($value === '') {
        return 'Please enter your phone number.';
    }
    if (!preg_match(TUTORMUNK_AU_PHONE, normalise_au_phone($value))) {
        return 'Please enter a valid Australian mobile or landline number, for example 0412 345 678.';
    }
    return null;
}

function validate_email(string $raw, bool $hadCrlf): ?string
{
    if ($hadCrlf) {
        return 'Please enter your email address.';
    }
    $value = trim($raw);
    if ($value === '') {
        return 'Please enter your email address.';
    }
    $invalid = 'Please enter a valid email address.';
    $atIndex = strpos($value, '@');
    $lastAtIndex = strrpos($value, '@');
    if ($atIndex === false || $atIndex === 0 || $atIndex !== $lastAtIndex) {
        return $invalid;
    }
    $local = substr($value, 0, $atIndex);
    $domain = substr($value, $atIndex + 1);
    if (!str_contains($domain, '.')) {
        return $invalid;
    }
    if (str_starts_with($local, '.') || str_ends_with($local, '.') || str_contains($local, '..')) {
        return $invalid;
    }
    if (str_starts_with($domain, '.') || str_ends_with($domain, '.') || str_contains($domain, '..')) {
        return $invalid;
    }
    // RFC 1035: a domain label cannot begin or end with a hyphen.
    foreach (explode('.', $domain) as $label) {
        if ($label === '' || str_starts_with($label, '-') || str_ends_with($label, '-')) {
            return $invalid;
        }
    }
    if (!preg_match(TUTORMUNK_EMAIL_SHAPE, $value)) {
        return $invalid;
    }
    // Second gate, on top of the ported checks above, not instead of them:
    // filter_var is stricter about a few edge cases the hand-rolled regex
    // does not cover (this is defence in depth, not a replacement for
    // matching CallbackModal.tsx's behaviour).
    if (filter_var($value, FILTER_VALIDATE_EMAIL) === false) {
        return $invalid;
    }
    return null;
}

$normalisedPhone = normalise_au_phone($phone);

$errors = [];
$nameError = validate_name($name, $nameHadCrlf);
if ($nameError !== null) {
    $errors['name'] = $nameError;
}
$phoneError = validate_phone($phone);
if ($phoneError !== null) {
    $errors['phone'] = $phoneError;
}
$emailError = validate_email($email, $emailHadCrlf);
if ($emailError !== null) {
    $errors['email'] = $emailError;
}

if (!empty($errors)) {
    // First invalid field in name/phone/email order, matching the order
    // CallbackModal.tsx's own FIELD_ORDER validates in. Not logged: this is
    // an ordinary validation rejection, not a security-relevant event.
    foreach (['name', 'phone', 'email'] as $field) {
        if (isset($errors[$field])) {
            json_response(400, ['ok' => false, 'field' => $field, 'error' => $errors[$field]]);
        }
    }
}

// ============================================================================
// 6) Bot decisions. Made here and LOGGED, never silent: both look
// identical to a real success (200, {"ok":true}) to whatever sent the
// request, so nothing can learn why it was rejected.
// ============================================================================
if ($website !== '') {
    log_line('bot-honeypot', $ip, $normalisedPhone);
    json_response(200, ['ok' => true]);
}

$elapsedIsNumeric = is_numeric($rawElapsed);
$elapsed = $elapsedIsNumeric ? (float) $rawElapsed : null;
if (!$elapsedIsNumeric) {
    log_line('bot-timing', $ip, $normalisedPhone, 'elapsed missing or non-numeric');
    json_response(200, ['ok' => true]);
}
if ($elapsed < 3000) {
    log_line('bot-timing', $ip, $normalisedPhone, "elapsed={$elapsed}ms");
    json_response(200, ['ok' => true]);
}

// ============================================================================
// 7) Rate limit: max 5 sends per IP per hour, 30 per hour overall. Checked
// only for genuine (non-bot, valid) attempts, right before actually
// sending, since that is the resource being protected.
// ============================================================================
function check_rate_limit(string $ip): bool
{
    $path = data_dir() . 'rate-limit.json';
    $fh = fopen($path, 'c+');
    if (!$fh) {
        // Cannot open the rate-limit file at all: fail open rather than
        // silently blocking every real parent because of a filesystem
        // problem. The forgotten-password 500 check above is the loud
        // failure mode for configuration mistakes; a transient rate-limit
        // file issue should not also take the whole form down.
        return true;
    }
    flock($fh, LOCK_EX);
    $raw = stream_get_contents($fh);
    $data = json_decode($raw ?: '', true);
    $entries = is_array($data['entries'] ?? null) ? $data['entries'] : [];

    $now = time();
    $hourAgo = $now - 3600;
    $entries = array_values(array_filter($entries, static fn($e) => ($e['ts'] ?? 0) > $hourAgo));

    $totalCount = count($entries);
    $ipCount = count(array_filter($entries, static fn($e) => ($e['ip'] ?? null) === $ip));

    if ($ipCount >= 5 || $totalCount >= 30) {
        flock($fh, LOCK_UN);
        fclose($fh);
        return false;
    }

    $entries[] = ['ip' => $ip, 'ts' => $now];
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode(['entries' => $entries]));
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
    return true;
}

if (!check_rate_limit($ip)) {
    log_line('rate-limited', $ip, $normalisedPhone);
    json_response(429, ['ok' => false, 'error' => 'rate-limited']);
}

// ============================================================================
// 8) The deferred hard config check (see step 2): only now, once a request
// has passed origin, validation, bot and rate-limit checks, do we refuse
// to run because mail.config.php is missing or smtp_pass is empty. A
// forgotten password still fails loudly (500, logged), it just no longer
// masks every OTHER outcome behind it.
// ============================================================================
if (!is_array($config) || empty($config['smtp_pass'])) {
    $reason = !is_array($config) ? 'mail.config.php is missing' : 'smtp_pass is empty in mail.config.php';
    log_line('config-error', $ip, $normalisedPhone, $reason);
    json_response(500, ['ok' => false, 'error' => 'server-not-configured']);
}

// ============================================================================
// 9) Send. One email via PHPMailer over SMTP. From = the mailbox itself
// (DKIM/SPF alignment), Reply-To = the parent's email, To = the configured
// mailbox. Plain text only, nothing escaped into HTML because nothing is
// HTML.
// ============================================================================
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom($config['smtp_user'], (string) ($config['from_name'] ?? 'TutorMunk website'));
    $mail->addAddress((string) $config['to_address']);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = "Request a call: {$name}";
    $submittedAt = (new DateTime('now', new DateTimeZone('Australia/Sydney')))->format('Y-m-d H:i:s T');
    $mail->Body = implode("\n", [
        "Name: {$name}",
        "Phone: {$normalisedPhone}",
        "Email: {$email}",
        "Submitted: {$submittedAt}",
        "IP: {$ip}",
    ]);

    $mail->send();
} catch (PHPMailerException $e) {
    // PHPMailer's own message can include the SMTP transcript, which
    // could contain the password if auth failed. Log a fixed, safe string
    // plus PHPMailer's ErrorInfo only, never $mail->Password, and never
    // the raw exception message unfiltered.
    $safeDetail = str_replace($config['smtp_pass'], '[redacted]', $mail->ErrorInfo);
    log_line('smtp-error', $ip, $normalisedPhone, $safeDetail);
    json_response(500, ['ok' => false, 'error' => 'send-failed']);
}

log_line('sent', $ip, $normalisedPhone);
json_response(200, ['ok' => true]);
