// Archived on 17 Aug 2026. These were the placeholder policy pages
// (/privacy, /terms, /student-agreement, /cancellation-and-refund,
// /data-collection), superseded by the real, signed policy documents at
// src/content/policies-md/, rendered through src/lib/policyLoader.ts at
// /policies and /policies/[slug]. The five route files that rendered these
// are deleted (the owner's explicit instruction for this round, copies kept
// at archive/2026-08-17-policies-rebuild/), but this content itself is not
// deleted, only moved into the archived const below, per CLAUDE.md rule 5.
// Nothing imports this const, so it is stripped out of the browser bundle
// and never reaches a visitor.
//
// src/components/templates/TextPage.tsx and
// src/components/sections/TextPageSection.tsx, the template this content
// rendered through, are now unused for the same reason MunkCards.tsx was
// left in place when the poster rail replaced it: kept, not deleted, safe
// to remove later once confirmed nothing still needs them.

export type TextPageContent = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

const placeholderSections = (topic: string) => [
  {
    heading: "Scope.",
    paragraphs: [
      `This ${topic} applies to families who enrol with TutorMunk for in-person tutoring in South-West Sydney, and to tutors engaged by us.`,
      "Placeholder text is used throughout this page for design review. Final wording will be supplied by TutorMunk.",
    ],
  },
  {
    heading: "What this covers.",
    paragraphs: ["The points below are placeholders that show typical list formatting on a policy page."],
    bullets: [
      "Information we collect when you enquire or enrol.",
      "How session bookings, changes and cancellations are handled.",
      "Who we share information with, and why.",
      "How long records are kept.",
    ],
  },
  {
    heading: "Your choices.",
    paragraphs: [
      "You can ask us to correct your details at any time. You can also ask us to stop contacting you about programs and term dates.",
      "Requests are handled by our centre team within a reasonable period.",
    ],
  },
  {
    heading: "Contact.",
    paragraphs: [
      "Questions about this page can be sent to hello@tutormunk.com.au or raised at our Gregory Hills centre by appointment.",
    ],
  },
];

export const archivedPolicyPlaceholders = {
  privacyPolicy: {
    title: "Privacy Policy | TutorMunk",
    metaDescription: "How TutorMunk collects, uses and stores personal information for families and tutors.",
    eyebrow: "Policies",
    heading: "Privacy Policy.",
    updated: "Last updated 1 March 2026",
    intro:
      "This policy explains what personal information we collect when you enquire about tutoring, how we use it and how you can ask us to change it.",
    sections: placeholderSections("privacy policy"),
  },
  termsPage: {
    title: "Terms of Service | TutorMunk",
    metaDescription: "The terms that apply when you use the TutorMunk website and book in-person tutoring.",
    eyebrow: "Policies",
    heading: "Terms of Service.",
    updated: "Last updated 1 March 2026",
    intro: "These terms apply to your use of this website and to tutoring services booked through TutorMunk.",
    sections: placeholderSections("set of terms"),
  },
  studentAgreement: {
    title: "Student Agreement | TutorMunk",
    metaDescription: "What students and families agree to when they enrol in TutorMunk tutoring sessions.",
    eyebrow: "Policies",
    heading: "Student Agreement.",
    updated: "Last updated 1 March 2026",
    intro: "This agreement sets out what students, families and tutors can expect from each other during sessions.",
    sections: placeholderSections("agreement"),
  },
  cancellationPolicy: {
    title: "Cancellation and Refund Policy | TutorMunk",
    metaDescription: "Notice periods, rescheduling and refunds for TutorMunk tutoring sessions.",
    eyebrow: "Policies",
    heading: "Cancellation and Refund Policy.",
    updated: "Last updated 1 March 2026",
    intro: "This page explains notice periods for changing a session, and when a refund applies.",
    sections: placeholderSections("policy"),
  },
  dataCollectionPolicy: {
    title: "Data Collection Statement | TutorMunk",
    metaDescription: "What data TutorMunk collects through enquiries, enrolments and session reporting.",
    eyebrow: "Policies",
    heading: "Data Collection Statement.",
    updated: "Last updated 1 March 2026",
    intro: "This statement lists the data we collect through our forms and session notes, and why we collect it.",
    sections: placeholderSections("statement"),
  },
} satisfies Record<string, TextPageContent>;
