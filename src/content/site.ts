export const brand = {
  name: "TutorMunk",
  tagline: "Premium in-person tutoring in South-West Sydney",
  phone: "1300 00MUNK",
  phoneDial: "1300006865",
  phoneDialDisplay: "1300 006 865",
  email: "hello@tutormunk.com.au",
  centreAddress: "The HUB, 31 Lasso Road, Gregory Hills NSW 2557",
  ratingLine: "4.9 from 73 Google reviews",
};

export type MegaLink = {
  label: string;
  to: string;
  icon: string;
  description?: string | undefined;
};

export type MegaColumn = {
  heading?: string | undefined;
  icon?: string | undefined;
  links: MegaLink[];
};

export type NavItem = {
  label: string;
  to: string;
  panel?: {
    columns: MegaColumn[];
    compact?: boolean;
    width?: "wide" | "extra";
    note: string;
    footerLabel: string;
    footerTo: string;
    /** Icon for the stage-overview footer link, e.g. graduation-cap. */
    footerIcon?: string | undefined;
  };
};

const nesaNote = "All programs are NSW NESA curriculum aligned";

export const primaryNav: NavItem[] = [
  {
    label: "Primary School",
    to: "/primary-school",
    panel: {
      width: "wide",
      note: nesaNote,
      footerLabel: "View all primary school",
      footerTo: "/primary-school",
      footerIcon: "graduation-cap",
      columns: [
        {
          links: [
            {
              label: "English Tutoring",
              to: "/primary-english",
              icon: "book",
              description: "Year 2 to 6 reading, writing and comprehension",
            },
            {
              label: "Maths Tutoring",
              to: "/topics/primary-maths",
              icon: "calculator",
              description: "Number, fractions and word problems to Year 6",
            },
            {
              label: "Selective School Prep",
              to: "/topics/selective-school-prep",
              icon: "trophy",
              description: "Thinking skills and reasoning for the Year 6 test",
            },
          ],
        },
        {
          links: [
            {
              label: "NAPLAN",
              to: "/topics/naplan",
              icon: "clipboard-check",
              description: "Question types and technique for Years 3 and 5",
            },
            {
              label: "Writing Program",
              to: "/topics/writing-program",
              icon: "pen",
              description: "A marked writing piece every week",
            },
            {
              label: "OC Prep",
              to: "/topics/oc-prep",
              icon: "target",
              description: "Timed practice for Opportunity Class placement",
            },
          ],
        },
      ],
    },
  },
  {
    label: "High School",
    to: "/high-school",
    panel: {
      width: "wide",
      note: nesaNote,
      footerLabel: "View all high school",
      footerTo: "/high-school",
      footerIcon: "school",
      columns: [
        {
          links: [
            {
              label: "English Tutoring",
              to: "/topics/high-school-english",
              icon: "book",
              description: "Text analysis and essay structure for Years 7 to 10",
            },
            {
              label: "Maths Tutoring",
              to: "/topics/high-school-maths",
              icon: "calculator",
              description: "Algebra, geometry and trigonometry to Stage 5.3",
            },
          ],
        },
        {
          links: [
            {
              label: "Science Tutoring",
              to: "/topics/high-school-science",
              icon: "flask",
              description: "Working scientifically, plus core biology and chemistry",
            },
            {
              label: "NAPLAN Years 7 and 9",
              to: "/topics/naplan-years-7-and-9",
              icon: "clipboard-check",
              description: "Practice tests with marked writing feedback",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Senior School",
    to: "/senior-school",
    panel: {
      width: "extra",
      compact: true,
      note: nesaNote,
      footerLabel: "View all senior school",
      footerTo: "/senior-school",
      footerIcon: "award",
      columns: [
        {
          heading: "English",
          icon: "book",
          links: [
            { label: "English Studies", to: "/topics/english-studies", icon: "book" },
            { label: "English Std", to: "/topics/english-standard", icon: "book" },
            { label: "English Advanced", to: "/topics/english-advanced", icon: "book" },
            { label: "English Ext 1", to: "/topics/english-extension-1", icon: "book" },
            { label: "English Ext 2", to: "/topics/english-extension-2", icon: "book" },
            { label: "English EAL-D", to: "/topics/english-eal-d", icon: "book" },
          ],
        },
        {
          heading: "Maths",
          icon: "calculator",
          links: [
            { label: "Maths Std", to: "/topics/maths-standard", icon: "calculator" },
            { label: "Maths Std 1", to: "/topics/maths-standard-1", icon: "calculator" },
            { label: "Maths Std 2", to: "/topics/maths-standard-2", icon: "calculator" },
            { label: "Maths Advanced", to: "/hsc-maths-advanced", icon: "calculator" },
            { label: "Maths Ext 1", to: "/topics/maths-extension-1", icon: "calculator" },
            { label: "Maths Ext 2", to: "/topics/maths-extension-2", icon: "calculator" },
          ],
        },
        {
          heading: "Science",
          icon: "flask",
          links: [
            { label: "Biology", to: "/topics/biology", icon: "flask" },
            { label: "Chemistry", to: "/topics/chemistry", icon: "flask" },
            { label: "Physics", to: "/topics/physics", icon: "flask" },
            {
              label: "Earth and Environmental",
              to: "/topics/earth-and-environmental",
              icon: "flask",
            },
            { label: "Investigating Science", to: "/topics/investigating-science", icon: "flask" },
          ],
        },
      ],
    },
  },
  {
    label: "Exam Prep",
    to: "/exam-prep",
    panel: {
      width: "wide",
      note: "Targeted preparation for exams and competitions",
      footerLabel: "View all exam prep",
      footerTo: "/exam-prep",
      columns: [
        {
          links: [
            {
              label: "Selective School Prep",
              to: "/topics/selective-school-prep",
              icon: "trophy",
              description: "Year 5 and 6 practice for the placement test",
            },
            {
              label: "Writing",
              to: "/topics/writing-program",
              icon: "pen",
              description: "Narrative, persuasive and informative writing",
            },
            {
              label: "ICAS",
              to: "/topics/icas",
              icon: "medal",
              description: "Extension style questions in English, Maths and Science",
            },
          ],
        },
        {
          links: [
            {
              label: "OC Prep",
              to: "/topics/oc-prep",
              icon: "target",
              description: "Year 3 and 4 preparation for Opportunity Class",
            },
            {
              label: "NAPLAN",
              to: "/topics/naplan",
              icon: "clipboard-check",
              description: "Years 3, 5, 7 and 9 familiarisation",
            },
            {
              label: "HSC Sprint",
              to: "/topics/hsc-sprint",
              icon: "timer",
              description: "An intensive block before trials and the HSC",
            },
          ],
        },
      ],
    },
  },
  { label: "How It Works", to: "/how-it-works" },
];

// Archived on 16 Aug 2026 at the owner's request. Ask Munk (drop-in,
// on-demand help) is a TutorGator concept, the owner's separate online
// platform. TutorMunk is strictly in person, so it has no place here.
// Not merged into primaryNav above, so it never renders in the Exam Prep
// mega-menu. Kept, not deleted, so it can be restored if it is ever
// needed again.
export const archivedExamPrepMegaLink: MegaLink = {
  label: "Ask Munk",
  to: "/topics/ask-munk",
  icon: "message-circle-question",
  description: "Drop-in homework help at our Gregory Hills centre",
};

export type CallbackField = {
  // Doubles as the POST body key (name, phone, email) and the field's own
  // validation slot in CallbackModal.tsx, not just a display label key.
  name: "name" | "phone" | "email";
  label: string;
  type: "text" | "tel" | "email";
  placeholder: string;
  maxLength: number;
};

export const callbackModal = {
  title: "Request a call",
  intro:
    "Leave your details and one of our team will call you back to talk through your child's needs.",
  fields: [
    { name: "name", label: "Full name", type: "text", placeholder: "Jane Nguyen", maxLength: 80 },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      placeholder: "0412 345 678",
      // The longest legitimate input is "+61 (0) 412 345 678", 19 chars.
      maxLength: 19,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "jane@example.com",
      maxLength: 254,
    },
  ] satisfies CallbackField[],
  submitLabel: "Request a call",
};

// Archived on 18 Aug 2026 to keep the first live version of the Request a
// Call form minimal. Not merged into callbackModal.fields above, so it
// never renders. See archive/2026-08-18-callback-form/README.md for why
// and exactly how to restore it.
export const archivedCallbackTimeField = {
  label: "Best time to call",
  type: "text",
  placeholder: "Weekdays after 4pm",
};

export const footer = {
  blurb:
    "In-person tutoring for K-12 students across South-West Sydney, in your home or at our Gregory Hills centre. We do not run online lessons.",
  // Four columns, not three: About is gone (removed 18 Aug 2026, see
  // src/content/about.ts), and Exam Prep is deliberately not repeated here
  // as its own link, the six exam programs it leads to are already listed
  // individually across columns 1 and 2. 5, 5, 4, 4, eighteen links total,
  // uneven on purpose, not padded to make the last column match.
  columns: [
    {
      heading: "Tutoring",
      links: [
        { label: "Primary School", to: "/primary-school" },
        { label: "High School", to: "/high-school" },
        { label: "Senior School", to: "/senior-school" },
        { label: "Selective Prep", to: "/topics/selective-school-prep" },
        { label: "How It Works", to: "/how-it-works" },
      ],
    },
    {
      heading: "Exam preparation",
      links: [
        { label: "OC Prep", to: "/topics/oc-prep" },
        { label: "Writing", to: "/topics/writing-program" },
        { label: "NAPLAN", to: "/topics/naplan" },
        { label: "ICAS", to: "/topics/icas" },
        { label: "HSC Sprint", to: "/topics/hsc-sprint" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Our Munks", to: "/our-munks" },
        { label: "Locations", to: "/locations" },
        { label: "Testimonials", to: "/testimonials" },
        { label: "Become a Munk", to: "/become-a-tutor" },
      ],
    },
    {
      heading: "More",
      links: [
        { label: "Blog", to: "/blog" },
        { label: "FAQ", to: "/faq" },
        { label: "Contact", to: "/contact" },
        { label: "Policies", to: "/policies" },
      ],
    },
  ],
  legal: "Copyright © TutorMunk Pty Ltd 2026",
};

// Archived on 16 Aug 2026 at the owner's request. Ask Munk (drop-in,
// on-demand help) is a TutorGator concept, the owner's separate online
// platform. TutorMunk is strictly in person, so it has no place here.
// Not merged into footer above, so it never renders in the footer's
// Programs column. Kept, not deleted, so it can be restored if it is
// ever needed again.
export const archivedFooterProgramLink = { label: "Ask Munk", to: "/topics/ask-munk" };

export const deliveryModes = [
  {
    name: "Your home 1-to-1",
    icon: "house",
    setting: "Your home",
    format: "1-to-1",
    detail:
      "A tutor comes to you for a 60-minute session. Full attention on one student, with no travel for the family.",
  },
  {
    name: "Your home group",
    icon: "users",
    setting: "Your home",
    format: "Small group",
    detail:
      "Up to three students, often siblings or neighbours, taught together at your kitchen table.",
  },
  {
    name: "Our centre 1-to-1",
    icon: "building",
    setting: "Our centre",
    format: "1-to-1",
    detail: "Sessions at our Gregory Hills centre, with printed resources and past papers on hand.",
  },
  {
    name: "Our centre group",
    icon: "school",
    setting: "Our centre",
    format: "Small group",
    detail: "Groups of four to six students in the same stage, grouped by ability.",
  },
];

export const talkToUs = {
  eyebrow: "Talk to us",
  heading: "Every family is different.",
  body: "Call us and we will tailor a plan and walk you through the options. We talk through session times, delivery mode and tutor matching on the phone.",
};

export const primaryCta = { label: "Request a Call", modal: true };
