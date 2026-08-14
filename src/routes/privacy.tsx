import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { privacyPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/privacy")({
  head: () => seoHead({ title: privacyPolicy.title, description: privacyPolicy.metaDescription, path: "/privacy" }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <TextPage content={privacyPolicy} />
    </>
  );
}
