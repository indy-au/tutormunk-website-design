// Archived on 18 Aug 2026, see README.md in this folder for why and how to
// restore. Not imported anywhere, kept for reference only.
//
// archivedBecomeTutorForm and archivedBecomeTutorUpload were the `form` and
// `upload` objects on `becomeTutor` in src/content/becomeTutor.ts, copied
// here verbatim before being deleted from that file. `becomeTutor.hero` and
// `becomeTutor.requirements` are unchanged and still live.
export const archivedBecomeTutorForm = {
  heading: "Apply to become a Munk.",
  fields: [
    { label: "Full name", type: "text", placeholder: "Sam Patel" },
    { label: "Email", type: "email", placeholder: "sam@example.com.au" },
    { label: "Phone", type: "tel", placeholder: "0400 000 000" },
    { label: "Suburb", type: "text", placeholder: "Narellan" },
    { label: "Stages you can tutor", type: "select", options: ["Primary K-6", "High School 7-10", "Senior 11-12"] },
    { label: "Subjects", type: "text", placeholder: "Maths Advanced, Physics" },
    { label: "Highest qualification or ATAR", type: "text", placeholder: "Placeholder" },
    { label: "Why do you want to tutor in person?", type: "textarea", placeholder: "A few sentences." },
  ],
  submitLabel: "Submit application",
  note: "Visual shell only. Nothing is uploaded or sent.",
};

export const archivedBecomeTutorUpload = {
  label: "Upload your resume",
  hint: "PDF or Word document, up to 5MB. Visual placeholder only.",
  buttonLabel: "Choose file",
};

// archivedContactForm was the `form` object on `contact` in
// src/content/contact.ts, copied here verbatim before being deleted from
// that file. `contact.hero`, `contact.details`, `contact.mapLabel` and
// `contact.mapEmbedUrl` are unchanged and still live.
export const archivedContactForm = {
  heading: "Send an enquiry.",
  fields: [
    { label: "Your name", type: "text", placeholder: "Jane Nguyen" },
    { label: "Email", type: "email", placeholder: "jane@example.com.au" },
    { label: "Phone", type: "tel", placeholder: "0400 000 000" },
    { label: "Suburb", type: "text", placeholder: "Camden" },
    {
      label: "How can we help?",
      type: "textarea",
      placeholder: "Tell us the year level and subject.",
    },
  ],
  submitLabel: "Send enquiry",
  note: "Visual shell only. Nothing is sent.",
};
