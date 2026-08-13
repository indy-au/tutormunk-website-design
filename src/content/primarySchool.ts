import type { StagePageContent } from "./types";

export const primarySchool: StagePageContent = {
  title: "Primary School Tutoring K-6 in South-West Sydney | TutorMunk",
  metaDescription:
    "In-person primary school tutoring for K-6 students in South-West Sydney, covering English, Maths, OC Prep, Selective Prep, NAPLAN and writing.",
  hero: {
    eyebrow: "Primary School, K-6",
    heading: "Strong foundations in reading, writing and number",
    body: "Our primary tutors work through the NSW syllabus at your child's pace. Sessions are calm, structured and always in person.",
    ctaLabel: "Request a Call",
    points: ["Kindergarten to Year 6", "OC and Selective preparation", "Weekly written feedback"],
  },
  subjects: {
    eyebrow: "Subjects",
    heading: "What we tutor in primary school",
    body: "Choose one subject or combine two in a longer session.",
    items: [
      { name: "English", body: "Reading comprehension, spelling, grammar and vocabulary building.", to: "/primary-english", linkLabel: "Primary English Tutoring" },
      { name: "Maths", body: "Number, fractions, measurement and word problems, with mental strategies." },
      { name: "Selective Prep", body: "Thinking skills, reading and mathematical reasoning for the Year 6 Selective test." },
      { name: "OC Prep", body: "Timed practice for the Year 4 Opportunity Class placement test." },
      { name: "NAPLAN", body: "Familiarisation with question types in Year 3 and Year 5 NAPLAN." },
      { name: "Writing", body: "Narrative, persuasive and informative writing with marking against criteria." },
    ],
  },
  whyUs: {
    eyebrow: "Why families choose us",
    heading: "Practical tutoring, no gimmicks",
    items: [
      { title: "In person only", body: "Every session is face to face, so tutors can see the working, not just the answer." },
      { title: "Local tutors", body: "Our tutors teach and study nearby, and they know the local schools." },
      { title: "One page after every session", body: "You receive a short note covering what was taught and what to practise." },
      { title: "Small groups stay small", body: "Group sessions at the centre are capped at six students in the same stage." },
      { title: "No lock-in terms", body: "Book by the term or week. Pause during school holidays if you prefer." },
    ],
  },
  pricingTeaser: {
    eyebrow: "Pricing",
    heading: "Simple hourly rates",
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
    heading: "Talk to us about your child's primary years",
    body: "We will suggest a tutor, a session length and a starting point based on your child's last report.",
    ctaLabel: "Request a Call",
    secondaryLabel: "How it works",
    secondaryTo: "/how-it-works",
  },
};
