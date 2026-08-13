import { createFileRoute } from "@tanstack/react-router";
import { locations } from "@/content/locations";
import { PageIntro } from "@/components/sections/PageIntro";
import { CentreSection } from "@/components/sections/CentreSection";
import { SuburbGrid } from "@/components/sections/SuburbGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: locations.title },
      { name: "description", content: locations.metaDescription },
      { property: "og:title", content: locations.title },
      { property: "og:description", content: locations.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <PageIntro {...locations.hero} />
      <CentreSection {...locations.centre} />
      <SuburbGrid {...locations.suburbGrid} />
      <CtaBand {...locations.cta} />
    </>
  );
}
