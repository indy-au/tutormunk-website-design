import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { examPrep } from "@/content/examPrep";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/exam-prep")({
  head: () => seoHead({ title: examPrep.title, description: examPrep.metaDescription, path: "/exam-prep" }),
  component: ExamPrepPage,
});

function ExamPrepPage() {
  return (
    <>
      <HubPage content={examPrep} />
    </>
  );
}
