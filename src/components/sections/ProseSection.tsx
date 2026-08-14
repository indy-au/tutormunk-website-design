import type { BodySection } from "@/content/locations";

export function ProseSection({ heading, paragraphs, tone = "light" }: BodySection & { tone?: "light" | "muted" }) {
  return (
    <section className={tone === "muted" ? "section-y bg-secondary" : "section-y"}>
      <div className="container-page max-w-3xl">
        <h2 className="text-3xl md:text-4xl">{heading}</h2>
        <div className="mt-5 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
