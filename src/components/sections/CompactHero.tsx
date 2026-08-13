import { CallbackButton } from "../CtaButton";

export function CompactHero({
  eyebrow,
  heading,
  body,
  ctaLabel,
  facts,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  facts?: { label: string; value: string }[];
}) {
  return (
    <section className="border-b border-border bg-surface text-surface-foreground">
      <div className="container-page py-12 md:py-16">
        {eyebrow ? <p className="eyebrow text-accent-soft">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-3xl md:text-5xl">{heading}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-foreground/80">{body}</p>
        {ctaLabel ? (
          <div className="mt-7">
            <CallbackButton label={ctaLabel} variant="accent" />
          </div>
        ) : null}
        {facts?.length ? (
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-surface-foreground/15 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-base font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
