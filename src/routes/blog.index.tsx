import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { seoHead } from "@/lib/seo";
import { blogIndexPage } from "@/content/blogIndex";
import { publishedBlogPosts, getBlogCategories } from "@/lib/blogLoader";
import { PageIntro } from "@/components/sections/PageIntro";
import { BlogList } from "@/components/sections/BlogList";

const blogSearchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: blogSearchSchema,
  head: () => seoHead({ title: blogIndexPage.title, description: blogIndexPage.metaDescription, path: "/blog" }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { category } = Route.useSearch();
  const categories = getBlogCategories();
  // Filtered server-side (well, in the loader-backed render), not hidden by
  // client JS after the fact, so a crawler following a category link gets
  // the filtered set directly in the rendered HTML.
  const posts = category
    ? publishedBlogPosts.filter((post) => post.frontmatter.category === category)
    : publishedBlogPosts;

  return (
    <>
      <PageIntro {...blogIndexPage.hero} />
      <BlogList posts={posts} categories={categories} activeCategory={category} />
    </>
  );
}
