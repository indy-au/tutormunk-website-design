import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { about } from "@/content/about";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => seoHead({ title: about.title, description: about.metaDescription, path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero {...about.hero} />
      <StorySection {...about.story} stats={about.stats} />
      <FeatureGrid {...about.values} tone="muted" />
      <CtaBand {...about.cta} />
    </>
  );
}
