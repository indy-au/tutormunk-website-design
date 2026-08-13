export const enrol = {
  title: "Enrol Now for In-Person Tutoring | TutorMunk",
  metaDescription:
    "Start your enrolment with TutorMunk. Tell us about your child, choose a delivery mode and set a session time.",
  hero: {
    eyebrow: "Enrolment",
    heading: "Enrol with TutorMunk",
    body: "Five short steps. The form below is a visual shell for design review and does not submit.",
    ctaLabel: "Request a Call",
  },
  form: {
    heading: "Enrolment form",
    steps: [
      {
        title: "Parent details",
        fields: [
          { label: "Parent or carer name", type: "text", placeholder: "Jane Nguyen" },
          { label: "Email", type: "email", placeholder: "jane@example.com.au" },
          { label: "Phone", type: "tel", placeholder: "0400 000 000" },
          { label: "Suburb", type: "text", placeholder: "Oran Park" },
        ],
      },
      {
        title: "Student details",
        fields: [
          { label: "Student name", type: "text", placeholder: "Ari Nguyen" },
          { label: "Year level", type: "select", options: ["Kindergarten", "Year 1", "Year 5", "Year 8", "Year 11"] },
          { label: "School", type: "text", placeholder: "Local primary school" },
        ],
      },
      {
        title: "Subjects and goals",
        fields: [
          { label: "Subjects needed", type: "select", options: ["English", "Maths", "Science", "Selective Prep", "OC Prep"] },
          { label: "What would you like to improve?", type: "textarea", placeholder: "Reading comprehension and writing structure." },
        ],
      },
      {
        title: "Delivery mode",
        fields: [
          { label: "Where should sessions run?", type: "select", options: ["Your home", "Our Oran Park centre"] },
          { label: "Session type", type: "select", options: ["1-to-1", "Small group"] },
        ],
      },
      {
        title: "Preferred times",
        fields: [
          { label: "Preferred day", type: "select", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] },
          { label: "Preferred time", type: "text", placeholder: "After 4pm" },
          { label: "Anything else we should know?", type: "textarea", placeholder: "Optional" },
        ],
      },
    ],
    submitLabel: "Submit enrolment",
    note: "Visual shell only. Nothing is saved or sent.",
  },
};
