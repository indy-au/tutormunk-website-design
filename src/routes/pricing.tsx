import { createFileRoute } from "@tanstack/react-router";
import { pricing } from "@/content/pricing";
import { PageIntro } from "@/components/sections/PageIntro";
import { PricingTable } from "@/components/sections/PricingTable";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: pricing.title },
      { name: "description", content: pricing.metaDescription },
      { property: "og:title", content: pricing.title },
      { property: "og:description", content: pricing.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageIntro {...pricing.hero} />
      <PricingTable {...pricing.table} />
      <DeliveryModesBand eyebrow="Delivery modes" heading="What each mode includes" />
      <CtaBand {...pricing.cta} />
    </>
  );
}
