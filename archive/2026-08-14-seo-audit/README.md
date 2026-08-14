# SEO audit archive (14 Aug 2026)

Unused Lovable-export boilerplate identified during the SEO/architecture
self-audit and moved out of live source per Indy's approval. Neither file
was imported by any page or component still in use:

- `sidebar.tsx.old`: shadcn/Radix sidebar primitive. Not wired into any
  route or layout component.
- `use-mobile.tsx.old`: `useIsMobile()` hook, only ever consumed by the
  sidebar primitive above.

Both were already isomorphic-safe (browser globals guarded inside
useEffect/useCallback), this move is a dead-code cleanup, not a bug fix.

Kept per CLAUDE.md rule 5 (never delete without approval, archive instead).
