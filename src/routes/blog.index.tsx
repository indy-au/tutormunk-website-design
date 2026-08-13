import { createFileRoute } from "@tanstack/react-router";
import { blogIndex } from "@/content/blog";
import { PageIntro } from "@/components/sections/PageIntro";
import { BlogList } from "@/components/sections/BlogList";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: blogIndex.title },
      { name: "description", content: blogIndex.metaDescription },
      { property: "og:title", content: blogIndex.title },
      { property: "og:description", content: blogIndex.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
