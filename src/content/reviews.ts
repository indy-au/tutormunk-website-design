import rawReviewsFile from "./reviews.real.json";

export type ReviewEntry = {
  name: string;
  initials: string;
  rating: number;
  when: string;
  quote: string;
};

type RawReview = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

const rawReviews = rawReviewsFile.reviews as RawReview[];

function initialsFor(name: string): string {
  const letters = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0] ?? "")
    .join("");
  return (letters.slice(0, 2) || "?").toUpperCase();
}

// Used only to order reviews newest first. Google gives relative dates
// ("3 months ago"), not exact timestamps, so this is an approximation.
function ageDaysFor(date: string): number {
  const cleaned = date.replace(/^Edited\s+/i, "").trim();
  const match = /^(a|an|\d+)\s+(day|week|month|year)s?\s+ago$/i.exec(cleaned);
  if (!match) return Number.MAX_SAFE_INTEGER;
  const amountToken = match[1] ?? "1";
  const unitToken = match[2] ?? "day";
  const amount = /^(a|an)$/i.test(amountToken) ? 1 : Number(amountToken);
  const unitDays: Record<string, number> = { day: 1, week: 7, month: 30, year: 365 };
  return amount * (unitDays[unitToken.toLowerCase()] ?? 0);
}

// Real totals as extracted from our Google Business Profile. These count
// every review Google has, not just the ones with text we display below.
export const reviewSummary = {
  score: rawReviewsFile.averageRating.toFixed(1),
  total: String(rawReviewsFile.reviewCount),
  breakdown: [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    percent: Math.round(
      (rawReviews.filter((review) => review.rating === stars).length / rawReviews.length) * 100,
    ),
  })),
  note: `Showing reviews with written feedback and a rating of 4 or 5, out of ${rawReviewsFile.reviewCount} total Google reviews averaging ${rawReviewsFile.averageRating.toFixed(1)}.`,
};

// Only reviews with written text and a rating of 4 or 5 are shown on the
// site. Text, names and dates are kept exactly as Google shows them.
export const allReviews: ReviewEntry[] = rawReviews
  .filter((review) => review.text.trim().length > 0 && review.rating >= 4)
  .map((review) => ({
    name: review.name,
    initials: initialsFor(review.name),
    rating: review.rating,
    when: review.date,
    quote: review.text,
    ageDays: ageDaysFor(review.date),
  }))
  .sort((a, b) => a.ageDays - b.ageDays)
  .map(({ ageDays: _ageDays, ...review }) => review);
