# Placeholder forms archive (18 Aug 2026)

Three forms on the site were visual shells with no backend: the Become a
Munk tutor application form, the Contact page enquiry form, and the whole
5-step Enrolment page. None of them ever sent or saved anything, each one
said so in its own note text. They were removed before launch on 18 Aug
2026 so the only live, working form on the site is Request a Call
(CallbackModal.tsx), which is genuinely validated and does POST somewhere.
Nothing here was deleted, only moved and taken out of the live content, per
CLAUDE.md rule 5.

Do not restore any of these without a real backend for it. Wiring a form
back into the live site without something to receive its submissions would
put a second silently-broken form back in front of parents or tutors.

## What is archived, and how to restore each

### Become a Munk application form

- `ApplicationFormShell.tsx` (was `src/components/sections/ApplicationFormShell.tsx`)
- `archivedBecomeTutorForm` and `archivedBecomeTutorUpload` in
  `archived-content.ts`, copied from the `form`/`upload` objects that used
  to live on `becomeTutor` in `src/content/becomeTutor.ts`.

To restore: move `ApplicationFormShell.tsx` back to
`src/components/sections/`, add `form: archivedBecomeTutorForm` (spread the
object, do not just reference it, `becomeTutor` should own its own copy
again) and the `upload` field back onto `becomeTutor` in
`src/content/becomeTutor.ts`, and re-add `<ApplicationFormShell
{...becomeTutor.form} upload={becomeTutor.form.upload} />` to
`src/routes/become-a-tutor.tsx` (check the exact prop shape against
`ApplicationFormShell`'s own type, it may have drifted). You will also need
to decide whether the phone-only closing section added on 18 Aug 2026
stays alongside the form or is removed, that is a product decision, not a
technical one.

### Contact page enquiry form

- `ContactSection.tsx` (was `src/components/sections/ContactSection.tsx`).
  This component also rendered the details list and the map, both of which
  are still live today via the new `ContactDetails.tsx`. Restoring the form
  does not require restoring this whole file, `ContactDetails.tsx` can stay
  and a form can be added back into it directly, or this file can be
  restored and `ContactDetails.tsx` retired instead.
- `archivedContactForm` in `archived-content.ts`, copied from the `form`
  object that used to live on `contact` in `src/content/contact.ts`.

To restore: add `form: archivedContactForm` back onto `contact` in
`src/content/contact.ts`, then wire it into whichever contact section
component is live at the time.

### Enrolment page (/enrol)

- `enrol.tsx` (was `src/routes/enrol.tsx`), the whole route.
- `enrol.ts` (was `src/content/enrol.ts`), the whole content file, five
  form steps included.
- `MultiStepFormShell.tsx` (was
  `src/components/sections/MultiStepFormShell.tsx`), the step-by-step form
  shell only `enrol.tsx` used.

To restore: move all three files back to their original paths
(`src/routes/enrol.tsx`, `src/content/enrol.ts`,
`src/components/sections/MultiStepFormShell.tsx`). The route file-based
router will pick `/enrol` back up automatically once `enrol.tsx` is back in
`src/routes/`, and `scripts/generate-static-routes.mjs` will include it
again the next time it runs, no manual route-list edit needed. `/enrol` was
linked from nowhere on the live site when it was removed, so nothing else
needs to be re-linked automatically, check first whether it should be
linked from somewhere this time.

### FormField.tsx, shared by all three

- `FormField.tsx` (was `src/components/sections/FormField.tsx`), the
  generic labelled input/select/textarea renderer all three forms above
  used. Nothing else imported it (checked before moving it), so it moved
  here too rather than staying live and unused.

To restore: move it back to `src/components/sections/FormField.tsx` before
restoring any of the three forms above, they all import it by relative
path (`./FormField`).

## Note on src/components/ui/form.tsx

There is a second, unrelated `FormField` in `src/components/ui/form.tsx`,
a shadcn/react-hook-form primitive. It was already unused before this
archival (nothing imported it then either) and is untouched by this round,
it is not part of what is described above.
