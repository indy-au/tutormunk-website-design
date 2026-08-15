// Single source of truth for the production origin used to build canonical
// URLs and og:url tags. Lowercase, no trailing slash, matches deploy/.htaccess.
export const SITE_URL = "https://tutormunk.com.au";

/**
 * Builds the standard head() return value (meta + canonical link) for a
 * page. `path` must start with "/", be lowercase, and have no trailing
 * slash (use "/" itself for the homepage).
 *
 * `prev`/`next` are optional paths (same "/" rules as `path`) for paginated
 * listings such as the blog index. When set they render as
 * <link rel="prev"/"next">, telling crawlers about the page sequence without
 * affecting the canonical, which always points at the page itself.
 */
export function seoHead({
  title,
  description,
  path,
  prev,
  next,
}: {
  title: string;
  description: string;
  path: string;
  prev?: string | undefined;
  next?: string | undefined;
}) {
  const toUrl = (p: string) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);
  const url = toUrl(path);
  const links: { rel: string; href: string }[] = [{ rel: "canonical", href: url }];
  if (prev) links.push({ rel: "prev", href: toUrl(prev) });
  if (next) links.push({ rel: "next", href: toUrl(next) });
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links,
  };
}
