import { createFileRoute } from "@tanstack/react-router";
import { blogPost } from "@/content/blog";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: blogPost.title },
      { name: "description", content: blogPost.metaDescription },
      { property: "og:title", content: blogPost.title },
      { property: "og:description", content: blogPost.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  return (
    <>
      <BlogArticle {...blogPost} />
      <CtaBand {...blogPost.cta} />
    </>
  );
}
