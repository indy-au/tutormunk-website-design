import { Hero } from "../sections/Hero";
import { FeatureGrid } from "../sections/FeatureGrid";
import { ReviewsCarousel } from "../sections/ReviewsCarousel";
import { CtaBand } from "../sections/CtaBand";

type SuburbPageContent = {
  hero: { eyebrow?: string | undefined; heading: string; body: string; ctaLabel?: string | undefined; points?: string[] };
  whatWeCover: { eyebrow?: string | undefined; heading: string; items: { title: string; body: string }[] };
  reviewsSection: { eyebrow?: string | undefined; heading: string; body?: string };
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export function SuburbPage({ content }: { content: SuburbPageContent }) {
  return (
    <>
      <Hero {...content.hero} />
      <FeatureGrid {...content.whatWeCover} tone="muted" />
      <ReviewsCarousel {...content.reviewsSection} />
      <CtaBand {...content.cta} />
    </>
  );
}
