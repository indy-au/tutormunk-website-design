import { Hero } from "../sections/Hero";
import { ProseSection } from "../sections/ProseSection";
import { DeliverySection } from "../sections/DeliverySection";
import { ReviewsCarousel } from "../sections/ReviewsCarousel";
import { CtaBand } from "../sections/CtaBand";
import { LocalBusinessSchema } from "../LocalBusinessSchema";
import { TopicIntro } from "../sections/TopicIntro";
import { TopicRelated } from "../sections/TopicRelated";
import { FaqAccordion } from "../sections/FaqAccordion";
import { FaqSchema } from "../FaqSchema";
import { reviewsForSuburb } from "@/content/reviews";
import type { SuburbLocation } from "@/content/locations";

export function SuburbPage({ suburb }: { suburb: SuburbLocation }) {
  const reviews = reviewsForSuburb(suburb.suburbName);
  // First section is the general "what we offer" prose. The second ("how
  // sessions run") pairs with the centre fact card in DeliverySection
  // instead of running as its own block, so the two don't repeat each
  // other. A third section, added batch 4 (19 Aug 2026), speaks to
  // suburb-specific search intent and links out to the relevant topic
  // pages (TopicRelated.tsx, reused from the topic pages).
  const [offerSection, deliverySection, searchSection] = suburb.bodySections;

  return (
    <>
      <LocalBusinessSchema areaServed={[suburb.suburbName]} />
      <Hero
        eyebrow="In-home tutoring"
        heading={`In-home tutoring in ${suburb.suburbName}.`}
        body={suburb.heroIntro}
        ctaLabel="Request a Call"
        points={
          suburb.centre
            ? ["Home visits or our Gregory Hills centre", "K-12 subjects", "1-to-1 or small group"]
            : [`Home visits across ${suburb.suburbName}`, "K-12 subjects", "1-to-1 or small group"]
        }
      />
      {suburb.entitySentence ? <TopicIntro entitySentence={suburb.entitySentence} /> : null}
      {offerSection ? (
        <ProseSection
          heading={offerSection.heading}
          paragraphs={offerSection.paragraphs}
          tone="light"
        />
      ) : null}
      {deliverySection ? (
        <DeliverySection
          eyebrow="How sessions run"
          heading={deliverySection.heading}
          body={deliverySection.paragraphs.join(" ")}
        />
      ) : null}
      {searchSection ? (
        <>
          <ProseSection
            heading={searchSection.heading}
            paragraphs={searchSection.paragraphs}
            tone="light"
          />
          {searchSection.links?.length ? <TopicRelated items={searchSection.links} /> : null}
        </>
      ) : null}
      {suburb.faqs?.length ? (
        <>
          <FaqAccordion
            eyebrow="FAQ"
            heading={`Questions ${suburb.suburbName} parents ask.`}
            items={suburb.faqs}
          />
          <FaqSchema items={suburb.faqs} />
        </>
      ) : null}
      <ReviewsCarousel
        eyebrow="Google reviews"
        heading="What families say."
        body="Real reviews from our Google Business Profile."
        reviews={reviews}
      />
      <CtaBand
        heading={`Book a call about ${suburb.suburbName} tutoring.`}
        body="Tell us the subject and preferred time. We will confirm a local tutor."
        ctaLabel="Request a Call"
        secondaryLabel="All locations"
        secondaryTo="/locations"
      />
    </>
  );
}
