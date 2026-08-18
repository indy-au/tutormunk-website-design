import { useState } from "react";
import { GoogleMark, Stars, ReviewCard } from "./ReviewCard";
import { allReviews, reviewSummary } from "@/content/reviews";

const PAGE_SIZE = 9;

export function ReviewWall() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = allReviews.slice(0, visible);

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
              <p className="text-6xl leading-none font-semibold text-primary">
                {reviewSummary.score}
              </p>
              <div className="pb-1">
                <Stars rating={Math.round(Number(reviewSummary.score))} />
                <p className="mt-1 text-sm text-muted-foreground">
                  Our Google rating, from local parents
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
                  <span className="w-10 text-right text-xs text-muted-foreground">
                    {row.percent}%
                  </span>
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
              Real reviews from our Google Business Profile, newest first.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review, index) => (
            <li key={`${review.name}-${review.when}-${index}`}>
              <ReviewCard review={review} className="transition-shadow hover:shadow-lift" />
            </li>
          ))}
        </ul>

        {visible < allReviews.length ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((count) => count + PAGE_SIZE)}
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
