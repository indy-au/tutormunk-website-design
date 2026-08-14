import { createFileRoute, notFound } from "@tanstack/react-router";
import { locations } from "@/content/locations";
import { SuburbPage } from "@/components/templates/SuburbPage";
import { seoHead } from "@/lib/seo";

// Suburb URLs are locked to this exact lowercase, no-trailing-slash form.
// Anything else (case variants, a trailing slash) is treated as a 404
// rather than silently rendering a duplicate copy of the same page. The
// production-level redirect for those variants lives in deploy/.htaccess.
export const Route = createFileRoute("/tutoring-in-{$suburbSlug}")({
  loader: ({ params }) => {
    if (/[A-Z]/.test(params.suburbSlug)) throw notFound();
    const suburb = locations.find((location) => location.slug === `tutoring-in-${params.suburbSlug}`);
    if (!suburb) throw notFound();
    return { suburb };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { suburb } = loaderData;
    return seoHead({ title: suburb.titleTag, description: suburb.metaDescription, path: `/${suburb.slug}` });
  },
  component: SuburbRoutePage,
});

function SuburbRoutePage() {
  const { suburb } = Route.useLoaderData();
  return <SuburbPage suburb={suburb} />;
}
