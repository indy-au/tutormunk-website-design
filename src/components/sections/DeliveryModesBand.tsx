import { SectionHeading } from "../SectionHeading";
import { deliveryModes } from "@/content/site";

export function DeliveryModesBand({
  eyebrow,
  heading,
  body,
  showRates = true,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  showRates?: boolean | undefined;
}) {
  return (
    <section className="section-y bg-surface text-surface-foreground">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} tone="dark" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryModes.map((mode) => (
            <article
              key={mode.name}
              className="flex h-full flex-col rounded-3xl border border-surface-foreground/15 bg-surface-foreground/5 p-6"
            >
              <div
                role="img"
                aria-label={`Colour block for ${mode.name}`}
                className="h-14 rounded-xl bg-accent/80"
              />
              <h3 className="mt-5 text-xl">{mode.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-foreground/80">
                {mode.detail}
              </p>
              {showRates ? (
                <p className="mt-5 text-sm font-semibold text-accent-soft">{mode.rate}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
