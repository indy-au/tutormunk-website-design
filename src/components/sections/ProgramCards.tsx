import { SectionHeading } from "../SectionHeading";
import { CallbackButton } from "../CtaButton";

export function ProgramCards({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: { name: string; body: string; tag: string }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <p className="inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                {item.tag}
              </p>
              <h3 className="mt-4 text-xl">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <div className="mt-6">
                <CallbackButton label="Request a Call" variant="outline" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
