import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { getIcon } from "../icons";
import type { ProgramCard } from "@/content/types";

export function ProgramCards({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: ProgramCard[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <article
                key={item.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink"
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl">{item.name}</h3>
                <p className="mt-2 inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                  {item.chip}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <Link
                  to={item.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink"
                >
                  {item.linkLabel ?? "Learn more"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
