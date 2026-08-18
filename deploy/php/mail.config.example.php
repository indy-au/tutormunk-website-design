<?php

/**
 * TutorMunk mail config TEMPLATE. Copy this file to mail.config.php
 * (same folder) and fill in smtp_pass with the real Titan mailbox
 * password. mail.config.php is never committed to git (it is in
 * .gitignore, confirmed with `git check-ignore`), and this example file
 * is the only one that ships in the repo and in dist-static/.
 *
 * send.php refuses to run (500, logged) if mail.config.php is missing or
 * smtp_pass is empty, so a forgotten password fails loudly instead of
 * silently swallowing real leads.
 */

return [
    'smtp_host' => 'smtp.titan.email',
    'smtp_port' => 465,
    'smtp_user' => 'hello@tutormunk.com.au',
    // Real Titan mailbox password goes in mail.config.php ONLY, never here.
    'smtp_pass' => '',
    'to_address' => 'hello@tutormunk.com.au',
    'from_name' => 'TutorMunk website',
    // true only for local testing (php -S ...). Leave false in production:
    // it relaxes the same-origin check to also allow http://localhost:*.
    'dev_mode' => false,
];
