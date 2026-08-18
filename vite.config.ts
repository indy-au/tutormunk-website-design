// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Phase 3A static export (STATIC_EXPORT=1, see `npm run build:static`).
// Third configuration, 18 Aug 2026 (Path B of the second attempt). Two
// prerender mechanisms were tried and rejected before this one, both
// confirmed broken in this stack, not config mistakes:
//   1. TanStack Start's own build-time prerenderer (tanstackStart.pages +
//      tanstackStart.prerender): spins up a `vite preview` subprocess, but
//      @lovable.dev/vite-tanstack-config only attaches the nitro plugin
//      when command === "build", never "preview", so every page 404'd.
//   2. nitro's own built-in prerenderer (nitro.prerender.routes): it
//      rebuilds the server itself via a second, INTERNAL nitro build using
//      the rolldown builder instead of vite, which skips TanStack Start's
//      own vite plugin entirely (the thing that actually wires up the
//      app's routes), so the rebuilt server it prerenders against knows no
//      routes at all. All 263 routes 404'd.
// This file now does neither. nitro is just "node-server", built the same
// way the working `npm run build` already builds (just targeting Node
// instead of Cloudflare), no prerender option. The actual prerendering
// happens entirely in scripts/prerender-static.mjs, which runs the real
// built server as a real child process and fetches each page over real
// HTTP, exactly the way a browser or curl would.
//
// Gated behind an env var rather than changed unconditionally, so the
// existing `npm run build` (Cloudflare/SSR, used by the Lovable sandbox
// preview pipeline) is completely untouched and unaffected by any of this.
const isStaticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Deliberately no `pages` / `prerender` here even under STATIC_EXPORT:
    // that is TanStack Start's own prerenderer, confirmed broken in this
    // stack (see the comment above). Prerendering for the static export
    // happens entirely in scripts/prerender-static.mjs instead, against
    // the real built server, over real HTTP.
  },
  // node-server, not "static" (hit a hard, unrelated build error in the
  // first attempt) and not nitro's own prerender option (hit the second
  // failure above). Just a real, known-good Node build target, the same
  // shape as the working default `npm run build`, written to disk instead
  // of bundled for Cloudflare, so scripts/prerender-static.mjs has a real
  // server file to run.
  ...(isStaticExport ? { nitro: { preset: "node-server" } } : {}),
});
