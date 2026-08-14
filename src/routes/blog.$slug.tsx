import { createFileRoute, notFound } from "@tanstack/react-router";
import { blogPosts } from "@/content/blog";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { CtaBand } from "@/components/sections/CtaBand";
import { seoHead } from "@/lib/seo";

// Looks the post up by slug, same pattern as topics.$slug.tsx and the
// suburb route. A slug with no entry in blogPosts (including every draft
// slug listed in content/blog.ts) 404s instead of rendering another
// post's content.
export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (/[A-Z]/.test(params.slug)) throw notFound();
    const post = blogPosts[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { post, slug } = loaderData;
    return seoHead({ title: post.title, description: post.metaDescription, path: `/blog/${slug}` });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <BlogArticle {...post} />
      <CtaBand {...post.cta} />
    </>
  );
}
