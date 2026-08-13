import { createFileRoute } from "@tanstack/react-router";
import { primaryEnglish } from "@/content/primaryEnglish";
import { SubjectPage } from "@/components/templates/SubjectPage";

export const Route = createFileRoute("/primary-english")({
  head: () => ({
    meta: [
      { title: primaryEnglish.title },
      { name: "description", content: primaryEnglish.metaDescription },
      { property: "og:title", content: primaryEnglish.title },
      { property: "og:description", content: primaryEnglish.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrimaryEnglishPage,
});

function PrimaryEnglishPage() {
  return (
    <>
      <SubjectPage content={primaryEnglish} />
    </>
  );
}
