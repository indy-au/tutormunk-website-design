import { createFileRoute } from "@tanstack/react-router";
import { about } from "@/content/about";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: about.title },
      { name: "description", content: about.metaDescription },
      { property: "og:title", content: about.title },
      { property: "og:description", content: about.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
