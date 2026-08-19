import { stageImages, type Stage } from "./stageImages";

export type TopicContent = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  heroImage: string;
  // Optional: added 19 Aug 2026 for the content pass (batch 1 of 3, see
  // CLAUDE.md's "Topic pages" note). A topic with these fields renders the
  // richer page structure in topics.$slug.tsx (intro block, sections, FAQ
  // with FAQPage schema, related links) on top of the unchanged Hero and
  // DeliveryModesBand. A topic WITHOUT them (all 22 not yet done) renders
  // exactly as before: Hero, DeliveryModesBand, CtaBand, nothing else.
  targetKeywords?: string[];
  entitySentence?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
  related?: { label: string; to: string }[];
};

function topic(
  eyebrow: string,
  heading: string,
  intro: string,
  titleLead: string,
  stage: Stage,
): TopicContent {
  return {
    title: `${titleLead} | TutorMunk`,
    metaDescription: intro,
    eyebrow,
    heading,
    intro,
    heroImage: stageImages[stage],
  };
}

export const topics: Record<string, TopicContent> = {
  // ==========================================================================
  // Content pass, batch 1 of 3 (19 Aug 2026). These five are the first of
  // 27 topic pages to get full, individually written content instead of
  // the shared topic() shell. Full literal objects, not topic(), so the
  // content is readable here rather than buried in helper arguments. See
  // CLAUDE.md's "Topic pages" note for the rules that governed every word
  // below, and for which of the 22 remaining topics still use topic().
  // ==========================================================================
  "primary-maths": {
    title: "Primary Maths Tutoring K-6 | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person primary maths tutoring for Kindergarten to Year 6 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "Primary K-6",
    heading: "Primary maths tutoring that builds number confidence.",
    intro:
      "Our tutors work through the NESA primary maths outcomes with your child in person, one step at a time.",
    heroImage: stageImages.primary,
    targetKeywords: [
      "primary maths tutor",
      "maths tutoring Kindergarten to Year 6",
      "year 5 maths tutor",
      "maths tutor for kids near me",
      "primary school maths tutoring Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person primary maths tutoring for students in Kindergarten to Year 6 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What primary maths tutoring covers",
        paragraphs: [
          "A tutor works through the number, algebra, measurement and space, and statistics and probability content set out in the NSW primary maths syllabus, matched to what your child is currently studying at school. Early sessions often centre on place value, addition and subtraction strategies and times tables fluency, moving through to fractions, decimals, area and volume, and simple data and chance as your child progresses through the primary years.",
          "Every session starts from your child's current school work, not a separate curriculum, so tutoring reinforces the maths being taught in the classroom that week. A tutor works through mistakes with your child rather than simply marking them wrong, so your child understands the method, not just the answer.",
        ],
      },
      {
        heading: "How primary maths sessions run",
        paragraphs: [
          "Sessions run for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. A typical session opens with a short check of the previous week's practice, moves into new content or a tricky topic from school, and finishes with a few questions your child can complete alone before the next session.",
          "A written note goes home after every session, covering what was taught and what to practise before the next one. Small group sessions at the centre are capped at six students in the same stage, so a tutor can still work with each child individually.",
        ],
      },
      {
        heading: "Who primary maths tutoring suits",
        paragraphs: [
          "Primary maths tutoring suits a child who has fallen behind a topic and is starting to lose confidence, a child who finds maths straightforward and is ready to work ahead, and a child preparing for the Selective High School Placement Test or the Opportunity Class Placement Test, both of which include a mathematical reasoning component. It also suits a child who understands a topic in class but freezes on it in a test.",
        ],
      },
      {
        heading: "What to expect as a parent",
        paragraphs: [
          "You receive a written note after every session and a broader conversation about progress each term, in the same way as every other subject we tutor. If your child is working toward a test date, we will say plainly whether the timeline is realistic based on where they are now, rather than promising an outcome.",
        ],
      },
    ],
    faqs: [
      {
        question: "What year levels do you tutor for primary maths?",
        answer:
          "We tutor primary maths from Kindergarten to Year 6, working from your child's current school topic rather than a separate curriculum. Sessions adjust as your child moves up a year, so the content always matches what is being taught in the classroom that term.",
      },
      {
        question: "How do you decide what to work on each session?",
        answer:
          "We start from your child's current school work and recent test or homework results. If a specific topic is causing trouble, such as fractions or times tables, sessions focus there until your child is confident, then move on to the next topic from school.",
      },
      {
        question: "Is maths tutoring useful for a child who is already doing well?",
        answer:
          "It can be. Some families use maths tutoring to work ahead of the school topic, build speed and accuracy, or prepare for the Selective or OC tests, both of which include a mathematical reasoning component beyond standard classroom maths. A tutor can also introduce harder problem types your child would not otherwise see until a later year.",
      },
      {
        question: "Do sessions run at home or at your centre?",
        answer:
          "Both. Families choose one to one or small group sessions in their own home, or at our Gregory Hills centre. You can also change the setting later if it suits your family better, for example moving to the centre once your child is used to working with a tutor.",
      },
    ],
    related: [
      { label: "Primary School", to: "/primary-school" },
      { label: "Selective School Prep", to: "/topics/selective-school-prep" },
      { label: "OC Prep", to: "/topics/oc-prep" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "selective-school-prep": {
    title: "Selective School Prep Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person Selective School test preparation for Year 5 and 6 students across suburban Sydney, in your home or at our centre.",
    eyebrow: "Exam prep",
    heading: "Selective School preparation with weekly practice papers.",
    intro:
      "Students sit timed sections each week and go through every mistake with their tutor before the next session.",
    heroImage: stageImages.primary,
    targetKeywords: [
      "selective school tutor",
      "selective test preparation",
      "Year 5 selective tutor",
      "selective high school placement test tutor",
      "selective school prep Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person Selective School preparation for Year 5 and Year 6 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What the Selective test covers",
        paragraphs: [
          "The Selective High School Placement Test has four components: Reading, Mathematical Reasoning, Thinking Skills and Writing. Sessions work through each component in turn, using timed practice sections so your child gets used to answering under time pressure well before test day. Thinking Skills and Mathematical Reasoning tend to need the most practice, since neither is taught directly at school in the same format as the test.",
          "Reading sessions focus on skimming for detail and answering under time pressure, since the passages are often where students run out of time first. Writing sessions work on planning a piece quickly, since students have only a short window to plan, draft and revise on the day, and a clear plan matters as much as the writing itself.",
        ],
      },
      {
        heading: "How Selective prep sessions run",
        paragraphs: [
          "Most students sit the test in Year 6, and preparation commonly starts in Year 5, though some families start earlier if a child is ready. Sessions run one to one or in a small group of students in the same year, and a typical session includes a timed section followed by going through every mistake with the tutor before moving on, not just marking the paper and returning it.",
          "A written note goes home after each session, and small groups at our centre are capped at six students so a tutor can still go through each child's paper individually.",
        ],
      },
      {
        heading: "Who Selective prep suits",
        paragraphs: [
          "This program suits a child who is doing well at school and whose parents want to know whether the Selective test is realistic for them, as well as a child who has already been offered a test date and needs focused practice on a specific component, most often Thinking Skills or Writing. It is not the right fit for a child who is not yet comfortable with Year 5 or Year 6 level reading and maths, tutoring for those first is a better starting point.",
        ],
      },
      {
        heading: "What to expect as a parent",
        paragraphs: [
          "You receive a written note after every session covering which component was practised and how your child went. As the test date gets closer, we will tell you honestly how your child is tracking against the timed sections, rather than guaranteeing a result, since no tutor can guarantee a Selective test outcome.",
        ],
      },
    ],
    faqs: [
      {
        question: "What year should my child start Selective test preparation?",
        answer:
          "Most families start in Year 5 for the Year 6 test, which gives time to build all four test components. Some families start earlier if a child is ready, and some start later with a more intensive schedule. We can advise on timing on a call.",
      },
      {
        question: "Which part of the test do students find hardest?",
        answer:
          "Thinking Skills and Mathematical Reasoning are usually the hardest, since neither is taught directly at school in the test's format. Reading and Writing tend to build more naturally from existing school work, though all four components get regular practice so none of them is left until the last minute.",
      },
      {
        question: "Can you guarantee a Selective school placement?",
        answer:
          "No tutor can guarantee a Selective test result, and we will not claim otherwise. What we can do is give your child structured, timed practice across all four components and honest feedback on how they are tracking as the test date approaches.",
      },
      {
        question: "What if my child does not get a place?",
        answer:
          "A place is not guaranteed by preparation alone, and many strong students are not offered one simply because demand is high. The reading, reasoning and writing skills built during preparation still help with regular high school work either way, whichever school your child ends up attending.",
      },
    ],
    related: [
      { label: "Primary School", to: "/primary-school" },
      { label: "OC Prep", to: "/topics/oc-prep" },
      { label: "Writing Program", to: "/topics/writing-program" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "oc-prep": {
    title: "OC Test Preparation Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person Opportunity Class test preparation for Year 3 and 4 students across suburban Sydney, in your home or at our centre.",
    eyebrow: "Exam prep",
    heading: "OC Prep for Year 4 students sitting the test.",
    intro:
      "We cover reading, mathematical reasoning and thinking skills, with short practice sets between sessions.",
    heroImage: stageImages.primary,
    targetKeywords: [
      "OC test tutor",
      "opportunity class preparation",
      "Year 3 OC tutor",
      "OC placement test tutor",
      "opportunity class prep Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person Opportunity Class preparation for Year 3 and Year 4 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What the OC test covers",
        paragraphs: [
          "The Opportunity Class Placement Test has three components: Reading, Mathematical Reasoning and Thinking Skills. Students sit the test in Year 4 for placement in Year 5, so preparation usually runs through Year 3 and into Year 4, with sessions moving from general skill building toward timed practice sections as the test date approaches.",
          "The reasoning and thinking skills sections use question styles that are less familiar than standard classroom maths and English, which is why early sessions spend time on the format itself before moving to full timed papers.",
        ],
      },
      {
        heading: "How OC prep sessions run",
        paragraphs: [
          "Sessions run for 60 minutes, one to one or in a small group at our Gregory Hills centre or in your home. Early sessions focus on the reading and reasoning skills the test asks for, since these are not always covered directly in the Year 3 classroom, and later sessions move to full timed sections under test conditions.",
          "Between sessions, most students complete a short set of practice questions at home, usually no more than 20 to 30 minutes, so the skills stay fresh without adding a heavy homework load on top of school.",
          "Every session finishes with a written note home, so you know exactly which skill was the focus and what to practise before the next one. Group sessions stay small, capped at six students in the same year.",
        ],
      },
      {
        heading: "Who OC prep suits",
        paragraphs: [
          "OC preparation suits a child who is ahead of the class and could use more challenge, as well as a child whose reading or reasoning is solid but who needs practice with the specific question styles the test uses. It suits families who are still deciding whether to sit the test as much as families who have already decided, an early session can help you judge whether OC placement is a good fit for your child.",
        ],
      },
      {
        heading: "What to expect as a parent",
        paragraphs: [
          "You receive a written note after every session and a plain conversation about progress each term. If a component is not improving the way we would expect, we will tell you and adjust the plan rather than continuing the same approach.",
        ],
      },
    ],
    faqs: [
      {
        question: "When do students sit the OC test?",
        answer:
          "The Opportunity Class Placement Test is sat in Year 4, for placement in Year 5. Preparation commonly starts in Year 3, giving time to build reading and reasoning skills before moving into timed practice sections closer to the test date.",
      },
      {
        question: "What does an OC prep session actually involve?",
        answer:
          "Early sessions focus on the reading and thinking skills the test uses, since these differ from typical classroom work. As the test date gets closer, sessions move to full timed sections under test conditions, followed by going through every mistake together.",
      },
      {
        question: "Is OC placement right for every strong student?",
        answer:
          "Not necessarily, and we will say so if we think another option suits your child better. An early session can help you judge whether your child enjoys the style of question the test uses before committing to a longer preparation plan.",
      },
    ],
    related: [
      { label: "Primary School", to: "/primary-school" },
      { label: "Selective School Prep", to: "/topics/selective-school-prep" },
      { label: "NAPLAN", to: "/topics/naplan" },
      { label: "Locations", to: "/locations" },
    ],
  },
  naplan: {
    title: "NAPLAN Tutoring, Years 3 and 5 | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person NAPLAN preparation for Year 3 and 5 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "Exam prep",
    heading: "NAPLAN preparation without the pressure.",
    intro:
      "Sessions focus on the writing task, reading comprehension and numeracy questions that students find hardest.",
    heroImage: stageImages.primary,
    targetKeywords: [
      "NAPLAN tutor primary",
      "Year 3 NAPLAN preparation",
      "Year 5 NAPLAN tutor",
      "NAPLAN tutoring near me",
      "NAPLAN writing tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person NAPLAN preparation for Year 3 and Year 5 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What NAPLAN preparation covers",
        paragraphs: [
          "NAPLAN for Year 3 and Year 5 students is assessed across four domains: Reading, Writing, Conventions of Language and Numeracy. Sessions work through each domain using the same question formats and timing students see on test day, with the most attention going to whichever domain your child finds hardest, often the writing task or the numeracy questions that combine several skills in one problem.",
          "Reading and Numeracy are mostly multiple choice with some short answer items, while the Writing task asks students to plan and produce a full piece within a set time, so sessions practise both formats rather than treating every domain the same way.",
        ],
      },
      {
        heading: "How NAPLAN sessions run",
        paragraphs: [
          "Sessions run for 60 minutes, one to one or in a small group, in the weeks leading up to the test. A typical session works through a set of questions in one domain, then reviews every incorrect answer with your child so they understand why, not just what the correct answer was.",
          "You receive a written note after each session covering which domain was the focus and how your child performed on the practice questions. Group sessions at our centre are capped at six students in the same year level.",
        ],
      },
      {
        heading: "Who NAPLAN preparation suits",
        paragraphs: [
          "This is a good fit for a child who is anxious about sitting a formal test for the first time, since Year 3 is often a family's first experience of NAPLAN, as well as a child who has sat NAPLAN before and wants to lift a specific domain. It also suits a child who understands the material at school but runs out of time or loses focus under test conditions, since practice under timing is a large part of what we cover.",
          "A short block of sessions can also help a family simply understand what the test involves, since a NAPLAN report can be hard to interpret without context for what each band actually measures.",
        ],
      },
      {
        heading: "What to expect as a parent",
        paragraphs: [
          "NAPLAN results are one piece of information about how your child is progressing, not the whole picture, and we will always frame practice sessions that way with your child. You still receive a written note after every session and a broader conversation about progress each term, the same as any other subject.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which year levels does this NAPLAN program cover?",
        answer:
          "This program covers Year 3 and Year 5 NAPLAN, the two primary school testing years. We also run a separate program for Year 7 and Year 9 NAPLAN preparation for high school students, so the right one depends on your child's current year.",
      },
      {
        question: "How far in advance should we start NAPLAN preparation?",
        answer:
          "A few weeks of focused sessions is usually enough, since NAPLAN tests general literacy and numeracy skills rather than a separate curriculum. We can suggest a starting point based on your child's most recent school results and how confident they already are with timed questions.",
      },
      {
        question: "My child gets anxious about tests. Will this help?",
        answer:
          "Sessions include timed practice under the same conditions as test day, which is often what reduces anxiety more than extra content. Many Year 3 students have never sat a formal test before, so familiarity with the format matters as much as the content.",
      },
      {
        question: "Does NAPLAN preparation help with anything beyond the test?",
        answer:
          "Yes. The reading, writing and numeracy skills NAPLAN checks are the same skills used every day at school, so practice here supports regular class work as well as the test itself, not just the one test day, and the habits usually carry over into the next school term too.",
      },
    ],
    related: [
      { label: "Primary School", to: "/primary-school" },
      { label: "Primary Maths Tutoring", to: "/topics/primary-maths" },
      { label: "Writing Program", to: "/topics/writing-program" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "writing-program": {
    title: "Writing Tutoring Program | TutorMunk",
    metaDescription:
      "TutorMunk runs an in-person writing program for K-12 students across suburban Sydney, with weekly marked work, in your home or our centre.",
    eyebrow: "Exam prep",
    heading: "A writing program with marked work every week.",
    intro:
      "Students plan, draft and edit one piece each week, and receive written feedback against a clear marking guide.",
    heroImage: stageImages.primary,
    targetKeywords: [
      "writing tutor for kids",
      "primary writing tutor",
      "creative writing tutor Sydney",
      "persuasive writing tutor",
      "NAPLAN writing tutor",
    ],
    entitySentence:
      "TutorMunk runs an in-person writing program for K-12 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What the writing program covers",
        paragraphs: [
          "Students plan, draft and edit one piece of writing each week, working across narrative, persuasive and informative styles in turn rather than repeating the same genre. A tutor marks each piece against a clear marking guide, the same kind of criteria used in NAPLAN writing and school assessment tasks, so your child learns what a marker is actually looking for, not just general writing advice.",
          "Narrative pieces focus on structure and description, persuasive pieces on building an argument with evidence, and informative pieces on explaining a topic clearly. These are the three styles most primary and early high school writing tasks draw on, so rotating between them keeps your child ready for whichever one comes up at school.",
        ],
      },
      {
        heading: "How writing sessions run",
        paragraphs: [
          "Each week's session is 60 minutes long, run one to one or in a small group, in your home or at our Gregory Hills centre, and begins with feedback on the previous piece before moving on to planning the next one together. Your child then starts the draft while the tutor is there to help with structure and word choice.",
          "Every piece comes home with written feedback attached, alongside the usual note covering what was worked on in the session. Small group sessions at the centre are capped at six students working at a similar level.",
        ],
      },
      {
        heading: "Who the writing program suits",
        paragraphs: [
          "This program suits a child who can generate ideas but struggles to structure them on the page, a strong reader who has not yet transferred that into strong writing, and a student preparing for NAPLAN writing, the Selective test writing component, or a school assessment task with a writing element. It also suits a reluctant writer, since a weekly piece with a clear structure to follow is often easier to start than a blank page at school.",
          "It also suits a student who is working on one specific genre for an upcoming assessment, as well as a student who simply wants to build stronger writing habits over a full term rather than around a single deadline.",
        ],
      },
      {
        heading: "What to expect as a parent",
        paragraphs: [
          "You receive marked, written feedback on every piece plus the usual note after each session, and a broader conversation about progress each term. We mark honestly against the criteria rather than softening feedback, since that is what actually helps a child improve.",
        ],
      },
    ],
    faqs: [
      {
        question: "What age groups is the writing program for?",
        answer:
          "The writing program runs from Year 3 through to Year 10, covering narrative, persuasive and informative writing at a level matched to your child's year and current ability. Sessions adjust as your child moves up a year, in the same way our other subject tutoring does.",
      },
      {
        question: "How is each piece of writing marked?",
        answer:
          "Each piece is marked against a written marking guide, the same style of criteria used in NAPLAN and school writing tasks, so your child gets specific feedback on structure, language and ideas rather than a general comment. The marked piece comes home so you can see exactly what was noted.",
      },
      {
        question: "My child hates writing. Can tutoring change that?",
        answer:
          "Often, yes. A weekly piece with a clear structure to follow is usually easier to start than a blank page at school, and consistent feedback tends to build confidence faster than occasional writing tasks fitted around everything else at school.",
      },
    ],
    related: [
      { label: "Primary School", to: "/primary-school" },
      { label: "Selective School Prep", to: "/topics/selective-school-prep" },
      { label: "NAPLAN", to: "/topics/naplan" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "high-school-english": topic(
    "High School Years 7 to 10",
    "High school English tutoring tied to school tasks.",
    "We work on essay structure, text analysis and creative writing using the texts your child studies at school.",
    "High School English Tutoring",
    "highSchool",
  ),
  "high-school-maths": topic(
    "High School Years 7 to 10",
    "High school maths tutoring from Year 7 to Year 10.",
    "Tutors fill gaps in algebra, geometry and measurement while keeping pace with the current school topic.",
    "High School Maths Tutoring",
    "highSchool",
  ),
  "high-school-science": topic(
    "High School Years 7 to 10",
    "High school science tutoring with practical revision.",
    "Sessions cover the working scientifically skills, topic notes and practice questions for school tests.",
    "High School Science Tutoring",
    "highSchool",
  ),
  "naplan-years-7-and-9": topic(
    "High School Years 7 to 10",
    "NAPLAN preparation for Year 7 and Year 9.",
    "Short courses that focus on writing, reading and numeracy in the format students see on test day.",
    "NAPLAN Years 7 and 9",
    "highSchool",
  ),
  "english-studies": topic(
    "HSC Years 11 to 12",
    "HSC English Studies tutoring for the common module.",
    "Tutors help students build their portfolio of work and prepare for the optional HSC examination.",
    "HSC English Studies Tutoring",
    "senior",
  ),
  "english-standard": topic(
    "HSC Years 11 to 12",
    "HSC English Standard tutoring, module by module.",
    "We plan responses for each module, then mark them against the NESA marking criteria.",
    "HSC English Standard Tutoring",
    "senior",
  ),
  "english-advanced": topic(
    "HSC Years 11 to 12",
    "HSC English Advanced tutoring with Band 6 tutors.",
    "Students write a full response every fortnight and receive line by line feedback on argument and expression.",
    "HSC English Advanced Tutoring",
    "senior",
  ),
  "english-extension-1": topic(
    "HSC Years 11 to 12",
    "HSC English Extension 1 tutoring for the common module.",
    "Sessions cover wider reading, critical theory and the extended response required for Extension 1.",
    "HSC English Extension 1 Tutoring",
    "senior",
  ),
  "english-extension-2": topic(
    "HSC Years 11 to 12",
    "HSC English Extension 2 support for the major work.",
    "Tutors work with students on proposal, drafting and reflection statement across the year.",
    "HSC English Extension 2 Tutoring",
    "senior",
  ),
  "english-eal-d": topic(
    "HSC Years 11 to 12",
    "HSC English EAL-D tutoring for language and analysis.",
    "We build vocabulary and listening skills alongside the module work set by the school.",
    "HSC English EAL-D Tutoring",
    "senior",
  ),
  "maths-standard": topic(
    "HSC Years 11 to 12",
    "HSC Maths Standard tutoring for Year 11.",
    "Tutors cover the Year 11 Standard course topics and prepare students for the Year 11 yearly examination.",
    "HSC Maths Standard Tutoring",
    "senior",
  ),
  "maths-standard-1": topic(
    "HSC Years 11 to 12",
    "HSC Maths Standard 1 tutoring with worked examples.",
    "Sessions focus on financial maths, measurement and statistics using past examination questions.",
    "HSC Maths Standard 1 Tutoring",
    "senior",
  ),
  "maths-standard-2": topic(
    "HSC Years 11 to 12",
    "HSC Maths Standard 2 tutoring for Year 12.",
    "We revise each topic, then work through timed sections so students finish the paper in time.",
    "HSC Maths Standard 2 Tutoring",
    "senior",
  ),
  "maths-extension-1": topic(
    "HSC Years 11 to 12",
    "HSC Maths Extension 1 tutoring for harder questions.",
    "Tutors take students through proof, calculus and combinatorics with a focus on Band 6 style questions.",
    "HSC Maths Extension 1 Tutoring",
    "senior",
  ),
  "maths-extension-2": topic(
    "HSC Years 11 to 12",
    "HSC Maths Extension 2 tutoring for top band students.",
    "Sessions cover complex numbers, mechanics and rigorous proof, with past papers marked each week.",
    "HSC Maths Extension 2 Tutoring",
    "senior",
  ),
  biology: topic(
    "HSC Years 11 to 12",
    "HSC Biology tutoring with clear topic notes.",
    "Students build a set of notes for every module and practise extended response questions.",
    "HSC Biology Tutoring",
    "senior",
  ),
  chemistry: topic(
    "HSC Years 11 to 12",
    "HSC Chemistry tutoring for calculations and theory.",
    "We work through equilibrium, acids and organic chemistry with past paper questions each session.",
    "HSC Chemistry Tutoring",
    "senior",
  ),
  physics: topic(
    "HSC Years 11 to 12",
    "HSC Physics tutoring with a focus on problem solving.",
    "Tutors break down each module and show students how to set out full mark solutions.",
    "HSC Physics Tutoring",
    "senior",
  ),
  "earth-and-environmental": topic(
    "HSC Years 11 to 12",
    "HSC Earth and Environmental Science tutoring.",
    "Sessions cover fieldwork skills, topic content and the depth study required by the course.",
    "HSC Earth and Environmental Science Tutoring",
    "senior",
  ),
  "investigating-science": topic(
    "HSC Years 11 to 12",
    "HSC Investigating Science tutoring for skills and reports.",
    "We focus on scientific method, data analysis and writing clear investigation reports.",
    "HSC Investigating Science Tutoring",
    "senior",
  ),
  icas: topic(
    "Exam prep",
    "ICAS preparation for primary and high school students.",
    "Short courses that build the reasoning skills the ICAS papers ask for, with practice questions each week.",
    "ICAS Preparation",
    "examPrep",
  ),
  "hsc-sprint": topic(
    "Exam prep",
    "HSC Sprint for the weeks before the examinations.",
    "Intensive in-person sessions that cover past papers, timing and the topics students still find shaky.",
    "HSC Sprint",
    "examPrep",
  ),
};

// Archived on 16 Aug 2026 at the owner's request. Ask Munk (drop-in,
// on-demand help) is a TutorGator concept, the owner's separate online
// platform. TutorMunk is strictly in person, so it has no place here.
// Not merged into the topics object above, so /topics/ask-munk returns a
// real 404. Nothing imports this const, so it never reaches a visitor.
// Kept, not deleted, so it can be restored if it is ever needed again.
export const archivedTopics: Record<string, TopicContent> = {
  "ask-munk": topic(
    "Exam prep",
    "Ask Munk for quick help between sessions.",
    "Students bring one hard question to a short drop in session at our Gregory Hills centre.",
    "Ask Munk",
    "examPrep",
  ),
};
