import type { StagePageContent } from "./types";
import heroSenior from "@/assets/hero-senior.jpg";
import heroTutoring from "@/assets/hero-tutoring.jpg";

export const seniorSchool: StagePageContent = {
  title: "Senior School and HSC Tutoring Years 11-12 | TutorMunk",
  metaDescription:
    "In-person HSC tutoring for Years 11 and 12 in South-West Sydney across English, Maths and Science, taught by Band 6 tutors.",
  hero: {
    eyebrow: "Senior School, Years 11-12",
    heading: "HSC courses taught by tutors who sat them recently.",
    body: "Every senior tutor achieved a Band 6 in the course they teach. Sessions cover content, past papers and marking feedback.",
    ctaLabel: "Request a Call",
    points: ["Band 6 tutors", "Past paper marking", "Trial and HSC preparation"],
    image: heroSenior,
    imageAlt: "A senior student working through a past HSC paper with a tutor",
  },
  trustTicks: [
    "In person only, never online",
    "NSW NESA aligned",
    "Working with Children Checked",
    "Notes after every session",
  ],
  subjects: {
    eyebrow: "Courses",
    heading: "HSC courses we tutor.",
    body: "Grouped by faculty. Each course runs 1-to-1 or in a small group at our centre.",
    groups: [
      {
        heading: "English.",
        body: "Module by module, with essay drafting and feedback against the marking criteria.",
        items: [
          { name: "HSC Advanced English", body: "Common Module, Textual Conversations, Critical Study and Craft of Writing.", to: "/topics/english-advanced", linkLabel: "HSC English Advanced" },
          { name: "HSC Standard English", body: "Common Module, Language, Identity and Culture, plus close study of text.", to: "/topics/english-standard", linkLabel: "HSC English Standard" },
          { name: "English Extension 1", body: "Elective study, critical reading and extended response practice.", to: "/topics/english-extension-1", linkLabel: "HSC English Extension 1" },
        ],
      },
      {
        heading: "Maths.",
        body: "Worked examples first, then timed question sets from past HSC papers.",
        items: [
          { name: "HSC Maths Advanced", body: "Functions, calculus, statistical analysis and financial mathematics.", to: "/hsc-maths-advanced", linkLabel: "HSC Maths Advanced" },
          { name: "HSC Maths Standard 2", body: "Algebra, measurement, financial mathematics and statistics.", to: "/topics/maths-standard-2", linkLabel: "HSC Mathematics Standard 2" },
          { name: "Mathematics Extension 1", body: "Proof, vectors, further calculus and combinatorics.", to: "/topics/maths-extension-1", linkLabel: "HSC Mathematics Extension 1" },
        ],
      },
      {
        heading: "Science.",
        body: "Syllabus dot points, depth study support and long response structure.",
        items: [
          { name: "HSC Biology", body: "Heredity, genetic technologies, infectious disease and non-infectious disease.", to: "/topics/biology", linkLabel: "HSC Biology" },
          { name: "HSC Chemistry", body: "Equilibrium, acids and bases, organic chemistry and applied chemistry.", to: "/topics/chemistry", linkLabel: "HSC Chemistry" },
          { name: "HSC Physics", body: "Advanced mechanics, electromagnetism, quanta and the standard model.", to: "/topics/physics", linkLabel: "HSC Physics" },
        ],
      },
    ],
  },
  whyUs: {
    eyebrow: "Why parents and students choose TutorMunk",
    heading: "Marks move when feedback is specific.",
    items: [
      { title: "Band 6 tutors only", body: "Senior tutors must have achieved a Band 6 in the course they teach." },
      { title: "Marked to criteria", body: "Responses are marked with the NESA criteria and returned with notes." },
      { title: "Past papers each term", body: "Timed practice from Year 11 through to the trial and HSC exams." },
      { title: "ATAR context", body: "We explain how each assessment affects rank, without the scare tactics." },
      { title: "NESA aligned", body: "Every course follows the NESA syllabus and the current HSC assessment requirements." },
    ],
    image: heroTutoring,
    imageAlt: "A tutor pointing to a page in an exercise book while a young student looks on, seated together at a wooden table with coloured pencils nearby.",
  },
  cta: {
    heading: "Plan the rest of the HSC year.",
    body: "Request a call and we will map the remaining assessments and match a Band 6 tutor.",
    ctaLabel: "Request a Call",
  },
};
