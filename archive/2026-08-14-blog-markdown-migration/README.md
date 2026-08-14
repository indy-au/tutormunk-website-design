# Blog markdown migration archive (14 Aug 2026)

`blog.ts.old` was the hand-built content object holding blog post data
(one real article, five draft stubs with no body). Superseded by the
markdown pipeline: real posts now live as `.md` files in
`src/content/blog/`, read by `src/lib/blogLoader.ts`.

The one real article (selective-test-timeline) was migrated into
`src/content/blog/selective-test-timeline.md` verbatim, same text, same
URL slug. The draft stub titles that had no article body yet were NOT all
migrated as draft markdown files, only one (naplan-writing) was recreated
as a working example of the draft mechanism. The other four backlog
titles from this file, for when real copy is ready, were:

- hsc-trials-plan: "Planning the six weeks before HSC trials"
- choosing-a-tutor: "Eight questions to ask before you book a tutor"
- oc-test-basics: "OC placement test basics for Year 4 families"
- maths-anxiety: "When a child says they are bad at maths"

Kept per CLAUDE.md rule 5 (never delete without approval, archive instead).
