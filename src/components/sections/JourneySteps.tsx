import { SectionHeading } from "../SectionHeading";
import { getIcon } from "../icons";

export type JourneyStep = { title: string; body: string; icon: string };

export function JourneySteps({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: JourneyStep[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2"
          />
          <ol className="space-y-8">
            {items.map((item, index) => {
              const Icon = getIcon(item.icon);
              const right = index % 2 === 1;
              return (
                <li key={item.title} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-base font-bold text-accent-foreground shadow-card md:left-1/2 md:-translate-x-1/2"
                  >
                    {index + 1}
                  </span>
                  <div
                    className={[
                      "ml-16 rounded-3xl border border-border bg-card p-6 shadow-card md:ml-0",
                      right ? "md:col-start-2 md:ml-8" : "md:col-start-1 md:mr-8",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-ink"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
