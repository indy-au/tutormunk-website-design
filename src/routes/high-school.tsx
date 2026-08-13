import { createFileRoute } from "@tanstack/react-router";
import { highSchool } from "@/content/highSchool";
import { HubPage } from "@/components/templates/HubPage";

export const Route = createFileRoute("/high-school")({
  head: () => ({
    meta: [
      { title: highSchool.title },
      { name: "description", content: highSchool.metaDescription },
      { property: "og:title", content: highSchool.title },
      { property: "og:description", content: highSchool.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HighSchoolPage,
});

function HighSchoolPage() {
  return (
    <>
      <HubPage content={highSchool} />
    </>
  );
}
