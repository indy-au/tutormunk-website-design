// Archived on 18 Aug 2026 at the owner's request. The About page is removed
// from the site, the owner decided it was not needed. This content is kept
// for possible future use, nothing imports it. The `contact` export that
// used to live in this file moved to src/content/contact.ts unchanged, the
// Contact page depends on it and stays exactly as it was. The route file
// that rendered this content, src/routes/about.tsx, is deleted, a copy is
// kept at archive/2026-08-18-about-page/about.tsx.old. /about now 404s.
//
// src/components/sections/StorySection.tsx, the section this content
// rendered through, is now unused for the same reason MunkCards.tsx was
// left in place when the poster rail replaced it: kept, not deleted, safe
// to remove later once confirmed nothing still needs it.

import { suburbs } from "./locations";

export const archivedAboutPage = {
  title: "About TutorMunk | In-Person Tutoring in South-West Sydney",
  metaDescription:
    "TutorMunk is an in-person tutoring company in South-West Sydney offering 1-to-1 and small group sessions for K-12 students.",
  hero: {
    eyebrow: "About us",
    heading: "We tutor in person, on purpose.",
    body: "TutorMunk started in Gregory Hills because local families wanted tutoring that happened in the room, with a tutor who could see the working.",
    ctaLabel: "Request a Call",
  },
  story: {
    eyebrow: "Our story",
    heading: "Built around local families.",
    paragraphs: [
      "We began with two tutors visiting homes in Gregory Hills and Harrington Park. Word spread, and we opened a small centre so students who study better outside the house had somewhere quiet to go.",
      "Today we tutor Kindergarten to Year 12 across South-West Sydney. Every session is face to face. We do not run online lessons, because we found that younger students drift and senior students hide gaps in their working.",
      "Our tutors are local. Many studied at schools in the area and now study at university nearby. Senior tutors must have achieved a Band 6 in the course they teach.",
    ],
  },
  values: {
    eyebrow: "What we stand for",
    heading: "Four commitments.",
    items: [
      { title: "In person, always", body: "Face to face sessions in your home or at our centre." },
      { title: "Honest reporting", body: "Short written notes after every session, and a plain conversation if progress stalls." },
      { title: "Syllabus first", body: "Content follows the NESA syllabus and your child's school program." },
      { title: "No pressure", body: "No joining fees, no lock-in contracts and no upselling." },
    ],
  },
  stats: [
    { value: "500+", label: "Local students tutored" },
    { value: "40+", label: "Tutors across the region" },
    { value: String(suburbs.length), label: "Suburbs served" },
    { value: "K-12", label: "Every stage of school" },
  ],
  cta: {
    heading: "Come and meet us.",
    body: "Request a call, or ask about visiting our Gregory Hills centre by appointment.",
    ctaLabel: "Request a Call",
    secondaryLabel: "Contact us",
    secondaryTo: "/contact",
  },
};
