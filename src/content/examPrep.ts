import type { StagePageContent } from "./types";
import heroExamPrep from "@/assets/hero-exam-prep.jpg";

export const examPrep: StagePageContent = {
  title: "Exam Prep Programs: Selective, OC, NAPLAN, ICAS, HSC | TutorMunk",
  metaDescription:
    "In-person exam preparation in South-West Sydney: Selective Prep, OC Prep, Writing, NAPLAN, ICAS, HSC Sprint and Ask Munk sessions.",
  hero: {
    eyebrow: "Exam prep. Years 3 to 12",
    heading: "Preparation programs with real practice papers.",
    body: "Each program runs in person, on a fixed timetable, with timed practice and marked feedback. Parents receive a short note after every session.",
    ctaLabel: "Request a Call",
    points: ["Timed practice papers", "Marked writing feedback", "Small groups at our centre"],
    image: heroExamPrep,
    imageAlt: "Students sitting a timed practice test at a tutoring centre",
  },
  trustTicks: [
    "In person only, never online",
    "NSW NESA aligned",
    "Working with Children Checked",
    "Notes after every session",
  ],
  subjects: {
    eyebrow: "Programs",
    heading: "Seven exam prep programs.",
    body: "Choose one program, or combine a program with weekly subject tutoring.",
    items: [
      { name: "Selective Prep", body: "Year 5 and 6 students preparing for the Selective High School Placement Test. Reading, mathematical reasoning and thinking skills.", to: "/topics/selective-school-prep", linkLabel: "Selective School Prep" },
      { name: "OC Prep", body: "Year 3 and 4 students preparing for Opportunity Class placement, with timed sections each week.", to: "/topics/oc-prep", linkLabel: "OC Prep" },
      { name: "Writing", body: "A dedicated writing program with weekly marked pieces across narrative, persuasive and informative styles.", to: "/topics/writing-program", linkLabel: "Writing Program" },
      { name: "NAPLAN", body: "Familiarisation and technique for Years 3, 5, 7 and 9, using question types from past tests.", to: "/topics/naplan", linkLabel: "NAPLAN" },
      { name: "ICAS", body: "Extension style questions in English, Maths and Science for students sitting ICAS.", to: "/topics/icas", linkLabel: "ICAS" },
      { name: "HSC Sprint", body: "An intensive block before trials and the HSC, focused on past papers and exam technique.", to: "/topics/hsc-sprint", linkLabel: "HSC Sprint" },
      { name: "Ask Munk", body: "Drop-in homework help at our centre. Bring the questions you are stuck on.", to: "/topics/ask-munk", linkLabel: "Ask Munk" },
    ],
  },
  programs: {
    eyebrow: "Programs",
    heading: "Seven exam prep programs.",
    body: "Choose one program, or combine a program with weekly subject tutoring.",
    items: [
      { name: "Selective School Prep", icon: "trophy", chip: "Year 5 to 6", body: "Reading, mathematical reasoning and thinking skills for the Selective High School Placement Test. Students sit a timed section every week.", to: "/topics/selective-school-prep" },
      { name: "OC Prep", icon: "target", chip: "Year 3 to 4", body: "Preparation for Opportunity Class placement, taught in small groups at our Gregory Hills centre. Timed practice from the first session.", to: "/topics/oc-prep" },
      { name: "Writing", icon: "pen", chip: "Year 3 to 10", body: "One marked writing piece each week across narrative, persuasive and informative styles. Feedback is written against the marking criteria.", to: "/topics/writing-program" },
      { name: "NAPLAN", icon: "clipboard-check", chip: "Years 3, 5, 7 and 9", body: "Familiarisation with question types from past tests, plus timing and technique. Sessions run for 60 minutes.", to: "/topics/naplan" },
      { name: "ICAS", icon: "medal", chip: "Year 3 to 10", body: "Extension style questions in English, Maths and Science for students sitting ICAS. Tutors work through problem solving step by step.", to: "/topics/icas" },
      { name: "HSC Sprint", icon: "timer", chip: "Intensive", body: "A short block before trials and the HSC, built around past papers and band descriptors. Runs during school holidays and after school.", to: "/topics/hsc-sprint" },
      { name: "Ask Munk", icon: "message-circle-question", chip: "On demand", body: "Drop-in homework help at our centre. Bring the questions you are stuck on and a tutor will work through them with you.", to: "/topics/ask-munk" },
    ],
  },
  whyUs: {
    eyebrow: "Why parents choose TutorMunk",
    heading: "Preparation that matches the real test.",
    items: [
      { title: "Timed from week one", body: "Students sit sections under time, so the real test day feels familiar." },
      { title: "Marked to criteria", body: "Writing is marked against the same criteria used by markers, then discussed." },
      { title: "Small groups stay small", body: "Program groups at our centre are capped at six students in the same stage." },
      { title: "Honest advice", body: "If a program is not the right fit for your child, we will say so." },
    ],
  },
  cta: {
    heading: "Not sure which program fits?",
    body: "Request a call and we will recommend a program based on your child's year and goals.",
    ctaLabel: "Request a Call",
  },
};
