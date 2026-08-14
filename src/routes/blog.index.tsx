import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { blogIndex } from "@/content/blog";
import { PageIntro } from "@/components/sections/PageIntro";
import { BlogList } from "@/components/sections/BlogList";

export const Route = createFileRoute("/blog/")({
  head: () => seoHead({ title: blogIndex.title, description: blogIndex.metaDescription, path: "/blog" }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <>
      <PageIntro {...blogIndex.hero} />
      <BlogList posts={blogIndex.posts} />
    </>
  );
}
