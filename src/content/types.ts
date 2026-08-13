export type SubjectCard = { name: string; body: string; to?: string | undefined; linkLabel?: string } | undefined;

export type SubjectGroup = { heading: string; body?: string | undefined; items: SubjectCard[] };

export type StagePageContent = {
  title: string;
  metaDescription: string;
  hero: { eyebrow: string; heading: string; body: string; ctaLabel: string; points?: string[] } | undefined;
  subjects: {
    eyebrow: string;
    heading: string;
    body?: string | undefined;
    items?: SubjectCard[] | undefined;
    groups?: SubjectGroup[] | undefined;
  };
  whyUs: { eyebrow: string; heading: string; items: { title: string; body: string }[] };
  pricingTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    rows: { name: string; rate: string }[];
    ctaLabel: string;
    ctaTo: string;
  };
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string } | undefined;
};

export type FaqItem = { question: string; answer: string };
