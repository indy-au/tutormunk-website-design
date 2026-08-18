import { centre, centreMapEmbedUrl } from "./locations";
import { brand } from "./site";

// Enquiry form removed 18 Aug 2026 (visual shell, no backend). The form
// object that used to live here is archived, not deleted, at
// archive/2026-08-18-placeholder-forms/archived-content.ts. hero.body was
// rewritten so it no longer promises a reply to a form that no longer
// exists, see CLAUDE.md.
export const contact = {
  title: "Contact TutorMunk | Gregory Hills Learning Centre",
  metaDescription:
    "Contact TutorMunk in Gregory Hills by phone or email, or send an enquiry about in-person tutoring in South-West Sydney.",
  hero: {
    eyebrow: "Contact",
    heading: "Get in touch.",
    body: "Call us, email hello@tutormunk.com.au, or request a call and we will phone you back within one business day.",
  },
  details: [
    { label: "Phone", value: centre.phone },
    { label: "Email", value: "hello@tutormunk.com.au" },
    { label: "Head office", value: brand.headOfficeAddress },
    { label: "Centre", value: centre.address },
    { label: "Sessions", value: centre.sessionsNote },
  ],
  mapLabel: `Map of ${centre.name} at ${centre.address}`,
  mapEmbedUrl: centreMapEmbedUrl,
};
