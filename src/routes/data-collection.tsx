import { createFileRoute } from "@tanstack/react-router";
import { dataCollectionPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/data-collection")({
  head: () => ({
    meta: [
      { title: dataCollectionPolicy.title },
      { name: "description", content: dataCollectionPolicy.metaDescription },
      { property: "og:title", content: dataCollectionPolicy.title },
      { property: "og:description", content: dataCollectionPolicy.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DataCollectionPage,
});

function DataCollectionPage() {
  return (
    <>
      <TextPage content={dataCollectionPolicy} />
    </>
  );
}
