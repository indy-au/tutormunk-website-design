import { createFileRoute } from "@tanstack/react-router";
import { becomeTutor } from "@/content/becomeTutor";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ApplicationFormShell } from "@/components/sections/ApplicationFormShell";

export const Route = createFileRoute("/become-a-tutor")({
  head: () => ({
    meta: [
      { title: becomeTutor.title },
      { name: "description", content: becomeTutor.metaDescription },
      { property: "og:title", content: becomeTutor.title },
      { property: "og:description", content: becomeTutor.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BecomeATutorPage,
});

function BecomeATutorPage() {
  return (
    <>
      <Hero {...becomeTutor.hero} />
      <FeatureGrid {...becomeTutor.requirements} />
      <ApplicationFormShell {...becomeTutor.form} />
    </>
  );
}
