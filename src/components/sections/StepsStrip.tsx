import { SectionHeading } from "../SectionHeading";
import { LinkButton } from "../CtaButton";

export function StepsStrip({
  eyebrow,
  heading,
  items,
  ctaLabel,
  ctaTo,
  variant = "strip",
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: { title: string; body: string }[];
  ctaLabel?: string | undefined;
  ctaTo?: string | undefined;
  variant?: "strip" | "detailed" | undefined;
}) {
  return (
    <section className={variant === "strip" ? "section-y bg-secondary" : "section-y"}>
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <ol
          className={
            variant === "strip"
              ? "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
              : "mt-10 space-y-4"
          }
        >
          {items.map((item, index) => (
            <li
              key={item.title}
              className={
                variant === "strip"
                  ? "rounded-2xl border border-border bg-card p-5 shadow-card"
                  : "flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-card"
              }
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <div className={variant === "strip" ? "mt-4" : ""}>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        {ctaLabel && ctaTo ? (
          <div className="mt-8">
            <LinkButton label={ctaLabel} to={ctaTo} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
