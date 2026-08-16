import { Check } from "lucide-react";
import { CallbackButton } from "../CtaButton";

export function WhyUsList({
  eyebrow,
  heading,
  items,
  image,
  imageAlt,
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: { title: string; body: string }[];
  image?: string | undefined;
  imageAlt?: string | undefined;
}) {
  return (
    // Same framing as CtaBand directly below this on every hub page: section
    // > container-page > a rounded card. Deliberately not full-bleed, every
    // other dark block on the site is a card inside the page column, not a
    // wall-to-wall stripe, this one should read the same way. bg-surface
    // instead of CtaBand's bg-primary is the only colour difference.
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-surface text-surface-foreground shadow-lift">
          {image ? (
            // Unlike CtaBand's second column, the photo does not sit inside
            // the padded grid, it bleeds to the card's own edges (clipped
            // by the card's own overflow-hidden and rounded corner above),
            // hence its own absolutely positioned layer rather than a grid
            // cell. xl:w-[44%] is a percentage of this element's nearest
            // positioned ancestor, the card itself (not the viewport), so
            // it is exact at every width with no vw involved.
            <div className="relative h-[230px] w-full xl:absolute xl:inset-y-0 xl:right-0 xl:h-full xl:w-[44%]">
              <img
                src={image}
                alt={imageAlt ?? ""}
                width={960}
                height={760}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* Photo emerges out of the dark rather than sitting in a
                  box: vertical gradient on the top banner below xl (opaque
                  at the bottom where it meets the card's content), a
                  horizontal gradient on the right-hand bleed at xl and
                  above (opaque on its left edge, where it meets the
                  content). */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent xl:bg-gradient-to-r" />
            </div>
          ) : null}

          {/* Positioned (relative, z-index:auto) so it paints above the
              absolutely positioned photo regardless of column width, same
              p-7 md:p-12 padding CtaBand's own grid container uses. */}
          <div className="relative p-7 md:p-12">
            <div className="max-w-xl">
              {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
              <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
            </div>

            {/* Two columns only at xl and above, matching the breakpoint
                the photo switches from a top banner to a right-hand bleed,
                just above. Below xl the card is narrower than the old
                full-bleed section was at the equivalent width, two columns
                there would run about 190px each, too tight to read
                comfortably, so it stays one column for longer than before.
                xl:w-[580px] is a fixed width, not a percentage or vw: from
                1280px up, container-page's own 78rem cap means the card's
                content area is a constant width regardless of viewport, so
                a flat px value is exact at every xl+ width this was
                measured against, and simpler than a formula that would
                only be reproducing the same constant anyway. It leaves a
                real, measured gap comfortably clear of the photo. */}
            <ul className="mt-8 grid max-w-xl gap-x-10 gap-y-6 xl:w-[580px] xl:max-w-none xl:grid-cols-2">
              {items.map((item) => (
                <li key={item.title} className="border-t border-surface-foreground/15 pt-4">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-base font-semibold text-surface-foreground">{item.title}</h3>
                  </div>
                  {/* pl-9 (icon width 24px + gap 12px) lines the body up
                      under the title, not under the tick. Opacity 85%,
                      measured (rendered colour, composited over bg-surface)
                      at 9.86:1, comfortably clear of the 4.5:1 minimum for
                      body text. */}
                  <p className="mt-1.5 pl-9 text-sm leading-relaxed text-surface-foreground/85">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9 max-w-xl">
              <CallbackButton label="Request a Call" variant="accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
