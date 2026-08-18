import { Phone } from "lucide-react";
import { brand } from "@/content/site";

// Closing section for /become-a-tutor, added 18 Aug 2026 when the tutor
// application form was archived (see archive/2026-08-18-placeholder-forms/)
// and the page became phone-only by owner decision. Deliberately its own
// component, not CtaBand: CtaBand always renders a Request a Call button
// and a guarantee card aimed at parents, neither belongs on a page for
// tutors. Same outer visual weight as CtaBand (the navy rounded band), no
// button of any kind, just a large tel: link.
export function PhoneOnlyCtaBand({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-primary text-primary-foreground shadow-lift">
          <div className="p-7 text-center md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl md:text-4xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              {body}
            </p>
            <a
              href={`tel:${brand.phoneDial}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-xl font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
