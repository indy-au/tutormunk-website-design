import { useState } from "react";
import { FormField, type FieldSpec } from "./FormField";

export function MultiStepFormShell({
  heading,
  steps,
  submitLabel,
  note,
}: {
  heading: string;
  steps: { title: string; fields: FieldSpec[] }[];
  submitLabel: string;
  note: string;
}) {
  const [active, setActive] = useState(0);
  const step = steps[active] ?? steps[0]!;
  const isLast = active === steps.length - 1;

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl">{heading}</h2>
            <ol className="mt-6 space-y-2">
              {steps.map((item, index) => (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={index === active ? "step" : undefined}
                    className={[
                      "flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                      index === active
                        ? "border-primary bg-primary-soft text-foreground"
                        : "border-border bg-card text-muted-foreground hover:bg-muted",
                    ].join(" ")}
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {index + 1}
                    </span>
                    {item.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <p className="eyebrow-sm">
              Step {active + 1} of {steps.length}
            </p>
            <h3 className="mt-2 text-2xl">{step.title}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {step.fields.map((field) => (
                <FormField key={field.label} field={field} idPrefix={`enrol-${active}`} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActive((value) => Math.max(0, value - 1))}
                disabled={active === 0}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold disabled:opacity-50"
              >
                Back
              </button>
              {isLast ? (
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {submitLabel}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive((value) => Math.min(steps.length - 1, value + 1))}
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Continue
                </button>
              )}
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
