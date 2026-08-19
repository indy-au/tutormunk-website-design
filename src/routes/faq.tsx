import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { faqPage } from "@/content/faq";
import { PageIntro } from "@/components/sections/PageIntro";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSchema } from "@/components/FaqSchema";

export const Route = createFileRoute("/faq")({
  head: () => seoHead({ title: faqPage.title, description: faqPage.metaDescription, path: "/faq" }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro {...faqPage.hero} />
      <FaqAccordion {...faqPage.faq} />
      <FaqSchema items={faqPage.faq.items} />
      <CtaBand {...faqPage.cta} />
    </>
  );
}
