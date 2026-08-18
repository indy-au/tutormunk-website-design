import { centre, centreMapEmbedUrl } from "./locations";

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
