import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPolicyBySlug } from "@/lib/policyLoader";
import { PolicyArticle } from "@/components/sections/PolicyArticle";
import { seoHead } from "@/lib/seo";

// Same shape as topics.$slug.tsx: object key lookup is already case
// sensitive, so an uppercase slug variant naturally misses and 404s below,
// the explicit check is kept for the same reason as that route and the
// suburb route, never silently render a duplicate at another case.
//
// getPolicyBySlug looks up among PUBLISHED policies only (see
// src/lib/policyLoader.ts), so the two internal documents,
// tutor-engagement-agreement and data-breach-response, return undefined
// here exactly like an unknown slug does, and both throw the same
// notFound(). There is no separate check for "is this one internal", the
// loader already removed them from what this route can ever see.
export const Route = createFileRoute("/policies/$slug")({
  loader: ({ params }) => {
    if (/[A-Z]/.test(params.slug)) throw notFound();
    const policy = getPolicyBySlug(params.slug);
    if (!policy) throw notFound();
    return { policy, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { policy, slug } = loaderData;
    return seoHead({
      title: policy.frontmatter.title,
      description: policy.frontmatter.metaDescription,
      path: `/policies/${slug}`,
    });
  },
  component: PolicyPage,
});

function PolicyPage() {
  const { policy } = Route.useLoaderData();
  return <PolicyArticle name={policy.frontmatter.name} body={policy.body} />;
}
