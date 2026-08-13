import { CallbackButton, LinkButton } from "../CtaButton";

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
        <div className="rounded-4xl bg-primary px-6 py-12 text-primary-foreground shadow-lift md:px-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl">{heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallbackButton label={ctaLabel} variant="accent" />
              {secondaryLabel && secondaryTo ? (
                <LinkButton label={secondaryLabel} to={secondaryTo} variant="ghostOnDark" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
