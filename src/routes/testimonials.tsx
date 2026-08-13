import { createFileRoute } from "@tanstack/react-router";
import { testimonialsPage } from "@/content/faq";
import { PageIntro } from "@/components/sections/PageIntro";
import { ReviewWall } from "@/components/sections/ReviewWall";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: testimonialsPage.title },
      { name: "description", content: testimonialsPage.metaDescription },
      { property: "og:title", content: testimonialsPage.title },
      { property: "og:description", content: testimonialsPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro {...testimonialsPage.hero} />
      <ReviewWall />
      <CtaBand {...testimonialsPage.cta} />
    </>
  );
}
