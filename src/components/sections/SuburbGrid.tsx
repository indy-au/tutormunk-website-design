import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import type { SuburbLocation } from "@/content/locations";

export function SuburbGrid({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: SuburbLocation[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const href: string = `/${item.slug}`;
            return (
              <li key={item.slug} className={item.centre ? "sm:col-span-2" : undefined}>
                <Link
                  to={href}
                  className={[
                    "flex h-full flex-col justify-between rounded-2xl border p-5 shadow-card transition-shadow hover:shadow-lift",
                    item.centre
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card",
                  ].join(" ")}
                >
                  <span className="text-lg font-semibold">{item.suburbName}</span>
                  <span className="mt-6 flex flex-wrap gap-2">
                    {item.inHome ? (
                      <span
                        className={[
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          item.centre
                            ? "bg-primary-foreground/15 text-primary-foreground"
                            : "bg-primary-soft text-primary",
                        ].join(" ")}
                      >
                        In-home tutoring
                      </span>
                    ) : null}
                    {item.centre ? (
                      <span className="rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold text-primary">
                        Our centre
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
