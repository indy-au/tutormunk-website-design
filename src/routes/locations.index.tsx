import { createFileRoute } from "@tanstack/react-router";
import { locationsPage, locations } from "@/content/locations";
import { PageIntro } from "@/components/sections/PageIntro";
import { CentreSection } from "@/components/sections/CentreSection";
import { SuburbGrid } from "@/components/sections/SuburbGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: locationsPage.title },
      { name: "description", content: locationsPage.metaDescription },
      { property: "og:title", content: locationsPage.title },
      { property: "og:description", content: locationsPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={locations.map((location) => location.suburbName)} />
      <PageIntro {...locationsPage.hero} />
      <CentreSection {...locationsPage.centre} />
      <SuburbGrid {...locationsPage.suburbGrid} items={locations} />
      <CtaBand {...locationsPage.cta} />
    </>
  );
}
