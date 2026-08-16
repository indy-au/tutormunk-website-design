import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { seoHead } from "@/lib/seo";
import { munkProfiles, munkTrustChips, ourMunksPage } from "@/content/munks";
import { PageIntro } from "@/components/sections/PageIntro";
import { MunkRail } from "@/components/sections/MunkRail";
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
      <div className="container-page">
        <ul className="flex flex-wrap gap-2 pt-8">
          {munkTrustChips.map((chip) => (
            <li key={chip}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground">
                <Check className="h-3.5 w-3.5 text-accent-ink" aria-hidden="true" />
                {chip}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <MunkRail profiles={munkProfiles} />
      <CtaBand
        heading="Not sure which Munk suits your child?"
        body="Tell us the year, the subject and what is getting in the way. We will match you and you choose from there."
        ctaLabel="Request a Call"
      />
    </>
  );
}
