import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";

export function SuburbGrid({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: { name: string; to: string }[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">
                  In-home tutoring
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
