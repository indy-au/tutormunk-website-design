import { createFileRoute, notFound } from "@tanstack/react-router";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blogLoader";
import { categoryLabel, formatBlogDate } from "@/lib/markdown";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { MoreAdvice } from "@/components/sections/MoreAdvice";
import { CtaBand } from "@/components/sections/CtaBand";
import { BlogPostingSchema } from "@/components/BlogPostingSchema";
import { seoHead } from "@/lib/seo";

// Same pattern as topics.$slug.tsx and the suburb route: look the post up
// by slug among PUBLISHED posts only, 404 for anything else. A draft's
// slug isn't in that lookup at all, so it 404s exactly like an unknown
// slug, never a special "coming soon" page that would tip off its URL.
export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (/[A-Z]/.test(params.slug)) throw notFound();
    const post = getBlogPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { post, slug } = loaderData;
    return seoHead({
      title: post.frontmatter.titleTag,
      description: post.frontmatter.metaDescription,
      path: `/blog/${slug}`,
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, slug } = Route.useLoaderData();
  const related = getRelatedPosts(post.frontmatter.slug);

  return (
    <>
      <BlogPostingSchema
        headline={post.frontmatter.heading}
        description={post.frontmatter.metaDescription}
        path={`/blog/${slug}`}
        image={post.heroImage}
        datePublished={post.frontmatter.date || undefined}
      />
      <BlogArticle
        heading={post.frontmatter.heading}
        category={categoryLabel(post.frontmatter.category)}
        date={formatBlogDate(post.frontmatter.date)}
        readingTime={post.readingTime}
        heroImage={post.heroImage}
        body={post.body}
      />
      <CtaBand
        heading="Talk to us about this."
        body="Request a call and we will tell you honestly whether the timing is right for your child."
        ctaLabel="Request a Call"
        secondaryLabel="Exam prep programs"
        secondaryTo="/exam-prep"
      />
      <MoreAdvice posts={related} />
    </>
  );
}
