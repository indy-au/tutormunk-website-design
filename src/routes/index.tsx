import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
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
import { munks, munksSection, statsSection } from "@/content/munks";

export const Route = createFileRoute("/")({
  head: () => seoHead({ title: home.title, description: home.metaDescription, path: "/" }),
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
      <ReviewsCarousel {...home.reviewsSection} />
      <SuburbsStrip {...home.suburbsSection} />
      <CtaBand {...home.cta} />
    </>
  );
}
