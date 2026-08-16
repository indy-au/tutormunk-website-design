import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Link, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { categoryLabel, formatBlogDate } from "@/lib/markdown";
import { publishedBlogPosts, getBlogCategories, type BlogPost } from "@/lib/blogLoader";
import { blogIndexPage } from "@/content/blogIndex";
import {
  FEATURED_COUNT,
  blogPageHref,
  blogPageSlice,
  filterPostsByCategory,
  totalBlogPages,
} from "@/lib/blogPagination";
import { PageIntro } from "./PageIntro";

function FeaturedCard({ post }: { post: BlogPost }) {
  const { frontmatter } = post;
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: frontmatter.slug }}
      className="grid overflow-hidden rounded-4xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift md:grid-cols-2"
    >
      <div className="h-56 w-full overflow-hidden md:h-full">
        <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center p-7 md:p-9">
        <p className="eyebrow-sm">{categoryLabel(frontmatter.category)}</p>
        <h2 className="mt-3 text-2xl md:text-3xl">{frontmatter.heading}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{frontmatter.metaDescription}</p>
        <p className="mt-5 text-xs text-muted-foreground">{formatBlogDate(frontmatter.date)}</p>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const { frontmatter } = post;
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: frontmatter.slug }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="h-40 w-full overflow-hidden">
        <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow-sm">{categoryLabel(frontmatter.category)}</p>
        <h3 className="mt-2 text-xl leading-snug">{frontmatter.heading}</h3>
        <p className="mt-2 line-clamp-1 text-sm leading-relaxed text-muted-foreground">
          {frontmatter.metaDescription}
        </p>
        <p className="mt-auto pt-5 text-xs text-muted-foreground">{formatBlogDate(frontmatter.date)}</p>
      </div>
    </Link>
  );
}

type ListState = {
  category: string | undefined;
  page: number;
  featured: BlogPost | undefined;
  posts: BlogPost[];
};

// Survives a component remount within the same browser tab. TanStack Router
// mounts a fresh instance of BlogListPage when it transitions between the
// /blog route and the /blog/page/[n] route (confirmed by testing, even
// though both routes use this exact same component function), so plain
// React state alone loses the accumulated "Load more" list the moment the
// URL updates. This module-level cache is what actually survives that
// remount. It is read and written on the client only, guarded by
// `typeof window`, so server-side rendering always computes a fresh slice
// per request and never leaks state between requests.
let clientCache: ListState | null = null;

// How many cards the most recent "Load more" click appended. The remount
// described above also steals DOM focus (the focused card is torn down with
// the rest of the old tree), so focusing inside the click handler is not
// enough. Instead the handler records the count here and the next mount's
// effect consumes it once, focusing the first newly-appended card in the
// fresh DOM. Left at 0 after a genuine first visit, so it never fires on an
// ordinary page load.
let pendingFocusCount = 0;

function computeSeed(category: string | undefined, page: number, filteredPosts: BlogPost[]): ListState {
  if (typeof window !== "undefined" && clientCache && clientCache.category === category && clientCache.page === page) {
    return clientCache;
  }
  const slice = blogPageSlice(filteredPosts, page);
  const fresh: ListState = { category, page, featured: slice.featured, posts: slice.grid };
  if (typeof window !== "undefined") clientCache = fresh;
  return fresh;
}

/**
 * The full connected blog listing: category chips, featured card, post grid
 * and the "Load more" control. This is the single component both /blog and
 * /blog/page/[n] register as their route `component` (same import, same
 * function reference in both route files), so the loading/appending logic
 * only has to be written once.
 *
 * Route-agnostic hooks (`strict: false`) are used throughout so this one
 * component can read `page`/`category` regardless of which of the two
 * routes actually matched.
 */
export function BlogListPage() {
  const params = useParams({ strict: false }) as { page?: string };
  const search = useSearch({ strict: false }) as { category?: string };
  const navigate = useNavigate();

  const category = search.category;
  const page = params.page ? Number(params.page) : 1;

  const categories = useMemo(() => getBlogCategories(), []);
  const filteredPosts = useMemo(() => filterPostsByCategory(publishedBlogPosts, category), [category]);
  const totalForFilter = filteredPosts.length;
  const totalPages = totalBlogPages(totalForFilter);

  const [state, setState] = useState<ListState>(() => computeSeed(category, page, filteredPosts));
  const [loading, setLoading] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

  // Keeps local state in step with the URL whenever the two disagree: a
  // category chip click, a direct load of a different page, or the browser
  // back button landing on a genuine earlier history entry. When state
  // already matches (our own "Load more" step, which updates state and the
  // cache together before navigating) this is a no-op, so it never clobbers
  // an accumulated list mid-load.
  useEffect(() => {
    setState((prev) => {
      if (prev.category === category && prev.page === page) return prev;
      const slice = blogPageSlice(filteredPosts, page);
      const fresh: ListState = { category, page, featured: slice.featured, posts: slice.grid };
      if (typeof window !== "undefined") clientCache = fresh;
      return fresh;
    });
  }, [category, page, filteredPosts]);

  // Consumes pendingFocusCount once per mount: on a genuine first visit it
  // is 0 and this is a no-op, on the remount that follows a "Load more"
  // click it holds the number of cards that click just appended, so focus
  // lands on the first of them in the fresh DOM.
  useEffect(() => {
    if (pendingFocusCount > 0) {
      const added = pendingFocusCount;
      pendingFocusCount = 0;
      const nodes = listRef.current?.querySelectorAll<HTMLElement>("[data-post-card]");
      const target = nodes && nodes[nodes.length - added];
      target?.focus();
    }
    // Mount-only: this must run exactly once per component instance, not on
    // every state change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { featured, posts } = state;
  const visibleCount = (featured ? FEATURED_COUNT : 0) + posts.length;
  const hasMore = state.page < totalPages;
  const nextPage = state.page + 1;
  const nextHref = blogPageHref(nextPage, category);

  async function handleLoadMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (loading || !hasMore) return;
    setLoading(true);

    const slice = blogPageSlice(filteredPosts, nextPage);
    const addedCount = slice.grid.length;

    // flushSync forces the append to paint before we do anything else, so
    // we can move focus to the new cards straight away. This also has to
    // happen before navigate() below: that call causes this component to
    // remount (see the ListState/clientCache comment above), and a plain
    // (batched) setState here would not have reached the DOM yet when that
    // happens.
    flushSync(() => {
      setState((prev) => {
        const next: ListState = {
          category,
          page: nextPage,
          featured: prev.featured,
          posts: [...prev.posts, ...slice.grid],
        };
        if (typeof window !== "undefined") clientCache = next;
        return next;
      });
    });

    // Best-effort immediate focus, in case navigate() below does not end up
    // remounting the component (it usually does, see pendingFocusCount).
    const nodes = listRef.current?.querySelectorAll<HTMLElement>("[data-post-card]");
    const target = nodes && nodes[nodes.length - addedCount];
    target?.focus();
    pendingFocusCount = addedCount;

    try {
      await navigate({
        to: "/blog/page/$page",
        params: { page: String(nextPage) },
        search: category ? { category } : {},
        replace: true,
        resetScroll: false,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageIntro {...blogIndexPage.hero} />
      <section className="section-y">
        <div className="container-page">
          {categories.length > 0 ? (
            <nav aria-label="Filter by category" className="flex flex-wrap gap-2">
              <Link
                to="/blog"
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  !category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-muted",
                ].join(" ")}
              >
                All
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/blog"
                  search={{ category: c.slug }}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    category === c.slug
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground hover:bg-muted",
                  ].join(" ")}
                >
                  {c.label}
                </Link>
              ))}
            </nav>
          ) : null}

          {featured ? (
            <div className="mt-8">
              <FeaturedCard post={featured} />
            </div>
          ) : posts.length === 0 ? (
            <p className="mt-8 text-base text-muted-foreground">No articles in this category yet.</p>
          ) : null}

          {posts.length > 0 ? (
            <ul ref={listRef} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.frontmatter.slug} data-post-card tabIndex={-1} className="outline-none">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          ) : null}

          {hasMore ? (
            <div className="mt-10 flex flex-col items-center gap-3">
              <p aria-live="polite" className="text-sm text-muted-foreground">
                Showing {visibleCount} of {totalForFilter} articles.
              </p>
              <a
                href={nextHref}
                onClick={handleLoadMore}
                className="w-full max-w-xs rounded-full border border-border bg-card px-7 py-3.5 text-center text-sm font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                {loading ? "Loading more articles..." : "Load more articles"}
              </a>
            </div>
          ) : totalForFilter > 0 ? (
            <p aria-live="polite" className="mt-10 text-center text-sm text-muted-foreground">
              Showing all {totalForFilter} articles.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
