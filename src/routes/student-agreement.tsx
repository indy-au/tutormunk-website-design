import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { studentAgreement } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/student-agreement")({
  head: () => seoHead({ title: studentAgreement.title, description: studentAgreement.metaDescription, path: "/student-agreement" }),
  component: StudentAgreementPage,
});

function StudentAgreementPage() {
  return (
    <>
      <TextPage content={studentAgreement} />
    </>
  );
}
