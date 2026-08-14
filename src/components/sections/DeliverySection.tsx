import { SectionHeading } from "../SectionHeading";
import { centre } from "@/content/locations";

export function DeliverySection({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body: string;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
          <p className="eyebrow">Our centre</p>
          <p className="mt-2 text-lg font-semibold">{centre.name}</p>
          <address className="mt-1 not-italic text-sm text-muted-foreground">{centre.address}</address>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{centre.sessionsNote}</p>
        </div>
      </div>
    </section>
  );
}
