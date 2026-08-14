import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { cancellationPolicy } from "@/content/policies";
import { TextPage } from "@/components/templates/TextPage";

export const Route = createFileRoute("/cancellation-and-refund")({
  head: () => seoHead({ title: cancellationPolicy.title, description: cancellationPolicy.metaDescription, path: "/cancellation-and-refund" }),
  component: CancellationPage,
});

function CancellationPage() {
  return (
    <>
      <TextPage content={cancellationPolicy} />
    </>
  );
}
