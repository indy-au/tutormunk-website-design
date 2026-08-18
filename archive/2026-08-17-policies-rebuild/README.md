# Policies rebuild archive (17 Aug 2026)

This folder holds route files superseded by the real policies build: eight
signed policy documents rendered from markdown at src/content/policies-md/
via src/lib/policyLoader.ts, with a hub at /policies and one page per policy
at /policies/[slug].

- `privacy.tsx.old`: was /privacy, rendered placeholder text via the old
  `privacyPolicy` export. Replaced by /policies/privacy-policy.
- `terms.tsx.old`: was /terms, rendered placeholder text via the old
  `termsPage` export. Replaced by /policies/terms-and-conditions.
- `student-agreement.tsx.old`: was /student-agreement, rendered placeholder
  text via the old `studentAgreement` export. Replaced by
  /policies/student-agreement.
- `cancellation-and-refund.tsx.old`: was /cancellation-and-refund, rendered
  placeholder text via the old `cancellationPolicy` export. Replaced by
  /policies/cancellation-and-refund-policy.
- `data-collection.tsx.old`: was /data-collection, rendered placeholder text
  via the old `dataCollectionPolicy` export. Replaced by
  /policies/data-collection-statement.

The site had not launched and nothing external linked to the old paths, so
no redirects were set up. The content these routes rendered
(`src/content/policies.ts`'s exports) was not deleted either, it was moved
into an `archivedPolicyPlaceholders` const in that same file, with the same
dated comment, so both the routes and the placeholder copy they rendered
are recoverable together if ever needed.

Kept per CLAUDE.md rule 5 (never delete files or content without approval,
archive instead). Deleting the live route files themselves (not archiving
them in place) was the owner's explicit instruction for this round.
