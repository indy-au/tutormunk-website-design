import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { getIcon } from "../icons";

export function StageCards({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: {
    stage: string;
    years: string;
    body: string;
    to: string;
    linkLabel: string;
    icon?: string | undefined;
  }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = getIcon(item.icon ?? "school");
            return (
              <Link
                key={item.stage}
                to={item.to}
                aria-label={item.linkLabel}
                className="group flex flex-col rounded-4xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {item.years}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl">{item.stage}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
                  {item.linkLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
