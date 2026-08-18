import { suburbs } from "./locations";

export type MunkCard = {
  firstName: string;
  subjects: string;
  bio: string;
  initials: string;
};

export const munksSection = {
  eyebrow: "Meet our Munks",
  heading: "The tutors your child will actually sit with.",
  body: "Every Munk teaches in person, holds a Working with Children Check and reports back after each session.",
};

export const munks: MunkCard[] = [
  {
    firstName: "Aisha",
    subjects: "Primary English, Writing, Selective Prep",
    bio: "A primary teacher who marks a piece of writing with every student each week.",
    initials: "AK",
  },
  {
    firstName: "Tom",
    subjects: "Maths Advanced, Maths Extension 1",
    bio: "Band 6 in both maths courses and now studying engineering at UNSW.",
    initials: "TR",
  },
  {
    firstName: "Sophie",
    subjects: "HSC Biology, HSC Chemistry",
    bio: "Second year medical science student who builds full topic notes with her students.",
    initials: "SL",
  },
  {
    firstName: "Daniel",
    subjects: "Years 7-10 Maths and Science",
    bio: "Ten years in South-West Sydney classrooms teaching junior maths and science.",
    initials: "DP",
  },
];

export const ourMunksPage = {
  title: "Our Munks | In-Person Tutors in South-West Sydney | TutorMunk",
  metaDescription:
    "Meet the TutorMunk tutors who teach face to face across South-West Sydney. WWCC verified, NESA aligned, interviewed and reference checked.",
  eyebrow: "Our Munks",
  heading: "Meet the Munks who teach in person.",
  intro:
    "Our current team. Every Munk is interviewed, reference checked and teaches face to face, in your home or at our Gregory Hills centre. We do not run online lessons.",
};

// ============================================================================
// MUNK PROFILES (approved design v4, poster rail on /our-munks)
//
// The names are real. Everything else, years, education, bios, specialties
// and photos, is PLACEHOLDER content pending the tutor email, and will be
// replaced once the real details and headshots arrive. Headshots go in
// public/images/munks/ once supplied; until then every card falls back to a
// tinted initial panel, see MunkRail.tsx.
//
// This is a new, separate data shape from MunkCard/munks above. Those stay
// exactly as they are, the home page's 4-card grid (MunkCards.tsx) still
// reads from them unchanged.
// ============================================================================

export type MunkProfile = {
  firstName: string; // first name plus surname initial, e.g. "Anne M."
  initials: string; // single letter for the photo fallback
  stage: "Primary" | "High" | "Senior";
  years: string; // e.g. "Teaches Kindy to Year 6"
  education: string; // max 2 lines on the card
  bio: string; // max 3 lines on the card, aim 150 characters
  specialties: string[]; // 2 to 4 short chips
  photo?: string; // /images/munks/<name>.jpg once headshots arrive
};

export const munkProfiles: MunkProfile[] = [
  {
    firstName: "Anne M.",
    initials: "A",
    stage: "Primary",
    years: "Teaches Kindy to Year 6",
    education: "B.Ed (Primary), University of Wollongong",
    bio: "Calm and patient.",
    specialties: ["OC exam prep", "NAPLAN", "Reading"],
  },
  {
    firstName: "Amrita R.",
    initials: "A",
    stage: "High",
    years: "Teaches Year 7 to Year 10",
    education: "B.A. (English), M.Teach (Secondary), Western Sydney University",
    bio: "Breaks big topics into small steps. Strong on writing structure and exam technique, and very good with students who freeze in tests.",
    specialties: ["NAPLAN", "Essay writing", "Study skills"],
  },
  {
    firstName: "Varsha C.",
    initials: "V",
    stage: "Primary",
    years: "Teaches Kindy to Year 6, all subjects",
    education: "B.Ed (Primary)",
    bio: "Specialises in reading, spelling and handwriting for younger students. Builds routines parents can keep going between sessions.",
    specialties: ["Handwriting", "Spelling", "Reading", "Selective prep"],
  },
  {
    firstName: "Maniraaj S.",
    initials: "M",
    stage: "Senior",
    years: "Teaches Year 11 to Year 12",
    education: "B.Eng (Hons) (Mechanical), UNSW",
    bio: "Works through past papers line by line so students can see exactly where marks are won and lost.",
    specialties: ["HSC", "Maths Advanced", "Maths Ext 1"],
  },
  {
    firstName: "Rayna T.",
    initials: "R",
    stage: "High",
    years: "Teaches Year 7 to Year 10",
    education: "3rd year B.Sci (Medical Science), UNSW",
    bio: "Recent HSC graduate who still remembers what makes a topic finally click.",
    specialties: ["NAPLAN", "Science", "Study skills"],
  },
  {
    firstName: "Arhum S.",
    initials: "A",
    stage: "Primary",
    years: "Teaches Year 3 to Year 6",
    education: "B.A. (Education), Macquarie University",
    bio: "Patient with students who find sitting still hard. Keeps sessions moving and finishes on a win.",
    specialties: ["Confidence", "Maths", "Reading"],
  },
  {
    firstName: "Shubhang N.",
    initials: "S",
    stage: "Senior",
    years: "Teaches Year 11 to Year 12",
    education: "B.Sci (Physics), M.Sci (Applied Physics), University of Sydney",
    bio: "Explains the why before the how, so formulas stop feeling like something to memorise. Six years tutoring senior science across the NSW HSC.",
    specialties: ["HSC", "Physics", "Chemistry", "Trials"],
  },
  {
    firstName: "Timothy C.",
    initials: "T",
    stage: "High",
    years: "Teaches Year 7 to Year 10",
    education: "B.A. (English Literature), University of Sydney",
    bio: "Strong on essay planning, paragraph structure and text analysis.",
    specialties: ["Essay writing", "Text analysis"],
  },
];

// Trust chips shown under the /our-munks hero intro. Data, not hard-coded in
// the component, so the wording can be corrected in one place.
export const munkTrustChips: string[] = [
  "WWCC verified",
  "NESA aligned",
  "Qualifications verified",
  "Interviewed and reference checked",
  "In person only",
];

export const guarantee = {
  heading: "A great first session, guaranteed.",
  body: "If the first session does not click, we will match your child with a new Munk and cover the cost of the next session.",
};

export const statsSection = {
  eyebrow: "Trusted by local families",
  heading: "The numbers behind our tutoring.",
  items: [
    { value: "500+", label: "students tutored across South-West Sydney" },
    { value: String(suburbs.length), label: "suburbs served for in-home sessions" },
    { value: "95%", label: "parent satisfaction from our term surveys" },
    { value: "4.9", label: "average Google review rating" },
  ],
};