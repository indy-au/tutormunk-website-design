import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { enrol } from "@/content/enrol";
import { PageIntro } from "@/components/sections/PageIntro";
import { MultiStepFormShell } from "@/components/sections/MultiStepFormShell";

export const Route = createFileRoute("/enrol")({
  head: () => seoHead({ title: enrol.title, description: enrol.metaDescription, path: "/enrol" }),
  component: EnrolPage,
});

function EnrolPage() {
  return (
    <>
      <PageIntro {...enrol.hero} />
      <MultiStepFormShell {...enrol.form} />
    </>
  );
}
