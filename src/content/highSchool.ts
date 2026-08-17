import type { StagePageContent, SubjectCard } from "./types";
import heroHighSchool from "@/assets/hero-high-school.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";

// Removed from the live High School subjects.items on 16 Aug 2026 at the
// owner's request. Kept here, not deleted, so they can be restored later.
// Nothing imports this const, so it is stripped out of the browser bundle
// and never reaches a visitor.
export const archivedHighSchoolSubjects: SubjectCard[] = [
  { name: "Study Skills", body: "Note taking, revision timetables and exam technique." },
  { name: "Subject Selection", body: "Guidance on choosing Year 11 courses with the HSC in mind." },
];

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
    image: heroHighSchool,
    imageAlt: "A high school student and tutor reviewing class notes together",
  },
  trustTicks: [
    "In person only, never online",
    "NSW NESA aligned",
    "Working with Children Checked",
    "Notes after every session",
  ],
  subjects: {
    eyebrow: "Subjects",
    heading: "What we tutor in Years 7-10.",
    items: [
      { name: "English", body: "Text analysis, essay structure and creative writing for school tasks.", to: "/topics/high-school-english", linkLabel: "High School English Tutoring" },
      { name: "Maths", body: "Algebra, geometry, trigonometry and problem solving to Stage 5.3.", to: "/topics/high-school-maths", linkLabel: "High School Maths Tutoring" },
      { name: "Science", body: "Working scientifically, plus biology, chemistry and physics basics.", to: "/topics/high-school-science", linkLabel: "High School Science Tutoring" },
      { name: "Writing", body: "Paragraph structure, evidence and editing across subjects.", to: "/topics/writing-program", linkLabel: "Writing Program" },
    ],
  },
  whyUs: {
    eyebrow: "Why parents and students choose TutorMunk",
    heading: "Tutoring built around school work.",
    items: [
      { title: "Task first", body: "Sessions start with the next assessment task and its marking criteria." },
      { title: "NESA aligned", body: "Content follows the NESA syllabus for each stage." },
      { title: "Honest reporting", body: "If progress stalls, we tell you and change the plan." },
      { title: "Consistent tutor", body: "Your child keeps the same tutor across the term where possible." },
    ],
    image: heroTutoring,
    imageAlt: "A tutor pointing to a page in an exercise book while a young student looks on, seated together at a wooden table with coloured pencils nearby.",
  },
  cta: {
    heading: "Book a call about Years 7-10.",
    body: "Tell us the subject and the next task. We will match a tutor this week.",
    ctaLabel: "Request a Call",
  },
};
