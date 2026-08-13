import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import { suburbs } from "@/content/site";

export function SuburbsStrip({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {suburbs.map((suburb) => (
            <li key={suburb}>
              <Link
                to="/locations"
                className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft"
              >
                {suburb}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
