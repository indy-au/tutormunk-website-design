import { SectionHeading } from "../SectionHeading";
import { LinkButton } from "../CtaButton";

export function PricingTeaser({
  eyebrow,
  heading,
  body,
  rows,
  ctaLabel,
  ctaTo,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  rows: { name: string; rate: string }[];
  ctaLabel: string;
  ctaTo: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid gap-8 rounded-4xl border border-border bg-card p-7 shadow-card md:grid-cols-2 md:p-10">
          <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
          <div>
            <ul className="divide-y divide-border">
              {rows.map((row) => (
                <li key={row.name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="text-sm font-medium">{row.name}</span>
                  <span className="text-sm font-semibold text-primary">{row.rate}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LinkButton label={ctaLabel} to={ctaTo} variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
