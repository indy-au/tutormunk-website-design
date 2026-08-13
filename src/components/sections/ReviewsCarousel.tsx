import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { allReviews, reviewSummary } from "@/content/reviews";

function GoogleMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Google">
      <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.6 5-4 6.9l6.4 5C42 36.3 45 30.7 45 24z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.4-5C30.2 37 27.4 38 24 38c-5.8 0-10.7-3.8-12.5-9l-6.7 5.1C8.5 41 15.7 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 29c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-6.7-5.2A21.9 21.9 0 0 0 2 24.3c0 3.5.8 6.8 2.3 9.8L11.5 29z" />
      <path fill="#EA4335" d="M24 10.5c3.2 0 6.1 1.1 8.4 3.3l5.6-5.6C34.6 5 29.8 3 24 3 15.7 3 8.5 8 4.8 15.4l6.7 5.2C13.3 14.3 18.2 10.5 24 10.5z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={index < rating ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-border"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

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
              <Stars rating={5} />
              <span className="text-sm text-muted-foreground">
                {allReviews.length}+ Google reviews
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
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {allReviews.map((review, index) => (
            <li
              key={`${review.name}-${review.when}-${index}`}
              className="flex w-[19rem] shrink-0 snap-start flex-col rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-ink">
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {review.suburb} · {review.when}
                  </p>
                </div>
                <GoogleMark className="ml-auto h-4 w-4" />
              </div>
              <div className="mt-4">
                <Stars rating={review.rating} />
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {review.quote}
              </blockquote>
              <p className="mt-5 inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {review.stage}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
