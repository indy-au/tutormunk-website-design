import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { reviewFilters, reviewSummary, reviewWall } from "@/content/reviews";

function GoogleMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Google">
      <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.6 5-4 6.9l6.4 5C42 36.3 45 30.7 45 24z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.4-5C30.2 37 27.4 38 24 38c-5.8 0-10.7-3.8-12.5-9l-6.7 5.1C8.5 41 15.7 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 29c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-6.7-5.2A21.9 21.9 0 0 0 2 24.3c0 3.5.8 6.8 2.3 9.8L11.5 29z" />
      <path fill="#EA4335" d="M24 10.5c3.2 0 6.1 1.1 8.4 3.3l5.6-5.6C34.6 5 29.8 3 24 3 15.7 3 8.5 8 4.8 15.4l6.7 5.2C13.3 14.3 18.2 10.5 24 10.5z" />
    </svg>
  );
}

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
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

export function ReviewWall() {
  const [active, setActive] = useState(reviewFilters[0] ?? "All reviews");
  const [visible, setVisible] = useState(9);

  const filtered = useMemo(
    () => (active === reviewFilters[0] ? reviewWall : reviewWall.filter((r) => r.stage === active)),
    [active],
  );
  const shown = filtered.slice(0, visible);

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-4xl border border-border bg-card p-7 shadow-card md:p-9">
            <div className="flex items-center gap-3">
              <GoogleMark />
              <p className="text-sm font-semibold text-muted-foreground">Google reviews</p>
            </div>
            <div className="mt-6 flex items-end gap-4">
              <p className="text-6xl leading-none font-semibold text-primary">{reviewSummary.score}</p>
              <div className="pb-1">
                <Stars rating={5} />
                <p className="mt-1 text-sm text-muted-foreground">
                  {reviewSummary.total} reviews from local parents
                </p>
              </div>
            </div>
            <dl className="mt-7 space-y-2">
              {reviewSummary.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <dt className="w-8 text-xs font-semibold text-muted-foreground">{row.stars}★</dt>
                  <dd className="flex-1">
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-accent"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                  </dd>
                  <span className="w-10 text-right text-xs text-muted-foreground">{row.percent}%</span>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              {reviewSummary.note}
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl">Parents across South-West Sydney.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Filter by stage to read what families say about primary tutoring, Years 7 to 10, HSC
              courses and exam preparation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {reviewFilters.map((filter) => {
                const isActive = filter === active;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setActive(filter);
                      setVisible(9);
                    }}
                    aria-pressed={isActive}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-foreground hover:bg-muted",
                    ].join(" ")}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review) => (
            <li
              key={`${review.name}-${review.when}`}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
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
              <Stars rating={review.rating} className="mt-4" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {review.quote}
              </blockquote>
              <p className="mt-5 inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {review.stage}
              </p>
            </li>
          ))}
        </ul>

        {visible < filtered.length ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((count) => count + 9)}
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Show more reviews
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
