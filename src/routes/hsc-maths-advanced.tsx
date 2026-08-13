import { createFileRoute } from "@tanstack/react-router";
import { hscMathsAdvanced } from "@/content/hscMathsAdvanced";
import { CoursePage } from "@/components/templates/CoursePage";

export const Route = createFileRoute("/hsc-maths-advanced")({
  head: () => ({
    meta: [
      { title: hscMathsAdvanced.title },
      { name: "description", content: hscMathsAdvanced.metaDescription },
      { property: "og:title", content: hscMathsAdvanced.title },
      { property: "og:description", content: hscMathsAdvanced.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HscMathsAdvancedPage,
});

function HscMathsAdvancedPage() {
  return (
    <>
      <CoursePage content={hscMathsAdvanced} />
    </>
  );
}
