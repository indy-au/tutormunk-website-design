import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { primarySchool } from "@/content/primarySchool";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/primary-school")({
  head: () => seoHead({ title: primarySchool.title, description: primarySchool.metaDescription, path: "/primary-school" }),
  component: PrimarySchoolPage,
});

function PrimarySchoolPage() {
  return (
    <>
      <HubPage content={primarySchool} />
    </>
  );
}
