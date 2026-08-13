import { createFileRoute } from "@tanstack/react-router";
import { seniorSchool } from "@/content/seniorSchool";
import { StagePage } from "@/components/templates/StagePage";

export const Route = createFileRoute("/senior-school")({
  head: () => ({
    meta: [
      { title: seniorSchool.title },
      { name: "description", content: seniorSchool.metaDescription },
      { property: "og:title", content: seniorSchool.title },
      { property: "og:description", content: seniorSchool.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SeniorSchoolPage,
});

function SeniorSchoolPage() {
  return (
    <>
      <StagePage content={seniorSchool} />
    </>
  );
}
