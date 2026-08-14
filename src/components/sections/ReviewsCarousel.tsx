import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { GoogleMark, Stars, ReviewCard } from "./ReviewCard";
import { allReviews, reviewSummary } from "@/content/reviews";

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
          <div>
            <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
            <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-card">
              <GoogleMark />
              <span className="text-sm font-semibold">{reviewSummary.score}</span>
              <Stars rating={Math.round(Number(reviewSummary.score))} />
              <span className="text-sm text-muted-foreground">
                {reviewSummary.total} Google reviews
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Show previous reviews"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Show next reviews"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-4"
        >
          {allReviews.map((review, index) => (
            <li
              key={`${review.name}-${review.when}-${index}`}
              className="flex w-[19rem] shrink-0 snap-start"
            >
              <ReviewCard review={review} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
