import type { StagePageContent } from "./types";
import heroPrimary from "@/assets/hero-primary.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";

export const primarySchool: StagePageContent = {
  title: "Primary School Tutoring K-6 in South-West Sydney | TutorMunk",
  metaDescription:
    "In-person primary school tutoring for K-6 students in South-West Sydney, covering English, Maths, OC Prep, Selective Prep, NAPLAN and writing.",
  hero: {
    eyebrow: "Primary School, K-6",
    heading: "Strong foundations in reading, writing and number.",
    body: "TutorMunk provides in-person tutoring for Kindergarten to Year 6 students across suburban Sydney, in your home or at our Gregory Hills centre. Our primary tutors work through the NSW syllabus at your child's pace. Sessions are calm, structured and always in person.",
    ctaLabel: "Request a Call",
    points: ["Kindergarten to Year 6", "OC and Selective preparation", "Weekly written feedback"],
    image: heroPrimary,
    imageAlt: "A tutor helping a primary school student with an exercise book at a dining table",
  },
  trustTicks: [
    "In person only, never online",
    "NSW NESA aligned",
    "Working with Children Checked",
    "Notes after every session",
  ],
  subjects: {
    eyebrow: "Subjects",
    heading: "What we tutor in primary school.",
    body: "Choose one subject or combine two in a longer session.",
    items: [
      { name: "English", body: "Reading comprehension, spelling, grammar and vocabulary building.", to: "/primary-english", linkLabel: "Primary English Tutoring" },
      { name: "Maths", body: "Number, fractions, measurement and word problems, with mental strategies.", to: "/topics/primary-maths", linkLabel: "Primary Maths Tutoring" },
      { name: "Selective Prep", body: "Thinking skills, reading and mathematical reasoning for the Year 6 Selective test.", to: "/topics/selective-school-prep", linkLabel: "Selective School Preparation" },
      { name: "OC Prep", body: "Timed practice for the Year 4 Opportunity Class placement test.", to: "/topics/oc-prep", linkLabel: "OC Placement Preparation" },
      { name: "NAPLAN", body: "Familiarisation with question types in Year 3 and Year 5 NAPLAN.", to: "/topics/naplan", linkLabel: "NAPLAN Preparation" },
      { name: "Writing", body: "Narrative, persuasive and informative writing with marking against criteria.", to: "/topics/writing-program", linkLabel: "Writing Program" },
    ],
  },
  whyUs: {
    eyebrow: "Why parents and students choose TutorMunk",
    heading: "Practical tutoring, no gimmicks.",
    items: [
      { title: "In person only", body: "Every session is face to face, so tutors can see the working, not just the answer." },
      { title: "Local tutors", body: "Our tutors teach and study nearby, and they know the local schools." },
      { title: "One page after every session", body: "You receive a short note covering what was taught and what to practise." },
      { title: "Small groups stay small", body: "Group sessions at the centre are capped at six students in the same stage." },
      { title: "No lock-in terms", body: "Book by the term or week. Pause during school holidays if you prefer." },
      { title: "NESA aligned", body: "Sessions follow the NSW NESA syllabus for your child's stage, so tutoring matches what is being taught at school." },
    ],
    image: heroTutoring,
    imageAlt: "A tutor pointing to a page in an exercise book while a young student looks on, seated together at a wooden table with coloured pencils nearby.",
  },
  cta: {
    heading: "Talk to us about your child's primary years.",
    body: "We will suggest a tutor, a session length and a starting point based on your child's last report.",
    ctaLabel: "Request a Call",
  },
};
