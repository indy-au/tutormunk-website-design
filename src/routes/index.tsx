import { createFileRoute } from "@tanstack/react-router";
import { home } from "@/content/home";
import { Hero } from "@/components/sections/Hero";
import { StageCards } from "@/components/sections/StageCards";
import { StepsStrip } from "@/components/sections/StepsStrip";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { SuburbsStrip } from "@/components/sections/SuburbsStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { StatsBand } from "@/components/sections/StatsBand";
import { MunkCards } from "@/components/sections/MunkCards";
import { GuaranteeCard } from "@/components/sections/GuaranteeCard";
import { munks, munksSection, guarantee, statsSection } from "@/content/munks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: home.title },
      { name: "description", content: home.metaDescription },
      { property: "og:title", content: home.title },
      { property: "og:description", content: home.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero {...home.hero} />
      <StageCards {...home.stages} />
      <StatsBand {...statsSection} />
      <StepsStrip {...home.steps} />
      <DeliveryModesBand {...home.delivery} />
      <MunkCards {...munksSection} items={munks} />
      <GuaranteeCard {...guarantee} />
      <ReviewsCarousel {...home.reviewsSection} />
      <SuburbsStrip {...home.suburbsSection} />
      <CtaBand {...home.cta} />
    </>
  );
}
