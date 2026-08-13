import { createFileRoute } from "@tanstack/react-router";
import { termsPage } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: termsPage.title },
      { name: "description", content: termsPage.metaDescription },
      { property: "og:title", content: termsPage.title },
      { property: "og:description", content: termsPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <TextPage content={termsPage} />
    </>
  );
}
