import { centre, suburbs, centreMapEmbedUrl } from "./locations";

export const about = {
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

export const contact = {
  title: "Contact TutorMunk | Gregory Hills Learning Centre",
  metaDescription:
    "Contact TutorMunk in Gregory Hills by phone or email, or send an enquiry about in-person tutoring in South-West Sydney.",
  hero: {
    eyebrow: "Contact",
    heading: "Get in touch.",
    body: "Call us or send an enquiry and we will reply within one business day.",
  },
  details: [
    { label: "Phone", value: centre.phone },
    { label: "Email", value: "hello@tutormunk.com.au" },
    { label: "Centre", value: centre.address },
    { label: "Sessions", value: centre.sessionsNote },
  ],
  mapLabel: `Map of ${centre.name} at ${centre.address}`,
  mapEmbedUrl: centreMapEmbedUrl,
  form: {
    heading: "Send an enquiry.",
    fields: [
      { label: "Your name", type: "text", placeholder: "Jane Nguyen" },
      { label: "Email", type: "email", placeholder: "jane@example.com.au" },
      { label: "Phone", type: "tel", placeholder: "0400 000 000" },
      { label: "Suburb", type: "text", placeholder: "Camden" },
      { label: "How can we help?", type: "textarea", placeholder: "Tell us the year level and subject." },
    ],
    submitLabel: "Send enquiry",
    note: "Visual shell only. Nothing is sent.",
  },
};
