# Deploying TutorMunk to Hostinger

Plain-English steps. You do not need to know how any of this works, just
follow the steps in order.

## 1. Build the site

On the computer with the project open, in a terminal, run:

```
npm run build:static
```

Wait for it to finish. It creates a folder called `dist-static`. That
folder is the whole website, every page, every image, and the form
endpoint, all in one place, ready to upload.

## 2. Upload it to Hostinger

1. Log in to Hostinger, open **File Manager**.
2. Go into `public_html`.
3. If there is anything already in `public_html` from an old version of the
   site, remove it first (or move it aside), so nothing old is left behind.
4. Upload the **contents** of `dist-static` into `public_html`, not the
   `dist-static` folder itself. When you open `public_html` afterwards, you
   should see files like `index.html`, `send.php` and folders like
   `primary-school`, `blog`, `PHPMailer` sitting directly inside it, not
   inside a `dist-static` folder.

## 3. Create the mailbox password file

The form endpoint (`send.php`) needs the email password to send messages.
This is never uploaded automatically, on purpose, so the password never
sits in the project files or in git.

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

## 4. Test the form

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
(`mail.config.php` is missing or the password field is empty, see step 3).
