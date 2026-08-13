import { createFileRoute } from "@tanstack/react-router";
import { cancellationPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/cancellation-and-refund")({
  head: () => ({
    meta: [
      { title: cancellationPolicy.title },
      { name: "description", content: cancellationPolicy.metaDescription },
      { property: "og:title", content: cancellationPolicy.title },
      { property: "og:description", content: cancellationPolicy.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CancellationPage,
});

function CancellationPage() {
  return (
    <>
      <TextPage content={cancellationPolicy} />
    </>
  );
}
