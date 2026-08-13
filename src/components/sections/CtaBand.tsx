import { Phone, ShieldCheck } from "lucide-react";
import { CallbackButton, LinkButton } from "../CtaButton";
import { brand } from "@/content/site";
import { guarantee } from "@/content/munks";

export function CtaBand({
  heading,
  body,
  ctaLabel,
  secondaryLabel,
  secondaryTo,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  secondaryLabel?: string | undefined;
  secondaryTo?: string | undefined;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="overflow-hidden rounded-4xl bg-primary text-primary-foreground shadow-lift">
          <div className="grid gap-10 p-7 md:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Talk to us
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl">{heading}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
                {body}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/70">
                Every family is different, so we tailor the plan on the phone. Fees, session times
                and tutor matching are all covered in one call.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CallbackButton label={ctaLabel} variant="accent" />
                <a
                  href={`tel:${brand.phoneDial}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {brand.phone}
                </a>
                {secondaryLabel && secondaryTo ? (
                  <LinkButton label={secondaryLabel} to={secondaryTo} variant="ghostOnDark" />
                ) : null}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/5 p-6 md:p-7">
              <ShieldCheck className="h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl text-primary-foreground">{guarantee.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {guarantee.body}
              </p>
              <ul className="mt-6 space-y-2 border-t border-primary-foreground/15 pt-5 text-sm text-primary-foreground/80">
                <li>In person only, in your home or at our Oran Park centre</li>
                <li>Working with Children Checked tutors</li>
                <li>Written notes after every session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
