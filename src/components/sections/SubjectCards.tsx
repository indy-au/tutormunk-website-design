import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import type { SubjectCard, SubjectGroup } from "@/content/types";

function Card({ item }: { item: SubjectCard }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift">
      <div
        role="img"
        aria-label={`Colour block for ${item.name}`}
        className="h-12 w-12 rounded-xl bg-primary-soft"
      />
      <h3 className="mt-5 text-xl">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      {item.to && item.linkLabel ? (
        <Link to={item.to} className="mt-5 text-sm font-semibold text-primary underline underline-offset-4">
          {item.linkLabel}
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
