// Phase 3A static export, Path B. Both of nitro/TanStack Start's own
// build-time prerender mechanisms are confirmed broken in this stack (see
// vite.config.ts for the full evidence of each). This script is the
// replacement: it runs the REAL built server (.output/server/index.mjs,
// produced by `nitro: { preset: "node-server" }` under STATIC_EXPORT=1) as
// a real child process, then fetches every real URL from it over real
// HTTP, exactly the way a browser or curl would, and writes what comes
// back to disk. No framework-internal rebuilding, no in-process module
// importing, nothing that could silently diverge from what a real request
// gets.
//
// Run via `npm run build:static` (after generate-static-routes.mjs and
// `vite build`), or standalone with `node scripts/prerender-static.mjs`
// once .output/server/index.mjs and .tanstack/static-routes.json already
// exist.

import { spawn } from "node:child_process";
import { createServer as createNetServer } from "node:net";
import { mkdir, writeFile, readFile, cp, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const serverEntry = path.join(rootDir, ".output", "server", "index.mjs");
const routesFile = path.join(rootDir, ".tanstack", "static-routes.json");
const outDir = path.join(rootDir, "dist-static");
const publicAssetsDir = path.join(rootDir, ".output", "public");
const deployDir = path.join(rootDir, "deploy");
const phpDir = path.join(deployDir, "php");
const SITE_ORIGIN = "https://tutormunk.com.au";
// 30s, not 20s: a GitHub Actions runner is a cold, shared machine, and can
// take longer to get the spawned Node server listening than a local
// machine does. The server itself is lightweight (nitro's node-server
// output) and should still bind almost instantly either way, this is
// margin for a loaded CI runner, not a sign the server is slow.
const SERVER_READY_TIMEOUT_MS = 30_000;

async function pathExists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function findFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createNetServer();
    srv.on("error", reject);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

async function waitForServer(baseUrl) {
  const deadline = Date.now() + SERVER_READY_TIMEOUT_MS;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(baseUrl + "/", { signal: AbortSignal.timeout(2000) });
      if (res.ok) return;
      lastError = new Error(`Server responded ${res.status} for /`);
    } catch (err) {
      lastError = err;
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(
    `Server never became ready at ${baseUrl}: ${lastError?.message ?? "unknown error"}`,
  );
}

// / -> dist-static/index.html, /404 -> dist-static/404.html (both exact,
// per the brief), everything else -> dist-static/<route>/index.html, the
// same folder/index.html convention used throughout this session so
// Apache serves a directory index for the clean URL with no rewrite rule.
function outputPathFor(route) {
  if (route === "/") return path.join(outDir, "index.html");
  if (route === "/404") return path.join(outDir, "404.html");
  return path.join(outDir, route.replace(/^\//, ""), "index.html");
}

async function main() {
  const routesJson = JSON.parse(await readFile(routesFile, "utf8"));
  const urls = routesJson.urls;
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error(`${routesFile} has no URLs. Refusing to prerender an empty site.`);
  }
  const routesToFetch = [...urls, "/404"];

  try {
    await stat(serverEntry);
  } catch {
    throw new Error(
      `${serverEntry} does not exist. Run \`STATIC_EXPORT=1 npx vite build\` first (or use \`npm run build:static\`).`,
    );
  }

  const port = await findFreePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[prerender-static] starting server on ${baseUrl}`);

  const child = spawn(process.execPath, [serverEntry], {
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let serverOutput = "";
  child.stdout.on("data", (d) => (serverOutput += d.toString()));
  child.stderr.on("data", (d) => (serverOutput += d.toString()));
  const childExitPromise = new Promise((resolve) => child.on("exit", resolve));

  const failures = [];
  const written = [];

  try {
    await waitForServer(baseUrl);
    console.log(`[prerender-static] server ready, fetching ${routesToFetch.length} routes`);

    for (const route of routesToFetch) {
      let res;
      try {
        res = await fetch(baseUrl + route, { signal: AbortSignal.timeout(15_000) });
      } catch (err) {
        failures.push(
          `${route}: fetch failed (${err instanceof Error ? err.message : String(err)})`,
        );
        continue;
      }
      const expectedOk =
        route === "/404" ? res.status === 200 || res.status === 404 : res.status === 200;
      if (!expectedOk) {
        failures.push(`${route}: HTTP ${res.status}`);
        continue;
      }
      const body = await res.text();
      if (!body.includes("<h1")) {
        failures.push(`${route}: HTTP ${res.status} but no <h1 in body (length ${body.length})`);
        continue;
      }
      const filePath = outputPathFor(route);
      await mkdir(path.dirname(filePath), { recursive: true });
      await writeFile(filePath, body);
      written.push({ route, filePath, status: res.status });
    }
  } finally {
    child.kill("SIGKILL");
    await Promise.race([childExitPromise, new Promise((r) => setTimeout(r, 3000))]);
  }

  if (failures.length > 0) {
    console.error(
      `[prerender-static] FAILED: ${failures.length} of ${routesToFetch.length} routes did not qualify:`,
    );
    for (const line of failures) console.error(`  - ${line}`);
    console.error("[prerender-static] server output (last 4000 chars):");
    console.error(serverOutput.slice(-4000));
    process.exitCode = 1;
    return;
  }

  // Copy public assets (images, favicons, robots.txt, etc.) into the
  // directory the HTML above was just written into. Verified ahead of time
  // (see the build report) that none of public/'s top-level entries
  // (apple-touch-icon.png, favicon.ico, favicon.svg, icon.png, images/,
  // robots.txt) collide with any of the 262 route slugs, so a plain
  // recursive merge is safe: force:true only ever overwrites files that
  // came from a previous run of this same script, never a route's HTML
  // with an asset or vice versa.
  await cp(publicAssetsDir, outDir, { recursive: true, force: true });

  // sitemap.xml: all 262 real page URLs (never /404), absolute, from the
  // same source-of-truth list generate-static-routes.mjs already wrote.
  const sitemapUrls = urls.map((u) => `  <url><loc>${SITE_ORIGIN}${u}</loc></url>`).join("\n");
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
  await writeFile(path.join(outDir, "sitemap.xml"), sitemapXml);

  // robots.txt: append a Sitemap: line to the copy already in dist-static
  // (copied from public/ above). The source file in public/ is untouched,
  // this only edits the static-export output.
  const robotsPath = path.join(outDir, "robots.txt");
  let robotsTxt = "";
  try {
    robotsTxt = await readFile(robotsPath, "utf8");
  } catch {
    // No robots.txt in public/, unexpected but not fatal for the spike.
  }
  if (!robotsTxt.includes("Sitemap:")) {
    robotsTxt = robotsTxt.replace(/\n?$/, "") + `\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
    await writeFile(robotsPath, robotsTxt);
  }

  // ==========================================================================
  // Phase 3B packaging: the mail endpoint and Apache config, so dist-static/
  // is upload-ready as one folder (its own contents go straight into
  // public_html, not the folder itself). mail.config.php (the real
  // password) is deliberately never copied, even if it exists locally for
  // testing, see the explicit check below, not just an omission.
  // ==========================================================================
  await cp(path.join(deployDir, ".htaccess"), path.join(outDir, ".htaccess"));
  await cp(path.join(phpDir, "send.php"), path.join(outDir, "send.php"));
  await cp(path.join(phpDir, "PHPMailer"), path.join(outDir, "PHPMailer"), { recursive: true });
  await cp(
    path.join(phpDir, "mail.config.example.php"),
    path.join(outDir, "mail.config.example.php"),
  );
  if (await pathExists(path.join(outDir, "mail.config.php"))) {
    throw new Error(
      "mail.config.php ended up in dist-static/ output. It must never ship (real password), aborting the build.",
    );
  }
  console.log(
    "[prerender-static] packaged .htaccess, send.php, PHPMailer/, mail.config.example.php",
  );

  console.log(`[prerender-static] wrote ${written.length} HTML files, 0 failures.`);
  console.log(`[prerender-static] sitemap.xml: ${urls.length} URLs.`);
  console.log(`[prerender-static] output: ${outDir}`);
}

main().catch((err) => {
  console.error("[prerender-static] FAILED:", err);
  process.exitCode = 1;
});
