import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { CallbackButton } from "../CtaButton";
import { brand } from "@/content/site";
import type { FaqItem } from "@/content/types";

export function FaqAccordion({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Still not sure? We answer questions about fees, tutor matching and session times on
                the phone.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <CallbackButton label="Request a Call" variant="accent" />
                <a
                  href={`tel:${brand.phoneDial}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {brand.phone}
                </a>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-muted/60"
                  >
                    <span className="text-base font-semibold text-foreground">{item.question}</span>
                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all",
                        isOpen ? "bg-accent text-accent-foreground rotate-180" : "bg-accent-soft text-accent-ink",
                      ].join(" ")}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  <div
                    className={[
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
