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
