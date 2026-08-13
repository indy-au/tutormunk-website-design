import { SectionHeading } from "../SectionHeading";

export function WhyUsList({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <ul className="divide-y divide-border rounded-3xl border border-border bg-card px-6 shadow-card">
          {items.map((item) => (
            <li key={item.title} className="py-5">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
