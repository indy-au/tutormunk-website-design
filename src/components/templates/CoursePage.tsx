import { Hero } from "../sections/Hero";
import { CourseModules } from "../sections/CourseModules";
import { TutorPitch } from "../sections/TutorPitch";
import { CtaBand } from "../sections/CtaBand";

type CoursePageContent = {
  hero: { eyebrow?: string | undefined; heading: string; body: string; ctaLabel?: string | undefined; facts?: { label: string; value: string }[]; image?: string | undefined };
  modules: { eyebrow?: string | undefined; heading: string; body?: string | undefined; items: { title: string; body: string }[] };
  tutorPitch: { eyebrow?: string | undefined; heading: string; body: string; points: string[] };
  cta: { heading: string; body: string; ctaLabel: string; secondaryLabel?: string | undefined; secondaryTo?: string };
};

export function CoursePage({ content }: { content: CoursePageContent }) {
  return (
    <>
      <Hero
        eyebrow={content.hero.eyebrow}
        heading={content.hero.heading}
        body={content.hero.body}
        ctaLabel={content.hero.ctaLabel}
        points={content.hero.facts?.map((fact) => `${fact.label}: ${fact.value}`)}
        image={content.hero.image}
      />
      <CourseModules {...content.modules} />
      <TutorPitch {...content.tutorPitch} />
      <CtaBand {...content.cta} />
    </>
  );
}
