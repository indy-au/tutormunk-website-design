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
  // ==========================================================================
  // Content pass, batch 2 of 3 (19 Aug 2026). Six more of 27 topic pages,
  // same shape as batch 1. See CLAUDE.md's "Topic pages" note for the plain
  // English rule and the banned word list this batch added, and for which
  // topics still use topic().
  // ==========================================================================
  "high-school-english": {
    title: "High School English Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person high school English tutoring for Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "High School Years 7 to 10",
    heading: "High school English tutoring built around your child's own school work.",
    intro:
      "A tutor works from the texts, essays and tasks your child already has, in person, one to one or in a small group.",
    heroImage: stageImages.highSchool,
    targetKeywords: [
      "high school English tutor",
      "year 9 English tutoring",
      "essay writing tutor for teenagers",
      "English tutor near me Sydney",
      "year 7 English tutor",
      "text analysis tutor high school",
    ],
    entitySentence:
      "TutorMunk provides in-person English tutoring for high school students in Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What high school English tutoring covers",
        paragraphs: [
          "Years 7 and 8 sit under Stage 4 of the NSW English syllabus, and Years 9 and 10 move into Stage 5. A tutor works from the texts, essays and assessment tasks your child already has from school, so sessions build the specific skill a task needs, whether that is identifying techniques in a set text, planning an essay before writing it, or turning a rough idea into a structured paragraph.",
          "Creative writing gets the same attention as essay work. A tutor reads a draft with your child, points out where the structure or word choice could do more, and talks through the change with them instead of rewriting the sentence.",
        ],
      },
      {
        heading: "How high school English sessions run",
        paragraphs: [
          "A session lasts 60 minutes and runs one to one or in a small group, in your home or at our Gregory Hills centre. It usually opens with the most recent piece of school work, an essay draft, a comprehension task or a set text, and works through where your child is stuck before moving to anything new.",
          "A note comes home after each session explaining what was covered and what to try before the next one. Small group sessions at the centre are capped at six students in the same stage, so a tutor still reads and responds to each student's own writing.",
        ],
      },
      {
        heading: "Who high school English tutoring suits",
        paragraphs: [
          "This suits a student who has fallen behind on one assessment task and needs to catch up before it is due, and a student who reads well but struggles to get ideas onto the page in a structured way. It also suits a student who has lost interest in English at school and is more likely to work through a hard text with someone other than a parent.",
          "A short block of sessions can also give you a clearer picture of where your child's writing actually stands before a school report or a parent-teacher interview, rather than waiting for the next set of marks to find out.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session covering the skill that was the focus and what to do before the next one, plus a wider conversation about progress every term. If a particular task or text is not clicking, we say so directly rather than sticking with an approach that is not working.",
        ],
      },
    ],
    faqs: [
      {
        question: "My child says tutoring is boring. Will this be any different?",
        answer:
          "Sessions work from your child's own school texts and tasks, not a separate workbook, so the material is already familiar. Tutors also work one to one or in a small group rather than a large class, which tends to hold a teenager's attention better than a repeat of the school lesson.",
      },
      {
        question: "Do you work on the actual texts my child is studying at school?",
        answer:
          "Yes, a tutor asks for the current text list and any assessment notice before the first session, and builds sessions around that material rather than a generic set of texts. This means your child is practising the exact skills their next task will test.",
      },
      {
        question: "What if my child does not want to go to tutoring?",
        answer:
          "This is common at high school age, and we do not force enthusiasm your child does not feel. Most students settle once sessions start producing a result they can see, such as an essay plan that actually works or a mark that improves, and a tutor who is not a parent is often easier for a teenager to accept feedback from.",
      },
      {
        question: "Can tutoring help with creative writing as well as essays?",
        answer:
          "Yes, both are covered in the same sessions. Creative writing and essay writing share the same underlying skills, structure, word choice and editing, so a tutor moves between the two depending on what your child's school is currently assessing that term.",
      },
    ],
    related: [
      { label: "High School", to: "/high-school" },
      { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
      { label: "Writing Program", to: "/topics/writing-program" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "high-school-maths": {
    title: "High School Maths Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person high school maths tutoring for Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "High School Years 7 to 10",
    heading: "High school maths tutoring that catches gaps before they add up.",
    intro:
      "A tutor works through algebra, geometry and trigonometry at your child's own pace, in person, one to one or in a small group.",
    heroImage: stageImages.highSchool,
    targetKeywords: [
      "high school maths tutor",
      "year 9 maths tutor",
      "year 10 maths tutoring",
      "stage 5 maths tutor",
      "algebra tutor for teenagers",
      "maths tutor near me Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person maths tutoring for high school students in Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What high school maths tutoring covers",
        paragraphs: [
          "Years 7 and 8 sit under Stage 4 of the NSW maths syllabus, and Years 9 and 10 move into Stage 5, which splits into the 5.1, 5.2 and 5.3 pathways. A tutor works to Stage 5.3 where a student is on that pathway, covering algebra, geometry, trigonometry and the problem solving questions that combine several topics at once.",
          "Maths builds on itself more than most subjects, so a gap in one topic tends to show up again a few topics later. Sessions check for that early, going back to fix the underlying gap rather than only practising the topic currently being taught at school.",
        ],
      },
      {
        heading: "How high school maths sessions run",
        paragraphs: [
          "Each maths session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. A typical session reviews a recent test or homework set, works through the method behind any mistakes rather than just the correct answer, and finishes with a few questions your child completes without help.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students working on a similar topic, so a tutor can still mark and discuss each student's own working.",
        ],
      },
      {
        heading: "Who high school maths tutoring suits",
        paragraphs: [
          "This suits a student on the wrong pathway for where they want to end up, most often a student on 5.2 who wants a shot at 5.3 for the HSC courses it opens up, as well as a student who understands a topic in class but freezes under test conditions. It also suits a student who has missed a run of lessons and is now behind on content the rest of the class has moved past.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session outlining the topic covered and how your child went with it, plus a broader conversation about progress every term. If a change of pathway looks realistic or unrealistic based on where your child actually is, we tell you plainly rather than leaving it for the school to raise later.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my child is on a different maths pathway to their friends?",
        answer:
          "Pathways are set by the school based on how a student is tracking, and a tutor works to whichever pathway your child is currently on, 5.1, 5.2 or 5.3. If your child is aiming to move up a pathway, sessions can focus on the extra content that pathway needs.",
      },
      {
        question: "How do you know which topics to focus on?",
        answer:
          "We start from recent test results and current school topics, and ask your child which areas feel shaky. Because maths topics build on each other, a tutor often traces a current problem back to an earlier gap and works on that first, rather than only drilling the topic being taught this week.",
      },
      {
        question: "My child switches off in maths tutoring. What is different here?",
        answer:
          "Sessions are one to one or in a small group rather than a large class, and a tutor works at your child's own pace rather than the pace of thirty other students. Seeing a specific mistake corrected, rather than sitting through a general revision lesson, tends to hold attention better for this age group.",
      },
    ],
    related: [
      { label: "High School", to: "/high-school" },
      { label: "High School Science Tutoring", to: "/topics/high-school-science" },
      { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "high-school-science": {
    title: "High School Science Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person high school science tutoring for Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "High School Years 7 to 10",
    heading: "High school science tutoring for topic tests and practical write-ups.",
    intro:
      "A tutor works through the working scientifically skills alongside biology, chemistry and physics content, in person, one to one or in a small group.",
    heroImage: stageImages.highSchool,
    targetKeywords: [
      "high school science tutor",
      "year 8 science tutor",
      "chemistry tutor for teenagers",
      "physics tutor year 9",
      "science tutor near me",
      "biology tutor high school",
    ],
    entitySentence:
      "TutorMunk provides in-person science tutoring for high school students in Years 7 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What high school science tutoring covers",
        paragraphs: [
          "Years 7 to 10 science covers the working scientifically skills set out in the NSW syllabus, planning an investigation, collecting and analysing data, and writing up results, alongside core content in biology, chemistry and physics. A tutor works through whichever module your child's school is currently teaching, using the same terms and diagrams used in class.",
          "Practical write-ups often lose marks on structure rather than on the experiment itself, an aim that is too vague, a conclusion that does not refer back to the results. Sessions go through a recent write-up line by line so your child can see exactly where the marks were lost and why.",
        ],
      },
      {
        heading: "How high school science sessions run",
        paragraphs: [
          "Science sessions run for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. A typical session opens with a recent test, prac report or homework set, works through the content or the write-up structure, and finishes with a short set of practice questions.",
          "A written note goes home after every session, and groups at the centre stay to six students on the same topic, giving a tutor time to check each student's own answers individually.",
        ],
      },
      {
        heading: "Who high school science tutoring suits",
        paragraphs: [
          "This suits a student who understands the science in class but writes weak short-answer responses, since science exams mark on how an answer is written as much as whether it is correct. It also suits a student who has missed school and is behind on a topic, and a student getting ready for a specific topic test where the content is still shaky.",
          "It also suits a student who wants to build stronger study habits before Stage 6 science subjects begin, since the note-taking and write-up skills used in Years 9 and 10 carry directly into Year 11.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session covering the topic worked on and how your child performed on the practice questions, plus a broader conversation about progress every term. If one of the three sciences is consistently weaker than the others, we tell you and adjust the focus rather than spreading time evenly regardless of where it is needed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you help with practical write-ups, not just theory?",
        answer:
          "Yes, write-ups are a large part of the marks in Years 7 to 10 science, and a tutor works through structure, method, results and conclusion with your child, using their own recent prac report as the example. This is often where marks are being lost even when the underlying science is understood.",
      },
      {
        question: "What if my child has fallen behind after missing school?",
        answer:
          "A tutor can work through the missed content directly, using your child's class notes or the textbook chapter the school is up to, so sessions catch up the specific gap rather than repeating everything from the start of the topic. Most students catch up within a few sessions if the gap is one topic, not several.",
      },
      {
        question: "Which sciences do you cover in Years 7 to 10?",
        answer:
          "Sessions cover the combined science course taught in Years 7 to 10, which includes biology, chemistry and physics content within the one subject, plus the working scientifically skills that run across all of it. A tutor can spend more time on whichever of the three your child finds hardest.",
      },
    ],
    related: [
      { label: "High School", to: "/high-school" },
      { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
      { label: "NAPLAN Years 7 and 9", to: "/topics/naplan-years-7-and-9" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "naplan-years-7-and-9": {
    title: "NAPLAN Tutoring, Years 7 and 9 | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person NAPLAN preparation for Year 7 and 9 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "High School Years 7 to 10",
    heading: "NAPLAN preparation for Year 7 and Year 9, in the format students see on the day.",
    intro:
      "Short courses that work through reading, writing, conventions of language and numeracy under timed conditions.",
    heroImage: stageImages.highSchool,
    targetKeywords: [
      "NAPLAN year 7 tutor",
      "NAPLAN year 9 practice",
      "NAPLAN tutoring high school",
      "year 7 NAPLAN preparation",
      "NAPLAN writing tutor high school",
    ],
    entitySentence:
      "TutorMunk provides in-person NAPLAN preparation for Year 7 and Year 9 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Years 7 and 9 NAPLAN preparation covers",
        paragraphs: [
          "NAPLAN for Year 7 and Year 9 students is assessed across four domains, Reading, Writing, Conventions of Language and Numeracy. Sessions work through each domain using the same question formats and timing students see on test day, with extra time on whichever domain your child finds hardest.",
          "This is a separate program from our Year 3 and Year 5 NAPLAN preparation, since the reading passages, the writing task and the numeracy questions all step up in difficulty by high school. A tutor works to the Year 7 or Year 9 level specifically, not a scaled-up version of the primary material.",
        ],
      },
      {
        heading: "How Years 7 and 9 NAPLAN sessions run",
        paragraphs: [
          "Each session runs for 60 minutes, one to one or in a small group, over a short course in the final weeks before the test. A typical session works through a set of questions in one domain under timed conditions, then reviews every incorrect answer with your child so they understand why, not just what the right answer was.",
          "A written note goes home after each session covering which domain was the focus and how your child performed. Group sessions at our centre stay capped at six students in the same year group, so a tutor still checks each student's own answers before moving on.",
        ],
      },
      {
        heading: "Who Years 7 and 9 NAPLAN preparation suits",
        paragraphs: [
          "This suits a student sitting NAPLAN for the first time in high school and unfamiliar with the format, as well as a student who did well in primary NAPLAN and wants to keep that up. It also suits a student whose writing is fine in class but runs out of structure under the shorter timed conditions of the actual test.",
          "A short block of sessions can also help a family understand what a NAPLAN report actually measures, since the bands can be hard to interpret without context for what each one means at a high school level.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session and a plain conversation about how your child is tracking against the timed sections. NAPLAN results are one piece of information about your child's literacy and numeracy, not a full picture of their ability at school, and we talk about the results with your child that way.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is Year 7 and 9 NAPLAN different from primary NAPLAN?",
        answer:
          "The four domains stay the same, Reading, Writing, Conventions of Language and Numeracy, but the passages, questions and writing task step up in difficulty for high school students. This program works to the Year 7 or Year 9 level specifically, using practice material at the right level rather than primary material made slightly harder.",
      },
      {
        question: "How long before the test should we start?",
        answer:
          "A short course of a few weeks is usually enough, since NAPLAN tests general literacy and numeracy rather than a separate syllabus. We can suggest a starting point once we know your child's most recent NAPLAN band, if they have sat it before, and how comfortable they already are with timed questions.",
      },
      {
        question: "Does NAPLAN affect my child's school results?",
        answer:
          "NAPLAN does not count toward school marks or reports, and schools use it as one piece of information about literacy and numeracy across the state. Some families still prepare for it because the timed, formal test format is useful practice for exams that do count later in high school, including the HSC.",
      },
    ],
    related: [
      { label: "High School", to: "/high-school" },
      { label: "High School English Tutoring", to: "/topics/high-school-english" },
      { label: "High School Maths Tutoring", to: "/topics/high-school-maths" },
      { label: "Locations", to: "/locations" },
    ],
  },
  // ==========================================================================
  // Content pass, batch 3 of 3, half A (19 Aug 2026): the six senior English
  // courses and five HSC sciences. Same shape as batches 1 and 2. See
  // CLAUDE.md's "Topic pages" note for the plain English rule and the
  // extended banned word list this batch added.
  // ==========================================================================
  "english-studies": {
    title: "HSC English Studies Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English Studies tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English Studies tutoring built around the portfolio, not one exam.",
    intro:
      "A Band 6 tutor works through each portfolio piece with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC English Studies tutor",
      "English Studies tutoring Sydney",
      "English Studies portfolio help",
      "year 12 English Studies tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English Studies students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC English Studies covers",
        paragraphs: [
          "English Studies is assessed mainly through a school-based portfolio of work, built up across Year 11 and Year 12, with an optional HSC examination that some students choose to sit. A tutor works through whichever piece is due next in the portfolio, whether that is a personal response, a workplace text or a general text study, matched to the task your child's school has set.",
          "Because the course is portfolio-based, consistency across the year matters more than any single test. Sessions focus on building each piece up to a strong standard before it goes into the portfolio, rather than leaving everything to one exam at the end.",
        ],
      },
      {
        heading: "How English Studies sessions run",
        paragraphs: [
          "A session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English, and sessions work through a draft response, mark it against the NESA criteria, and go through the marking with your child piece by piece.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still reads and responds to each student's own portfolio piece.",
        ],
      },
      {
        heading: "Who English Studies suits",
        paragraphs: [
          "This suits a student who finds the analytical demands of Standard or Advanced English hard to manage alongside their other subjects, as well as a student who prefers building a portfolio of work over the year to sitting a single high-pressure exam. It also suits a student who is not sure whether to sit the optional HSC examination and wants an honest read on whether it suits them, or a student who simply wants more one to one time on a specific piece than a full class allows.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note comes home after each session covering which portfolio piece was the focus, and progress is discussed plainly each term. A tutor explains how each portfolio piece and the optional exam affect your child's result, without pressure, so decisions about the course stay grounded in where your child actually is.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between English Studies and Standard English?",
        answer:
          "English Studies is assessed mostly through a school-based portfolio built up across the year, with an optional HSC exam some students choose to sit. Standard English is assessed through set tasks tied to prescribed texts and a compulsory HSC exam. Schools generally recommend English Studies for students who need a different pace or structure.",
      },
      {
        question: "Does my child have to sit the optional HSC exam?",
        answer:
          "No, sitting the exam is a choice, and the decision is usually made with the school partway through Year 12. A tutor can help your child weigh up how ready they feel for an exam against relying on the portfolio alone, without pushing either option.",
      },
      {
        question: "How is the portfolio marked?",
        answer:
          "Each piece in the portfolio is marked by the school against its own task criteria, and a tutor uses the same style of criteria when reviewing a draft, so feedback matches what the school will actually be looking for. This differs from a single HSC exam mark, since the portfolio builds across several separate pieces.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Standard Tutoring", to: "/topics/english-standard" },
      { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "english-standard": {
    title: "HSC English Standard Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English Standard tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English Standard tutoring, module by module.",
    intro:
      "A Band 6 tutor plans and marks each response against the NESA criteria, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC English Standard tutor",
      "year 12 English Standard tutoring",
      "English Standard essay help",
      "HSC English tutor Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English Standard students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC English Standard covers",
        paragraphs: [
          "Year 12 Standard English shares the same common module as every other English course, Texts and Human Experiences, then moves into Language, Identity and Culture alongside a close study of text. A tutor works through whichever module is current at school, using the actual texts and questions your child has been set rather than a separate reading list.",
          "Standard English marks on how clearly an idea is expressed as much as the idea itself, so sessions spend real time on paragraph structure, quote selection and expression, not only on what to say about a text.",
        ],
      },
      {
        heading: "How English Standard sessions run",
        paragraphs: [
          "Each session is 60 minutes long, run one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English, and a typical session works through a draft response, marks it against the NESA criteria, and goes through the feedback with your child line by line.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still reads each student's own response.",
        ],
      },
      {
        heading: "Who English Standard tutoring suits",
        paragraphs: [
          "This suits a student whose internal rank has started slipping and wants to understand exactly why, as well as a student who understands a text in class discussion but cannot get that understanding onto the page under exam conditions. It also suits a student weighing up whether to move to Advanced or stay in Standard, since a tutor can give an honest read on which suits their writing right now.",
          "It suits a student switching schools mid-year and needing to catch up on whichever texts and modules the new school is teaching, since the specific texts studied can differ even within the same course.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Expect a note after every session outlining the skill that was worked on, plus a plain discussion of progress each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so you understand where things stand without guesswork.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should my child move from Standard to Advanced English?",
        answer:
          "This depends on how your child is tracking against both courses, not just their overall ability. A tutor can look at a recent Standard task alongside an Advanced-level piece and give an honest view of which course plays to your child's current writing, rather than assuming a move up is always the right call.",
      },
      {
        question: "My child understands the text but the essays don't reflect that. What helps?",
        answer:
          "This is common and usually comes down to structure rather than understanding, a student knows what they think but has not practised turning it into a clear paragraph under time pressure. Sessions work on this directly, using your child's own draft responses rather than a generic essay template.",
      },
      {
        question: "How does tutoring affect my child's school rank?",
        answer:
          "A tutor cannot change how the school ranks students, that is set by school-based assessment marks. What sessions can do is help your child perform closer to their real ability on each task, and a tutor will explain plainly how a given assessment weighs into the overall rank.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
      { label: "HSC English Studies Tutoring", to: "/topics/english-studies" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "english-advanced": {
    title: "HSC English Advanced Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English Advanced tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English Advanced tutoring with line by line feedback.",
    intro:
      "A Band 6 tutor works through argument and expression on your child's own writing, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC English Advanced tutor",
      "year 12 English Advanced tutoring",
      "band 6 English tutor Sydney",
      "craft of writing tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English Advanced students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC English Advanced covers",
        paragraphs: [
          "Year 12 Advanced English opens with the same Texts and Human Experiences common module every English course shares, then moves into Textual Conversations, a Critical Study of Literature and the Craft of Writing. A tutor works through whichever module your child's school is currently teaching, using the texts and questions actually set, not a separate list.",
          "Advanced English expects a higher level of independent interpretation than Standard, so sessions spend time developing your child's own reading of a text rather than handing over a ready-made argument to memorise.",
        ],
      },
      {
        heading: "How English Advanced sessions run",
        paragraphs: [
          "Advanced English sessions last 60 minutes and run one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English, and sessions work through a full response, mark it against the NESA criteria, and go through the argument and expression with your child in detail.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still gives detailed feedback on each student's own writing.",
        ],
      },
      {
        heading: "Who English Advanced tutoring suits",
        paragraphs: [
          "This suits a student aiming to move their band up who needs more precise, structured feedback than a class of thirty allows, as well as a student who reads and discusses texts well but whose written responses do not yet reflect that depth. It also suits a student managing a heavy Advanced workload alongside other subjects and needing sessions that stay tightly focused on the next task rather than a full revision of everything at once.",
          "It also suits a student moving from Year 11 into Year 12 who wants a head start on the Year 12 modules before the pace of assessments picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Each session ends with a note on what was covered, and progress gets an honest conversation with you every term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so decisions about pace and focus stay grounded in the actual marks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Advanced English too hard if my child isn't a strong writer?",
        answer:
          "Not necessarily, writing quality can improve with focused, specific feedback over a term, and a tutor can give an honest early read on whether the course currently suits your child. Some students settle into Advanced once they get consistent feedback on structure and expression rather than only a mark.",
      },
      {
        question: "How do you help students move up a band?",
        answer:
          "Sessions look closely at what separates the current response from the next band using the actual NESA criteria, then target that specific gap, often expression, evidence selection or how tightly an argument is structured, rather than general revision. Moving a band takes sustained work across several tasks, not one session.",
      },
      {
        question: "What is the Craft of Writing module about?",
        answer:
          "Craft of Writing asks students to produce their own imaginative, discursive or persuasive writing, informed by the other texts studied across the course. A tutor works on your child's own drafts here, focusing on voice and technique rather than analysis of someone else's text.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Standard Tutoring", to: "/topics/english-standard" },
      { label: "HSC English Extension 1 Tutoring", to: "/topics/english-extension-1" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "english-extension-1": {
    title: "HSC English Extension 1 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English Extension 1 tutoring for Years 11 and 12 across suburban Sydney, in your home or our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English Extension 1 tutoring for wider reading and independent argument.",
    intro:
      "A tutor who achieved a Band 6 in English Advanced works through Literary Worlds and the elective texts with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "English Extension 1 tutor",
      "HSC Extension 1 tutoring Sydney",
      "year 12 extension english tutor",
      "literary worlds tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English Extension 1 students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What English Extension 1 covers",
        paragraphs: [
          "Extension 1 runs across both Years 11 and 12, alongside Advanced English rather than instead of it. Year 12 centres on the common module Literary Worlds plus an elective chosen by the school, and a tutor works through whichever elective texts your child is currently studying.",
          "The course asks for a more independent, wide-ranging response than Advanced English alone, drawing connections between texts rather than analysing one at a time. Sessions build this skill directly, using your child's own developing ideas rather than supplying a ready-made thesis.",
          "The extended response format used in Extension 1 assessment tasks is longer and more open than a standard Advanced essay, so sessions also build the stamina and structure needed to sustain an argument across that length.",
        ],
      },
      {
        heading: "How English Extension 1 sessions run",
        paragraphs: [
          "Extension 1 sessions run for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English Advanced, and a typical session works through an extended response, marks it against the NESA criteria, and discusses the argument with your child in depth.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so each student's own response still gets close attention.",
        ],
      },
      {
        heading: "Who English Extension 1 suits",
        paragraphs: [
          "This suits a student who is strong in Advanced English and considering whether the extra Extension 1 workload is worth taking on, as well as a student already enrolled who is finding the wider reading and independent argument harder than expected. It also suits a student who wants to keep the option of Extension 2 open in Year 12, since strong Extension 1 results are usually the basis for that decision.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note follows every session covering both the elective work and the Advanced course, with progress discussed plainly each term. A tutor explains how each assessment affects rank across both Advanced and Extension 1, without pressure tactics, so you can see the full picture rather than one course in isolation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Extension 1 English worth taking on top of Advanced?",
        answer:
          "It depends on your child's current results in Advanced and their interest in wider reading and independent argument, since Extension 1 adds real extra workload. A tutor can give an honest view after seeing a recent piece of work, rather than assuming it suits every strong Advanced student.",
      },
      {
        question: "Can my child drop Extension 1 partway through the year?",
        answer:
          "This is a decision for your child and the school, and policies vary, so it is worth raising with the school directly if it becomes a real option. A tutor can help you weigh up how your child is tracking so that conversation is based on actual results rather than a general feeling of being overloaded.",
      },
      {
        question: "How is Extension 1 different from the Advanced course?",
        answer:
          "Extension 1 runs alongside Advanced English rather than replacing it, and asks for wider reading and more independent argument across texts rather than close analysis of one text at a time. It also shapes whether a student can take Extension 2 in Year 12, which Advanced alone does not lead into.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
      { label: "HSC English Extension 2 Tutoring", to: "/topics/english-extension-2" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "english-extension-2": {
    title: "HSC English Extension 2 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English Extension 2 tutoring for the Year 12 major work, across suburban Sydney, in your home or our centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English Extension 2 tutoring built around the Major Work.",
    intro:
      "A tutor who achieved a Band 6 in English Advanced reviews your child's Major Work draft each session, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "English Extension 2 tutor",
      "HSC major work tutoring",
      "extension 2 major work help",
      "year 12 extension 2 tutor Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English Extension 2 students in Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What English Extension 2 covers",
        paragraphs: [
          "Extension 2 is a Year 12 only course built entirely around one Major Work, a piece of original writing, media or performance your child proposes, drafts and submits across the year. There is no separate exam, the Major Work and its supporting material carry the whole assessment.",
          "Because the course is a single long project rather than a series of set tasks, the biggest risk is losing momentum partway through. A tutor checks in on the actual draft at each session rather than treating the process as something to sort out alone between check-ins with the school.",
        ],
      },
      {
        heading: "How English Extension 2 sessions run",
        paragraphs: [
          "A Major Work session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English Advanced, and a typical session reviews the current draft of the Major Work, marks it against the NESA criteria, and works through structure, voice and the reflection statement together.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students working on their own separate Major Works, so feedback stays specific to each project.",
        ],
      },
      {
        heading: "Who Extension 2 suits",
        paragraphs: [
          "This suits a student who already has a Major Work idea but is struggling to move from proposal to a full draft, as well as a student whose work is progressing but who wants a second, structured set of eyes on it before submission deadlines. It also suits a student managing the Major Work alongside Advanced and Extension 1, since the project can easily slip when school assessments in other subjects take priority.",
          "It also suits a student who works well with a regular check-in, since a fixed weekly session gives the project a deadline of its own well before the school's own milestones fall due.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session tracking where the Major Work is up to, plus a plain conversation about progress each term. A tutor explains how the project and the reflection statement affect the final mark, without pressure tactics, so your child stays clear on what is actually being assessed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Extension 2 worth taking on?",
        answer:
          "It suits a student who already enjoys sustained, independent creative or critical work and is comfortable managing a long project with limited formal class time. It adds real workload on top of Advanced and Extension 1, so it is worth an honest conversation with the school and a tutor about your child's current capacity before committing.",
      },
      {
        question: "What if my child's Major Work idea isn't working?",
        answer:
          "This is common partway through the year, and changing direction is possible earlier rather than later. A tutor can look at the current draft and help your child decide whether to adjust the existing idea or change direction, based on what is actually working on the page rather than the original plan alone.",
      },
      {
        question: "What is the reflection statement, and how much does it matter?",
        answer:
          "The reflection statement is a short piece explaining the ideas and process behind the Major Work, submitted alongside it. It is marked against its own NESA criteria and contributes to the overall result, so sessions treat it as its own piece of writing rather than an afterthought once the Major Work is finished.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Extension 1 Tutoring", to: "/topics/english-extension-1" },
      { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "english-eal-d": {
    title: "HSC English EAL/D Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC English EAL/D tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "English EAL/D tutoring for vocabulary, listening and writing together.",
    intro:
      "A Band 6 tutor builds vocabulary alongside module work with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "EAL/D tutor",
      "HSC EAL/D tutoring Sydney",
      "English as an additional language tutor",
      "EAL/D exam preparation",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC English EAL/D students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC English EAL/D covers",
        paragraphs: [
          "EAL/D, English as an Additional Language or Dialect, shares the Year 12 common module Texts and Human Experiences with every other English course, then follows its own separate modules built for students who have been in Australia, or learning in English, for a shorter time. A tutor works through whichever module and text your child's school has set.",
          "Vocabulary and listening comprehension carry more weight in EAL/D assessment than in other English courses, so sessions spend time on both alongside the usual essay and response work, rather than assuming reading and writing skills alone are enough.",
        ],
      },
      {
        heading: "How English EAL/D sessions run",
        paragraphs: [
          "EAL/D sessions run for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in English, and a typical session works through vocabulary from the current text, a draft response, and marks it against the NESA criteria with your child.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still works through each student's own vocabulary gaps and drafts individually.",
        ],
      },
      {
        heading: "Who English EAL/D tutoring suits",
        paragraphs: [
          "This suits a student who is eligible for EAL/D and finding the listening and vocabulary components harder than the reading and writing, as well as a student whose spoken English is strong but who needs more structured practice turning ideas into exam-ready written responses. It also suits a family who is not sure whether EAL/D or mainstream English is the right fit and wants an honest session or two to help decide.",
          "It also suits a student who arrived partway through high school and is still building the vocabulary that classmates who started in Australia earlier already have.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Every session ends with a note on whichever of vocabulary, listening or writing was the focus, and progress is discussed plainly each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, and flags directly if a switch between EAL/D and mainstream English looks worth raising with the school.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is my child eligible for EAL/D?",
        answer:
          "Eligibility is set by NESA criteria around how long a student has been learning in English and their country of schooling, and the school confirms this, not a tutor. If you are unsure, the school's careers or English faculty is the right first call, and a tutor can help either way once eligibility is confirmed.",
      },
      {
        question: "Should my child do EAL/D or mainstream English?",
        answer:
          "This depends on how your child's reading, writing, listening and vocabulary compare across both, not just their spoken English. A tutor can look at a recent piece of work from each and give an honest view, though the final decision usually involves the school as well as the family.",
      },
      {
        question: "What extra support does EAL/D get in the HSC exam?",
        answer:
          "EAL/D has its own separate exam paper and marking criteria built around the additional language demands of the course, distinct from the mainstream English papers. A tutor works from the same criteria the exam actually uses, so practice responses are marked the way the real exam will mark them.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Standard Tutoring", to: "/topics/english-standard" },
      { label: "HSC English Studies Tutoring", to: "/topics/english-studies" },
      { label: "Locations", to: "/locations" },
    ],
  },
  // ==========================================================================
  // Content pass, batch 3 of 3, half B (19 Aug 2026): the five senior maths
  // courses. Same shape as batches 1, 2 and half A. See CLAUDE.md's "Topic
  // pages" note.
  // ==========================================================================
  "maths-standard": {
    title: "Year 11 Maths Standard Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person Year 11 Mathematics Standard tutoring across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Year 11 Maths Standard tutoring before the Year 12 split.",
    intro:
      "A Band 6 tutor works through algebra, measurement and statistics with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "Year 11 maths tutor",
      "Year 11 Mathematics Standard tutoring",
      "maths standard tutor Sydney",
      "year 11 maths tutoring near me",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for Year 11 Mathematics Standard students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Year 11 Maths Standard covers",
        paragraphs: [
          "Year 11 Mathematics Standard is one shared course, covering algebra, measurement, financial mathematics and statistics, before it splits into Standard 1 and Standard 2 for Year 12. A tutor works through whichever topic is current at school, building the foundations both Year 12 pathways rely on.",
          "How your child performs in Year 11 often shapes which Year 12 pathway the school recommends, so sessions focus on genuine understanding of each topic rather than just getting through the homework.",
        ],
      },
      {
        heading: "How Year 11 Maths Standard sessions run",
        paragraphs: [
          "A Year 11 Standard session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in a senior maths course, and a typical session works through worked examples, then a set of practice questions marked against the same style of criteria used at school.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own working.",
        ],
      },
      {
        heading: "Who Year 11 Maths Standard tutoring suits",
        paragraphs: [
          "This suits a student who found maths harder in Years 9 and 10 and wants to build confidence before the Year 12 pathway decision, as well as a student who understands each topic in isolation but struggles to apply it in a mixed question. It also suits a student and family wanting an honest, early view on whether Standard 1 or Standard 2 will suit them better in Year 12.",
          "It also suits a student who is comfortable with the content but wants steady, regular practice through the year rather than a rush of catch-up sessions closer to the pathway decision.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note comes home after every Year 11 session outlining the topic covered, and progress gets a plain conversation each term. A tutor explains how Year 11 results tend to feed into the Standard 1 or Standard 2 decision, without pressure, so the choice stays grounded in how your child is actually going.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is Year 11 Maths Standard different from Year 12?",
        answer:
          "Year 11 Mathematics Standard is one shared course for every student on the Standard pathway, covering algebra, measurement, financial mathematics and statistics. In Year 12 it splits into Standard 1 and Standard 2, so Year 11 is really building the base both pathways rely on rather than a separate, smaller course.",
      },
      {
        question: "When is the Standard 1 or Standard 2 decision made?",
        answer:
          "This is usually decided with the school toward the end of Year 11, based on how a student has gone across the course so far. A tutor can help you see where your child's results currently sit, though the final call on which pathway is offered rests with the school.",
      },
      {
        question:
          "My child struggled with maths in Year 10. Should they start Year 11 with a tutor?",
        answer:
          "Starting early can help, since Year 11 content builds directly on Year 9 and 10 topics, and gaps from earlier years tend to resurface here rather than disappear. A tutor can identify which specific gaps are causing trouble and work on those alongside the current Year 11 topic.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Maths Standard 2 Tutoring", to: "/topics/maths-standard-2" },
      { label: "HSC Maths Advanced Tutoring", to: "/hsc-maths-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "maths-standard-1": {
    title: "HSC Maths Standard 1 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Mathematics Standard 1 tutoring for Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Maths Standard 1 tutoring for practical, everyday maths.",
    intro:
      "A Band 6 tutor works through worked examples and past questions with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC Maths Standard 1 tutor",
      "Maths Standard 1 tutoring Sydney",
      "year 12 standard 1 maths tutor",
      "standard 1 maths help",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Mathematics Standard 1 students in Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Maths Standard 1 covers",
        paragraphs: [
          "Standard 1 grows out of the shared Year 11 Standard course and continues with a practical focus, applying algebra, measurement, financial mathematics and statistics to everyday and workplace situations. A tutor works through whichever topic is current at school, using the same style of question your child will see in class tests.",
          "Questions in Standard 1 tend to be set in a real-world context, so sessions spend real time on reading a worded problem correctly and picking the right method, not only on the calculation itself.",
        ],
      },
      {
        heading: "How Maths Standard 1 sessions run",
        paragraphs: [
          "A Standard 1 session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in a senior maths course, and a typical session works through worked examples, then a set of practice questions marked against the school's own style of criteria.",
          "A written note comes home after every session, and small groups at the centre stay capped at six students in the same course, so a tutor can still check each student's own working.",
        ],
      },
      {
        heading: "Who Maths Standard 1 tutoring suits",
        paragraphs: [
          "This suits a student who finds the wording of real-world maths questions harder than the calculation itself, as well as a student who needs steady, worked-example practice rather than fast-paced content delivery. It also suits a student catching up after missing a run of lessons, since Standard 1 topics build in a fairly linear way across the year.",
          "It also suits a student moving from Year 11 into Year 12 who wants a genuine head start on the current topic before the pace of assessments picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Expect a note after every session covering the topic and question style worked on, plus a plain conversation about progress each term. A tutor explains how each assessment fits into the course, without pressure, so your child always knows what the next task actually needs.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between Standard 1 and Standard 2?",
        answer:
          "Both grow out of the same Year 11 Standard course and cover similar broad areas, algebra, measurement, financial mathematics and statistics, but Standard 2 extends further into more complex content in Year 12. The school recommends a pathway based on how a student has gone through Year 11, and a tutor can help you understand where your child currently sits.",
      },
      {
        question: "Is Standard 1 an easier option?",
        answer:
          "It suits students who want a practical, real-world focus rather than more abstract or complex content, though how easy it feels depends on the individual student. A tutor can look at recent results and give an honest view of whether Standard 1 plays to your child's strengths.",
      },
      {
        question: "How can a tutor help if my child understands the maths but not the wording?",
        answer:
          "This is common in Standard 1, where questions are set in real-world contexts and the hardest part is often working out which method a worded problem is actually asking for. Sessions practise this directly, using past questions in the same style your child's exams will use.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Maths Standard 2 Tutoring", to: "/topics/maths-standard-2" },
      { label: "Year 11 Maths Standard Tutoring", to: "/topics/maths-standard" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "maths-standard-2": {
    title: "HSC Maths Standard 2 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Mathematics Standard 2 tutoring for Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Maths Standard 2 tutoring for algebra, statistics and finance.",
    intro:
      "A Band 6 tutor works through timed sections and past HSC papers with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC Maths Standard 2 tutor",
      "year 12 maths standard 2 tutoring",
      "maths standard 2 tutor Sydney",
      "HSC maths standard tutoring near me",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Mathematics Standard 2 students in Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Maths Standard 2 covers",
        paragraphs: [
          "Standard 2 grows out of the shared Year 11 Standard course and covers algebra, measurement, financial mathematics and statistics, extended further than Standard 1 into more complex content. A tutor works through whichever topic is current at school, building from worked examples toward full exam-style questions.",
          "The Standard 2 exam includes multi-step problems that combine more than one topic in a single question, so sessions practise moving between topics within one question, not just each topic on its own.",
        ],
      },
      {
        heading: "How Maths Standard 2 sessions run",
        paragraphs: [
          "A Standard 2 session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in a senior maths course, and a typical session revises a topic, then works through timed sections so your child finishes practice papers within the real exam time.",
          "A written note goes home after each session, and groups at the centre are kept to six students in the same course, so a tutor still checks every student's own working.",
        ],
      },
      {
        heading: "Who Maths Standard 2 tutoring suits",
        paragraphs: [
          "This suits a student who understands each topic on its own but struggles when a question combines more than one, as well as a student who runs out of time in practice papers and needs regular timed sections to build speed. It also suits a student aiming to move up a band with focused past paper practice through Year 11 and into the trials and HSC.",
          "It also suits a student moving from Year 11 into Year 12 who wants a genuine head start on the harder multi-step questions before the pace of assessments picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note follows every session outlining the topic and question type covered, with progress discussed plainly each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so the plan stays focused on where marks are actually being lost.",
        ],
      },
    ],
    faqs: [
      {
        question: "My child understands each topic but struggles on the exam. Why?",
        answer:
          "Standard 2 exams often combine more than one topic within a single question, so a student can know each topic separately and still find the combined question difficult. Sessions practise this directly, using past exam questions rather than single-topic worksheets, so your child gets used to moving between topics under time pressure.",
      },
      {
        question: "How much does financial mathematics come up in the exam?",
        answer:
          "Financial mathematics is one of the core topics in Standard 2 and appears regularly across assessments and the HSC exam, alongside algebra, measurement and statistics. A tutor can tell you roughly how much weight it carries based on recent past papers, though the exact mix varies year to year.",
      },
      {
        question: "Can tutoring help my child finish the exam in time?",
        answer:
          "Yes, running out of time is common and usually comes down to practice rather than ability. Sessions include timed sections from past papers so your child builds the pace needed to finish, alongside working through where time is being lost on specific question types.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Maths Standard 1 Tutoring", to: "/topics/maths-standard-1" },
      { label: "HSC Maths Advanced Tutoring", to: "/hsc-maths-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "maths-extension-1": {
    title: "HSC Maths Extension 1 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Mathematics Extension 1 tutoring across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Maths Extension 1 tutoring across Year 11 and Year 12.",
    intro:
      "A tutor who achieved a Band 6 in Mathematics Advanced works through proof, calculus and combinatorics with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "Maths Extension 1 tutor Sydney",
      "HSC extension 1 maths tutoring",
      "year 12 extension 1 maths tutor",
      "combinatorics tutor HSC",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Mathematics Extension 1 students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Maths Extension 1 covers",
        paragraphs: [
          "Extension 1 runs across both Years 11 and 12, alongside the Advanced course rather than instead of it. It covers proof, vectors, further calculus and combinatorics, building on Advanced content at a faster pace and going into more depth. A tutor works through whichever topic is current at school, alongside the Advanced content it builds on.",
          "Because Extension 1 moves faster than Advanced, a small gap can compound quickly if it is not addressed early. Sessions check understanding of the current topic against the Advanced foundation it depends on, not just the new Extension content on its own.",
        ],
      },
      {
        heading: "How Maths Extension 1 sessions run",
        paragraphs: [
          "A Maths Extension 1 session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in Mathematics Advanced, and a typical session works through worked examples, then timed questions from past Extension 1 papers.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own reasoning step by step.",
        ],
      },
      {
        heading: "Who Maths Extension 1 tutoring suits",
        paragraphs: [
          "This suits a student who is strong in Advanced Maths and is deciding whether to take on Extension 1, as well as a student already enrolled who is finding the pace or the extra topics harder than expected. It also suits a student who wants to keep Extension 2 open as an option in Year 12, since strong Extension 1 results are usually the basis for that decision.",
          "It also suits a student moving from Year 11 into Year 12 who wants a genuine head start on the harder combinatorics and calculus content before the pace of the course picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Every session ends with a note on the topic worked on, and progress gets a straightforward conversation each term. A tutor explains how each assessment affects rank across both Advanced and Extension 1, without pressure tactics, so you can see the full picture rather than one course on its own.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Extension 1 Maths worth taking on top of Advanced?",
        answer:
          "It depends on how your child is tracking in Advanced and whether they enjoy the faster pace and extra depth Extension 1 adds. A tutor can give an honest view after seeing a recent piece of work, rather than assuming it suits every strong Advanced student automatically.",
      },
      {
        question: "My child is falling behind in Extension 1. Should they drop back to Advanced?",
        answer:
          "This is a decision for your child and the school, and it depends on how far behind and how much of the year is left. A tutor can help assess whether the gap is catchable with focused sessions or whether stepping back to Advanced is the more realistic option, based on actual results rather than a general feeling of struggling.",
      },
      {
        question: "How does Extension 1 lead into Extension 2?",
        answer:
          "Strong results and comfort with the Extension 1 pace and content are usually what the school looks at when considering a student for Extension 2 in Year 12. Extension 1 itself continues alongside Extension 2 rather than finishing before it starts.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Maths Extension 2 Tutoring", to: "/topics/maths-extension-2" },
      { label: "HSC Maths Advanced Tutoring", to: "/hsc-maths-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "maths-extension-2": {
    title: "HSC Maths Extension 2 Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Mathematics Extension 2 tutoring for Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Maths Extension 2 tutoring for the hardest HSC maths course.",
    intro:
      "A tutor who achieved a Band 6 in Mathematics Advanced works through rigorous proof and past papers with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "Maths Extension 2 tutor Sydney",
      "HSC extension 2 maths tutoring",
      "year 12 extension 2 maths tutor",
      "hardest HSC maths tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Mathematics Extension 2 students in Year 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Maths Extension 2 covers",
        paragraphs: [
          "Extension 2 is a Year 12 only course, taken alongside Extension 1 rather than replacing it. It is organised into five areas, Proof, Vectors, Complex Numbers, Calculus, extending further into integration, and Mechanics, sitting at the most advanced end of the NSW maths syllabus and building directly on Extension 1 work. A tutor works through whichever topic is current at school, alongside the Extension 1 and Advanced foundations it depends on.",
          "Because Extension 2 assumes strong Extension 1 skills already in place, sessions often need to shore up a specific Extension 1 technique before the current Extension 2 topic makes full sense. Mechanics and the further calculus work in particular lean heavily on Extension 1 foundations, so a gap there tends to surface again here.",
        ],
      },
      {
        heading: "How Maths Extension 2 sessions run",
        paragraphs: [
          "An Extension 2 session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in Mathematics Advanced, and a typical session works through worked examples, then timed questions from past Extension 2 papers.",
          "A written note goes home after every session, and small groups at the centre stay capped at six students in the same course, so a tutor still checks each student's own proof and working closely.",
        ],
      },
      {
        heading: "Who Maths Extension 2 tutoring suits",
        paragraphs: [
          "This suits a student who is strong across Extension 1 and Advanced and is managing the jump into Extension 2's pace and difficulty, as well as a student who understands the concepts but needs more structured, timed practice with past papers. It also suits a student juggling Extension 2 alongside a heavy overall subject load who wants sessions that stay tightly focused on the current gap rather than a full course review.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note comes home after every session outlining the topic covered, and progress is discussed plainly with you each term. A tutor explains how each assessment affects your child's rank across Extension 1 and Extension 2 together, without pressure tactics, so effort goes where it will make the most difference.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Extension 2 much harder than Extension 1?",
        answer:
          "Extension 2 sits at the most advanced end of the NSW maths syllabus and assumes strong Extension 1 skills already in place, so most students find the step up noticeable. A tutor can give an honest read on whether your child's current Extension 1 results suggest they are ready for that jump.",
      },
      {
        question: "What if my child is struggling to keep up in Extension 2?",
        answer:
          "This is common given how demanding the course is, and the first step is usually identifying which specific Extension 1 technique the current Extension 2 topic depends on. A tutor can work backward from the current struggle to shore up that foundation, rather than only drilling the new content.",
      },
      {
        question: "Does Extension 2 need much more time than other maths courses?",
        answer:
          "It generally needs more regular practice than Advanced or Standard, given the depth of content and the pace it moves at. A tutor can help you and your child plan a realistic weekly rhythm of practice, alongside sessions, rather than trying to catch up in a single long session before an assessment.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Maths Extension 1 Tutoring", to: "/topics/maths-extension-1" },
      { label: "HSC Maths Advanced Tutoring", to: "/hsc-maths-advanced" },
      { label: "Locations", to: "/locations" },
    ],
  },
  biology: {
    title: "HSC Biology Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Biology tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Biology tutoring for the four modules and the depth study.",
    intro:
      "A Band 6 tutor marks long response answers against the NESA criteria, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC Biology tutor",
      "year 12 biology tutoring Sydney",
      "biology depth study help",
      "HSC biology tutor near me",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Biology students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC Biology covers",
        paragraphs: [
          "Year 12 Biology covers four modules, Heredity, Genetic Change, Infectious Disease, and Non-Infectious Disease and Disorders, plus a depth study your child's school sets during the year. A tutor works through whichever module is current at school, using the same terms and diagrams used in class.",
          "Long response questions carry significant marks in Biology, and losing marks there is often about structure rather than content, an answer that does not directly address the question, or evidence that is not clearly linked back to the point being made. Sessions work through this structure directly using your child's own draft answers.",
        ],
      },
      {
        heading: "How Biology sessions run",
        paragraphs: [
          "A Biology session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in Biology, and a typical session works through a topic or a past paper section, then marks long response answers against the NESA criteria.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still marks and discusses each student's own answers.",
        ],
      },
      {
        heading: "Who Biology tutoring suits",
        paragraphs: [
          "This suits a student who understands the content but loses marks on long response structure, as well as a student who needs support pulling together the depth study, since it is assessed separately from the four core modules and often gets less classroom time than it needs. It also suits a student aiming to move up a band with focused, timed past paper practice through Year 11 and into the trials and HSC.",
          "It also suits a student moving from Year 11 into Year 12 who wants a head start on the harder modules before the pace of assessments picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note comes home after every session outlining the module or skill worked on, and progress is discussed plainly with you each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so the focus stays on the next task rather than the exam as a whole.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is the depth study marked?",
        answer:
          "The depth study is set and marked by the school, usually against its own task-specific criteria linked to the NESA outcomes, separate from the four core modules. A tutor can help plan and structure the depth study itself, though the school sets the exact requirements and due date.",
      },
      {
        question:
          "My child understands the content but loses marks in exams. Why is that happening?",
        answer:
          "This is common in Biology, where long response questions are marked on structure and clear reasoning as much as correct content. Sessions work through past long responses line by line to show exactly where marks were lost, which is often about directly answering the question asked rather than writing everything known on the topic.",
      },
      {
        question: "Which modules does Year 12 Biology cover?",
        answer:
          "Year 12 Biology has four core modules, Heredity, Genetic Change, Infectious Disease, and Non-Infectious Disease and Disorders, plus a depth study set by the school. A tutor can spend more time on whichever module your child's school is currently teaching or where recent results have been weaker.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Chemistry Tutoring", to: "/topics/chemistry" },
      { label: "HSC Physics Tutoring", to: "/topics/physics" },
      { label: "Locations", to: "/locations" },
    ],
  },
  chemistry: {
    title: "HSC Chemistry Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Chemistry tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Chemistry tutoring for calculations and extended responses.",
    intro:
      "A Band 6 tutor works through worked calculations and written answers, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC Chemistry tutor",
      "year 12 chemistry tutoring",
      "chemistry tutor Sydney",
      "HSC chemistry calculations help",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Chemistry students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC Chemistry covers",
        paragraphs: [
          "Year 12 Chemistry covers four modules, Equilibrium and Acid Reactions, Acid/Base Reactions, Organic Chemistry and Applying Chemical Ideas, plus a depth study set by the school. A tutor works through whichever module is current at school, alongside the calculations that come with each one.",
          "Chemistry mixes calculation-based questions with extended written responses, and a student can be confident with one and shaky on the other. Sessions cover both, working through the maths behind a calculation as carefully as the wording of a written answer.",
        ],
      },
      {
        heading: "How Chemistry sessions run",
        paragraphs: [
          "A Chemistry session lasts 60 minutes and runs one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in Chemistry, and a typical session works through worked calculations and a past paper section, then marks written responses against the NESA criteria.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own working and answers.",
        ],
      },
      {
        heading: "Who Chemistry tutoring suits",
        paragraphs: [
          "This suits a student who is confident with the theory but makes careless errors in calculations under time pressure, as well as a student who can do the calculations but writes weak extended responses, since Chemistry marks both skills separately. It also suits a student needing help structuring the depth study, or a student working toward the trial and HSC exams who wants regular timed past paper practice.",
          "It also suits a student moving from Year 11 into Year 12 who wants a genuine head start on the harder calculation types before the pace of the course picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Every session ends with a note on whichever of calculations or written responses was the focus, and progress is discussed plainly each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so the plan stays focused on the specific gap rather than everything at once.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "My child is good at the theory but makes mistakes in calculations. What would help?",
        answer:
          "This usually comes down to method and checking under time pressure rather than understanding the chemistry itself. Sessions work through the same calculation types your child's exams use, focusing on setting out working clearly so errors are easier to catch before submitting an answer.",
      },
      {
        question: "How is the depth study assessed in Chemistry?",
        answer:
          "The depth study is set and marked by the school against its own criteria linked to the NESA outcomes, separate from the four core modules. A tutor can help plan the investigation and structure the write-up, though the exact requirements and due date come from the school.",
      },
      {
        question: "Which topics does Year 12 Chemistry cover?",
        answer:
          "Year 12 Chemistry has four core modules, Equilibrium and Acid Reactions, Acid/Base Reactions, Organic Chemistry and Applying Chemical Ideas, plus a school-set depth study. A tutor can spend more time on whichever module is currently being taught or wherever recent test results were weakest.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Biology Tutoring", to: "/topics/biology" },
      { label: "HSC Physics Tutoring", to: "/topics/physics" },
      { label: "Locations", to: "/locations" },
    ],
  },
  physics: {
    title: "HSC Physics Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Physics tutoring for Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Physics tutoring for full, markable solutions.",
    intro:
      "A Band 6 tutor works through problem sets and past papers with your child, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "HSC Physics tutor",
      "year 12 physics tutoring",
      "physics tutor Sydney",
      "HSC physics tutoring near me",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Physics students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC Physics covers",
        paragraphs: [
          "Year 12 Physics covers four modules, Advanced Mechanics, Electromagnetism, The Nature of Light and From the Universe to the Atom, plus a depth study set by the school. A tutor works through whichever module is current at school, including the derivations and formulas each one relies on.",
          "Physics questions often ask a student to set out a full working, not just a final number, so marks are lost on presentation as much as on the physics itself. Sessions focus on setting out a complete, markable solution, the same way a NESA marker reads one.",
        ],
      },
      {
        heading: "How Physics sessions run",
        paragraphs: [
          "Sessions last 60 minutes and run one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in Physics, and a typical session works through problem sets and a past paper section, then marks full solutions against the NESA criteria.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own working line by line.",
        ],
      },
      {
        heading: "Who Physics tutoring suits",
        paragraphs: [
          "This suits a student who understands the concepts but sets out working in a way that loses marks, as well as a student who finds one module noticeably harder than the others and wants focused time there rather than spreading practice evenly. It also suits a student preparing the depth study or working toward the trial and HSC exams who wants regular, timed past paper practice.",
          "It also suits a student moving from Year 11 into Year 12 who wants extra practice with the harder derivations before the pace of the course picks up.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note follows every session outlining the module or working-out habit that was the focus, with progress discussed plainly each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so effort goes where it will actually make a difference to the mark.",
        ],
      },
    ],
    faqs: [
      {
        question: "My child understands physics but loses marks in exams. What's going wrong?",
        answer:
          "Physics exams mark on how a solution is set out, not only on the final answer, so a student can understand the concept and still lose marks for an incomplete or unclear working. Sessions go through past solutions step by step to show exactly what a full-mark answer needs to include.",
      },
      {
        question: "Which modules does Year 12 Physics cover?",
        answer:
          "Year 12 Physics has four core modules, Advanced Mechanics, Electromagnetism, The Nature of Light, and From the Universe to the Atom, plus a school-set depth study. A tutor can spend more time on whichever module your child's school is currently teaching or where recent results were weakest.",
      },
      {
        question: "How is the depth study marked in Physics?",
        answer:
          "In Physics, the depth study is set and marked by the school against its own criteria tied to the NESA outcomes, kept separate from the four core modules. A tutor can help plan the investigation and structure the write-up, though the exact requirements and due date are set by the school.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Chemistry Tutoring", to: "/topics/chemistry" },
      { label: "HSC Biology Tutoring", to: "/topics/biology" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "earth-and-environmental": {
    title: "HSC Earth and Environmental Science | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Earth and Environmental Science tutoring across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Earth and Environmental Science tutoring, fieldwork included.",
    intro:
      "A Band 6 tutor works through fieldwork data and extended responses, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "Earth and Environmental Science tutor",
      "HSC EES tutoring Sydney",
      "earth science tutor year 12",
      "environmental science HSC tutor",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Earth and Environmental Science students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Earth and Environmental Science covers",
        paragraphs: [
          "Like the other Year 12 sciences, Earth and Environmental Science is built around four core modules, Earth's Processes, Hazards, Climate Science and Resource Management, plus a depth study. A tutor works through whichever module and fieldwork topic is current at school.",
          "Fieldwork and practical skills carry real weight in this course, so sessions work through interpreting data, maps and diagrams alongside the written content, not just the theory on its own. Hazards and Climate Science in particular lean on reading and comparing real data sets, which is a different skill from the more calculation-based work in Physics or Chemistry.",
          "Depth study choices in this course often connect to a local site or a specific environmental issue, so sessions can help plan an investigation that is realistic to carry out within a school term.",
        ],
      },
      {
        heading: "How Earth and Environmental Science sessions run",
        paragraphs: [
          "Each session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in a Year 12 science, and a typical session works through a topic and a past paper section, then marks extended responses against the NESA criteria.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own answers and fieldwork write-ups.",
        ],
      },
      {
        heading: "Who Earth and Environmental Science tutoring suits",
        paragraphs: [
          "This suits a student who prefers a science built around fieldwork and applied data over the more calculation-heavy sciences, as well as a student who needs help structuring the depth study or a fieldwork report. It also suits a student working toward the trial and HSC exams who wants regular, timed past paper practice against the NESA criteria.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "A note comes home after every session outlining the module or fieldwork skill that was the focus, and progress gets a plain conversation each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so the plan stays specific to where your child actually needs support.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which modules does Year 12 Earth and Environmental Science cover?",
        answer:
          "Year 12 Earth and Environmental Science has four core modules, Earth's Processes, Hazards, Climate Science and Resource Management, plus a school-set depth study. A tutor can spend more time on whichever module and fieldwork topic your child's school is currently teaching or where recent results were weakest.",
      },
      {
        question: "How much of the course is fieldwork based?",
        answer:
          "Fieldwork and the interpretation of field and lab data are a real part of this course, alongside the written content, more so than in some of the other sciences. A tutor works on both, including how to write up field observations clearly for assessment tasks.",
      },
      {
        question: "How does this compare to Biology, Chemistry or Physics?",
        answer:
          "All four Year 12 sciences follow a similar structure of core modules plus a depth study and are marked against the same style of NESA criteria, but the specific content differs. Earth and Environmental Science leans more on fieldwork, maps and applied data than the calculation-heavy content in Physics or Chemistry.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC Biology Tutoring", to: "/topics/biology" },
      { label: "HSC Investigating Science Tutoring", to: "/topics/investigating-science" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "investigating-science": {
    title: "HSC Investigating Science Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person HSC Investigating Science tutoring for Years 11 and 12 across suburban Sydney, in your home or our centre.",
    eyebrow: "HSC Years 11 to 12",
    heading: "Investigating Science tutoring for method and report writing.",
    intro:
      "A Band 6 tutor works through your child's own investigation write-ups, in person, one to one or in a small group.",
    heroImage: stageImages.senior,
    targetKeywords: [
      "Investigating Science tutor",
      "HSC investigating science tutoring",
      "science investigation report help",
      "year 12 investigating science Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person tutoring for HSC Investigating Science students in Years 11 and 12 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What Investigating Science covers",
        paragraphs: [
          "Investigating Science has its own four Year 12 modules, Scientific Investigations, Technologies, Fact or Fallacy? and Science and Society, plus a depth study, built around scientific method and applied investigation rather than the deeper subject content Biology, Chemistry and Physics cover in theirs. A tutor works through whichever module and investigation your child's school has set.",
          "Writing up an investigation clearly, with a stated method, results and a conclusion that refers back to the data, carries real weight in this course. Sessions work through your child's own draft write-ups rather than a generic report template.",
        ],
      },
      {
        heading: "How Investigating Science sessions run",
        paragraphs: [
          "Investigating Science sessions run for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. The tutor teaching this course achieved a Band 6 in a Year 12 science, and a typical session works through the current topic and a recent investigation write-up, marked against the NESA criteria.",
          "A written note goes home after every session, and small group sessions at the centre are capped at six students in the same course, so a tutor still checks each student's own report and reasoning.",
        ],
      },
      {
        heading: "Who Investigating Science tutoring suits",
        paragraphs: [
          "This suits a student who prefers a science built around practical investigation and report writing over a heavier content and exam load, as well as a student who needs help structuring an investigation report clearly. It also suits a student working toward assessment tasks who wants regular, specific feedback against the NESA criteria rather than a general content revision.",
          "It also suits a student who has struggled with the heavier content and exam load in another science and is looking for a different, more practical way to demonstrate what they understand.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "Every session ends with a note on the investigation or reporting skill that was the focus, and progress gets a plain conversation each term. A tutor explains how each assessment affects your child's rank, without pressure tactics, so the focus stays on the actual task in front of them.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is Investigating Science different from Biology, Chemistry or Physics?",
        answer:
          "Investigating Science has its own four Year 12 modules, Scientific Investigations, Technologies, Fact or Fallacy? and Science and Society, focused on scientific method and applied investigation rather than the deeper subject content the other sciences cover in their four modules. It suits a student who prefers applied, practical work over a heavier theory and calculation load.",
      },
      {
        question: "How is an investigation report marked?",
        answer:
          "An investigation report is marked by the school against its own task-specific criteria linked to the NESA outcomes, looking at method, results and how clearly the conclusion connects back to the data. A tutor works through your child's actual draft report rather than a generic template.",
      },
      {
        question: "Is Investigating Science a good alternative to a traditional science?",
        answer:
          "It can suit a student who wants a science subject built around practical investigation rather than a heavier content and exam load, though the right choice depends on your child's interests and other subjects. A tutor can help you weigh this up based on how your child finds the actual coursework, not a general assumption about which science is easier.",
      },
    ],
    related: [
      { label: "Senior School", to: "/senior-school" },
      {
        label: "HSC Earth and Environmental Science Tutoring",
        to: "/topics/earth-and-environmental",
      },
      { label: "HSC Biology Tutoring", to: "/topics/biology" },
      { label: "Locations", to: "/locations" },
    ],
  },
  icas: {
    title: "ICAS Preparation Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk provides in-person ICAS preparation for Years 3 to 10 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    eyebrow: "Exam prep",
    heading: "ICAS preparation that builds the reasoning skills the papers ask for.",
    intro:
      "Short courses in English, maths, science and writing, working through problem solving step by step.",
    heroImage: stageImages.examPrep,
    targetKeywords: [
      "ICAS preparation",
      "ICAS tutor",
      "ICAS maths practice",
      "ICAS English preparation",
      "ICAS tutoring Sydney",
    ],
    entitySentence:
      "TutorMunk provides in-person ICAS preparation for students in Years 3 to 10 across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What ICAS preparation covers",
        paragraphs: [
          "ICAS is an optional competition-style assessment sat at school, with papers in subjects including English, Mathematics, Science and Writing. The questions are pitched harder than standard classroom work and often ask a student to apply a skill in an unfamiliar way, which is why practice with the question style matters as much as the underlying content.",
          "Sessions work through past-style ICAS questions in the subject your child is sitting, going through the reasoning step by step rather than just checking whether the final answer is correct. This builds the problem solving approach the papers reward, not only the content knowledge behind each question.",
        ],
      },
      {
        heading: "How ICAS sessions run",
        paragraphs: [
          "ICAS sessions run for 60 minutes, one to one or in a small group, in the weeks leading up to the sitting. A typical session works through a set of practice questions at ICAS difficulty, then reviews the reasoning behind each one with your child.",
          "A written note goes home after every session covering what was practised and how your child went. Group sessions at our centre are capped at six students preparing for the same subject.",
        ],
      },
      {
        heading: "Who ICAS preparation suits",
        paragraphs: [
          "This suits a student who is doing well at school and wants a harder set of questions than the regular classroom provides, as well as a family who is not sure whether to enter and wants a session or two to see how their child finds the question style first. It also suits a student who has sat ICAS before and wants focused practice on a subject where the result was lower than expected.",
          "It suits a family preparing across more than one subject as much as a family focused on just one, since sessions can be booked around whichever ICAS papers your child is sitting that year.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session and an honest read on how your child is finding the question style, since ICAS is a competition against other students rather than a pass or fail test, and no tutor can guarantee a particular result band. What sessions can do is give your child real practice with the format before the day.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is ICAS, and does my child have to sit it?",
        answer:
          "ICAS is an optional, competition-style assessment offered through schools in subjects including English, Mathematics, Science and Writing. It is not compulsory and does not affect school reports, families choose to enter if they want an external benchmark or an extra academic challenge for their child.",
      },
      {
        question: "Which subjects can you help prepare for?",
        answer:
          "Sessions can cover English, Mathematics, Science or Writing, matched to whichever subject your child is sitting. Most families focus on one or two subjects rather than all four, based on where their child is strongest or where they want the extra challenge.",
      },
      {
        question: "Will tutoring guarantee a high ICAS result?",
        answer:
          "No tutor can guarantee a particular ICAS result, since it is a competition scored against other students sitting the same paper. What sessions can do is build familiarity with the question style and the reasoning the papers reward, so your child goes in prepared rather than seeing the format for the first time on the day.",
      },
    ],
    related: [
      { label: "Exam Prep", to: "/exam-prep" },
      { label: "Selective School Prep", to: "/topics/selective-school-prep" },
      { label: "NAPLAN", to: "/topics/naplan" },
      { label: "Locations", to: "/locations" },
    ],
  },
  "hsc-sprint": {
    title: "HSC Sprint Intensive Tutoring | TutorMunk",
    metaDescription:
      "TutorMunk runs an in-person HSC Sprint before trials and the HSC for Year 12 students across suburban Sydney, in your home or our Gregory Hills centre.",
    eyebrow: "Exam prep",
    heading: "HSC Sprint, a short block of sessions before trials and the HSC.",
    intro:
      "Built around past papers and band descriptors, in person, one to one or in a small group.",
    heroImage: stageImages.examPrep,
    targetKeywords: [
      "HSC trial preparation",
      "HSC Sprint tutoring",
      "HSC past paper tutor",
      "HSC intensive tutoring",
      "year 12 exam preparation tutor",
    ],
    entitySentence:
      "TutorMunk runs an in-person HSC Sprint, a short block of sessions before trials and the HSC, for Year 12 students across suburban Sydney, in your home or at our Gregory Hills centre.",
    sections: [
      {
        heading: "What HSC Sprint covers",
        paragraphs: [
          "HSC Sprint is a short, intensive block of sessions built around past papers and the NESA band descriptors, run during school holidays and after school in the weeks before trials and the HSC itself. Rather than re-teaching a full year of content, sessions focus on the specific topics or question types your child is still unsure of.",
          "A tutor works through a past paper section under timed conditions, then marks it against the same band descriptors NESA markers use, so your child can see exactly what separates one band from the next in their own answers.",
        ],
      },
      {
        heading: "How HSC Sprint sessions run",
        paragraphs: [
          "A Sprint session runs for 60 minutes, one to one or in a small group, in your home or at our Gregory Hills centre. A typical session works through a timed past paper section in the subject, then goes through the marking with your child, question by question, rather than only giving a total mark.",
          "A written note goes home after every session, and groups at the centre stay small, no more than six students sitting the same subject, so each student's paper still gets individual attention.",
        ],
      },
      {
        heading: "Who HSC Sprint suits",
        paragraphs: [
          "This suits a student who has covered the year's content and wants structured, timed practice before trials or the HSC, and a student whose mark in one topic keeps letting down an otherwise solid paper. It also suits a student who wants an outside check on their exam technique, since a tutor marking against the actual band descriptors can be a different, useful perspective from a school teacher marking a full class set.",
          "It also suits a student returning to a subject after a gap, for example after an illness before trials, who wants a fast, structured way to see where they now stand against the syllabus.",
        ],
      },
      {
        heading: "What parents can expect",
        paragraphs: [
          "You get a note after each session covering what was practised and how your child's answers were marked against the band descriptors. We give you a plain read on where your child's marks are tracking, without promising a particular band, since no tutor can guarantee an HSC result.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is HSC Sprint different from regular tutoring?",
        answer:
          "HSC Sprint is a short, intensive block rather than ongoing weekly tutoring, built around past papers and timed practice in the weeks before trials or the HSC. Regular tutoring works through content across a term, while Sprint sessions assume the content is mostly covered and focus on exam technique and marking.",
      },
      {
        question: "When should we book an HSC Sprint block?",
        answer:
          "Most families book in the school holidays or the weeks directly before trials, then again before the HSC itself. The right timing depends on your child's subject and how their trial results looked, so a call is the easiest way to work out a sensible starting point.",
      },
      {
        question: "Can HSC Sprint cover more than one subject?",
        answer:
          "Yes, sessions can be booked across more than one subject, usually the ones where your child's marks are furthest from where they want to be. Most families prioritise one or two subjects for a Sprint block rather than spreading sessions thinly across everything.",
      },
      {
        question: "Does HSC Sprint guarantee a band improvement?",
        answer:
          "No tutor can guarantee a particular HSC band, and we will not claim otherwise. What Sprint sessions can do is give your child focused, timed practice marked against the actual band descriptors, so they go into trials or the HSC having already seen where their answers are losing marks.",
      },
    ],
    related: [
      { label: "Exam Prep", to: "/exam-prep" },
      { label: "Senior School", to: "/senior-school" },
      { label: "HSC English Advanced Tutoring", to: "/topics/english-advanced" },
      { label: "HSC Maths Standard 2 Tutoring", to: "/topics/maths-standard-2" },
      { label: "Locations", to: "/locations" },
    ],
  },
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
