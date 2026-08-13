import { SectionHeading } from "../SectionHeading";

export function CourseModules({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="font-display text-xl font-semibold text-accent-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
