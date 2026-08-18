import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { becomeTutor } from "@/content/becomeTutor";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PhoneOnlyCtaBand } from "@/components/sections/PhoneOnlyCtaBand";

export const Route = createFileRoute("/become-a-tutor")({
  head: () =>
    seoHead({
      title: becomeTutor.title,
      description: becomeTutor.metaDescription,
      path: "/become-a-tutor",
    }),
  component: BecomeATutorPage,
});

function BecomeATutorPage() {
  return (
    <>
      <Hero {...becomeTutor.hero} />
      <FeatureGrid {...becomeTutor.requirements} />
      <PhoneOnlyCtaBand {...becomeTutor.closing} />
    </>
  );
}
