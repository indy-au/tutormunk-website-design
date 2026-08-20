// Real business data (14 Aug 2026). This is the single source of truth for
// the centre and every suburb we serve. Never invent local facts, opening
// hours or room details, see CLAUDE.md.

import { brand } from "./site";

export interface BodySection {
  heading: string;
  paragraphs: string[];
  // Optional: added batch 4 (19 Aug 2026) for the third bodySection only,
  // which pairs suburb-relevant search intent with real topic page links.
  // Rendered as a small link row under the section (TopicRelated.tsx,
  // reused from the topic pages). Max three per section, real routes only.
  links?: { label: string; to: string }[];
}

export interface SuburbLocation {
  slug: string;
  suburbName: string;
  titleTag: string;
  metaDescription: string;
  inHome: boolean;
  centre: boolean;
  /** Internal content guidance only. Never rendered, never a meta keywords tag. */
  targetKeywords: string[];
  heroIntro: string;
  bodySections: BodySection[];
  // Optional: added batch 4 (19 Aug 2026) for the suburb content upgrade,
  // see CLAUDE.md's "Suburb pages" note. entitySentence renders as the
  // first paragraph under the hero (TopicIntro.tsx, reused from the topic
  // pages). faqs render with FaqAccordion + FaqSchema (FAQPage JSON-LD)
  // below the delivery section and above the reviews carousel.
  entitySentence?: string;
  faqs?: { question: string; answer: string }[];
}

export const centre = {
  name: "TutorMunk Gregory Hills",
  address: "The HUB, 31 Lasso Road, Gregory Hills NSW 2557",
  // Reuses brand.phone/phoneDial rather than restating the same digits a
  // second time, so there is one source of truth. phoneDial stays in +61
  // form here (schema.org telephone convention), built from brand's plain
  // national form: a 1300 number's international form is +61 plus the
  // national number as-is, no leading digit to drop (unlike a geographic
  // 02/03/07/08 number, which drops its leading 0).
  phone: brand.phone,
  phoneDial: `+61${brand.phoneDial}`,
  sessionsNote: "Sessions by appointment. Call us to arrange a visit.",
};

export function googleMapsEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export const centreMapEmbedUrl = googleMapsEmbedUrl(centre.address);

// The 23 suburbs we serve with private in-home tutoring. Gregory Hills is
// also home to our centre. Order is alphabetical. Each entry's heroIntro
// and bodySections are written individually, no shared sentences.
export const locations: SuburbLocation[] = [
  {
    slug: "tutoring-in-bickley-vale",
    suburbName: "Bickley Vale",
    titleTag: "In-Home Tutoring in Bickley Vale | TutorMunk",
    metaDescription:
      "In-home tutoring in Bickley Vale for K-12 students, one to one or small group, taught to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in bickley vale",
      "bickley vale tutor",
      "in-home tutoring bickley vale",
      "K-12 tutoring bickley vale NSW",
    ],
    heroIntro:
      "Bickley Vale families book a tutor to come to them. Sessions run one to one or in a small group, at your kitchen table or study, with no drop off and no waiting in the car.",
    entitySentence:
      "TutorMunk tutors Kindergarten to Year 12 students in Bickley Vale, in person, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Bickley Vale.",
        paragraphs: [
          "A tutor working with a Bickley Vale family can cover English, Maths or Science at any stage from Kindergarten to Year 12, plus exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Every tutor holds a Working with Children Check, and a written report follows each 60-minute session.",
        ],
      },
      {
        heading: "How sessions run in Bickley Vale.",
        paragraphs: [
          "In Bickley Vale, sessions are held in the home on a regular weekly time. Families who would rather visit us can book an appointment at our centre, The HUB, 31 Lasso Road, Gregory Hills.",
        ],
      },
      {
        heading: "Popular subjects for Bickley Vale families.",
        paragraphs: [
          "Families searching for a tutor in Bickley Vale are often after primary support first, English and Maths for Kindergarten to Year 6, with NAPLAN familiarisation for Years 3 and 5 along the way. Some are looking further ahead, toward the Year 6 Selective High School Placement Test or the Year 4 Opportunity Class test, both of which include a mathematical reasoning component that regular classroom maths does not cover in the same way. Older students can move into Years 7 to 10 English, Maths and Science, then HSC subjects through the senior years, all with the same tutor coming to the home.",
        ],
        links: [
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "OC Prep", to: "/topics/oc-prep" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do tutors travel to Bickley Vale in the evening?",
        answer:
          "Session times are arranged directly with your tutor and can include after-school and evening slots, depending on availability in the area. Ask about evening times when you book, and we will confirm what is possible for your family.",
      },
      {
        question: "Can we use the Gregory Hills centre instead of a home session?",
        answer:
          "Yes. Families in Bickley Vale can book sessions at our centre, The HUB, 31 Lasso Road, Gregory Hills, by appointment, instead of or alongside in-home tutoring. Group sessions at the centre are capped at six students in the same stage.",
      },
      {
        question: "Which subjects can you tutor at home in Bickley Vale?",
        answer:
          "We tutor English, Maths and Science at home in Bickley Vale, for any year from Kindergarten to Year 12, along with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Sessions run one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-bringelly",
    suburbName: "Bringelly",
    titleTag: "In-Home Tutoring in Bringelly | TutorMunk",
    metaDescription:
      "Private in-home tutoring for Bringelly families, K-12, one to one or small group sessions with no travel required.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in bringelly",
      "bringelly tutor",
      "in-home tutoring bringelly",
      "K-12 tutoring bringelly NSW",
    ],
    heroIntro:
      "In Bringelly, distance to a tutoring centre can be the reason lessons never start. We remove that step and bring the tutor to your home instead, for one to one or small group sessions across K to 12.",
    entitySentence:
      "In Bringelly, TutorMunk's in-person tutoring for Kindergarten to Year 12 students runs in the family home.",
    bodySections: [
      {
        heading: "What we offer in Bringelly.",
        paragraphs: [
          "A Bringelly family can arrange English, Maths or Science tutoring for a child at any stage from Kindergarten to Year 12, taught one to one or in a small group by a WWCC-verified tutor. We also run exam preparation for Selective, OC, NAPLAN and the HSC.",
        ],
      },
      {
        heading: "How sessions run in Bringelly.",
        paragraphs: [
          "Bringelly sessions run in the home at a set weekly time that suits the family. Our centre at The HUB, 31 Lasso Road, Gregory Hills takes bookings by appointment for families who would rather come to us.",
        ],
      },
      {
        heading: "High school support for Bringelly students.",
        paragraphs: [
          "Years 7 to 10 students in Bringelly can work with a tutor on English, Maths or Science, matched to the actual topic and assessment task set by their school. For students moving into Years 11 and 12, we tutor the full range of HSC courses, from English and Maths through to the sciences, with sessions built around the current module and past paper practice. Families preparing for high school itself can also book NAPLAN preparation for Year 7 and Year 9, ahead of the shift from primary to high school assessment.",
        ],
        links: [
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "What session times are available for Bringelly families?",
        answer:
          "Session times are arranged with the tutor matched to your family, and many sessions do run after school hours. Let us know your preferred time when you book and we will confirm what fits.",
      },
      {
        question: "Can Bringelly families use the Gregory Hills centre?",
        answer:
          "Our centre, The HUB, 31 Lasso Road, Gregory Hills, takes bookings by appointment as well as, or instead of, in-home sessions. Small groups there stay to six students from the same stage.",
      },
      {
        question: "Which year levels do you tutor in Bringelly?",
        answer:
          "Every year from Kindergarten to Year 12 is covered in Bringelly, taught in the family home, one to one or in a small group. Each 60-minute session ends with a written report.",
      },
    ],
  },
  {
    slug: "tutoring-in-camden",
    suburbName: "Camden",
    titleTag: "In-Home Tutoring in Camden | TutorMunk",
    metaDescription:
      "TutorMunk provides in-home tutoring in Camden for K-12 students, one to one or in small groups, with written reports after every session.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in camden",
      "camden tutor",
      "in-home tutoring camden",
      "K-12 tutoring camden NSW",
    ],
    heroIntro:
      "Camden families choose in-home tutoring so afternoons are not lost to driving. A WWCC-verified tutor comes to your house for a one to one or small group session, then writes a short note on what was covered.",
    entitySentence:
      "Camden students in Kindergarten to Year 12 are tutored by TutorMunk in person, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Camden.",
        paragraphs: [
          "Camden students have access to English, Maths and Science tutoring at every stage of school, along with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Every session runs for 60 minutes, one to one or in a small group, with a WWCC-verified tutor.",
        ],
      },
      {
        heading: "How sessions run in Camden.",
        paragraphs: [
          "Most Camden families book their tutor for a session at home. For a change of setting, our centre at The HUB, 31 Lasso Road, Gregory Hills takes bookings by appointment.",
        ],
      },
      {
        heading: "HSC tutoring for Camden students.",
        paragraphs: [
          "Camden has a large number of Year 11 and 12 students working toward the HSC, and we tutor across English, Maths and the sciences, matched to the specific course a student is enrolled in, from HSC English Advanced through to HSC Chemistry and HSC Maths Standard 2. Sessions work through the current module, mark responses against the NESA criteria, and build up to timed past paper practice as trials and the HSC approach. Families with younger children can also book Selective School or OC test preparation well before the senior years.",
        ],
        links: [
          { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
          { label: "HSC Maths Standard 2 Tutoring", to: "/topics/maths-standard-2" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can sessions run after school in Camden?",
        answer:
          "Many Camden sessions run after school or in the early evening, depending on the tutor matched to your family. Tell us your preferred time when you book and we will confirm availability.",
      },
      {
        question: "Can we use the Gregory Hills centre instead of a home session in Camden?",
        answer:
          "By appointment, Camden families can book at The HUB, 31 Lasso Road, Gregory Hills, instead of or alongside in-home tutoring. Groups there are kept to six students from the same stage.",
      },
      {
        question: "Do you tutor HSC subjects in Camden?",
        answer:
          "The full range of HSC English, Maths and Science courses is available to Camden students, in the home or at our Gregory Hills centre. Every session, one to one or small group, ends with a written report.",
      },
    ],
  },
  {
    slug: "tutoring-in-camden-south",
    suburbName: "Camden South",
    titleTag: "In-Home Tutoring in Camden South | TutorMunk",
    metaDescription:
      "In-home tutoring in Camden South for Kindergarten to Year 12, covering English, Maths, Science and exam preparation.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in camden south",
      "camden south tutor",
      "in-home tutoring camden south",
      "K-12 tutoring camden south NSW",
    ],
    heroIntro:
      "We tutor students across Camden South in their own home, one to one or in a small group. Every session follows the NESA syllabus and your child's current school work, from Kindergarten through to the HSC.",
    entitySentence:
      "TutorMunk's in-person, Kindergarten to Year 12 tutoring for Camden South is delivered in the family home.",
    bodySections: [
      {
        heading: "What we offer in Camden South.",
        paragraphs: [
          "A Camden South student can work with a tutor on English, Maths or Science at any stage from Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN and the HSC alongside regular subject tutoring. Every session runs for 60 minutes, with a written report to follow.",
        ],
      },
      {
        heading: "How sessions run in Camden South.",
        paragraphs: [
          "Camden South sessions are held in the home each week, on a time that suits the family. Booking a session at our centre, The HUB, 31 Lasso Road, Gregory Hills, is also an option, by appointment.",
        ],
      },
      {
        heading: "NAPLAN and primary tutoring in Camden South.",
        paragraphs: [
          "A good number of families in Camden South start with primary English and Maths, building the reading, writing and number skills a child needs before NAPLAN in Year 3 and Year 5. We also run a separate writing program, covering narrative, persuasive and informative styles with marked feedback each week, useful for NAPLAN writing as well as regular school tasks. As children move up, the same tutor can continue into Years 7 to 10 subjects and, eventually, HSC preparation. Families often start with just one of these areas and add the other once a weekly routine is settled.",
        ],
        links: [
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
          { label: "Writing Program", to: "/topics/writing-program" },
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
        ],
      },
    ],
    faqs: [
      {
        question: "How flexible are session times in Camden South?",
        answer:
          "Evening sessions are often possible, depending on the tutor matched to your family and their current availability. Let us know your preferred time when you book and we will confirm what can be arranged.",
      },
      {
        question: "Can we visit the Gregory Hills centre instead of a home session?",
        answer:
          "Bookings for The HUB, 31 Lasso Road, Gregory Hills, run by appointment, as an alternative or an addition to home tutoring for Camden South families. Groups held there stay to six students from the same stage.",
      },
      {
        question: "What can a tutor cover at home in Camden South?",
        answer:
          "Home tutoring in Camden South spans English, Maths and Science for any year from Kindergarten to Year 12, plus Selective, OC, NAPLAN and HSC exam preparation, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-catherine-field",
    suburbName: "Catherine Field",
    titleTag: "In-Home Tutoring in Catherine Field | TutorMunk",
    metaDescription:
      "Private tutoring at home in Catherine Field, K-12, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in catherine field",
      "catherine field tutor",
      "in-home tutoring catherine field",
      "K-12 tutoring catherine field NSW",
    ],
    heroIntro:
      "Families in Catherine Field book sessions at home rather than travelling to a centre. A tutor works through the syllabus your child is studying at school, with a written note sent after each session.",
    entitySentence:
      "For Catherine Field families, TutorMunk provides in-person tutoring, Kindergarten to Year 12, at home.",
    bodySections: [
      {
        heading: "What we offer in Catherine Field.",
        paragraphs: [
          "Catherine Field students can be tutored in English, Maths and Science from Kindergarten to Year 12, alongside Selective, OC, NAPLAN, ICAS and HSC exam preparation. A WWCC-verified tutor runs each session one to one or in a small group.",
        ],
      },
      {
        heading: "How sessions run in Catherine Field.",
        paragraphs: [
          "In Catherine Field, sessions are held at home on a regular weekly time. Our centre, The HUB, 31 Lasso Road, Gregory Hills, is also available by appointment for families who would prefer to visit.",
        ],
      },
      {
        heading: "Exam preparation for Catherine Field students.",
        paragraphs: [
          "Catherine Field families often ask about exam preparation alongside regular tutoring, from ICAS, the optional competition-style assessment sat at school, through to Selective School and Opportunity Class placement test preparation for students in primary school. High school students can prepare for NAPLAN in Years 7 and 9, and senior students can book an HSC Sprint, a short block of sessions built around past papers before trials and the HSC. Every program runs at the same 60-minute session length, one to one or in a small group. Families often begin with one program and add another once the first is settled into the weekly routine.",
        ],
        links: [
          { label: "ICAS Preparation", to: "/topics/icas" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is evening tutoring available in Catherine Field?",
        answer:
          "Evening sessions can often be arranged, depending on tutor availability in the area. Let us know the time that suits your family when you book and we will confirm what is possible.",
      },
      {
        question: "Is the Gregory Hills centre available to Catherine Field families?",
        answer:
          "Catherine Field families can book The HUB, 31 Lasso Road, Gregory Hills, by appointment, on top of or instead of sessions at home. No more than six students from the same stage join a group there.",
      },
      {
        question: "Which exams can you help prepare for in Catherine Field?",
        answer:
          "Selective test, OC test, NAPLAN, ICAS and HSC preparation are all available to Catherine Field students, one to one or in a small group, at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-cawdor",
    suburbName: "Cawdor",
    titleTag: "In-Home Tutoring in Cawdor | TutorMunk",
    metaDescription:
      "In-home tutoring in Cawdor for K-12 students, one to one or in small groups, with a tutor who comes to you.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in cawdor",
      "cawdor tutor",
      "in-home tutoring cawdor",
      "K-12 tutoring cawdor NSW",
    ],
    heroIntro:
      "Cawdor is one of the areas where we tutor entirely in the home. There is no centre to drive to nearby, just a tutor at your table each week for a one to one or small group session.",
    entitySentence:
      "TutorMunk's Kindergarten to Year 12 tutoring reaches Cawdor students in person, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Cawdor.",
        paragraphs: [
          "In Cawdor, English, Maths and Science tutoring is available for any year level, together with exam preparation for Selective, OC, NAPLAN and the HSC. Each 60-minute session runs one to one or in a small group, with a report sent afterwards.",
        ],
      },
      {
        heading: "How sessions run in Cawdor.",
        paragraphs: [
          "Cawdor does not have a centre nearby, so tutoring runs in the home. A change of setting is still possible: our centre, The HUB, 31 Lasso Road, Gregory Hills, is open by appointment.",
        ],
      },
      {
        heading: "Years 7 to 10 tutoring for Cawdor students.",
        paragraphs: [
          "High school students in Cawdor can work with a tutor on English, Maths or Science across Years 7 to 10, matched to the current school topic and any upcoming assessment task. NAPLAN preparation is also available for Year 7 and Year 9 students, in the same question formats and timing used on test day. Younger Cawdor students can start with primary English and Maths, and senior students can move into HSC subject tutoring when the time comes. Many families start with the core subjects and add exam preparation once the tutor and child have settled into a routine.",
        ],
        links: [
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
          { label: "High School Science Tutoring", to: "/topics/high-school-science" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we choose a regular weekly time in Cawdor?",
        answer:
          "Session times depend on the tutor matched to your family, and evening slots are often available. Tell us your preferred time when you book and we will confirm what can be arranged.",
      },
      {
        question: "Is the centre an option for Cawdor families?",
        answer:
          "A session at The HUB, 31 Lasso Road, Gregory Hills, can be booked by appointment, on top of or in place of tutoring at home for Cawdor families. Groups there hold no more than six students from one stage.",
      },
      {
        question: "What does home tutoring in Cawdor include?",
        answer:
          "English, Maths and Science are all tutored at home in Cawdor, for any year level, with Selective, OC, NAPLAN and HSC exam preparation available too, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-cobbitty",
    suburbName: "Cobbitty",
    titleTag: "In-Home Tutoring in Cobbitty | TutorMunk",
    metaDescription:
      "TutorMunk tutors Cobbitty students at home, K-12, one to one or small group, in English, Maths and Science.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in cobbitty",
      "cobbitty tutor",
      "in-home tutoring cobbitty",
      "K-12 tutoring cobbitty NSW",
    ],
    heroIntro:
      "In Cobbitty, we send a tutor to your home rather than asking your family to travel. Sessions cover English, Maths and Science from Kindergarten to Year 12, taught one to one or in a small group.",
    entitySentence:
      "In-person tutoring for Kindergarten to Year 12 students is available from TutorMunk in Cobbitty, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Cobbitty.",
        paragraphs: [
          "Cobbitty students can be tutored in English, Maths and Science from Kindergarten through to Year 12, with exam preparation available for Selective, OC, NAPLAN, ICAS and the HSC. Every tutor is WWCC-verified, and a written report follows each session.",
        ],
      },
      {
        heading: "How sessions run in Cobbitty.",
        paragraphs: [
          "Home sessions are the usual choice for Cobbitty families. A visit to our centre, The HUB, 31 Lasso Road, Gregory Hills, can also be arranged by appointment.",
        ],
      },
      {
        heading: "Senior tutoring for Cobbitty students.",
        paragraphs: [
          "Cobbitty students heading into Year 11 and Year 12 can work with a tutor across the full range of HSC courses, English, Maths and the sciences, with sessions marked against the NESA criteria and built around past papers as trials approach. In the years before that, Years 7 to 10 tutoring keeps pace with the current school topic in English, Maths or Science. Families with a Year 12 student in the final stretch can also book an HSC Sprint, a short block of sessions before trials and the HSC itself. A senior student can move between subjects within the same block of sessions if more than one course needs attention before an assessment.",
        ],
        links: [
          { label: "Senior School", to: "/senior-school" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer sessions outside school hours in Cobbitty?",
        answer:
          "Evening availability depends on the tutor matched to your family, and many sessions do run after school hours. Mention your preferred time when you book so we can try to fit it in.",
      },
      {
        question: "Do Cobbitty families have to choose between home tutoring and the centre?",
        answer:
          "The HUB, 31 Lasso Road, Gregory Hills, takes appointment bookings for Cobbitty families, whether alongside or instead of home tutoring. Groups there are capped at six students from the same stage.",
      },
      {
        question: "Is HSC tutoring available in Cobbitty?",
        answer:
          "Cobbitty students can access the full range of HSC English, Maths and Science courses, one to one or in a small group, at home or at our Gregory Hills centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-currans-hill",
    suburbName: "Currans Hill",
    titleTag: "In-Home Tutoring in Currans Hill | TutorMunk",
    metaDescription:
      "In-home tutoring in Currans Hill for K-12 students, one to one or small group, with weekly written reports.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in currans hill",
      "currans hill tutor",
      "in-home tutoring currans hill",
      "K-12 tutoring currans hill NSW",
    ],
    heroIntro:
      "We know Currans Hill families juggle more than one school run, so we bring the tutoring to you. A tutor works at your home on a set day each week, one to one or in a small group of up to three.",
    entitySentence:
      "TutorMunk provides Currans Hill families with in-person, Kindergarten to Year 12 tutoring in the home.",
    bodySections: [
      {
        heading: "What we offer in Currans Hill.",
        paragraphs: [
          "A tutor in Currans Hill can cover English, Maths or Science at any stage of school, with exam preparation for Selective, OC, NAPLAN and the HSC on top of regular subject tutoring. Every session runs for 60 minutes, one to one or in a small group.",
        ],
      },
      {
        heading: "How sessions run in Currans Hill.",
        paragraphs: [
          "Weekly sessions run in Currans Hill homes on a set day and time. Booking at our centre, The HUB, 31 Lasso Road, Gregory Hills, by appointment, is also available to families.",
        ],
      },
      {
        heading: "Primary English and Maths tutoring in Currans Hill.",
        paragraphs: [
          "Many Currans Hill families start with primary English and Maths, building reading, writing and number skills against the NSW syllabus for whichever year a child is in. Test preparation is also available for families considering the Year 6 Selective High School Placement Test or the Year 4 Opportunity Class test, both of which need practice with question styles that regular classroom work does not always cover. As children get older, the same tutor can continue through Years 7 to 10 and into HSC subjects. The same tutor can often support more than one subject in Currans Hill, moving between them as school assessments change through the term.",
        ],
        links: [
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
          { label: "Primary English Tutoring", to: "/primary-english" },
          { label: "OC Prep", to: "/topics/oc-prep" },
        ],
      },
    ],
    faqs: [
      {
        question: "What times can a tutor visit in Currans Hill?",
        answer:
          "Many Currans Hill sessions run after school, and evening times are often possible depending on the tutor matched to your family. Booking includes a chance to say what time works best.",
      },
      {
        question: "Is there an alternative to home tutoring for Currans Hill families?",
        answer:
          "Currans Hill families can arrange an appointment at The HUB, 31 Lasso Road, Gregory Hills, either instead of or in addition to home tutoring. Six students from the same stage is the most a group there holds.",
      },
      {
        question: "What subjects are available for Currans Hill families?",
        answer:
          "At home in Currans Hill, tutoring covers English, Maths and Science for any stage of school, alongside Selective, OC, NAPLAN and HSC exam preparation, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-elderslie",
    suburbName: "Elderslie",
    titleTag: "In-Home Tutoring in Elderslie | TutorMunk",
    metaDescription:
      "Private in-home tutoring in Elderslie, Kindergarten to Year 12, one to one or in a small group.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in elderslie",
      "elderslie tutor",
      "in-home tutoring elderslie",
      "K-12 tutoring elderslie NSW",
    ],
    heroIntro:
      "Elderslie students are tutored at home, on a regular weekly time that suits the family. Sessions are one to one or small group, and every subject is taught against the current NESA syllabus.",
    entitySentence:
      "TutorMunk tutors Elderslie students from Kindergarten to Year 12, in person, at home.",
    bodySections: [
      {
        heading: "What we offer in Elderslie.",
        paragraphs: [
          "In Elderslie, English, Maths and Science tutoring covers every year from Kindergarten to Year 12, with exam preparation available for Selective, OC, NAPLAN, ICAS and the HSC alongside it. Every tutor holds a current Working with Children Check, and a report follows each 60-minute session.",
        ],
      },
      {
        heading: "How sessions run in Elderslie.",
        paragraphs: [
          "Elderslie sessions are held at home on the same day and time each week, for consistency. Coming to us instead is also an option: our centre, The HUB, 31 Lasso Road, Gregory Hills, is open by appointment.",
        ],
      },
      {
        heading: "Selective, OC and NAPLAN preparation in Elderslie.",
        paragraphs: [
          "Elderslie families preparing for a placement test can book Selective School preparation for the Year 6 test or Opportunity Class preparation for the Year 4 test, both built around timed practice in Reading, Mathematical Reasoning and Thinking Skills. NAPLAN preparation is available for Year 3 and Year 5 students, and again for Year 7 and Year 9 once a child reaches high school. ICAS preparation is also available for families wanting an extension option beyond the regular classroom. Families often start with one placement test and add NAPLAN or ICAS preparation later, once the first program is underway.",
        ],
        links: [
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "OC Prep", to: "/topics/oc-prep" },
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
        ],
      },
    ],
    faqs: [
      {
        question: "Are evening sessions possible in Elderslie?",
        answer:
          "Evening sessions can often be arranged, depending on the tutor matched to your family and their current availability. Say what time works when you book and we will match it where we can.",
      },
      {
        question: "Does the Gregory Hills centre take Elderslie families as well?",
        answer:
          "Elderslie families can book by appointment at The HUB, 31 Lasso Road, Gregory Hills, whether that replaces or adds to tutoring at home. A group there is limited to six students from one stage.",
      },
      {
        question: "Which exams can you prepare for in Elderslie?",
        answer:
          "Elderslie students preparing for the Selective test, the OC test, NAPLAN, ICAS or the HSC are taught one to one or in a small group, either at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-ellis-lane",
    suburbName: "Ellis Lane",
    titleTag: "In-Home Tutoring in Ellis Lane | TutorMunk",
    metaDescription:
      "In-home tutoring for Ellis Lane families, K-12, one to one or small group sessions to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in ellis lane",
      "ellis lane tutor",
      "in-home tutoring ellis lane",
      "K-12 tutoring ellis lane NSW",
    ],
    heroIntro:
      "For families in Ellis Lane, we run every session in the home. A tutor arrives at the same time each week for a one to one or small group lesson, with a short report sent afterwards.",
    entitySentence:
      "TutorMunk's in-person tutoring, Kindergarten to Year 12, is available to Ellis Lane families in the home.",
    bodySections: [
      {
        heading: "What we offer in Ellis Lane.",
        paragraphs: [
          "An Ellis Lane family can book English, Maths or Science tutoring for a child at any year level, with Selective, OC, NAPLAN and HSC exam preparation available alongside it. Every session runs one to one or in a small group, with a written report to follow.",
        ],
      },
      {
        heading: "How sessions run in Ellis Lane.",
        paragraphs: [
          "Ellis Lane students are tutored at home each week, on a time that suits the family. Our centre, The HUB, 31 Lasso Road, Gregory Hills, takes bookings by appointment for families who would rather come to us.",
        ],
      },
      {
        heading: "High school English, Maths and Science in Ellis Lane.",
        paragraphs: [
          "Ellis Lane students in Years 7 to 10 can work with a tutor on English, Maths or Science, built around the current school topic and the specific assessment task coming up. NAPLAN preparation is also available for Year 7 and Year 9, in the same format and timing students see on test day. For families with a child heading toward Year 11 and 12, the same tutor can continue into HSC subject tutoring when the time comes. The same tutor typically stays with a family as a child moves from one high school year to the next in Ellis Lane.",
        ],
        links: [
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can Ellis Lane sessions be booked for a set weekly time?",
        answer:
          "Session times depend on the tutor matched to your family, and evening slots are often possible. When you book, let us know what time suits, and we will do what we can to match it.",
      },
      {
        question: "Can Ellis Lane book a session at the centre?",
        answer:
          "An appointment at The HUB, 31 Lasso Road, Gregory Hills, is available to Ellis Lane families, whether in place of or alongside home tutoring. Groups there stay at six students from the same stage or fewer.",
      },
      {
        question: "What does a tutor cover for Ellis Lane students?",
        answer:
          "Ellis Lane home tutoring covers English, Maths and Science at any year level, with Selective, OC, NAPLAN and HSC exam preparation available alongside it, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-gledswood-hills",
    suburbName: "Gledswood Hills",
    titleTag: "In-Home Tutoring in Gledswood Hills | TutorMunk",
    metaDescription:
      "TutorMunk provides in-home tutoring in Gledswood Hills, K-12, one to one or in small groups.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in gledswood hills",
      "gledswood hills tutor",
      "in-home tutoring gledswood hills",
      "K-12 tutoring gledswood hills NSW",
    ],
    heroIntro:
      "Gledswood Hills families book in-home tutoring so there is one less trip in the week. A tutor comes to your house for a one to one or small group session in English, Maths, Science or exam preparation.",
    entitySentence:
      "In Gledswood Hills, TutorMunk tutors Kindergarten to Year 12 students in person, at home.",
    bodySections: [
      {
        heading: "What we offer in Gledswood Hills.",
        paragraphs: [
          "Gledswood Hills students can be tutored in English, Maths and Science from Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC available alongside regular subject tutoring. Every session runs one to one or in a small group, for 60 minutes.",
        ],
      },
      {
        heading: "How sessions run in Gledswood Hills.",
        paragraphs: [
          "Gledswood Hills sessions are usually held at home. Our centre, The HUB, 31 Lasso Road, Gregory Hills, is close by and takes bookings by appointment for families who would rather visit.",
        ],
      },
      {
        heading: "HSC tutoring for Gledswood Hills students.",
        paragraphs: [
          "Senior students in Gledswood Hills can work with a tutor across HSC English, Maths and Science courses, with sessions marked against the NESA criteria and timed past paper practice building through Year 11 and into the trials and HSC. Years 7 to 10 students keep pace with the current school topic in the lead-up to those senior years. Families can also book an HSC Sprint in the final weeks before trials or the HSC, a short block of sessions built around past papers. A single tutor can often see a Gledswood Hills student through from Years 7 to 10 tutoring into HSC subjects, without a change partway through.",
        ],
        links: [
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
          { label: "Senior School", to: "/senior-school" },
          { label: "High School Science Tutoring", to: "/topics/high-school-science" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is after-school tutoring available in Gledswood Hills?",
        answer:
          "Evening sessions are often possible, depending on the tutor matched to your family and their current schedule. Flag your preferred time when you book and we will see what can be arranged.",
      },
      {
        question: "Can Gledswood Hills families book a session at the centre?",
        answer:
          "Gledswood Hills families can arrange an appointment at The HUB, 31 Lasso Road, Gregory Hills, instead of or alongside tutoring at home. A group there is capped at six, all from the same stage.",
      },
      {
        question: "Can Gledswood Hills students get HSC tutoring?",
        answer:
          "Gledswood Hills students can work through the full range of HSC English, Maths and Science courses, one to one or in a small group, at home or at our nearby Gregory Hills centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-grasmere",
    suburbName: "Grasmere",
    titleTag: "In-Home Tutoring in Grasmere | TutorMunk",
    metaDescription:
      "In-home tutoring in Grasmere for K-12 students, one to one or small group, with a tutor who comes to your home.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in grasmere",
      "grasmere tutor",
      "in-home tutoring grasmere",
      "K-12 tutoring grasmere NSW",
    ],
    heroIntro:
      "We tutor in Grasmere homes rather than running a centre in every suburb. A tutor sits down with your child at your own table, one to one or in a small group, on a regular weekly time.",
    entitySentence:
      "TutorMunk provides Grasmere families with Kindergarten to Year 12 tutoring, in person, at home.",
    bodySections: [
      {
        heading: "What we offer in Grasmere.",
        paragraphs: [
          "Grasmere students can be tutored in English, Maths and Science from Kindergarten through to Year 12, alongside exam preparation for Selective, OC, NAPLAN and the HSC. Every tutor is WWCC-verified and sends a written report after each session.",
        ],
      },
      {
        heading: "How sessions run in Grasmere.",
        paragraphs: [
          "In Grasmere, tutoring runs in the home on a regular weekly time that suits the family. A session at our centre, The HUB, 31 Lasso Road, Gregory Hills, can also be booked by appointment.",
        ],
      },
      {
        heading: "Primary tutoring and test preparation in Grasmere.",
        paragraphs: [
          "Primary families in Grasmere often start with English and Maths tutoring, building reading, writing and number skills a year at a time against the NSW syllabus. From there, some families move into Selective School or Opportunity Class placement test preparation, both of which include a mathematical reasoning component beyond regular classroom work. NAPLAN familiarisation is also available for Year 3 and Year 5, and the writing program covers narrative, persuasive and informative styles with marked feedback each week. Families in Grasmere often begin with one subject and add a second, or move into test preparation, once the first is settled.",
        ],
        links: [
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "Writing Program", to: "/topics/writing-program" },
        ],
      },
    ],
    faqs: [
      {
        question: "What time of day do sessions usually run in Grasmere?",
        answer:
          "Many Grasmere sessions run after school, and evening times can often be arranged depending on the tutor matched to your family. Your preferred time is worth mentioning when you book.",
      },
      {
        question: "Is a centre session an option for Grasmere families?",
        answer:
          "Grasmere families are free to book The HUB, 31 Lasso Road, Gregory Hills, by appointment, either alongside or in place of home tutoring. A group there does not exceed six students from the same stage.",
      },
      {
        question: "What can Grasmere families book a tutor for?",
        answer:
          "Grasmere home tutoring spans English, Maths and Science from Kindergarten to Year 12, with Selective, OC, NAPLAN and HSC exam preparation on offer too, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-gregory-hills",
    suburbName: "Gregory Hills",
    titleTag: "In-Home Tutoring in Gregory Hills | TutorMunk",
    metaDescription:
      "In-home tutoring in Gregory Hills, plus sessions at our TutorMunk centre at The HUB, for K-12 students.",
    inHome: true,
    centre: true,
    targetKeywords: [
      "tutoring in gregory hills",
      "gregory hills tutor",
      "in-home tutoring gregory hills",
      "K-12 tutoring gregory hills NSW",
    ],
    heroIntro:
      "Gregory Hills is home to our TutorMunk centre at The HUB, so local families can choose in-home sessions or bring their child to us. Either way, sessions are one to one or small group and follow the NESA syllabus.",
    entitySentence:
      "TutorMunk provides in-person tutoring for Kindergarten to Year 12 students in Gregory Hills, in the family home and at our centre.",
    bodySections: [
      {
        heading: "What we offer in Gregory Hills.",
        paragraphs: [
          "Gregory Hills families have English, Maths and Science tutoring available for every stage from Kindergarten to Year 12, plus exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Sessions run one to one or in a small group, at home or at our centre.",
        ],
      },
      {
        heading: "How sessions run in Gregory Hills.",
        paragraphs: [
          "Being right here in Gregory Hills, our centre at The HUB, 31 Lasso Road gives local families the choice of visiting us or booking a tutor for the home instead. Centre sessions are by appointment, with groups capped at six students in the same stage.",
        ],
      },
      {
        heading: "HSC tutoring at our Gregory Hills centre.",
        paragraphs: [
          "Local Gregory Hills families are well placed to use our centre directly, whether that is for a senior student working through HSC English, Maths or Science with timed past paper practice, or a younger child in a small group session with others at the same stage. Years 7 to 10 students can keep pace with school topics in the same setting, and families preparing for Selective School or the HSC Sprint can book those programs here as well. Home sessions remain available too, for families who prefer that. Being able to switch between home and centre sessions partway through a term is straightforward for local families.",
        ],
        links: [
          { label: "Senior School", to: "/senior-school" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can Gregory Hills sessions be booked in the evening?",
        answer:
          "Evening sessions are often possible, whether at our centre or in the home, depending on the tutor matched to your family. Mention a preferred time when booking and we will do our best to match it.",
      },
      {
        question: "Can we book sessions at the centre rather than at home in Gregory Hills?",
        answer:
          "Yes, being local to Gregory Hills, many families choose to visit our centre at The HUB, 31 Lasso Road directly, by appointment. Group sessions there are capped at six students in the same stage.",
      },
      {
        question: "Which subjects can you tutor in Gregory Hills?",
        answer:
          "We tutor English, Maths and Science for Kindergarten to Year 12 in Gregory Hills, plus Selective, OC, NAPLAN, ICAS and HSC exam preparation, at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-harrington-park",
    suburbName: "Harrington Park",
    titleTag: "In-Home Tutoring in Harrington Park | TutorMunk",
    metaDescription:
      "Private tutoring at home in Harrington Park, K-12, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in harrington park",
      "harrington park tutor",
      "in-home tutoring harrington park",
      "K-12 tutoring harrington park NSW",
    ],
    heroIntro:
      "In Harrington Park, we tutor at your kitchen table instead of asking you to drive to a centre. A tutor works through the current school topic, one to one or in a small group, and reports back after every session.",
    entitySentence:
      "For Harrington Park students, TutorMunk's Kindergarten to Year 12 tutoring runs in person, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Harrington Park.",
        paragraphs: [
          "A Harrington Park student can work with a tutor on English, Maths or Science at any year level, with exam preparation for Selective, OC, NAPLAN and the HSC available on top of regular subjects. Every session runs for 60 minutes, one to one or in a small group, with a report to follow.",
        ],
      },
      {
        heading: "How sessions run in Harrington Park.",
        paragraphs: [
          "Most families in Harrington Park book a session at home, on a weekly time that suits them. Visiting our centre, The HUB, 31 Lasso Road, Gregory Hills, is also possible, by appointment.",
        ],
      },
      {
        heading: "Selective, OC and ICAS preparation for Harrington Park.",
        paragraphs: [
          "Harrington Park families preparing for a placement test can book Selective School preparation ahead of the Year 6 test, or Opportunity Class preparation ahead of the Year 4 test, both built around timed practice sections. ICAS preparation is also available for students sitting the optional, competition-style assessment offered through school. NAPLAN familiarisation runs for Year 3 and Year 5 students, and again for Year 7 and Year 9 once a child moves into high school. Families in Harrington Park often start with one program, such as Selective preparation, and add NAPLAN or ICAS once that is underway.",
        ],
        links: [
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "ICAS Preparation", to: "/topics/icas" },
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer evening sessions in Harrington Park?",
        answer:
          "Evening sessions can often be arranged depending on the tutor matched to your family. Booking is the time to flag which hours suit your family best.",
      },
      {
        question: "Can Harrington Park families visit the centre instead?",
        answer:
          "Harrington Park families can book by appointment at The HUB, 31 Lasso Road, Gregory Hills, either in place of or on top of home tutoring. Groups there hold six students from the same stage at most.",
      },
      {
        question: "What exam preparation is available in Harrington Park?",
        answer:
          "Selective, OC, NAPLAN, ICAS and HSC preparation are all available to Harrington Park students, one to one or in a small group, either at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-kirkham",
    suburbName: "Kirkham",
    titleTag: "In-Home Tutoring in Kirkham | TutorMunk",
    metaDescription:
      "In-home tutoring in Kirkham for K-12 students, one to one or in small groups, with written reports to parents.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in kirkham",
      "kirkham tutor",
      "in-home tutoring kirkham",
      "K-12 tutoring kirkham NSW",
    ],
    heroIntro:
      "Kirkham families choose us because the tutor comes to them. Sessions run one to one or in a small group, in your own home, for every stage from Kindergarten to the HSC.",
    entitySentence:
      "TutorMunk tutors Kirkham students, Kindergarten to Year 12, in person, in their own home.",
    bodySections: [
      {
        heading: "What we offer in Kirkham.",
        paragraphs: [
          "Kirkham students can be tutored in English, Maths and Science across every stage from Kindergarten to Year 12, with Selective, OC, NAPLAN, ICAS and HSC exam preparation available too. Every tutor holds a current Working with Children Check.",
        ],
      },
      {
        heading: "How sessions run in Kirkham.",
        paragraphs: [
          "Kirkham students are tutored at home on a set weekly time, for consistency. Our centre, The HUB, 31 Lasso Road, Gregory Hills, is close by and takes bookings by appointment.",
        ],
      },
      {
        heading: "High school subject tutoring in Kirkham.",
        paragraphs: [
          "Kirkham students in Years 7 to 10 can work with a tutor on English, Maths or Science, matched to the exact topic and assessment task their school has set. Sessions build directly on class notes rather than a separate workbook, so tutoring reinforces what is already being taught. NAPLAN preparation is available for Year 7 and Year 9, and students moving into senior years can continue with the same tutor into HSC subject tutoring. The same tutor can usually continue with a Kirkham student from Years 7 to 10 straight through into HSC subject tutoring.",
        ],
        links: [
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "High School Science Tutoring", to: "/topics/high-school-science" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do we arrange a regular session time in Kirkham?",
        answer:
          "Many Kirkham sessions run after school, with evening times often available depending on the tutor matched to your family. Mention your preferred time when you book so we can try to match it.",
      },
      {
        question: "Does the centre take bookings from Kirkham families?",
        answer:
          "Booking The HUB, 31 Lasso Road, Gregory Hills, by appointment is open to Kirkham families, whether that replaces or adds to home tutoring. A group there is capped at six students from one stage.",
      },
      {
        question: "What subjects does home tutoring in Kirkham cover?",
        answer:
          "Kirkham home tutoring covers English, Maths and Science from Kindergarten to Year 12, with Selective, OC, NAPLAN, ICAS and HSC exam preparation also available, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-leppington",
    suburbName: "Leppington",
    titleTag: "In-Home Tutoring in Leppington | TutorMunk",
    metaDescription:
      "TutorMunk tutors Leppington students at home, Kindergarten to Year 12, one to one or in small groups.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in leppington",
      "leppington tutor",
      "in-home tutoring leppington",
      "K-12 tutoring leppington NSW",
    ],
    heroIntro:
      "We tutor students across Leppington in their own home, on a set day and time each week. Sessions are one to one or small group, with a written report sent to parents afterwards.",
    entitySentence:
      "In Leppington, TutorMunk provides in-person, Kindergarten to Year 12 tutoring in the family home.",
    bodySections: [
      {
        heading: "What we offer in Leppington.",
        paragraphs: [
          "Leppington students have access to English, Maths and Science tutoring across every stage of school, with exam preparation for Selective, OC, NAPLAN and the HSC alongside it. Sessions run for 60 minutes, one to one or in a small group, with a written report each time.",
        ],
      },
      {
        heading: "How sessions run in Leppington.",
        paragraphs: [
          "Home is where most Leppington sessions are held. A visit to our centre, The HUB, 31 Lasso Road, Gregory Hills, can also be booked by appointment, for families who prefer that setting.",
        ],
      },
      {
        heading: "Primary English and Maths in Leppington.",
        paragraphs: [
          "Leppington is home to a lot of young families, and primary English and Maths tutoring is often the starting point, working through the NSW syllabus at a child's own pace. Selective School and Opportunity Class preparation are available for families thinking ahead to those placement tests, alongside NAPLAN familiarisation for Year 3 and Year 5. The same tutor can continue with a child as they move into Years 7 to 10 and, later, HSC subjects. Families in Leppington often begin with one subject and expand into test preparation once a weekly routine is in place.",
        ],
        links: [
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
          { label: "OC Prep", to: "/topics/oc-prep" },
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is there flexibility around session times in Leppington?",
        answer:
          "Evening sessions can often be arranged, depending on the tutor matched to your family and their current schedule. Mentioning a preferred time when you book helps us match the right tutor.",
      },
      {
        question: "Does the Gregory Hills centre suit Leppington families too?",
        answer:
          "Leppington families can arrange an appointment at The HUB, 31 Lasso Road, Gregory Hills, in place of or alongside home tutoring. Groups there hold no more than six students from the same stage.",
      },
      {
        question: "What can a Leppington family book tutoring in?",
        answer:
          "Leppington home tutoring spans English, Maths and Science across every stage of school, with Selective, OC, NAPLAN and HSC exam preparation available too, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-mount-annan",
    suburbName: "Mount Annan",
    titleTag: "In-Home Tutoring in Mount Annan | TutorMunk",
    metaDescription:
      "In-home tutoring in Mount Annan for K-12 students, covering English, Maths, Science and exam preparation.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in mount annan",
      "mount annan tutor",
      "in-home tutoring mount annan",
      "K-12 tutoring mount annan NSW",
    ],
    heroIntro:
      "Mount Annan families book a tutor for their home rather than travelling to a centre after school. Every session is one to one or small group, covering English, Maths, Science and exam preparation from Kindergarten to Year 12.",
    entitySentence:
      "Mount Annan families can book TutorMunk's in-person tutoring, Kindergarten to Year 12, in the home.",
    bodySections: [
      {
        heading: "What we offer in Mount Annan.",
        paragraphs: [
          "A Mount Annan family can book English, Maths or Science tutoring for any year from Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC available alongside it. Every tutor is WWCC-verified.",
        ],
      },
      {
        heading: "How sessions run in Mount Annan.",
        paragraphs: [
          "Mount Annan sessions run at home each week, on a regular time. Our centre, The HUB, 31 Lasso Road, Gregory Hills, is nearby and takes bookings by appointment for families who would rather visit.",
        ],
      },
      {
        heading: "HSC and senior tutoring for Mount Annan students.",
        paragraphs: [
          "Mount Annan has a strong base of senior students, and we tutor the full range of HSC English, Maths and Science courses, with responses marked against the NESA criteria and timed past paper practice building through the year. Years 7 to 10 students keep pace with school topics ahead of those senior years, and families with a Year 12 student close to trials or the HSC can book an HSC Sprint, a short block of sessions built around past papers. A Mount Annan student can typically keep the same tutor from Years 7 to 10 straight through into HSC subject tutoring.",
        ],
        links: [
          { label: "Senior School", to: "/senior-school" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can sessions be booked for after school in Mount Annan?",
        answer:
          "Many Mount Annan sessions run after school, and evening times are often available depending on the tutor matched to your family. Booking is the best time to mention which time suits your family.",
      },
      {
        question: "Is the centre at Gregory Hills open to Mount Annan families?",
        answer:
          "Mount Annan families can book The HUB, 31 Lasso Road, Gregory Hills, by appointment, whether that is instead of or alongside home tutoring. Groups held there stay to six students from one stage.",
      },
      {
        question: "Does HSC tutoring extend to Mount Annan?",
        answer:
          "The full range of HSC English, Maths and Science courses is available to Mount Annan students, one to one or in a small group, at home or at our nearby Gregory Hills centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-narellan",
    suburbName: "Narellan",
    titleTag: "In-Home Tutoring in Narellan | TutorMunk",
    metaDescription:
      "Private in-home tutoring in Narellan, K-12, one to one or small group, taught to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in narellan",
      "narellan tutor",
      "in-home tutoring narellan",
      "K-12 tutoring narellan NSW",
    ],
    heroIntro:
      "In Narellan, we send a tutor to your home so there is no drive after a full day at school. Sessions are one to one or small group, and every subject follows the NESA syllabus your child is studying.",
    entitySentence:
      "TutorMunk's in-person tutoring for Narellan students, Kindergarten to Year 12, is delivered in the family home.",
    bodySections: [
      {
        heading: "What we offer in Narellan.",
        paragraphs: [
          "Narellan students can be tutored in English, Maths and Science at every stage of school, with exam preparation for Selective, OC, NAPLAN and the HSC available too. Every 60-minute session runs one to one or in a small group, with a report sent afterwards.",
        ],
      },
      {
        heading: "How sessions run in Narellan.",
        paragraphs: [
          "Narellan sessions run at home on a regular weekly time, for consistency. Nearby, our centre at The HUB, 31 Lasso Road, Gregory Hills, accepts bookings by appointment.",
        ],
      },
      {
        heading: "Selective, OC and NAPLAN preparation in Narellan.",
        paragraphs: [
          "Narellan families often ask about exam preparation, from Selective School and Opportunity Class placement test preparation for primary students, through to NAPLAN familiarisation for Year 3, 5, 7 and 9. ICAS preparation is available for families wanting an extension option beyond regular classroom work, and senior students can book an HSC Sprint, a short block of sessions before trials and the HSC. Every program runs at the usual 60-minute session length, one to one or in a small group. Families in Narellan often start with one test preparation program and add another, such as NAPLAN alongside Selective prep, once underway.",
        ],
        links: [
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
          { label: "ICAS Preparation", to: "/topics/icas" },
        ],
      },
    ],
    faqs: [
      {
        question: "What times are tutors usually available in Narellan?",
        answer:
          "Depending on the tutor matched to your family, evening sessions are often possible to arrange. When you book, tell us the time that suits your family best.",
      },
      {
        question: "Can Narellan families choose the centre over a home session?",
        answer:
          "An appointment at The HUB, 31 Lasso Road, Gregory Hills, is available to Narellan families, on top of or instead of home tutoring. Six students from the same stage is the maximum for a group there.",
      },
      {
        question: "What test preparation can Narellan families book?",
        answer:
          "Narellan students preparing for the Selective test, the OC test, NAPLAN, ICAS or the HSC are taught one to one or in a small group, at home or at our nearby centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-narellan-vale",
    suburbName: "Narellan Vale",
    titleTag: "In-Home Tutoring in Narellan Vale | TutorMunk",
    metaDescription:
      "In-home tutoring in Narellan Vale for K-12 students, one to one or small group, with a tutor who comes to you.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in narellan vale",
      "narellan vale tutor",
      "in-home tutoring narellan vale",
      "K-12 tutoring narellan vale NSW",
    ],
    heroIntro:
      "We tutor Narellan Vale students at home, one to one or in a small group, on a weekly time that fits around sport and other commitments. A short written note follows every session.",
    entitySentence:
      "For Narellan Vale families, TutorMunk provides in-person, Kindergarten to Year 12 tutoring at home.",
    bodySections: [
      {
        heading: "What we offer in Narellan Vale.",
        paragraphs: [
          "Narellan Vale students have access to English, Maths and Science tutoring for Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC available alongside it. A written report follows every session.",
        ],
      },
      {
        heading: "How sessions run in Narellan Vale.",
        paragraphs: [
          "The home is where most Narellan Vale sessions run. Families who would rather visit us can book our centre, The HUB, 31 Lasso Road, Gregory Hills, by appointment.",
        ],
      },
      {
        heading: "High school tutoring for Narellan Vale students.",
        paragraphs: [
          "Narellan Vale students in Years 7 to 10 can work with a tutor on English, Maths or Science, built around the current school topic and whatever assessment task is coming up next. NAPLAN preparation is also available for Year 7 and Year 9, matched to the format and timing used on test day. For families with a child heading toward Year 11 and 12, the same tutor can continue on into HSC subjects when the time comes. The same tutor can usually continue with a Narellan Vale student from Years 7 to 10 into HSC subjects without a change partway through.",
        ],
        links: [
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do sessions run in the evening in Narellan Vale?",
        answer:
          "The tutor matched to your family sets the available times, and evenings are often among them. Mention your preferred time when booking and we will see what fits.",
      },
      {
        question: "Can families from Narellan Vale visit the centre?",
        answer:
          "Narellan Vale families can book The HUB, 31 Lasso Road, Gregory Hills, by appointment, whether in place of or alongside tutoring at home. Six students from one stage is the most a group there holds.",
      },
      {
        question: "What subjects are covered for Narellan Vale students?",
        answer:
          "Narellan Vale home tutoring covers English, Maths and Science from Kindergarten to Year 12, with Selective, OC, NAPLAN, ICAS and HSC exam preparation also on offer, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-oran-park",
    suburbName: "Oran Park",
    titleTag: "In-Home Tutoring in Oran Park | TutorMunk",
    metaDescription:
      "In-home tutoring in Oran Park, close to our TutorMunk Gregory Hills centre, for K-12 students.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in oran park",
      "oran park tutor",
      "in-home tutoring oran park",
      "K-12 tutoring oran park NSW",
    ],
    heroIntro:
      "Oran Park families can visit our Gregory Hills centre nearby or book a tutor to come to their home. Sessions run one to one or in a small group, for every stage from Kindergarten to the HSC.",
    entitySentence:
      "TutorMunk provides in-person tutoring for Kindergarten to Year 12 students in Oran Park, in the family home or at our nearby centre.",
    bodySections: [
      {
        heading: "What we offer in Oran Park.",
        paragraphs: [
          "Oran Park students can be tutored in English, Maths and Science at every stage of school, with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC available too. Sessions run one to one or in a small group, at home or at our nearby Gregory Hills centre.",
        ],
      },
      {
        heading: "How sessions run in Oran Park.",
        paragraphs: [
          "Because Oran Park sits next to Gregory Hills, families here can visit our centre at The HUB, 31 Lasso Road directly or book a tutor for the home instead. Centre sessions run by appointment, with groups capped at six students in the same stage.",
        ],
      },
      {
        heading: "HSC tutoring near Oran Park.",
        paragraphs: [
          "Being so close to our centre, Oran Park families have an easy option for senior tutoring, whether that is HSC English, Maths or Science with timed past paper practice, or an HSC Sprint in the weeks before trials and the HSC. Years 7 to 10 students can also use the centre for small group sessions in the lead-up to those senior years. Home sessions remain available for families who prefer tutoring in their own space. Being close to the centre also makes it easy to switch between home and centre sessions if a family's preference changes.",
        ],
        links: [
          { label: "Senior School", to: "/senior-school" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we set a regular weekly session time in Oran Park?",
        answer:
          "Session times are arranged with the tutor matched to your family, whether at the centre or at home, and evening slots are often possible. Mention your preferred time at booking and we will confirm what fits.",
      },
      {
        question: "Is the Gregory Hills centre close to Oran Park?",
        answer:
          "Yes, Oran Park sits right next to Gregory Hills, so our centre at The HUB, 31 Lasso Road is an easy option for families who would rather visit us than have a tutor come to the home.",
      },
      {
        question: "Which subjects can you tutor for Oran Park students?",
        answer:
          "We tutor English, Maths and Science for every stage of school for Oran Park students, plus Selective, OC, NAPLAN, ICAS and HSC exam preparation, at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-rossmore",
    suburbName: "Rossmore",
    titleTag: "In-Home Tutoring in Rossmore | TutorMunk",
    metaDescription:
      "TutorMunk provides in-home tutoring in Rossmore, K-12, one to one or small group, with no travel required.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in rossmore",
      "rossmore tutor",
      "in-home tutoring rossmore",
      "K-12 tutoring rossmore NSW",
    ],
    heroIntro:
      "Rossmore is one of the more rural areas we tutor in, and that is exactly why we come to you. A tutor works at your home each week, one to one or in a small group, through the current school syllabus.",
    entitySentence:
      "In Rossmore, TutorMunk tutors students from Kindergarten to Year 12 in person, at home.",
    bodySections: [
      {
        heading: "What we offer in Rossmore.",
        paragraphs: [
          "A Rossmore family can book English, Maths or Science tutoring for a child from Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN and the HSC available alongside it. Every tutor holds a Working with Children Check.",
        ],
      },
      {
        heading: "How sessions run in Rossmore.",
        paragraphs: [
          "Tutoring in Rossmore is run in the home, so families are not asked to travel. For those who would rather visit us, our centre, The HUB, 31 Lasso Road, Gregory Hills, is open by appointment.",
        ],
      },
      {
        heading: "Primary tutoring for Rossmore families.",
        paragraphs: [
          "Rossmore is one of the more rural areas we tutor in, and a good number of families here start with primary English and Maths, building core reading, writing and number skills at a child's own pace. Selective School and Opportunity Class preparation are available for families thinking ahead to those placement tests, and NAPLAN familiarisation runs for Year 3 and Year 5. As children move up through school, the same tutor can continue into Years 7 to 10 and, eventually, HSC subjects. Families in Rossmore often begin with one subject and add a second, or move into test preparation, once a routine is settled.",
        ],
        links: [
          { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
          { label: "Selective School Prep", to: "/topics/selective-school-prep" },
          { label: "NAPLAN Tutoring", to: "/topics/naplan" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is evening tutoring an option in Rossmore?",
        answer:
          "Evening sessions can often be arranged, depending on the tutor matched to your family. Let us know your preferred time when you book and we will confirm what is possible.",
      },
      {
        question: "Is visiting the centre possible for Rossmore families?",
        answer:
          "Rossmore families can arrange an appointment at The HUB, 31 Lasso Road, Gregory Hills, either instead of or on top of home tutoring. Groups there are limited to six students from the same stage.",
      },
      {
        question: "What does a tutor cover in Rossmore?",
        answer:
          "Rossmore home tutoring runs across English, Maths and Science from Kindergarten to Year 12, with Selective, OC, NAPLAN and HSC exam preparation available too, one to one or in a small group.",
      },
    ],
  },
  {
    slug: "tutoring-in-smeaton-grange",
    suburbName: "Smeaton Grange",
    titleTag: "In-Home Tutoring in Smeaton Grange | TutorMunk",
    metaDescription:
      "In-home tutoring in Smeaton Grange for K-12 students, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in smeaton grange",
      "smeaton grange tutor",
      "in-home tutoring smeaton grange",
      "K-12 tutoring smeaton grange NSW",
    ],
    heroIntro:
      "We tutor Smeaton Grange families at home instead of asking them to travel after school. Sessions are one to one or small group, and a written report follows every session so you know what was covered.",
    entitySentence:
      "Smeaton Grange families can book TutorMunk's in-person tutoring, Kindergarten to Year 12, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Smeaton Grange.",
        paragraphs: [
          "Smeaton Grange students have access to English, Maths and Science tutoring for every year level, along with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Sessions run for 60 minutes, one to one or in a small group.",
        ],
      },
      {
        heading: "How sessions run in Smeaton Grange.",
        paragraphs: [
          "Most tutoring in Smeaton Grange takes place at home. A visit to our centre, The HUB, 31 Lasso Road, Gregory Hills, is also available by appointment, for a change of setting.",
        ],
      },
      {
        heading: "Test preparation for Smeaton Grange families.",
        paragraphs: [
          "Smeaton Grange families ask about exam preparation across every stage, from Selective School and Opportunity Class placement test preparation in primary school, through to NAPLAN familiarisation in Years 3, 5, 7 and 9. ICAS preparation is available for students wanting a harder set of questions than the regular classroom, and senior students can book an HSC Sprint, a short block of sessions built around past papers before trials and the HSC. Families in Smeaton Grange often start with one program and add another, such as ICAS alongside OC preparation, once underway.",
        ],
        links: [
          { label: "ICAS Preparation", to: "/topics/icas" },
          { label: "OC Prep", to: "/topics/oc-prep" },
          { label: "HSC Sprint", to: "/topics/hsc-sprint" },
        ],
      },
    ],
    faqs: [
      {
        question: "What session times work for Smeaton Grange families?",
        answer:
          "Evening sessions can often be arranged depending on the tutor matched to your family and their current schedule. Your preferred time is worth flagging at the time of booking.",
      },
      {
        question: "Do Smeaton Grange families need to pick home tutoring or the centre?",
        answer:
          "Smeaton Grange families can book The HUB, 31 Lasso Road, Gregory Hills, by appointment, whether instead of or alongside home tutoring. A group there holds no more than six students from the same stage.",
      },
      {
        question: "What exam programs are available to Smeaton Grange families?",
        answer:
          "For the Selective test, the OC test, NAPLAN, ICAS or the HSC, Smeaton Grange students are taught one to one or in a small group, at home or at our centre.",
      },
    ],
  },
  {
    slug: "tutoring-in-spring-farm",
    suburbName: "Spring Farm",
    titleTag: "In-Home Tutoring in Spring Farm | TutorMunk",
    metaDescription:
      "Private in-home tutoring in Spring Farm, Kindergarten to Year 12, one to one or in a small group session.",
    inHome: true,
    centre: false,
    targetKeywords: [
      "tutoring in spring farm",
      "spring farm tutor",
      "in-home tutoring spring farm",
      "K-12 tutoring spring farm NSW",
    ],
    heroIntro:
      "In Spring Farm, a tutor comes to your home on a regular weekly time, for one to one or small group sessions. Every subject follows the NESA syllabus your child is studying at school.",
    entitySentence:
      "Spring Farm students from Kindergarten to Year 12 are tutored by TutorMunk in person, in the family home.",
    bodySections: [
      {
        heading: "What we offer in Spring Farm.",
        paragraphs: [
          "Spring Farm students can be tutored in English, Maths and Science from Kindergarten to Year 12, with exam preparation for Selective, OC, NAPLAN and the HSC available too. Every session runs one to one or in a small group, with a written report afterwards.",
        ],
      },
      {
        heading: "How sessions run in Spring Farm.",
        paragraphs: [
          "Spring Farm students are tutored at home on a regular weekly time, for consistency. Our centre, The HUB, 31 Lasso Road, Gregory Hills, can also be booked by appointment.",
        ],
      },
      {
        heading: "High school and NAPLAN tutoring in Spring Farm.",
        paragraphs: [
          "Spring Farm students in Years 7 to 10 can work with a tutor on English, Maths or Science, matched to the topic and assessment task their school has set that term. NAPLAN preparation is available for Year 7 and Year 9, in the same format and timing used on the actual test day. Families with younger children can start with primary English and Maths, and senior students can move into HSC subject tutoring when the time comes. The same tutor can usually continue with a Spring Farm student from Years 7 to 10 straight through into HSC subjects.",
        ],
        links: [
          { label: "High School English Tutoring", to: "/topics/high-school-english" },
          { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
          { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can sessions be arranged for after school in Spring Farm?",
        answer:
          "Spring Farm sessions often run after school, with evening times available depending on which tutor is matched to your family. Flag your preferred time when booking so we can try to match it.",
      },
      {
        question: "Can Spring Farm families book the centre instead of home tutoring?",
        answer:
          "An appointment at The HUB, 31 Lasso Road, Gregory Hills, suits Spring Farm families wanting an alternative or addition to home tutoring. Groups there stay to six students from the same stage.",
      },
      {
        question: "What subjects can a Spring Farm tutor cover?",
        answer:
          "Spring Farm home tutoring covers English, Maths and Science from Kindergarten to Year 12, with Selective, OC, NAPLAN and HSC exam preparation available too, one to one or in a small group.",
      },
    ],
  },
];

// Compatibility alias: about.ts and munks.ts read `suburbs.length` for the
// "23 suburbs served" stats.
export const suburbs = locations;

// Locations hub page (/locations) copy.
export const locationsPage = {
  title: "Tutoring Locations in South-West Sydney | TutorMunk",
  metaDescription:
    "TutorMunk's Gregory Hills centre plus in-home tutoring across 23 South-West Sydney suburbs, from Camden to Narellan and Mount Annan.",
  hero: {
    eyebrow: "Locations",
    heading: "One centre, 23 suburbs, in-home tutoring across the region.",
    body: "Families visit our Gregory Hills centre or book a tutor to come to them.",
    ctaLabel: "Request a Call",
  },
  centre: {
    eyebrow: "Our centre",
    heading: centre.name + ".",
    address: centre.address,
    body: centre.sessionsNote,
    details: [{ label: "Phone", value: centre.phone }],
    mapLabel: `Map of ${centre.name} at ${centre.address}`,
    mapEmbedUrl: centreMapEmbedUrl,
  },
  suburbGrid: {
    eyebrow: "In-home tutoring",
    heading: "Suburbs we travel to.",
    body: "Select a suburb for local details, or request a call and we will confirm tutor availability.",
  },
  cta: {
    heading: "Ask about tutors in your suburb.",
    body: "Request a call and we will tell you who is available near you.",
    ctaLabel: "Request a Call",
  },
};
