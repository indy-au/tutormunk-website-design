import { SectionHeading } from "../SectionHeading";
import type { MunkCard } from "@/content/munks";

export function MunkCards({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: MunkCard[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((munk) => (
            <article
              key={munk.firstName}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-card"
            >
              <div
                role="img"
                aria-label={`Photo placeholder for ${munk.firstName}`}
                className="flex aspect-square w-full items-center justify-center rounded-3xl bg-primary-soft"
              >
                <span className="font-display text-3xl font-semibold text-primary">
                  {munk.initials}
                </span>
              </div>
              <h3 className="mt-5 text-xl">{munk.firstName}</h3>
              <p className="mt-1 text-sm font-medium text-accent-foreground">{munk.subjects}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{munk.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}