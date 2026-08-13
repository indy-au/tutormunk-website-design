import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { getIcon } from "../icons";
import type { SubjectCard, SubjectGroup } from "@/content/types";

function iconFor(name: string): string {
  const key = name.toLowerCase();
  if (key.includes("english") || key.includes("read")) return "book";
  if (key.includes("math")) return "calculator";
  if (key.includes("biolog") || key.includes("chem") || key.includes("phys") || key.includes("scien") || key.includes("environment")) return "flask";
  if (key.includes("writ")) return "pen";
  if (key.includes("selective")) return "trophy";
  if (key.includes("oc ") || key.includes("opportunity")) return "target";
  if (key.includes("naplan") || key.includes("test") || key.includes("exam")) return "clipboard-check";
  if (key.includes("study") || key.includes("skill")) return "clipboard-list";
  if (key.includes("selection") || key.includes("subject")) return "graduation-cap";
  if (key.includes("hsc") || key.includes("atar") || key.includes("senior")) return "award";
  return "school";
}

function Card({ item }: { item: SubjectCard }) {
  const Icon = getIcon(iconFor(item.name));
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100"
      />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      {item.to && item.linkLabel ? (
        <Link
          to={item.to}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink"
        >
          {item.linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}

export function SubjectCards({
  eyebrow,
  heading,
  body,
  items,
  groups,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items?: SubjectCard[] | undefined;
  groups?: SubjectGroup[] | undefined;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />

        {items?.length ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        ) : null}

        {groups?.length ? (
          <div className="mt-12 space-y-12">
            {groups.map((group) => (
              <div key={group.heading}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border pb-3">
                  <h3 className="text-2xl">{group.heading}</h3>
                  {group.body ? (
                    <p className="text-sm text-muted-foreground">{group.body}</p>
                  ) : null}
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <Card key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
