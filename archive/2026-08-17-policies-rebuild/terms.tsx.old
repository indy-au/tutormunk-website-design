import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { termsPage } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/terms")({
  head: () => seoHead({ title: termsPage.title, description: termsPage.metaDescription, path: "/terms" }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <TextPage content={termsPage} />
    </>
  );
}
