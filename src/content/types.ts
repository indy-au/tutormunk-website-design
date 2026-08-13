export type SubjectCard = { name: string; body: string; to?: string | undefined; linkLabel?: string };

export type SubjectGroup = { heading: string; body?: string | undefined; items: SubjectCard[] };

export type StagePageContent = {
  title: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaLabel: string;
    points?: string[];
    image?: string | undefined;
    imageAlt?: string | undefined;
  };
  trustTicks?: string[] | undefined;
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
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export type FaqItem = { question: string; answer: string };
