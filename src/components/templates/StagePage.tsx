import type { StagePageContent } from "@/content/types";
import { Hero } from "../sections/Hero";
import { SubjectCards } from "../sections/SubjectCards";
import { WhyUsList } from "../sections/WhyUsList";
import { PricingTeaser } from "../sections/PricingTeaser";
import { CtaBand } from "../sections/CtaBand";

export function StagePage({ content }: { content: StagePageContent }) {
  return (
    <>
      <Hero {...content.hero} />
      <SubjectCards {...content.subjects} />
      <WhyUsList {...content.whyUs} />
      <PricingTeaser {...content.pricingTeaser} />
      <CtaBand {...content.cta} />
    </>
  );
}
