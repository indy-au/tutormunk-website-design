import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { highSchool } from "@/content/highSchool";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/high-school")({
  head: () => seoHead({ title: highSchool.title, description: highSchool.metaDescription, path: "/high-school" }),
  component: HighSchoolPage,
});

function HighSchoolPage() {
  return (
    <>
      <HubPage content={highSchool} />
    </>
  );
}
