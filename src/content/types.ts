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
  whyUs: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
    // Optional for now: only hero-tutoring.jpg is available as a stand-in
    // (see WhyUsList.tsx), so every page currently supplies the same
    // photo. Once the owner sends four real photos, each file only needs
    // its own image/imageAlt here, no component change.
    image?: string | undefined;
    imageAlt?: string | undefined;
  };
  programs?:
    | { eyebrow: string; heading: string; body?: string | undefined; items: ProgramCard[] }
    | undefined;
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export type FaqItem = { question: string; answer: string };
