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
    "Meet the TutorMunk tutors who teach in person across South-West Sydney, from primary English to HSC Maths Extension 1.",
  eyebrow: "Our Munks",
  heading: "Meet the Munks who teach in person.",
  intro:
    "We keep a small team so we know how each tutor works. Request a call and we will match your child with the right Munk.",
};

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