import { createFileRoute, notFound } from "@tanstack/react-router";
import { z } from "zod";
import { seoHead } from "@/lib/seo";
import { blogPageTitle, blogPageDescription } from "@/content/blogIndex";
import { publishedBlogPosts } from "@/lib/blogLoader";
import { blogPageHref, filterPostsByCategory, totalBlogPages } from "@/lib/blogPagination";
import { BlogListPage } from "@/components/sections/BlogList";

// Real, crawlable pagination for the blog index. Page 1 lives only at /blog
// (see blog.index.tsx), so this route starts at page 2. `component` is the
// exact same BlogListPage function used by blog.index.tsx, see the comment
// on that component for why that matters.
const blogSearchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/blog/page/$page")({
  validateSearch: blogSearchSchema,
  loaderDeps: ({ search }) => ({ category: search.category }),
  loader: ({ params, deps }) => {
    const page = Number(params.page);
    // Reject non-canonical page numbers (not an integer, "02", "2.5", page
    // <= 1) the same way blog.$slug.tsx rejects an uppercase slug: page 1
    // has exactly one URL, /blog, so /blog/page/1 must 404, not redirect or
    // silently render, or we would duplicate our own index.
    if (!Number.isInteger(page) || page <= 1 || String(page) !== params.page) {
      throw notFound();
    }
    // Out-of-range check uses the count for the CURRENT category filter, so
    // /blog/page/3?category=naplan 404s if NAPLAN does not have a third
    // page, rather than silently rendering an empty grid.
    const filtered = filterPostsByCategory(publishedBlogPosts, deps.category);
    if (page > totalBlogPages(filtered.length)) {
      throw notFound();
    }
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    // Canonical and rel=prev/next ignore the category filter, same as /blog
    // itself: the canonical page sequence is the unfiltered one, so a
    // filtered URL like /blog/page/2?category=naplan still canonicalises to
    // plain /blog/page/2 rather than minting a second canonical sequence per
    // category.
    const unfilteredTotalPages = totalBlogPages(publishedBlogPosts.length);
    return seoHead({
      title: blogPageTitle(page),
      description: blogPageDescription(page),
      path: blogPageHref(page),
      prev: blogPageHref(page - 1),
      next: page < unfilteredTotalPages ? blogPageHref(page + 1) : undefined,
    });
  },
  component: BlogListPage,
});
