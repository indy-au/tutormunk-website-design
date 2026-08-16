import { SectionHeading } from "../SectionHeading";
import { deliveryModes } from "@/content/site";
import { getIcon } from "../icons";

export function DeliveryModesBand({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryModes.map((mode) => {
            const Icon = getIcon(mode.icon);
            // Tinted pairs: "Your home" cards use the warm accent tokens,
            // "Our centre" cards use primary. Colour is never the only
            // signal, the icon (already different per mode) and the chip's
            // own text ("Your home" / "Our centre") both carry the same
            // distinction, so this reads fine for the owner's colour
            // blindness too.
            const isHome = mode.setting === "Your home";
            const tileClass = isHome ? "bg-accent-soft text-accent-ink" : "bg-primary-soft text-primary";
            const chipClass = isHome ? "bg-accent-soft text-accent-ink" : "bg-primary-soft text-primary";
            return (
              <article
                key={mode.name}
                className="flex h-full flex-col rounded-4xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tileClass}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${chipClass}`}>
                    {mode.setting}
                  </span>
                </div>
                {/* Fixed to two lines so all four cards line up regardless
                    of how a name wraps at this width. */}
                <h3 className="mt-5 min-h-14 text-xl leading-7">{mode.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-accent-ink uppercase">
                  {mode.format}
                </p>
                {/* flex-1 so the detail paragraph absorbs any leftover
                    height difference between cards, keeping every card the
                    same total height. */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{mode.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
