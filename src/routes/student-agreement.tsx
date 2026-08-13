import { createFileRoute } from "@tanstack/react-router";
import { studentAgreement } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/student-agreement")({
  head: () => ({
    meta: [
      { title: studentAgreement.title },
      { name: "description", content: studentAgreement.metaDescription },
      { property: "og:title", content: studentAgreement.title },
      { property: "og:description", content: studentAgreement.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentAgreementPage,
});

function StudentAgreementPage() {
  return (
    <>
      <TextPage content={studentAgreement} />
    </>
  );
}
