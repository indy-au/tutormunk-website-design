import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { primaryEnglish } from "@/content/primaryEnglish";
import { SubjectPage } from "@/components/templates/SubjectPage";

export const Route = createFileRoute("/primary-english")({
  head: () => seoHead({ title: primaryEnglish.title, description: primaryEnglish.metaDescription, path: "/primary-english" }),
  component: PrimaryEnglishPage,
});

function PrimaryEnglishPage() {
  return (
    <>
      <SubjectPage content={primaryEnglish} />
    </>
  );
}
