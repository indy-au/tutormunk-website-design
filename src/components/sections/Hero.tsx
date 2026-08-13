import { CallbackButton, LinkButton } from "../CtaButton";

export function Hero({
  eyebrow,
  heading,
  body,
  ctaLabel,
  points,
  secondary,
  illustrationLabel = "Illustration placeholder: tutor and student working at a table",
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  points?: string[];
  secondary?: { label: string; to: string };
  illustrationLabel?: string;
}) {
  return (
    <section className="border-b border-border bg-primary-soft/60">
      <div className="container-page grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-4xl leading-[1.08] md:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{body}</p>
          {points?.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {ctaLabel ? <CallbackButton label={ctaLabel} /> : null}
            {secondary ? <LinkButton label={secondary.label} to={secondary.to} /> : null}
          </div>
        </div>

        <div className="relative">
          <div
            role="img"
            aria-label={illustrationLabel}
            className="aspect-4/3 w-full rounded-3xl bg-surface shadow-lift"
          >
            <div className="grid h-full grid-cols-3 gap-3 p-5">
              <div className="col-span-2 rounded-2xl bg-accent/85" />
              <div className="rounded-2xl bg-surface-foreground/15" />
              <div className="rounded-2xl bg-surface-foreground/15" />
              <div className="col-span-2 rounded-2xl bg-primary-soft/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
