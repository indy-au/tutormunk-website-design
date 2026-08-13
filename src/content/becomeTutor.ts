export const becomeTutor = {
  title: "Become a Tutor with TutorMunk | Tutor Jobs South-West Sydney",
  metaDescription:
    "Apply to tutor with TutorMunk in South-West Sydney. In-person work at our Oran Park centre or in family homes, K-12.",
  hero: {
    eyebrow: "Work with us",
    heading: "Become a Munk",
    body: "We hire tutors who teach in person, keep good notes and turn up on time. Senior tutors need a Band 6 in the course they teach.",
    ctaLabel: "Request a Call",
    points: ["In-person work only", "Oran Park centre or in-home", "Paid planning time"],
  },
  requirements: {
    eyebrow: "What we look for",
    heading: "Requirements",
    items: [
      { title: "Working with Children Check", body: "A valid NSW WWCC is required before your first session." },
      { title: "Subject strength", body: "Strong results in the subjects you want to tutor. Band 6 for HSC courses." },
      { title: "Local availability", body: "Weekday afternoons or Saturday mornings in South-West Sydney." },
      { title: "Clear communication", body: "You write a short note for parents after every session." },
    ],
  },
  form: {
    heading: "Tutor application",
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
    upload: {
      label: "Upload your resume",
      hint: "PDF or Word document, up to 5MB. Visual placeholder only.",
      buttonLabel: "Choose file",
    },
    submitLabel: "Submit application",
    note: "Visual shell only. Nothing is uploaded or sent.",
  },
};
