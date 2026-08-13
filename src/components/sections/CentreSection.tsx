import { SectionHeading } from "../SectionHeading";

export function CentreSection({
  eyebrow,
  heading,
  address,
  body,
  details,
  mapLabel,
}: {
  eyebrow?: string | undefined;
  heading: string;
  address: string;
  body: string;
  details: { label: string; value: string }[];
  mapLabel: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          <address className="mt-4 not-italic text-base font-semibold">{address}</address>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{body}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                <dt className="eyebrow">{detail.label}</dt>
                <dd className="mt-1 text-sm">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          role="img"
          aria-label={mapLabel}
          className="min-h-64 rounded-3xl border border-border bg-primary-soft/70 p-6"
        >
          <p className="text-sm font-semibold text-primary">{mapLabel}</p>
        </div>
      </div>
    </section>
  );
}
