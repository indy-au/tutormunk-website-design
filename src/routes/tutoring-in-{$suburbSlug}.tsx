import { createFileRoute, notFound } from "@tanstack/react-router";
import { locations } from "@/content/locations";
import { SuburbPage } from "@/components/templates/SuburbPage";

export const Route = createFileRoute("/tutoring-in-{$suburbSlug}")({
  loader: ({ params }) => {
    const suburb = locations.find((location) => location.slug === `tutoring-in-${params.suburbSlug}`);
    if (!suburb) throw notFound();
    return { suburb };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { suburb } = loaderData;
    return {
      meta: [
        { title: suburb.titleTag },
        { name: "description", content: suburb.metaDescription },
        { property: "og:title", content: suburb.titleTag },
        { property: "og:description", content: suburb.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SuburbRoutePage,
});

function SuburbRoutePage() {
  const { suburb } = Route.useLoaderData();
  return <SuburbPage suburb={suburb} />;
}
