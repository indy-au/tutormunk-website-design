import { FormField, type FieldSpec } from "./FormField";

export function ApplicationFormShell({
  heading,
  fields,
  upload,
  submitLabel,
  note,
}: {
  heading: string;
  fields: FieldSpec[];
  upload: { label: string; hint: string; buttonLabel: string };
  submitLabel: string;
  note: string;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <form
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-card md:p-9"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="text-2xl">{heading}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <FormField key={field.label} field={field} idPrefix="tutor" />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-input bg-background p-5">
            <p className="text-sm font-semibold">{upload.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{upload.hint}</p>
            <span className="mt-3 inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
              {upload.buttonLabel}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              {submitLabel}
            </button>
            <p className="text-xs text-muted-foreground">{note}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
