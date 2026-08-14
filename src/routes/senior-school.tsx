import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { seniorSchool } from "@/content/seniorSchool";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/senior-school")({
  head: () => seoHead({ title: seniorSchool.title, description: seniorSchool.metaDescription, path: "/senior-school" }),
  component: SeniorSchoolPage,
});

function SeniorSchoolPage() {
  return (
    <>
      <HubPage content={seniorSchool} />
    </>
  );
}
