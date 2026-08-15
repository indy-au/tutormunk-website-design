import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { seoHead } from "@/lib/seo";
import { blogIndexPage } from "@/content/blogIndex";
import { publishedBlogPosts } from "@/lib/blogLoader";
import { totalBlogPages, blogPageHref } from "@/lib/blogPagination";
import { PageIntro } from "@/components/sections/PageIntro";
import { BlogListPage } from "@/components/sections/BlogList";

const blogSearchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: blogSearchSchema,
  // rel=next ignores the category filter, same as the canonical below: the
  // canonical page sequence is always the unfiltered one. See
  // src/routes/blog.page.$page.tsx for the matching page 2+ logic.
  head: () =>
    seoHead({
      title: blogIndexPage.title,
      description: blogIndexPage.metaDescription,
      path: "/blog",
      next: totalBlogPages(publishedBlogPosts.length) > 1 ? blogPageHref(2) : undefined,
    }),
  // Page 1 has no per-page data to load, everything comes from the
  // BlogListPage component itself (it reads publishedBlogPosts directly).
  // This route still exists as a distinct file so blog.page.$page.tsx does
  // not have to special-case "page 1 lives elsewhere".
  component: BlogListPage,
});
