import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { dataCollectionPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/data-collection")({
  head: () => seoHead({ title: dataCollectionPolicy.title, description: dataCollectionPolicy.metaDescription, path: "/data-collection" }),
  component: DataCollectionPage,
});

function DataCollectionPage() {
  return (
    <>
      <TextPage content={dataCollectionPolicy} />
    </>
  );
}
