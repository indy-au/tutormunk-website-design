import type { StagePageContent } from "./types";

export const highSchool: StagePageContent = {
  title: "High School Tutoring Years 7-10 | TutorMunk",
  metaDescription:
    "In-person high school tutoring for Years 7-10 in South-West Sydney, covering English, Maths, Science and assessment task preparation.",
  hero: {
    eyebrow: "High School, Years 7-10",
    heading: "Keep up with assessment tasks, term by term.",
    body: "We work to your child's school program, not a generic workbook. Tutors review class notes, upcoming tasks and past marks.",
    ctaLabel: "Request a Call",
    points: ["Years 7 to 10", "Task and exam preparation", "Study skills built in"],
  },
  subjects: {
    eyebrow: "Subjects",
    heading: "What we tutor in Years 7-10.",
    items: [
      { name: "English", body: "Text analysis, essay structure and creative writing for school tasks." },
      { name: "Maths", body: "Algebra, geometry, trigonometry and problem solving to Stage 5.3." },
      { name: "Science", body: "Working scientifically, plus biology, chemistry and physics basics." },
      { name: "Writing", body: "Paragraph structure, evidence and editing across subjects." },
      { name: "Study Skills", body: "Note taking, revision timetables and exam technique." },
      { name: "Subject Selection", body: "Guidance on choosing Year 11 courses with the HSC in mind." },
    ],
  },
  whyUs: {
    eyebrow: "Why families choose us",
    heading: "Tutoring built around school work.",
    items: [
      { title: "Task first", body: "Sessions start with the next assessment task and its marking criteria." },
      { title: "NESA aligned", body: "Content follows the NESA syllabus for each stage." },
      { title: "Honest reporting", body: "If progress stalls, we tell you and change the plan." },
      { title: "Consistent tutor", body: "Your child keeps the same tutor across the term where possible." },
    ],
  },
  pricingTeaser: {
    eyebrow: "Pricing",
    heading: "Hourly rates for Years 7-10.",
    body: "Rates below are placeholders for design review.",
    rows: [
      { name: "1-to-1 in your home", rate: "$XX per hour" },
      { name: "1-to-1 at our centre", rate: "$XX per hour" },
      { name: "Small group at our centre", rate: "$XX per student per hour" },
    ],
    ctaLabel: "See full pricing",
    ctaTo: "/pricing",
  },
  cta: {
    heading: "Book a call about Years 7-10.",
    body: "Tell us the subject and the next task. We will match a tutor this week.",
    ctaLabel: "Request a Call",
    secondaryLabel: "Exam prep programs",
    secondaryTo: "/exam-prep",
  },
};
