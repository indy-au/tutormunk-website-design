import { createFileRoute } from "@tanstack/react-router";
import { examPrep } from "@/content/examPrep";
import { PageIntro } from "@/components/sections/PageIntro";
import { ProgramCards } from "@/components/sections/ProgramCards";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/exam-prep")({
  head: () => ({
    meta: [
      { title: examPrep.title },
      { name: "description", content: examPrep.metaDescription },
      { property: "og:title", content: examPrep.title },
      { property: "og:description", content: examPrep.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExamPrepPage,
});

function ExamPrepPage() {
  return (
    <>
      <PageIntro {...examPrep.hero} />
      <ProgramCards {...examPrep.programs} />
      <CtaBand {...examPrep.cta} />
    </>
  );
}
