import { createFileRoute, notFound } from "@tanstack/react-router";
import { topics } from "@/content/topics";
import { Hero } from "@/components/sections/Hero";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { TopicIntro } from "@/components/sections/TopicIntro";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TopicRelated } from "@/components/sections/TopicRelated";
import { FaqSchema } from "@/components/FaqSchema";
import { seoHead } from "@/lib/seo";

// Object key lookup is already case-sensitive, so an uppercase slug variant
// naturally misses and 404s below. Explicit check kept for the same reason
// as the suburb route: never silently render a duplicate at another case.
export const Route = createFileRoute("/topics/$slug")({
  loader: ({ params }) => {
    if (/[A-Z]/.test(params.slug)) throw notFound();
    const topic = topics[params.slug];
    if (!topic) throw notFound();
    return { topic, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { topic, slug } = loaderData;
    return seoHead({
      title: topic.title,
      description: topic.metaDescription,
      path: `/topics/${slug}`,
    });
  },
  component: TopicPage,
});

function TopicPage() {
  const { topic } = Route.useLoaderData();

  return (
    <>
      <Hero
        eyebrow={topic.eyebrow}
        heading={topic.heading}
        body={topic.intro}
        ctaLabel="Request a Call"
        image={topic.heroImage}
      />
      {/* A topic from the content pass (batch 1 of 3, see CLAUDE.md's "Topic
          pages" note) carries all five new fields together, or none of them.
          The condition is repeated (rather than lifted into one boolean
          above) so TypeScript narrows each property from optional to
          required within this branch; a separate boolean variable would not
          narrow topic.entitySentence etc. itself. The 22 not yet rewritten
          render exactly as before: Hero, DeliveryModesBand, CtaBand, nothing
          else. */}
      {topic.entitySentence && topic.sections && topic.faqs && topic.related ? (
        <TopicIntro entitySentence={topic.entitySentence} sections={topic.sections} />
      ) : null}
      <DeliveryModesBand
        eyebrow="Four ways to learn"
        heading="Your home or our centre, 1-to-1 or small group."
        body="Every option is in person. Choose the setting that suits your family."
      />
      {topic.entitySentence && topic.sections && topic.faqs && topic.related ? (
        <>
          <FaqAccordion eyebrow="FAQ" heading="Questions parents ask." items={topic.faqs} />
          <FaqSchema items={topic.faqs} />
          <TopicRelated items={topic.related} />
        </>
      ) : null}
      <CtaBand
        heading="Ready to talk about this course?"
        body="Request a call and we will match your child with the right Munk."
        ctaLabel="Request a Call"
      />
    </>
  );
}
