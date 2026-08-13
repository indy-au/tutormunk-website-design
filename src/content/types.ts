export type SubjectCard = { name: string; body: string; to?: string | undefined; linkLabel?: string };

export type SubjectGroup = { heading: string; body?: string | undefined; items: SubjectCard[] };

export type ProgramCard = {
  name: string;
  icon: string;
  chip: string;
  body: string;
  to: string;
  linkLabel?: string | undefined;
};

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
  programs?:
    | { eyebrow: string; heading: string; body?: string | undefined; items: ProgramCard[] }
    | undefined;
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export type FaqItem = { question: string; answer: string };
