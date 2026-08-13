export const brand = {
  name: "TutorMunk",
  tagline: "Premium in-person tutoring in South-West Sydney",
  phone: "02 4000 0000",
  email: "hello@tutormunk.com.au",
  centreAddress: "Suite 3, 12 Central Avenue, Oran Park NSW 2570",
  ratingLine: "4.9 from 180+ Google reviews",
};

export type NavItem = {
  label: string;
  to: string;
  wide?: boolean;
  groups?: { heading: string; links: { label: string; to: string }[] }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Primary School",
    to: "/primary-school",
    groups: [
      {
        heading: "Primary K-6",
        links: [
          { label: "Primary overview", to: "/primary-school" },
          { label: "English Tutoring", to: "/primary-english" },
          { label: "Maths Tutoring", to: "/topics/primary-maths" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "OC Prep", to: "/topics/oc-prep" },
          { label: "NAPLAN", to: "/topics/naplan" },
          { label: "Writing Program", to: "/topics/writing-program" },
        ],
      },
    ],
  },
  {
    label: "High School",
    to: "/high-school",
    groups: [
      {
        heading: "Years 7-10",
        links: [
          { label: "High School overview", to: "/high-school" },
          { label: "English Tutoring", to: "/topics/high-school-english" },
          { label: "Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "Science Tutoring", to: "/topics/high-school-science" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
  },
  {
    label: "Senior School",
    to: "/senior-school",
    wide: true,
    groups: [
      {
        heading: "English",
        links: [
          { label: "English Studies", to: "/topics/english-studies" },
          { label: "English Std", to: "/topics/english-standard" },
          { label: "English Advanced", to: "/topics/english-advanced" },
          { label: "English Ext 1", to: "/topics/english-extension-1" },
          { label: "English Ext 2", to: "/topics/english-extension-2" },
          { label: "English EAL-D", to: "/topics/english-eal-d" },
        ],
      },
      {
        heading: "Maths",
        links: [
          { label: "Maths Std", to: "/topics/maths-standard" },
          { label: "Maths Std 1", to: "/topics/maths-standard-1" },
          { label: "Maths Std 2", to: "/topics/maths-standard-2" },
          { label: "Maths Advanced", to: "/hsc-maths-advanced" },
          { label: "Maths Ext 1", to: "/topics/maths-extension-1" },
          { label: "Maths Ext 2", to: "/topics/maths-extension-2" },
        ],
      },
      {
        heading: "Science",
        links: [
          { label: "Biology", to: "/topics/biology" },
          { label: "Chemistry", to: "/topics/chemistry" },
          { label: "Physics", to: "/topics/physics" },
          { label: "Earth and Environmental", to: "/topics/earth-and-environmental" },
          { label: "Investigating Science", to: "/topics/investigating-science" },
        ],
      },
    ],
  },
  {
    label: "Exam Prep",
    to: "/exam-prep",
    groups: [
      {
        heading: "Programs",
        links: [
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "OC Prep", to: "/topics/oc-prep" },
          { label: "Writing", to: "/topics/writing-program" },
          { label: "NAPLAN", to: "/topics/naplan" },
          { label: "ICAS", to: "/topics/icas" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
          { label: "Ask Munk", to: "/topics/ask-munk" },
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
        { label: "Our Munks", to: "/our-munks" },
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
