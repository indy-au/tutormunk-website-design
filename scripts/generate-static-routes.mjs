// Phase 3A static export spike. Computes the exact, explicit list of every
// URL the site has, by importing the real content modules through Vite's
// SSR module loader (so @ aliases, asset imports and import.meta.glob all
// resolve exactly as they do at build time) rather than hand-maintaining a
// second list that can drift from src/content/*.ts.
//
// Writes .tanstack/static-routes.json (already gitignored, see
// TOOL_MANAGED_WATCH_IGNORES in @lovable.dev/vite-tanstack-config), which
// vite.config.ts reads synchronously to build the tanstackStart.pages list.
// Run via `npm run build:static` (this script, then `vite build`), or on
// its own with `node scripts/generate-static-routes.mjs` to inspect the
// list without building.
//
// Deliberately does NOT rely on nitro/tanstackStart's crawlLinks: a page
// nothing else links to (or a page whose only links render behind client
// JS) would silently never get built. Every URL here is enumerated from
// content, so a page with zero inbound links still gets prerendered.

import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function main() {
  const server = await createServer({
    root,
    configFile: path.join(root, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "warn",
  });

  let urls;
  try {
    const { locations } = await server.ssrLoadModule("/src/content/locations.ts");
    const { topics } = await server.ssrLoadModule("/src/content/topics.ts");
    const { publishedBlogPosts } = await server.ssrLoadModule("/src/lib/blogLoader.ts");
    const { publishedPolicies } = await server.ssrLoadModule("/src/lib/policyLoader.ts");
    const { totalBlogPages, blogPageHref } = await server.ssrLoadModule("/src/lib/blogPagination.ts");

    // Every static (non-dynamic) route file in src/routes, read off the
    // filenames directly rather than re-typed by hand, so this list can't
    // silently drift from the actual routes directory. Excludes __root,
    // the dynamic param routes (handled below from content), the 404
    // route (added separately, see vite.config.ts), and blog/policies
    // index routes that use a dotted filename (blog.index.tsx -> /blog).
    const { readdirSync } = await import("node:fs");
    const routeFiles = readdirSync(path.join(root, "src/routes")).filter((f) => f.endsWith(".tsx"));
    const dynamicOrSpecial = new Set([
      "__root.tsx",
      "404.tsx",
      "blog.$slug.tsx",
      "blog.page.$page.tsx",
      "policies.$slug.tsx",
      "topics.$slug.tsx",
      "tutoring-in-{$suburbSlug}.tsx",
    ]);
    const staticRoutes = routeFiles
      .filter((f) => !dynamicOrSpecial.has(f))
      .map((f) => {
        const base = f.replace(/\.tsx$/, "");
        if (base === "index") return "/";
        if (base.endsWith(".index")) return "/" + base.replace(/\.index$/, "");
        return "/" + base;
      })
      .sort();

    urls = [];
    for (const r of staticRoutes) urls.push(r);
    for (const loc of locations) urls.push(`/${loc.slug}`);
    for (const key of Object.keys(topics)) urls.push(`/topics/${key}`);
    for (const policy of publishedPolicies) urls.push(`/policies/${policy.frontmatter.slug}`);
    for (const post of publishedBlogPosts) urls.push(`/blog/${post.frontmatter.slug}`);
    const totalPages = totalBlogPages(publishedBlogPosts.length);
    for (let page = 2; page <= totalPages; page++) urls.push(blogPageHref(page));

    const summary = {
      staticRoutes: staticRoutes.length,
      suburbs: locations.length,
      topics: Object.keys(topics).length,
      publishedPolicies: publishedPolicies.length,
      publishedBlogPosts: publishedBlogPosts.length,
      totalBlogPages: totalPages,
      blogPaginationPages: totalPages - 1,
      total: urls.length,
    };

    if (urls.length === 0) {
      throw new Error("Computed zero URLs. Refusing to write an empty route list.");
    }
    if (new Set(urls).size !== urls.length) {
      const seen = new Set();
      const dupes = urls.filter((u) => (seen.has(u) ? true : (seen.add(u), false)));
      throw new Error(`Duplicate URLs computed, refusing to continue: ${dupes.join(", ")}`);
    }

    const outDir = path.join(root, ".tanstack");
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "static-routes.json"), JSON.stringify({ summary, urls }, null, 2));

    console.log("[generate-static-routes] " + JSON.stringify(summary));
    console.log(`[generate-static-routes] wrote ${urls.length} URLs to .tanstack/static-routes.json`);
  } finally {
    await server.close();
  }
}

main().catch((err) => {
  console.error("[generate-static-routes] FAILED:", err);
  process.exitCode = 1;
});
