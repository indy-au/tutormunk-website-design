import { SectionHeading } from "../SectionHeading";
import type { FaqItem } from "@/content/types";

export function FaqAccordion({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  items: FaqItem[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                {item.question}
                <span aria-hidden="true" className="text-xl text-primary group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden text-xl text-primary group-open:inline">
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
