import { createFileRoute } from "@tanstack/react-router";
import { howItWorks } from "@/content/howItWorks";
import { Hero } from "@/components/sections/Hero";
import { StepsStrip } from "@/components/sections/StepsStrip";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: howItWorks.title },
      { name: "description", content: howItWorks.metaDescription },
      { property: "og:title", content: howItWorks.title },
      { property: "og:description", content: howItWorks.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <Hero {...howItWorks.hero} />
      <StepsStrip {...howItWorks.steps} variant="detailed" />
      <DeliveryModesBand {...howItWorks.delivery} />
      <CtaBand {...howItWorks.cta} />
    </>
  );
}
