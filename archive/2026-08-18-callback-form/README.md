# Request a Call form archive (18 Aug 2026)

The "Best time to call" field was removed from the Request a Call modal on
18 Aug 2026, to keep the first live, validated version of the form minimal:
three mandatory fields (full name, phone, email), nothing optional. The
field was not deleted, only taken out of the live form.

## What is archived

`archivedCallbackTimeField` in `src/content/site.ts`:

```ts
export const archivedCallbackTimeField = { label: "Best time to call", type: "text", placeholder: "Weekdays after 4pm" };
```

Nothing imports it, so it is stripped out of the browser bundle and never
reaches a visitor.

## How to restore it

1. In `src/content/site.ts`, add a fourth entry to `callbackModal.fields`
   (order is up to whoever restores it, it was originally last):

   ```ts
   { name: "bestTime", label: "Best time to call", type: "text", placeholder: "Weekdays after 4pm", maxLength: 40 }
   ```

   The `name` key is new, added when the form was rebuilt on 18 Aug 2026 to
   validate each field individually and to match the POST body's key names,
   it did not exist on this field before. `CallbackField`'s `type` union in
   the same file will need "text" already covers it, no type change needed
   there.

2. In `src/components/CallbackModal.tsx`, add a `bestTime` slot alongside
   `name`, `phone` and `email`: a state entry, a validator (this field was
   never mandatory, so an empty value should pass), and a case in the field
   render list.

3. If the field should be required, add a matching entry to the ERROR
   MESSAGES set in the same file, and add `bestTime` to the fields the
   submit button's `allValid` check and the on-submit validation loop cover.

4. Add `bestTime` to the `URLSearchParams` body in the submit handler, and
   to `send.php`'s expected fields when that endpoint is built.

Kept per CLAUDE.md rule 5 (never delete files or content without approval,
archive instead).
