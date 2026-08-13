import type { StagePageContent } from "@/content/types";
import { Hero } from "../sections/Hero";
import { TrustTicks } from "../sections/TrustTicks";
import { SubjectCards } from "../sections/SubjectCards";
import { ProgramCards } from "../sections/ProgramCards";
import { WhyUsList } from "../sections/WhyUsList";
import { TalkToUsBand } from "../sections/TalkToUsBand";
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
      {content.programs ? (
        <ProgramCards {...content.programs} />
      ) : (
        <SubjectCards {...content.subjects} />
      )}
      <WhyUsList {...content.whyUs} />
      <TalkToUsBand />
      <GuaranteeCard {...guarantee} />
      <CtaBand {...content.cta} />
    </>
  );
}
