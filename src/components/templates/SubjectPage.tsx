import { Hero } from "../sections/Hero";
import { FeatureGrid } from "../sections/FeatureGrid";
import { StepsStrip } from "../sections/StepsStrip";
import { FaqAccordion } from "../sections/FaqAccordion";
import { CtaBand } from "../sections/CtaBand";
import type { FaqItem } from "@/content/types";

type SubjectPageContent = {
  hero: { eyebrow?: string | undefined; heading: string; body: string; ctaLabel?: string | undefined; points?: string[] };
  whatWeCover: { eyebrow?: string | undefined; heading: string; items: { title: string; body: string }[] };
  howSessions: { eyebrow?: string | undefined; heading: string; steps: { title: string; body: string }[] };
  faq: { eyebrow?: string | undefined; heading: string; items: FaqItem[] };
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export function SubjectPage({ content }: { content: SubjectPageContent }) {
  return (
    <>
      <Hero {...content.hero} />
      <FeatureGrid {...content.whatWeCover} />
      <StepsStrip
        eyebrow={content.howSessions.eyebrow}
        heading={content.howSessions.heading}
        items={content.howSessions.steps}
        variant="detailed"
      />
      <FaqAccordion {...content.faq} />
      <CtaBand {...content.cta} />
    </>
  );
}
