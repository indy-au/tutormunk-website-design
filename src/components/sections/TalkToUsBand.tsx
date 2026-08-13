import { Phone } from "lucide-react";
import { brand, talkToUs } from "@/content/site";
import { CallbackButton } from "../CtaButton";

export function TalkToUsBand() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-4xl border border-border bg-card p-7 shadow-card md:p-12">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{talkToUs.eyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{talkToUs.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{talkToUs.body}</p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-4">
              <CallbackButton label="Request a Call" />
              <a
                href={`tel:${brand.phoneDial}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-accent-ink"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
