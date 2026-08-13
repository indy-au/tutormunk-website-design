import { useRef } from "react";
import { SectionHeading } from "../SectionHeading";
import { reviews } from "@/content/site";

export function ReviewsCarousel({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
}) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Show previous reviews"
              className="size-11 rounded-full border border-border bg-card text-lg font-semibold transition-colors hover:bg-muted"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Show next reviews"
              className="size-11 rounded-full border border-border bg-card text-lg font-semibold transition-colors hover:bg-muted"
            >
              &gt;
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {reviews.map((review) => (
            <li
              key={review.name}
              className="w-[19rem] shrink-0 snap-start rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <p className="text-sm font-semibold text-accent-foreground" aria-label={`${review.rating} out of 5 stars`}>
                {"\u2605".repeat(review.rating)}
              </p>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                {review.quote}
              </blockquote>
              <footer className="mt-5 text-sm text-muted-foreground">
                {review.name}, {review.suburb}
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
