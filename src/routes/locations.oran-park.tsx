import { createFileRoute } from "@tanstack/react-router";
import { suburbOranPark } from "@/content/locations";
import { SuburbPage } from "@/components/templates/SuburbPage";

export const Route = createFileRoute("/locations/oran-park")({
  head: () => ({
    meta: [
      { title: suburbOranPark.title },
      { name: "description", content: suburbOranPark.metaDescription },
      { property: "og:title", content: suburbOranPark.title },
      { property: "og:description", content: suburbOranPark.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OranParkPage,
});

function OranParkPage() {
  return (
    <>
      <SuburbPage content={suburbOranPark} />
    </>
  );
}
