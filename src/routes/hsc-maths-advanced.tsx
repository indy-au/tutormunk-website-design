import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { hscMathsAdvanced } from "@/content/hscMathsAdvanced";
import { CoursePage } from "@/components/templates/CoursePage";

export const Route = createFileRoute("/hsc-maths-advanced")({
  head: () => seoHead({ title: hscMathsAdvanced.title, description: hscMathsAdvanced.metaDescription, path: "/hsc-maths-advanced" }),
  component: HscMathsAdvancedPage,
});

function HscMathsAdvancedPage() {
  return (
    <>
      <CoursePage content={hscMathsAdvanced} />
    </>
  );
}
