import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";

export function StageCards({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading: string;
  items: { stage: string; years: string; body: string; to: string; linkLabel: string }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.stage}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift"
            >
              <div
                role="img"
                aria-label={`Colour block representing ${item.stage} tutoring`}
                className="h-24 rounded-2xl bg-accent-soft"
              />
              <p className="mt-6 eyebrow">{item.years}</p>
              <h3 className="mt-2 text-2xl">{item.stage}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Link
                to={item.to}
                className="mt-6 text-sm font-semibold text-primary underline underline-offset-4"
              >
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
