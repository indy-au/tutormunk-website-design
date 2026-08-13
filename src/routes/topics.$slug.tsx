import { createFileRoute, notFound } from "@tanstack/react-router";
import { topics } from "@/content/topics";
import { PageIntro } from "@/components/sections/PageIntro";
import { DeliveryModesBand } from "@/components/sections/DeliveryModesBand";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/topics/$slug")({
  loader: ({ params }) => {
    const topic = topics[params.slug];
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | TutorMunk" }, { name: "robots", content: "noindex" }] };
    }
    const { topic } = loaderData;
    return {
      meta: [
        { title: topic.title },
        { name: "description", content: topic.metaDescription },
        { property: "og:title", content: topic.title },
        { property: "og:description", content: topic.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TopicPage,
});

function TopicPage() {
  const { topic } = Route.useLoaderData();
  return (
    <>
      <PageIntro eyebrow={topic.eyebrow} heading={topic.heading} body={topic.intro} />
      <DeliveryModesBand
        eyebrow="Four ways to learn"
        heading="Your home or our centre, 1-to-1 or small group."
        body="Every option is in person. Choose the setting that suits your family."
      />
      <CtaBand
        heading="Ready to talk about this course?"
        body="Request a call and we will match your child with the right Munk."
        ctaLabel="Request a Call"
      />
    </>
  );
}