import { useState } from "react";
import { Star } from "lucide-react";
import type { ReviewEntry } from "@/content/reviews";

export function GoogleMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Google">
      <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-4H24v8h12c-.2 2-1.6 5-4 6.9l6.4 5C42 36.3 45 30.7 45 24z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.4-5C30.2 37 27.4 38 24 38c-5.8 0-10.7-3.8-12.5-9l-6.7 5.1C8.5 41 15.7 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 29c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-6.7-5.2A21.9 21.9 0 0 0 2 24.3c0 3.5.8 6.8 2.3 9.8L11.5 29z" />
      <path fill="#EA4335" d="M24 10.5c3.2 0 6.1 1.1 8.4 3.3l5.6-5.6C34.6 5 29.8 3 24 3 15.7 3 8.5 8 4.8 15.4l6.7 5.2C13.3 14.3 18.2 10.5 24 10.5z" />
    </svg>
  );
}

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
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

const LONG_QUOTE_THRESHOLD = 220;

export function ReviewCard({ review, className = "" }: { review: ReviewEntry; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > LONG_QUOTE_THRESHOLD;

  return (
    <div
      className={[
        "flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-ink">
          {review.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
          <p className="truncate text-xs text-muted-foreground">{review.when}</p>
        </div>
        <GoogleMark className="ml-auto h-4 w-4 shrink-0" />
      </div>
      <Stars rating={review.rating} className="mt-4" />
      <blockquote
        className={[
          "mt-3 flex-1 text-sm leading-relaxed text-foreground",
          expanded ? "" : "line-clamp-5",
        ].join(" ")}
      >
        {review.quote}
      </blockquote>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 w-fit text-sm font-semibold text-accent-ink hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
