export const brand = {
  name: "TutorMunk",
  tagline: "Premium in-person tutoring in South-West Sydney",
  phone: "02 4000 0000",
  email: "hello@tutormunk.com.au",
  centreAddress: "Suite 3, 12 Central Avenue, Oran Park NSW 2570",
};

export type NavItem = {
  label: string;
  to: string;
  groups?: { heading: string; links: { label: string; to: string }[] }[];
};

export const primaryNav: NavItem[] = [
  { label: "Primary School", to: "/primary-school" },
  { label: "High School", to: "/high-school" },
  {
    label: "Senior School",
    to: "/senior-school",
    groups: [
      {
        heading: "English",
        links: [
          { label: "HSC Advanced English", to: "/senior-school" },
          { label: "HSC Standard English", to: "/senior-school" },
          { label: "HSC Extension 1", to: "/senior-school" },
        ],
      },
      {
        heading: "Maths",
        links: [
          { label: "HSC Maths Advanced", to: "/hsc-maths-advanced" },
          { label: "HSC Maths Standard 2", to: "/senior-school" },
          { label: "HSC Extension 1 Maths", to: "/senior-school" },
        ],
      },
      {
        heading: "Science",
        links: [
          { label: "HSC Biology", to: "/senior-school" },
          { label: "HSC Chemistry", to: "/senior-school" },
          { label: "HSC Physics", to: "/senior-school" },
        ],
      },
    ],
  },
  { label: "How It Works", to: "/how-it-works" },
];

export const callbackModal = {
  title: "Request a call",
  intro: "Leave your details and one of our team will call you back to talk through your child's needs.",
  fields: [
    { label: "Parent or carer name", type: "text", placeholder: "Jane Nguyen" },
    { label: "Phone number", type: "tel", placeholder: "0400 000 000" },
    { label: "Best time to call", type: "text", placeholder: "Weekdays after 4pm" },
  ],
  submitLabel: "Request a call",
  note: "This form is a visual placeholder. No details are sent.",
};

export const footer = {
  blurb:
    "In-person tutoring for K-12 students across South-West Sydney, in your home or at our Oran Park centre. We do not run online lessons.",
  columns: [
    {
      heading: "Programs",
      links: [
        { label: "Exam Prep", to: "/exam-prep" },
        { label: "Selective Prep", to: "/exam-prep" },
        { label: "OC Prep", to: "/exam-prep" },
        { label: "Writing", to: "/exam-prep" },
        { label: "NAPLAN", to: "/exam-prep" },
        { label: "ICAS", to: "/exam-prep" },
        { label: "HSC Sprint", to: "/exam-prep" },
        { label: "Ask Munk", to: "/exam-prep" },
      ],
    },
    {
      heading: "Locations",
      links: [
        { label: "Oran Park", to: "/locations/oran-park" },
        { label: "Gregory Hills", to: "/locations" },
        { label: "Leppington", to: "/locations" },
        { label: "Gledswood Hills", to: "/locations" },
        { label: "Kirkham", to: "/locations" },
        { label: "Narellan", to: "/locations" },
        { label: "Catherine Field", to: "/locations" },
        { label: "Harrington Park", to: "/locations" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Testimonials", to: "/testimonials" },
        { label: "Blog", to: "/blog" },
        { label: "Become a Tutor", to: "/become-a-tutor" },
        { label: "FAQ", to: "/faq" },
      ],
    },
    {
      heading: "Policies",
      links: [
        { label: "Privacy", to: "/privacy" },
        { label: "Terms", to: "/terms" },
        { label: "Student Agreement", to: "/student-agreement" },
        { label: "Cancellation & Refund", to: "/cancellation-and-refund" },
        { label: "Data Collection", to: "/data-collection" },
      ],
    },
  ],
  legal: "TutorMunk Pty Ltd. Placeholder content for design review.",
};

export const deliveryModes = [
  {
    name: "1-to-1 in your home",
    detail: "A tutor comes to you. Full attention on one student, with no travel for the family.",
    rate: "$XX per hour",
  },
  {
    name: "Small group in your home",
    detail: "Up to three students, often siblings or neighbours, taught together at your kitchen table.",
    rate: "$XX per student per hour",
  },
  {
    name: "1-to-1 at our centre",
    detail: "Quiet rooms at Oran Park, with printed resources and past papers on hand.",
    rate: "$XX per hour",
  },
  {
    name: "Small group at our centre",
    detail: "Groups of four to six students in the same stage, grouped by ability.",
    rate: "$XX per student per hour",
  },
];

export const reviews = [
  { name: "Melissa T.", suburb: "Oran Park", rating: 5, quote: "Our Year 5 daughter went from avoiding maths homework to asking for extra questions. The tutor is patient and very organised." },
  { name: "Hasan A.", suburb: "Gregory Hills", rating: 5, quote: "We started six weeks before the Selective test. The practice papers and feedback each week made a real difference." },
  { name: "Priya S.", suburb: "Narellan", rating: 5, quote: "Sessions at the centre suit us better than home. Our son is focused there and the reports are clear and honest." },
  { name: "Daniel W.", suburb: "Leppington", rating: 5, quote: "Our Year 11 son needed help with Maths Advanced. His marks lifted a full band by the trial exams." },
  { name: "Jess M.", suburb: "Harrington Park", rating: 5, quote: "Booking was simple and we met the tutor before committing. No pressure, no long contracts." },
];

export const suburbs = [
  "Oran Park",
  "Gregory Hills",
  "Leppington",
  "Gledswood Hills",
  "Kirkham",
  "Narellan",
  "Catherine Field",
  "Harrington Park",
];

export const primaryCta = { label: "Request a Call", modal: true };
