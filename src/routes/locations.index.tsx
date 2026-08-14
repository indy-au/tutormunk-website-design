import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { locationsPage, locations } from "@/content/locations";
import { PageIntro } from "@/components/sections/PageIntro";
import { CentreSection } from "@/components/sections/CentreSection";
import { SuburbGrid } from "@/components/sections/SuburbGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export const Route = createFileRoute("/locations/")({
  head: () => seoHead({ title: locationsPage.title, description: locationsPage.metaDescription, path: "/locations" }),
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
