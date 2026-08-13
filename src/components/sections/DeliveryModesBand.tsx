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
    <section className="section-y bg-surface text-foreground">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryModes.map((mode) => (
            <article
              key={mode.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div
                role="img"
                aria-label={`Colour block for ${mode.name}`}
                className="h-14 rounded-2xl bg-accent-soft"
              />
              <h3 className="mt-5 text-xl">{mode.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {mode.detail}
              </p>
              {showRates ? (
                <p className="mt-5 text-sm font-semibold text-primary">{mode.rate}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
