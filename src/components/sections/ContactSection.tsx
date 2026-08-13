import { FormField, type FieldSpec } from "./FormField";

export function ContactSection({
  details,
  mapLabel,
  form,
}: {
  details: { label: string; value: string }[];
  mapLabel: string;
  form: { heading: string; fields: FieldSpec[]; submitLabel: string; note: string };
}) {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <dt className="eyebrow">{detail.label}</dt>
                <dd className="mt-1.5 text-sm font-medium">{detail.value}</dd>
              </div>
            ))}
          </dl>
          <div
            role="img"
            aria-label={mapLabel}
            className="mt-6 min-h-56 rounded-3xl border border-border bg-primary-soft/70 p-6"
          >
            <p className="text-sm font-semibold text-primary">{mapLabel}</p>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="text-2xl">{form.heading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {form.fields.map((field) => (
              <FormField key={field.label} field={field} idPrefix="contact" />
            ))}
          </div>
          <button
            type="submit"
            className="mt-7 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {form.submitLabel}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">{form.note}</p>
        </form>
      </div>
    </section>
  );
}
