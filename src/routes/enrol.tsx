import { createFileRoute } from "@tanstack/react-router";
import { enrol } from "@/content/enrol";
import { PageIntro } from "@/components/sections/PageIntro";
import { MultiStepFormShell } from "@/components/sections/MultiStepFormShell";

export const Route = createFileRoute("/enrol")({
  head: () => ({
    meta: [
      { title: enrol.title },
      { name: "description", content: enrol.metaDescription },
      { property: "og:title", content: enrol.title },
      { property: "og:description", content: enrol.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
