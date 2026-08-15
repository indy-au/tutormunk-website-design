// ============================================================================
// Blog index pagination maths. Everything the index and /blog/page/[n] routes
// need to agree on which posts belong on which page lives here, in one place,
// so the numbers never drift between the server-rendered route loaders and
// the client-side "Load more" append logic.
//
// Layout: page 1 is one featured post plus a grid of PAGE_SIZE posts (10
// posts total). Every page after that is a plain grid of PAGE_SIZE posts,
// no featured card.
//
// TODO (SSG conversion): every URL produced by blogPageHref(), for every
// page from 1 to totalBlogPages(publishedBlogPosts.length), must be added to
// sitemap.xml, and every /blog/page/[n] route must be pre-rendered at build
// time, exactly like every post's own /blog/[slug] URL. Do not forget the
// paginated pages just because they are generated rather than hand-authored.
// ============================================================================

import type { BlogPost } from "./blogLoader";

export const FEATURED_COUNT = 1;
export const PAGE_SIZE = 9;

const FIRST_PAGE_SIZE = FEATURED_COUNT + PAGE_SIZE;

/** Posts in the given category only, or all posts if no category is set. The
 * one place category filtering happens, reused by every route loader and by
 * the client-side "Load more" append so the rule can never drift between
 * server and client. */
export function filterPostsByCategory(posts: BlogPost[], category: string | undefined): BlogPost[] {
  return category ? posts.filter((post) => post.frontmatter.category === category) : posts;
}

/** Total number of pages for a given post count. Always at least 1, even
 * with zero posts, so /blog itself never 404s. */
export function totalBlogPages(totalPosts: number): number {
  if (totalPosts <= FIRST_PAGE_SIZE) return 1;
  return 1 + Math.ceil((totalPosts - FIRST_PAGE_SIZE) / PAGE_SIZE);
}

/** The featured post (page 1 only) and this page's grid posts, sliced from
 * an already sorted, already filtered post list. */
export function blogPageSlice(
  posts: BlogPost[],
  page: number,
): { featured: BlogPost | undefined; grid: BlogPost[] } {
  if (page <= 1) {
    return { featured: posts[0], grid: posts.slice(FEATURED_COUNT, FIRST_PAGE_SIZE) };
  }
  const start = FIRST_PAGE_SIZE + (page - 2) * PAGE_SIZE;
  return { featured: undefined, grid: posts.slice(start, start + PAGE_SIZE) };
}

/** How many posts are visible in total once `page` has loaded. Feeds the
 * "Showing X of Y articles" progress text. */
export function blogVisibleCount(totalPosts: number, page: number): number {
  if (page <= 1) return Math.min(totalPosts, FIRST_PAGE_SIZE);
  return Math.min(totalPosts, FIRST_PAGE_SIZE + (page - 1) * PAGE_SIZE);
}

/** The canonical, crawlable URL for a page plus optional category filter.
 * Page 1 always lives at /blog, never /blog/page/1, so the index has exactly
 * one URL. */
export function blogPageHref(page: number, category?: string | undefined): string {
  const base = page <= 1 ? "/blog" : `/blog/page/${page}`;
  return category ? `${base}?category=${category}` : base;
}
