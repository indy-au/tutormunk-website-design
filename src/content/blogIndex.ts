// Page-level copy for /blog itself (title, meta, hero). Per-post content
// now lives as markdown in src/content/blog/, see src/lib/blogLoader.ts.
export const blogIndexPage = {
  title: "Tutoring and Study Advice for Parents | TutorMunk Blog",
  metaDescription:
    "Practical advice for South-West Sydney parents on Selective and OC tests, NAPLAN, HSC study and choosing a tutor.",
  hero: {
    eyebrow: "Blog",
    heading: "Plain advice for parents.",
    body: "Short articles on tests, term planning and study habits. No jargon.",
  },
};

// Title and meta description for /blog/page/[n]. Page 1 keeps blogIndexPage's
// title and description unchanged, it has exactly one URL (/blog). These are
// deliberately shorter than the page 1 title so " | Page N" still fits under
// 60 characters even at two-digit page numbers, and the description is
// unique per page so Search Console does not report it as a duplicate.
const PAGINATED_TITLE_STEM = "TutorMunk Blog";

export function blogPageTitle(page: number): string {
  return `${PAGINATED_TITLE_STEM} | Page ${page}`;
}

export function blogPageDescription(page: number): string {
  return `More tutoring and study advice from TutorMunk. Page ${page} of our articles on Selective and OC tests, NAPLAN, HSC study and choosing a tutor.`;
}
