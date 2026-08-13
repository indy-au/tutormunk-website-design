import type { StagePageContent } from "@/content/types";
import { Hero } from "../sections/Hero";
import { TrustTicks } from "../sections/TrustTicks";
import { SubjectCards } from "../sections/SubjectCards";
import { WhyUsList } from "../sections/WhyUsList";
import { PricingTeaser } from "../sections/PricingTeaser";
import { GuaranteeCard } from "../sections/GuaranteeCard";
import { CtaBand } from "../sections/CtaBand";
import { guarantee } from "@/content/munks";

const defaultTicks = [
  "In person only, never online",
  "NSW NESA aligned",
  "Working with Children Checked",
  "Notes after every session",
];

export function HubPage({ content }: { content: StagePageContent }) {
  return (
    <>
      <Hero
        {...content.hero}
        image={content.hero.image}
        illustrationLabel={content.hero.imageAlt}
      />
      <TrustTicks items={content.trustTicks ?? defaultTicks} />
      <SubjectCards {...content.subjects} />
      <WhyUsList {...content.whyUs} />
      <PricingTeaser {...content.pricingTeaser} />
      <GuaranteeCard {...guarantee} />
      <CtaBand {...content.cta} />
    </>
  );
}