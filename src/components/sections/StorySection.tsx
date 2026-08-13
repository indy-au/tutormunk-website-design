import { SectionHeading } from "../SectionHeading";

export function StorySection({
  eyebrow,
  heading,
  paragraphs,
  stats,
}: {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        {stats?.length ? (
          <dl className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-primary">{stat.value}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
