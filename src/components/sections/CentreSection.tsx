import { SectionHeading } from "../SectionHeading";

export function CentreSection({
  eyebrow,
  heading,
  address,
  body,
  details,
  mapLabel,
  mapEmbedUrl,
}: {
  eyebrow?: string | undefined;
  heading: string;
  address: string;
  body: string;
  details: { label: string; value: string }[];
  mapLabel: string;
  mapEmbedUrl: string;
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
                <dt className="eyebrow-sm">{detail.label}</dt>
                <dd className="mt-1 text-sm">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-h-64 overflow-hidden rounded-3xl border border-border">
          <iframe
            src={mapEmbedUrl}
            title={mapLabel}
            aria-label={mapLabel}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-64 w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
