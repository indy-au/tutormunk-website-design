import { createFileRoute } from "@tanstack/react-router";
import { munks, ourMunksPage } from "@/content/munks";
import { PageIntro } from "@/components/sections/PageIntro";
import { MunkCards } from "@/components/sections/MunkCards";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/our-munks")({
  head: () => ({
    meta: [
      { title: ourMunksPage.title },
      { name: "description", content: ourMunksPage.metaDescription },
      { property: "og:title", content: ourMunksPage.title },
      { property: "og:description", content: ourMunksPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurMunksPage,
});

function OurMunksPage() {
  return (
    <>
      <PageIntro
        eyebrow={ourMunksPage.eyebrow}
        heading={ourMunksPage.heading}
        body={ourMunksPage.intro}
      />
      <MunkCards heading="Our current team." items={munks} />
      <CtaBand
        heading="Want to meet a Munk before you book?"
        body="Request a call and we will introduce the tutor who fits your child's year and subjects."
        ctaLabel="Request a Call"
        secondaryLabel="View pricing"
        secondaryTo="/pricing"
      />
    </>
  );
}