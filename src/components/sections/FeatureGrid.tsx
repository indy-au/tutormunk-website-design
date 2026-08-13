import { SectionHeading } from "../SectionHeading";

export function FeatureGrid({
  eyebrow,
  heading,
  body,
  items,
  tone = "light",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: { title: string; body: string }[];
  tone?: "light" | "muted";
}) {
  return (
    <section className={tone === "muted" ? "section-y bg-secondary" : "section-y"}>
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
