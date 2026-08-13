import { SectionHeading } from "../SectionHeading";

export function TutorPitch({
  eyebrow,
  heading,
  body,
  points,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body: string;
  points: string[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
          <ul className="mt-6 space-y-2.5">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-medium">
                <span aria-hidden="true" className="text-accent-foreground">
                  &#10003;
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          role="img"
          aria-label="Illustration placeholder: tutor marking a past exam paper"
          className="aspect-4/3 rounded-3xl bg-surface p-6 shadow-lift"
        >
          <div className="grid h-full grid-rows-3 gap-3">
            <div className="rounded-2xl bg-accent/85" />
            <div className="rounded-2xl bg-surface-foreground/15" />
            <div className="rounded-2xl bg-primary-soft/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
