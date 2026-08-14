import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { testimonialsPage } from "@/content/faq";
import { PageIntro } from "@/components/sections/PageIntro";
import { ReviewWall } from "@/components/sections/ReviewWall";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/testimonials")({
  head: () => seoHead({ title: testimonialsPage.title, description: testimonialsPage.metaDescription, path: "/testimonials" }),
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
