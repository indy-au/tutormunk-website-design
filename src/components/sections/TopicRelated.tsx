import { Link } from "@tanstack/react-router";

// Content pass, batch 1 of 3 (19 Aug 2026). A short row of links to the
// stage hub, two related topics and /locations, per topic. See CLAUDE.md's
// "Topic pages" note.
export function TopicRelated({ items }: { items: { label: string; to: string }[] }) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <p className="eyebrow-sm">Related</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
