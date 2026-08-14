// Real business data (14 Aug 2026). This is the single source of truth for
// the centre and every suburb we serve. Never invent local facts, opening
// hours or room details, see CLAUDE.md.

export interface BodySection {
  heading: string;
  paragraphs: string[];
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
}

export const centre = {
  name: "TutorMunk Gregory Hills",
  address: "The HUB, 31 Lasso Road, Gregory Hills NSW 2557",
  phone: "1300 00MUNK",
  phoneDial: "+611300006865",
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
    metaDescription: "In-home tutoring in Bickley Vale for K-12 students, one to one or small group, taught to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in bickley vale", "bickley vale tutor", "in-home tutoring bickley vale", "K-12 tutoring bickley vale NSW"],
    heroIntro: "Bickley Vale families book a tutor to come to them. Sessions run one to one or in a small group, at your kitchen table or study, with no drop off and no waiting in the car.",
    bodySections: [
      {
        heading: "What we offer in Bickley Vale.",
        paragraphs: ["We teach Kindergarten to Year 12 in Bickley Vale, covering English, Maths and Science, plus exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Every tutor holds a Working with Children Check, and sessions run for 60 minutes with a written report after each one."],
      },
      {
        heading: "How sessions run in Bickley Vale.",
        paragraphs: ["Most Bickley Vale families choose a session at home. If you would rather come to us, our centre at The HUB, 31 Lasso Road, Gregory Hills is open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-bringelly",
    suburbName: "Bringelly",
    titleTag: "In-Home Tutoring in Bringelly | TutorMunk",
    metaDescription: "Private in-home tutoring for Bringelly families, K-12, one to one or small group sessions with no travel required.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in bringelly", "bringelly tutor", "in-home tutoring bringelly", "K-12 tutoring bringelly NSW"],
    heroIntro: "In Bringelly, distance to a tutoring centre can be the reason lessons never start. We remove that step and bring the tutor to your home instead, for one to one or small group sessions across K to 12.",
    bodySections: [
      {
        heading: "What we offer in Bringelly.",
        paragraphs: ["Bringelly families can book English, Maths or Science tutoring for any year from Kindergarten to Year 12. We also run exam preparation for Selective, OC, NAPLAN and the HSC, taught one to one or in a small group by a WWCC-verified tutor."],
      },
      {
        heading: "How sessions run in Bringelly.",
        paragraphs: ["We run sessions in Bringelly homes on a set weekly time. Families are also welcome at our Gregory Hills centre at The HUB, 31 Lasso Road, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-camden",
    suburbName: "Camden",
    titleTag: "In-Home Tutoring in Camden | TutorMunk",
    metaDescription: "TutorMunk provides in-home tutoring in Camden for K-12 students, one to one or in small groups, with written reports after every session.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in camden", "camden tutor", "in-home tutoring camden", "K-12 tutoring camden NSW"],
    heroIntro: "Camden families choose in-home tutoring so afternoons are not lost to driving. A WWCC-verified tutor comes to your house for a one to one or small group session, then writes a short note on what was covered.",
    bodySections: [
      {
        heading: "What we offer in Camden.",
        paragraphs: ["In Camden, tutors cover English, Maths and Science for every stage of school, along with exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Sessions are 60 minutes, one to one or small group, and every tutor holds a current Working with Children Check."],
      },
      {
        heading: "How sessions run in Camden.",
        paragraphs: ["In Camden, most sessions run at home. Our Gregory Hills centre at The HUB, 31 Lasso Road is also open by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-camden-south",
    suburbName: "Camden South",
    titleTag: "In-Home Tutoring in Camden South | TutorMunk",
    metaDescription: "In-home tutoring in Camden South for Kindergarten to Year 12, covering English, Maths, Science and exam preparation.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in camden south", "camden south tutor", "in-home tutoring camden south", "K-12 tutoring camden south NSW"],
    heroIntro: "We tutor students across Camden South in their own home, one to one or in a small group. Every session follows the NESA syllabus and your child's current school work, from Kindergarten through to the HSC.",
    bodySections: [
      {
        heading: "What we offer in Camden South.",
        paragraphs: ["Camden South students can work with a tutor on English, Maths or Science at any stage from Kindergarten to Year 12. We also prepare students for Selective, OC, NAPLAN and the HSC, in 60-minute sessions with a written report each time."],
      },
      {
        heading: "How sessions run in Camden South.",
        paragraphs: ["We tutor Camden South students at home each week. You are also welcome to book a session at our centre, The HUB, 31 Lasso Road, Gregory Hills, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-catherine-field",
    suburbName: "Catherine Field",
    titleTag: "In-Home Tutoring in Catherine Field | TutorMunk",
    metaDescription: "Private tutoring at home in Catherine Field, K-12, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in catherine field", "catherine field tutor", "in-home tutoring catherine field", "K-12 tutoring catherine field NSW"],
    heroIntro: "Families in Catherine Field book sessions at home rather than travelling to a centre. A tutor works through the syllabus your child is studying at school, with a written note sent after each session.",
    bodySections: [
      {
        heading: "What we offer in Catherine Field.",
        paragraphs: ["We cover English, Maths and Science for Kindergarten to Year 12 in Catherine Field, plus Selective, OC, NAPLAN, ICAS and HSC exam preparation. Every session is one to one or small group, taught by a WWCC-verified tutor."],
      },
      {
        heading: "How sessions run in Catherine Field.",
        paragraphs: ["Sessions in Catherine Field run at your home on a regular weekly time. Our Gregory Hills centre at The HUB, 31 Lasso Road is available too, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-cawdor",
    suburbName: "Cawdor",
    titleTag: "In-Home Tutoring in Cawdor | TutorMunk",
    metaDescription: "In-home tutoring in Cawdor for K-12 students, one to one or in small groups, with a tutor who comes to you.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in cawdor", "cawdor tutor", "in-home tutoring cawdor", "K-12 tutoring cawdor NSW"],
    heroIntro: "Cawdor is one of the areas where we tutor entirely in the home. There is no centre to drive to nearby, just a tutor at your table each week for a one to one or small group session.",
    bodySections: [
      {
        heading: "What we offer in Cawdor.",
        paragraphs: ["Cawdor families can access English, Maths and Science tutoring for any year level, along with Selective, OC, NAPLAN and HSC exam preparation. Sessions run for 60 minutes, one to one or in a small group, with a report sent after each one."],
      },
      {
        heading: "How sessions run in Cawdor.",
        paragraphs: ["We tutor in Cawdor homes rather than running a centre nearby. If a change of setting suits your child better, our Gregory Hills centre at The HUB, 31 Lasso Road is open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-cobbitty",
    suburbName: "Cobbitty",
    titleTag: "In-Home Tutoring in Cobbitty | TutorMunk",
    metaDescription: "TutorMunk tutors Cobbitty students at home, K-12, one to one or small group, in English, Maths and Science.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in cobbitty", "cobbitty tutor", "in-home tutoring cobbitty", "K-12 tutoring cobbitty NSW"],
    heroIntro: "In Cobbitty, we send a tutor to your home rather than asking your family to travel. Sessions cover English, Maths and Science from Kindergarten to Year 12, taught one to one or in a small group.",
    bodySections: [
      {
        heading: "What we offer in Cobbitty.",
        paragraphs: ["In Cobbitty, we teach English, Maths and Science from Kindergarten through to Year 12, and run exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Tutors are WWCC-verified and every session is followed by a written report."],
      },
      {
        heading: "How sessions run in Cobbitty.",
        paragraphs: ["Most Cobbitty families book a home session. Our Gregory Hills centre at The HUB, 31 Lasso Road is also available for families who would rather visit us, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-currans-hill",
    suburbName: "Currans Hill",
    titleTag: "In-Home Tutoring in Currans Hill | TutorMunk",
    metaDescription: "In-home tutoring in Currans Hill for K-12 students, one to one or small group, with weekly written reports.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in currans hill", "currans hill tutor", "in-home tutoring currans hill", "K-12 tutoring currans hill NSW"],
    heroIntro: "We know Currans Hill families juggle more than one school run, so we bring the tutoring to you. A tutor works at your home on a set day each week, one to one or in a small group of up to three.",
    bodySections: [
      {
        heading: "What we offer in Currans Hill.",
        paragraphs: ["Currans Hill students can book English, Maths or Science tutoring at any stage of school, plus exam preparation for Selective, OC, NAPLAN and the HSC. Sessions are one to one or small group and run for 60 minutes."],
      },
      {
        heading: "How sessions run in Currans Hill.",
        paragraphs: ["We run weekly sessions in Currans Hill homes. Families can also book a session at our Gregory Hills centre, The HUB, 31 Lasso Road, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-elderslie",
    suburbName: "Elderslie",
    titleTag: "In-Home Tutoring in Elderslie | TutorMunk",
    metaDescription: "Private in-home tutoring in Elderslie, Kindergarten to Year 12, one to one or in a small group.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in elderslie", "elderslie tutor", "in-home tutoring elderslie", "K-12 tutoring elderslie NSW"],
    heroIntro: "Elderslie students are tutored at home, on a regular weekly time that suits the family. Sessions are one to one or small group, and every subject is taught against the current NESA syllabus.",
    bodySections: [
      {
        heading: "What we offer in Elderslie.",
        paragraphs: ["We tutor English, Maths and Science for Kindergarten to Year 12 in Elderslie, including Selective, OC, NAPLAN, ICAS and HSC exam preparation. Every tutor holds a Working with Children Check and reports back after each 60-minute session."],
      },
      {
        heading: "How sessions run in Elderslie.",
        paragraphs: ["In Elderslie, sessions run at home on the same day and time each week. Our Gregory Hills centre at The HUB, 31 Lasso Road is open by appointment for families who prefer to come to us."],
      },
    ],
  },
  {
    slug: "tutoring-in-ellis-lane",
    suburbName: "Ellis Lane",
    titleTag: "In-Home Tutoring in Ellis Lane | TutorMunk",
    metaDescription: "In-home tutoring for Ellis Lane families, K-12, one to one or small group sessions to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in ellis lane", "ellis lane tutor", "in-home tutoring ellis lane", "K-12 tutoring ellis lane NSW"],
    heroIntro: "For families in Ellis Lane, we run every session in the home. A tutor arrives at the same time each week for a one to one or small group lesson, with a short report sent afterwards.",
    bodySections: [
      {
        heading: "What we offer in Ellis Lane.",
        paragraphs: ["Ellis Lane families can book English, Maths or Science tutoring for any year level, alongside Selective, OC, NAPLAN and HSC exam preparation. Sessions run one to one or in a small group, with a written report after each one."],
      },
      {
        heading: "How sessions run in Ellis Lane.",
        paragraphs: ["We tutor Ellis Lane students at home each week. Our centre at The HUB, 31 Lasso Road, Gregory Hills is also open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-gledswood-hills",
    suburbName: "Gledswood Hills",
    titleTag: "In-Home Tutoring in Gledswood Hills | TutorMunk",
    metaDescription: "TutorMunk provides in-home tutoring in Gledswood Hills, K-12, one to one or in small groups.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in gledswood hills", "gledswood hills tutor", "in-home tutoring gledswood hills", "K-12 tutoring gledswood hills NSW"],
    heroIntro: "Gledswood Hills families book in-home tutoring so there is one less trip in the week. A tutor comes to your house for a one to one or small group session in English, Maths, Science or exam preparation.",
    bodySections: [
      {
        heading: "What we offer in Gledswood Hills.",
        paragraphs: ["In Gledswood Hills, tutors cover English, Maths and Science from Kindergarten to Year 12, plus Selective, OC, NAPLAN, ICAS and HSC exam preparation. Every session is 60 minutes, one to one or small group."],
      },
      {
        heading: "How sessions run in Gledswood Hills.",
        paragraphs: ["Most Gledswood Hills sessions run at home. Our Gregory Hills centre at The HUB, 31 Lasso Road is close by and open by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-grasmere",
    suburbName: "Grasmere",
    titleTag: "In-Home Tutoring in Grasmere | TutorMunk",
    metaDescription: "In-home tutoring in Grasmere for K-12 students, one to one or small group, with a tutor who comes to your home.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in grasmere", "grasmere tutor", "in-home tutoring grasmere", "K-12 tutoring grasmere NSW"],
    heroIntro: "We tutor in Grasmere homes rather than running a centre in every suburb. A tutor sits down with your child at your own table, one to one or in a small group, on a regular weekly time.",
    bodySections: [
      {
        heading: "What we offer in Grasmere.",
        paragraphs: ["We teach English, Maths and Science to students in Grasmere from Kindergarten through to Year 12, and run exam preparation for Selective, OC, NAPLAN and the HSC. Tutors are WWCC-verified and send a written report after every session."],
      },
      {
        heading: "How sessions run in Grasmere.",
        paragraphs: ["We tutor in Grasmere homes on a regular weekly time. Our Gregory Hills centre at The HUB, 31 Lasso Road is also open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-gregory-hills",
    suburbName: "Gregory Hills",
    titleTag: "In-Home Tutoring in Gregory Hills | TutorMunk",
    metaDescription: "In-home tutoring in Gregory Hills, plus sessions at our TutorMunk centre at The HUB, for K-12 students.",
    inHome: true,
    centre: true,
    targetKeywords: ["tutoring in gregory hills", "gregory hills tutor", "in-home tutoring gregory hills", "K-12 tutoring gregory hills NSW"],
    heroIntro: "Gregory Hills is home to our TutorMunk centre at The HUB, so local families can choose in-home sessions or bring their child to us. Either way, sessions are one to one or small group and follow the NESA syllabus.",
    bodySections: [
      {
        heading: "What we offer in Gregory Hills.",
        paragraphs: ["In Gregory Hills, we cover English, Maths and Science for every stage from Kindergarten to Year 12, along with Selective, OC, NAPLAN, ICAS and HSC exam preparation. Sessions run one to one or small group, at home or at the centre."],
      },
      {
        heading: "How sessions run in Gregory Hills.",
        paragraphs: ["Our centre, The HUB, 31 Lasso Road, is right here in Gregory Hills, so local families can visit us or book a tutor for home instead. Sessions at the centre run by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-harrington-park",
    suburbName: "Harrington Park",
    titleTag: "In-Home Tutoring in Harrington Park | TutorMunk",
    metaDescription: "Private tutoring at home in Harrington Park, K-12, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in harrington park", "harrington park tutor", "in-home tutoring harrington park", "K-12 tutoring harrington park NSW"],
    heroIntro: "In Harrington Park, we tutor at your kitchen table instead of asking you to drive to a centre. A tutor works through the current school topic, one to one or in a small group, and reports back after every session.",
    bodySections: [
      {
        heading: "What we offer in Harrington Park.",
        paragraphs: ["Harrington Park students can work with a tutor on English, Maths or Science at any year level, plus Selective, OC, NAPLAN and HSC exam preparation. Every session is 60 minutes, one to one or small group, with a report to follow."],
      },
      {
        heading: "How sessions run in Harrington Park.",
        paragraphs: ["In Harrington Park, most families book a session at home. Our Gregory Hills centre at The HUB, 31 Lasso Road is also open by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-kirkham",
    suburbName: "Kirkham",
    titleTag: "In-Home Tutoring in Kirkham | TutorMunk",
    metaDescription: "In-home tutoring in Kirkham for K-12 students, one to one or in small groups, with written reports to parents.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in kirkham", "kirkham tutor", "in-home tutoring kirkham", "K-12 tutoring kirkham NSW"],
    heroIntro: "Kirkham families choose us because the tutor comes to them. Sessions run one to one or in a small group, in your own home, for every stage from Kindergarten to the HSC.",
    bodySections: [
      {
        heading: "What we offer in Kirkham.",
        paragraphs: ["We tutor English, Maths and Science for Kindergarten to Year 12 in Kirkham, including Selective, OC, NAPLAN, ICAS and HSC exam preparation. Tutors hold a current Working with Children Check."],
      },
      {
        heading: "How sessions run in Kirkham.",
        paragraphs: ["We tutor Kirkham students at home on a set weekly time. Our Gregory Hills centre at The HUB, 31 Lasso Road is close by and open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-leppington",
    suburbName: "Leppington",
    titleTag: "In-Home Tutoring in Leppington | TutorMunk",
    metaDescription: "TutorMunk tutors Leppington students at home, Kindergarten to Year 12, one to one or in small groups.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in leppington", "leppington tutor", "in-home tutoring leppington", "K-12 tutoring leppington NSW"],
    heroIntro: "We tutor students across Leppington in their own home, on a set day and time each week. Sessions are one to one or small group, with a written report sent to parents afterwards.",
    bodySections: [
      {
        heading: "What we offer in Leppington.",
        paragraphs: ["In Leppington, tutors cover English, Maths and Science across every stage of school, plus exam preparation for Selective, OC, NAPLAN and the HSC. Sessions run one to one or small group, for 60 minutes, with a written report each time."],
      },
      {
        heading: "How sessions run in Leppington.",
        paragraphs: ["Most Leppington sessions run at home. Families are also welcome at our Gregory Hills centre, The HUB, 31 Lasso Road, by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-mount-annan",
    suburbName: "Mount Annan",
    titleTag: "In-Home Tutoring in Mount Annan | TutorMunk",
    metaDescription: "In-home tutoring in Mount Annan for K-12 students, covering English, Maths, Science and exam preparation.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in mount annan", "mount annan tutor", "in-home tutoring mount annan", "K-12 tutoring mount annan NSW"],
    heroIntro: "Mount Annan families book a tutor for their home rather than travelling to a centre after school. Every session is one to one or small group, covering English, Maths, Science and exam preparation from Kindergarten to Year 12.",
    bodySections: [
      {
        heading: "What we offer in Mount Annan.",
        paragraphs: ["Mount Annan families can book English, Maths or Science tutoring from Kindergarten to Year 12, along with Selective, OC, NAPLAN, ICAS and HSC exam preparation. Every tutor is WWCC-verified."],
      },
      {
        heading: "How sessions run in Mount Annan.",
        paragraphs: ["In Mount Annan, we tutor at home each week. Our Gregory Hills centre at The HUB, 31 Lasso Road is nearby and open by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-narellan",
    suburbName: "Narellan",
    titleTag: "In-Home Tutoring in Narellan | TutorMunk",
    metaDescription: "Private in-home tutoring in Narellan, K-12, one to one or small group, taught to the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in narellan", "narellan tutor", "in-home tutoring narellan", "K-12 tutoring narellan NSW"],
    heroIntro: "In Narellan, we send a tutor to your home so there is no drive after a full day at school. Sessions are one to one or small group, and every subject follows the NESA syllabus your child is studying.",
    bodySections: [
      {
        heading: "What we offer in Narellan.",
        paragraphs: ["We teach English, Maths and Science to Narellan students at every stage, and run exam preparation for Selective, OC, NAPLAN and the HSC. Sessions are one to one or small group, 60 minutes, with a report sent afterwards."],
      },
      {
        heading: "How sessions run in Narellan.",
        paragraphs: ["We tutor Narellan students at home on a regular weekly time. Our Gregory Hills centre at The HUB, 31 Lasso Road is close by and open by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-narellan-vale",
    suburbName: "Narellan Vale",
    titleTag: "In-Home Tutoring in Narellan Vale | TutorMunk",
    metaDescription: "In-home tutoring in Narellan Vale for K-12 students, one to one or small group, with a tutor who comes to you.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in narellan vale", "narellan vale tutor", "in-home tutoring narellan vale", "K-12 tutoring narellan vale NSW"],
    heroIntro: "We tutor Narellan Vale students at home, one to one or in a small group, on a weekly time that fits around sport and other commitments. A short written note follows every session.",
    bodySections: [
      {
        heading: "What we offer in Narellan Vale.",
        paragraphs: ["In Narellan Vale, tutors cover English, Maths and Science for Kindergarten to Year 12, plus Selective, OC, NAPLAN, ICAS and HSC exam preparation. Every session is followed by a written report to parents."],
      },
      {
        heading: "How sessions run in Narellan Vale.",
        paragraphs: ["Most Narellan Vale sessions run at home. Our Gregory Hills centre at The HUB, 31 Lasso Road is also available, by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-oran-park",
    suburbName: "Oran Park",
    titleTag: "In-Home Tutoring in Oran Park | TutorMunk",
    metaDescription: "In-home tutoring in Oran Park, close to our TutorMunk Gregory Hills centre, for K-12 students.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in oran park", "oran park tutor", "in-home tutoring oran park", "K-12 tutoring oran park NSW"],
    heroIntro: "Oran Park families can visit our Gregory Hills centre nearby or book a tutor to come to their home. Sessions run one to one or in a small group, for every stage from Kindergarten to the HSC.",
    bodySections: [
      {
        heading: "What we offer in Oran Park.",
        paragraphs: ["We tutor English, Maths and Science for every stage of school in Oran Park, along with Selective, OC, NAPLAN, ICAS and HSC exam preparation. Sessions run one to one or small group, at home or at our nearby Gregory Hills centre."],
      },
      {
        heading: "How sessions run in Oran Park.",
        paragraphs: ["Oran Park sits next to Gregory Hills, so families can visit our centre at The HUB, 31 Lasso Road or book a tutor for home instead. Sessions at the centre run by appointment."],
      },
    ],
  },
  {
    slug: "tutoring-in-rossmore",
    suburbName: "Rossmore",
    titleTag: "In-Home Tutoring in Rossmore | TutorMunk",
    metaDescription: "TutorMunk provides in-home tutoring in Rossmore, K-12, one to one or small group, with no travel required.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in rossmore", "rossmore tutor", "in-home tutoring rossmore", "K-12 tutoring rossmore NSW"],
    heroIntro: "Rossmore is one of the more rural areas we tutor in, and that is exactly why we come to you. A tutor works at your home each week, one to one or in a small group, through the current school syllabus.",
    bodySections: [
      {
        heading: "What we offer in Rossmore.",
        paragraphs: ["Rossmore families can book English, Maths or Science tutoring from Kindergarten to Year 12, plus exam preparation for Selective, OC, NAPLAN and the HSC. Every tutor holds a Working with Children Check."],
      },
      {
        heading: "How sessions run in Rossmore.",
        paragraphs: ["We tutor in Rossmore homes rather than asking families to travel to us. Our Gregory Hills centre at The HUB, 31 Lasso Road is open by appointment, for families who would rather visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-smeaton-grange",
    suburbName: "Smeaton Grange",
    titleTag: "In-Home Tutoring in Smeaton Grange | TutorMunk",
    metaDescription: "In-home tutoring in Smeaton Grange for K-12 students, one to one or small group, following the NESA syllabus.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in smeaton grange", "smeaton grange tutor", "in-home tutoring smeaton grange", "K-12 tutoring smeaton grange NSW"],
    heroIntro: "We tutor Smeaton Grange families at home instead of asking them to travel after school. Sessions are one to one or small group, and a written report follows every session so you know what was covered.",
    bodySections: [
      {
        heading: "What we offer in Smeaton Grange.",
        paragraphs: ["In Smeaton Grange, we cover English, Maths and Science for every year level, and run exam preparation for Selective, OC, NAPLAN, ICAS and the HSC. Sessions are 60 minutes, one to one or small group."],
      },
      {
        heading: "How sessions run in Smeaton Grange.",
        paragraphs: ["In Smeaton Grange, most sessions run at home. Our Gregory Hills centre at The HUB, 31 Lasso Road is also open by appointment, for families who prefer to visit us."],
      },
    ],
  },
  {
    slug: "tutoring-in-spring-farm",
    suburbName: "Spring Farm",
    titleTag: "In-Home Tutoring in Spring Farm | TutorMunk",
    metaDescription: "Private in-home tutoring in Spring Farm, Kindergarten to Year 12, one to one or in a small group session.",
    inHome: true,
    centre: false,
    targetKeywords: ["tutoring in spring farm", "spring farm tutor", "in-home tutoring spring farm", "K-12 tutoring spring farm NSW"],
    heroIntro: "In Spring Farm, a tutor comes to your home on a regular weekly time, for one to one or small group sessions. Every subject follows the NESA syllabus your child is studying at school.",
    bodySections: [
      {
        heading: "What we offer in Spring Farm.",
        paragraphs: ["We teach English, Maths and Science to Spring Farm students from Kindergarten to Year 12, including Selective, OC, NAPLAN and HSC exam preparation. Every session is one to one or small group, with a written report afterwards."],
      },
      {
        heading: "How sessions run in Spring Farm.",
        paragraphs: ["We tutor Spring Farm students at home on a regular weekly time. Our Gregory Hills centre at The HUB, 31 Lasso Road is also open by appointment."],
      },
    ],
  }
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
