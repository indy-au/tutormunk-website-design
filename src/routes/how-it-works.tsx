import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { howItWorks } from "@/content/howItWorks";
import { Hero } from "@/components/sections/Hero";
import { TrustTicks } from "@/components/sections/TrustTicks";
import { JourneySteps } from "@/components/sections/JourneySteps";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/how-it-works")({
  head: () => seoHead({ title: howItWorks.title, description: howItWorks.metaDescription, path: "/how-it-works" }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <Hero
        {...howItWorks.hero}
        image={howItWorks.hero.image}
        illustrationLabel={howItWorks.hero.imageAlt}
      />
      <TrustTicks items={howItWorks.trustTicks} />
      <JourneySteps {...howItWorks.steps} />
      <DeliveryModesBand {...howItWorks.delivery} />
      <CtaBand {...howItWorks.cta} />
    </>
  );
}
