// Replaces ContactSection.tsx on the live /contact page since the enquiry
// form was archived on 18 Aug 2026 (see
// archive/2026-08-18-placeholder-forms/). Built from the same two pieces
// ContactSection used to pair with the form (the details list and the
// map), now given a side, details on one side and the map on the other,
// so the page still fills out with the form gone. ContactSection.tsx
// itself is archived, not reused, so restoring the form later does not
// silently drag this component's layout along with it.
export function ContactDetails({
  details,
  mapLabel,
  mapEmbedUrl,
}: {
  details: { label: string; value: string }[];
  mapLabel: string;
  mapEmbedUrl: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <dl className="grid gap-4 sm:grid-cols-2 lg:content-start">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <dt className="eyebrow-sm">{detail.label}</dt>
              <dd className="mt-1.5 text-sm font-medium">{detail.value}</dd>
            </div>
          ))}
        </dl>

        <div className="min-h-72 overflow-hidden rounded-3xl border border-border lg:min-h-full">
          <iframe
            src={mapEmbedUrl}
            title={mapLabel}
            aria-label={mapLabel}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-72 w-full border-0 lg:min-h-full"
          />
        </div>
      </div>
    </section>
  );
}
