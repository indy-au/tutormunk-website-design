import { brand } from "./site";

// Application form removed 18 Aug 2026 (visual shell, no backend), the
// site is phone-only for tutor applications now, see the closing section
// in src/routes/become-a-tutor.tsx. The form and upload objects that used
// to live here are archived, not deleted, at
// archive/2026-08-18-placeholder-forms/archived-content.ts. hero.ctaLabel
// is gone too, on purpose: the Hero component only renders a Request a
// Call button when ctaLabel is present, and this page deliberately has
// none, see CLAUDE.md.
export const becomeTutor = {
  title: "Become a Munk with TutorMunk | Tutor Jobs South-West Sydney",
  metaDescription:
    "Tutor with TutorMunk in South-West Sydney. In-person work at our Gregory Hills centre or in family homes, K-12. Call 1300 00MUNK to enquire.",
  hero: {
    eyebrow: "Work with us",
    heading: "Become a Munk.",
    body: "We hire tutors who teach in person, keep good notes and turn up on time. Senior tutors need a Band 6 in the course they teach.",
    points: ["In-person work only", "Gregory Hills centre or in-home", "Paid planning time"],
  },
  requirements: {
    eyebrow: "What we look for",
    heading: "Requirements.",
    items: [
      {
        title: "Working with Children Check",
        body: "A valid NSW WWCC is required before your first session.",
      },
      {
        title: "Subject strength",
        body: "Strong results in the subjects you want to tutor. Band 6 for HSC courses.",
      },
      {
        title: "Local availability",
        body: "Weekday afternoons or Saturday mornings in South-West Sydney.",
      },
      {
        title: "Clear communication",
        body: "You write a short note for parents after every session.",
      },
    ],
  },
  // Phone-only closing section, added 18 Aug 2026 in place of the
  // archived application form. heading is built from brand.phone rather
  // than the digits being retyped, same reasoning as locations.ts: one
  // source of truth for the phone number.
  closing: {
    eyebrow: "Ready to apply?",
    heading: `Call us on ${brand.phone}.`,
    body: "Tell us the subjects and stages you can teach and where you are based. A member of the TutorMunk team will get in touch.",
  },
};
