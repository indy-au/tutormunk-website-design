# About page archive (18 Aug 2026)

This folder holds the route file superseded by removing the About page from
the site, the owner's decision, not needed.

- `about.tsx.old`: was /about, rendered the About page (hero, story section,
  four values, stats, CTA band) via the old `about` export from
  src/content/about.ts. /about now 404s.

The content this route rendered is not deleted, it is archived in place in
src/content/about.ts as `archivedAboutPage`, with the same dated comment.
The `contact` export that used to sit in the same file moved to its own
file, src/content/contact.ts, unchanged, the Contact page still depends on
it and was not affected.

src/components/sections/StorySection.tsx, the section this content
rendered through, is now unused for the same reason MunkCards.tsx was kept
in place when the poster rail replaced it: kept, not deleted, safe to
remove later once confirmed nothing still needs it.

Kept per CLAUDE.md rule 5 (never delete files or content without approval,
archive instead). Deleting the live route file itself (not archiving it in
place) matches the pattern already used for the old policy placeholder
routes on 17 Aug 2026.
