import { createFileRoute } from "@tanstack/react-router";
import { faqPage } from "@/content/faq";
import { PageIntro } from "@/components/sections/PageIntro";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: faqPage.title },
      { name: "description", content: faqPage.metaDescription },
      { property: "og:title", content: faqPage.title },
      { property: "og:description", content: faqPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro {...faqPage.hero} />
      <FaqAccordion {...faqPage.faq} />
      <CtaBand {...faqPage.cta} />
    </>
  );
}
