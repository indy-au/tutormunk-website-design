// Single source of truth for the production origin used to build canonical
// URLs and og:url tags. Lowercase, no trailing slash, matches deploy/.htaccess.
export const SITE_URL = "https://tutormunk.com.au";

/**
 * Builds the standard head() return value (meta + canonical link) for a
 * page. `path` must start with "/", be lowercase, and have no trailing
 * slash (use "/" itself for the homepage).
 */
export function seoHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
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
    links: [{ rel: "canonical", href: url }],
  };
}
