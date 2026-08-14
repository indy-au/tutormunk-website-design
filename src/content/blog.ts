type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  /** True until a real article body exists for this slug in `blogPosts` below. */
  draft?: boolean;
};

// Every post we plan to publish, including the ones without a written
// article yet. Draft entries are kept here for reference (so the plan
// isn't lost) but are filtered out of `blogIndex.posts` below and have no
// entry in `blogPosts`, so their slug 404s rather than rendering invented
// content. When real copy for one of these arrives from the content bank,
// write its full body into `blogPosts` and drop the `draft` flag here.
const allPosts: BlogPostSummary[] = [
  {
    slug: "selective-test-timeline",
    title: "A term by term timeline for the Selective test",
    excerpt: "What to cover in each term of Year 5 and Year 6 so preparation does not become a rush at the end.",
    date: "12 March 2026",
    readingTime: "6 min read",
    category: "Selective Prep",
  },
  {
    slug: "naplan-writing",
    title: "How NAPLAN writing is marked, and what to practise",
    excerpt: "The criteria assessors use, and the three habits that lift a writing score the fastest.",
    date: "2 March 2026",
    readingTime: "5 min read",
    category: "NAPLAN",
    draft: true,
  },
  {
    slug: "hsc-trials-plan",
    title: "Planning the six weeks before HSC trials",
    excerpt: "A simple week by week plan for past papers, notes and rest.",
    date: "18 February 2026",
    readingTime: "7 min read",
    category: "HSC",
    draft: true,
  },
  {
    slug: "choosing-a-tutor",
    title: "Eight questions to ask before you book a tutor",
    excerpt: "What to ask about experience, reporting and cancellations before the first session.",
    date: "4 February 2026",
    readingTime: "4 min read",
    category: "For parents",
    draft: true,
  },
  {
    slug: "oc-test-basics",
    title: "OC placement test basics for Year 4 families",
    excerpt: "What the test involves, when it happens and how much preparation is reasonable.",
    date: "21 January 2026",
    readingTime: "5 min read",
    category: "OC Prep",
    draft: true,
  },
  {
    slug: "maths-anxiety",
    title: "When a child says they are bad at maths",
    excerpt: "Why the belief forms in primary school, and what changes it.",
    date: "9 January 2026",
    readingTime: "5 min read",
    category: "Primary",
    draft: true,
  },
];

export const blogIndex = {
  title: "Tutoring and Study Advice for Parents | TutorMunk Blog",
  metaDescription:
    "Practical advice for South-West Sydney parents on Selective and OC tests, NAPLAN, HSC study and choosing a tutor.",
  hero: {
    eyebrow: "Blog",
    heading: "Plain advice for parents.",
    body: "Short articles on tests, term planning and study habits. No jargon.",
  },
  // Published posts only, see allPosts above for the full slate including drafts.
  posts: allPosts.filter((post) => !post.draft),
};

export type BlogPost = {
  title: string;
  metaDescription: string;
  meta: { category: string; date: string; readingTime: string; author: string };
  heading: string;
  standfirst: string;
  imageCaption: string;
  body: { type: string; text?: string; items?: string[] }[];
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string; secondaryTo?: string };
};

// Full article bodies, keyed by slug. Only slugs with a real, written
// article belong here. Never add a draft slug here with placeholder or
// invented text, an absent key is what makes /blog/<draft-slug> 404
// instead of publishing content nobody wrote.
export const blogPosts: Record<string, BlogPost> = {
  "selective-test-timeline": {
    title: "A Term by Term Timeline for the Selective Test | TutorMunk",
    metaDescription:
      "A practical term by term plan for Year 5 and Year 6 students preparing for the NSW Selective High School Placement Test.",
    meta: {
      category: "Selective Prep",
      date: "12 March 2026",
      readingTime: "6 min read",
      author: "TutorMunk Education Team",
    },
    heading: "A term by term timeline for the Selective test.",
    standfirst:
      "Most families start Selective preparation too late, then try to fit two years of work into one term. Here is a calmer plan.",
    imageCaption: "Illustration placeholder: a study plan pinned to a kitchen wall.",
    body: [
      { type: "p", text: "The Selective High School Placement Test is sat in Year 6. The reading, mathematical reasoning and thinking skills sections all reward students who read widely and work quickly. Neither habit can be built in a few weeks." },
      { type: "h2", text: "Year 5, Terms 1 and 2" },
      { type: "p", text: "Focus on reading volume and number fluency. Twenty minutes of reading a night is more useful than a workbook. In maths, make sure times tables, fractions and multi-step word problems are secure." },
      { type: "h2", text: "Year 5, Terms 3 and 4" },
      { type: "p", text: "Introduce question types. Students meet thinking skills questions for the first time and learn to read the question stem carefully. Timing is not a priority yet." },
      { type: "ul", items: [
        "One short reading task each week, marked and discussed.",
        "One set of thinking skills questions each week.",
        "Writing practice against the marking criteria once a fortnight.",
      ] },
      { type: "h2", text: "Year 6, Term 1" },
      { type: "p", text: "Add timing. Sit sections under exam conditions and review every wrong answer. The review matters more than the score." },
      { type: "quote", text: "Students who review their errors each week improve faster than students who sit more papers." },
      { type: "h2", text: "Year 6, Term 2" },
      { type: "p", text: "Sit full papers, then rest. In the fortnight before the test, reduce the workload and keep sleep steady. Preparation is already done by this point." },
      { type: "h2", text: "What to avoid" },
      { type: "p", text: "Avoid stacking three programs at once. Two focused sessions a week, done properly, beat five rushed ones. If your child is losing confidence, cut the volume and go back to the basics." },
    ],
    cta: {
      heading: "Talk to us about Selective preparation.",
      body: "We will tell you honestly whether your child is ready to start.",
      ctaLabel: "Request a Call",
      secondaryLabel: "Exam prep programs",
      secondaryTo: "/exam-prep",
    },
  },
};
