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
    heading: "Scope",
    paragraphs: [
      `This ${topic} applies to families who enrol with TutorMunk for in-person tutoring in South-West Sydney, and to tutors engaged by us.`,
      "Placeholder text is used throughout this page for design review. Final wording will be supplied by TutorMunk.",
    ],
  },
  {
    heading: "What this covers",
    paragraphs: ["The points below are placeholders that show typical list formatting on a policy page."],
    bullets: [
      "Information we collect when you enquire or enrol.",
      "How session bookings, changes and cancellations are handled.",
      "Who we share information with, and why.",
      "How long records are kept.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask us to correct your details at any time. You can also ask us to stop contacting you about programs and term dates.",
      "Requests are handled by our centre team within a reasonable period.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about this page can be sent to hello@tutormunk.com.au or raised at our Oran Park centre during opening hours.",
    ],
  },
];

export const privacyPolicy: TextPageContent = {
  title: "Privacy Policy | TutorMunk",
  metaDescription: "How TutorMunk collects, uses and stores personal information for families and tutors.",
  eyebrow: "Policies",
  heading: "Privacy Policy",
  updated: "Last updated 1 March 2026",
  intro:
    "This policy explains what personal information we collect when you enquire about tutoring, how we use it and how you can ask us to change it.",
  sections: placeholderSections("privacy policy"),
};

export const termsPage: TextPageContent = {
  title: "Terms of Service | TutorMunk",
  metaDescription: "The terms that apply when you use the TutorMunk website and book in-person tutoring.",
  eyebrow: "Policies",
  heading: "Terms of Service",
  updated: "Last updated 1 March 2026",
  intro: "These terms apply to your use of this website and to tutoring services booked through TutorMunk.",
  sections: placeholderSections("set of terms"),
};

export const studentAgreement: TextPageContent = {
  title: "Student Agreement | TutorMunk",
  metaDescription: "What students and families agree to when they enrol in TutorMunk tutoring sessions.",
  eyebrow: "Policies",
  heading: "Student Agreement",
  updated: "Last updated 1 March 2026",
  intro: "This agreement sets out what students, families and tutors can expect from each other during sessions.",
  sections: placeholderSections("agreement"),
};

export const cancellationPolicy: TextPageContent = {
  title: "Cancellation and Refund Policy | TutorMunk",
  metaDescription: "Notice periods, rescheduling and refunds for TutorMunk tutoring sessions.",
  eyebrow: "Policies",
  heading: "Cancellation and Refund Policy",
  updated: "Last updated 1 March 2026",
  intro: "This page explains notice periods for changing a session, and when a refund applies.",
  sections: placeholderSections("policy"),
};

export const dataCollectionPolicy: TextPageContent = {
  title: "Data Collection Statement | TutorMunk",
  metaDescription: "What data TutorMunk collects through enquiries, enrolments and session reporting.",
  eyebrow: "Policies",
  heading: "Data Collection Statement",
  updated: "Last updated 1 March 2026",
  intro: "This statement lists the data we collect through our forms and session notes, and why we collect it.",
  sections: placeholderSections("statement"),
};
