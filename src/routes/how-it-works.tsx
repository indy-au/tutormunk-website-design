import { createFileRoute } from "@tanstack/react-router";
import { howItWorks } from "@/content/howItWorks";
import { Hero } from "@/components/sections/Hero";
import { TrustTicks } from "@/components/sections/TrustTicks";
import { JourneySteps } from "@/components/sections/JourneySteps";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { GuaranteeCard } from "@/components/sections/GuaranteeCard";
import { TalkToUsBand } from "@/components/sections/TalkToUsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { guarantee } from "@/content/munks";

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
      <Hero
        {...howItWorks.hero}
        image={howItWorks.hero.image}
        illustrationLabel={howItWorks.hero.imageAlt}
      />
      <TrustTicks items={howItWorks.trustTicks} />
      <JourneySteps {...howItWorks.steps} />
      <DeliveryModesBand {...howItWorks.delivery} />
      <GuaranteeCard {...guarantee} />
      <TalkToUsBand />
      <CtaBand {...howItWorks.cta} />
    </>
  );
}
