import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { munks, ourMunksPage } from "@/content/munks";
import { PageIntro } from "@/components/sections/PageIntro";
import { MunkCards } from "@/components/sections/MunkCards";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/our-munks")({
  head: () => seoHead({ title: ourMunksPage.title, description: ourMunksPage.metaDescription, path: "/our-munks" }),
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
      />
    </>
  );
}