import { createFileRoute } from "@tanstack/react-router";
import { privacyPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: privacyPolicy.title },
      { name: "description", content: privacyPolicy.metaDescription },
      { property: "og:title", content: privacyPolicy.title },
      { property: "og:description", content: privacyPolicy.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <TextPage content={privacyPolicy} />
    </>
  );
}
