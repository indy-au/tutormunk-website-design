import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const COUNT_UP_DURATION_MS = 2200;

// Splits a stat string like "500+" into a numeric target plus whatever
// non-digit characters sit before and after it, so the count-up works for
// any stat shape (a plain integer, a percentage, a plus-suffixed round
// number, a one-decimal rating), not just these four specific ones.
function parseStatValue(value: string): {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
} {
  const match = /^([^\d]*)([\d.]+)([^\d]*)$/.exec(value);
  if (!match) return { prefix: "", suffix: value, target: 0, decimals: 0 };
  const [, prefix = "", numberPart = "0", suffix = ""] = match;
  const decimalPoint = numberPart.indexOf(".");
  const decimals = decimalPoint === -1 ? 0 : numberPart.length - decimalPoint - 1;
  return { prefix, suffix, target: parseFloat(numberPart), decimals };
}

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * One stat's animated value. Renders the real, final string on the first
 * paint (server and client agree, so a crawler or a visitor with
 * JavaScript off always sees the true number, never "0"). Only after
 * hydration, and only once this value scrolls into view, does it count up
 * from zero. It runs once: the observer disconnects itself the moment it
 * fires, so scrolling away and back does not restart it.
 */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const { prefix, suffix, target, decimals } = parseStatValue(value);
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const start = performance.now();
        function tick(now: number) {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / COUNT_UP_DURATION_MS);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          if (t < 1) {
            setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
            requestAnimationFrame(tick);
          } else {
            setDisplay(value); // exact original string, no float rounding drift
          }
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // Runs once on mount for this value, intentionally not re-run on prop
    // changes, there is no case where the same card's value changes later.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* The animating number. Screen readers skip this and read the
          sr-only span below instead, so assistive tech never hears a
          stream of changing digits. */}
      <p
        ref={ref}
        aria-hidden="true"
        className="font-display text-3xl font-semibold tabular-nums text-primary md:text-4xl"
      >
        {display}
      </p>
      <span className="sr-only">{value}</span>
    </>
  );
}

export function StatsBand({
  eyebrow,
  heading,
  items,
  photo,
  photoAlt,
  reviewScore,
  reviewCount,
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: { value: string; label: string }[];
  photo: string;
  photoAlt: string;
  reviewScore: string;
  reviewCount: string;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-3 max-w-xl text-3xl md:text-4xl">{heading}</h2>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.value + item.label}
                className="rounded-3xl border border-border bg-card p-5 shadow-card"
              >
                <dt>
                  <StatValue value={item.value} />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-64 overflow-hidden rounded-4xl lg:h-auto">
          <img
            src={photo}
            alt={photoAlt}
            width={800}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift">
            <Star className="h-5 w-5 shrink-0 fill-accent text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-foreground">{reviewScore} on Google</p>
              <p className="text-xs text-muted-foreground">from {reviewCount} local families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
