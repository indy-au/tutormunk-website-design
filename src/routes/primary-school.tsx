import { createFileRoute } from "@tanstack/react-router";
import { primarySchool } from "@/content/primarySchool";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/primary-school")({
  head: () => ({
    meta: [
      { title: primarySchool.title },
      { name: "description", content: primarySchool.metaDescription },
      { property: "og:title", content: primarySchool.title },
      { property: "og:description", content: primarySchool.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrimarySchoolPage,
});

function PrimarySchoolPage() {
  return (
    <>
      <HubPage content={primarySchool} />
    </>
  );
}
