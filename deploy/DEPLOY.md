# Deploying TutorMunk to Hostinger

Plain-English steps. You do not need to know how any of this works, just
follow the steps in order.

## The normal way: push to main

Once the one-time setup below has been done, deploying the site is just:

```
git add -A
git commit -m "..."
git push
```

Every push to the `main` branch on GitHub automatically builds the site and
uploads it to Hostinger over FTPS, using
`.github/workflows/deploy.yml`. It takes a few minutes. You can watch it
run (and see a short summary when it finishes) under the **Actions** tab
on the GitHub repository page.

To re-run a deploy without changing any code (for example, to retry a
failed run, or push again after fixing something directly on the server),
open the **Actions** tab, choose the "Deploy to Hostinger" workflow, and
use the **Run workflow** button.

### One-time setup: the three GitHub secrets

The automatic deploy needs the FTP login for Hostinger. These are stored
as **GitHub secrets**, never as plain text in the project files, so they
never end up in git history.

In the GitHub repository, go to **Settings → Secrets and variables →
Actions → Repository secrets**, and add:

| Secret name | Value |
|---|---|
| `FTP_HOST` | The FTP hostname for the Hostinger account (from hPanel, under FTP Accounts) |
| `FTP_USER` | The FTP username |
| `FTP_PASS` | The FTP password |

Once these three secrets exist, every push to `main` deploys automatically.
Nothing else needs to be configured.

This FTP account is scoped to the site's `public_html` already, so the
automatic deploy uploads straight into it (the workflow's `server-dir` is
`./`, not `public_html/`, confirmed after the first run: setting it to
`public_html/` created a nested `public_html/public_html/` on the server).
Do not point it at a different, higher-level FTP account without updating
that setting in `.github/workflows/deploy.yml` to match.

## The fallback way: manual upload

Use this if GitHub Actions is unavailable, or for a one-off upload without
touching git at all. It is the same build, done by hand.

### 1. Build the site

On the computer with the project open, in a terminal, run:

```
npm run build:static
```

Wait for it to finish. It creates a folder called `dist-static`. That
folder is the whole website, every page, every image, and the form
endpoint, all in one place, ready to upload.

### 2. Upload it to Hostinger

1. Log in to Hostinger, open **File Manager**.
2. Go into `public_html`.
3. If there is anything already in `public_html` from an old version of the
   site, remove it first (or move it aside), so nothing old is left behind.
4. Upload the **contents** of `dist-static` into `public_html`, not the
   `dist-static` folder itself. When you open `public_html` afterwards, you
   should see files like `index.html`, `send.php` and folders like
   `primary-school`, `blog`, `PHPMailer` sitting directly inside it, not
   inside a `dist-static` folder.

The automatic deploy does the same thing, except it never touches
`mail.config.php` on the server (see below), because it never exists in
`dist-static` in the first place.

## Create the mailbox password file (one-time, either way)

The form endpoint (`send.php`) needs the email password to send messages.
This is never uploaded automatically, on purpose, so the password never
sits in the project files, in git, or in a GitHub secret.

This only needs doing once. The automatic deploy is set up to always skip
`mail.config.php`, on every future push, so it is never overwritten or
deleted by a deploy once it exists.

1. In File Manager, inside `public_html`, find `mail.config.example.php`.
2. Make a copy of it in the same folder, and rename the copy to
   `mail.config.php`.
3. Open `mail.config.php` and paste the real password for the
   `hello@tutormunk.com.au` mailbox into the `smtp_pass` line, between the
   quote marks. Save.
4. Leave `dev_mode` set to `false` in this file, that setting is only for
   testing on a local computer, not for the live site.

Until this step is done, the Request a Call form will show the "something
went wrong" message to every visitor and will not send anything. That is
deliberate: a forgotten password fails loudly and visibly, rather than
silently losing enquiries.

## Test the form

1. Go to https://tutormunk.com.au and open the Request a Call form.
2. Fill in a real name, a real Australian mobile or landline number, and an
   email address you can check.
3. Submit it, and wait at least a few seconds before submitting (the form
   deliberately ignores anything submitted faster than 3 seconds, that is a
   spam protection, not a bug).
4. Check hello@tutormunk.com.au for the email. It should arrive within a
   minute or two.

If it does not arrive, see the log file below before asking for help, it
usually says exactly what went wrong.

## Where the log file is

`send.php` writes a log file every time someone uses the form, whether it
worked or not. It lives **outside** `public_html`, in a folder called
`mail-data`, one level up, so nobody can read it just by visiting a web
address. In File Manager, go up one level from `public_html` and look for
`mail-data/send.log`.

Each line says what happened: `sent` (a real email went out),
`bot-honeypot` or `bot-timing` (a spam bot was quietly turned away),
`rate-limited` (too many attempts too quickly from one place),
`invalid-name` / `invalid-phone` / `invalid-email` (someone typed something
that didn't pass the form's own checks), `smtp-error` (the email server
rejected the message, worth checking the password), or `config-error`
(`mail.config.php` is missing or the password field is empty, see above).
