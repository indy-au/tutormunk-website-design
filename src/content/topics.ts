import { stageImages, type Stage } from "./stageImages";

export type TopicContent = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  heroImage: string;
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
  "primary-maths": topic(
    "Primary K-6",
    "Primary maths tutoring that builds number confidence.",
    "Our tutors work through the NESA primary maths outcomes with your child in person, one step at a time.",
    "Primary Maths Tutoring K-6",
    "primary",
  ),
  "selective-school-prep": topic(
    "Exam prep",
    "Selective School preparation with weekly practice papers.",
    "Students sit timed sections each week and go through every mistake with their tutor before the next session.",
    "Selective School Prep",
    "primary",
  ),
  "oc-prep": topic(
    "Exam prep",
    "OC Prep for Year 4 students sitting the test.",
    "We cover reading, mathematical reasoning and thinking skills, with short practice sets between sessions.",
    "OC Prep",
    "primary",
  ),
  naplan: topic(
    "Exam prep",
    "NAPLAN preparation without the pressure.",
    "Sessions focus on the writing task, reading comprehension and numeracy questions that students find hardest.",
    "NAPLAN Preparation",
    "primary",
  ),
  "writing-program": topic(
    "Exam prep",
    "A writing program with marked work every week.",
    "Students plan, draft and edit one piece each week, and receive written feedback against a clear marking guide.",
    "Writing Program",
    "primary",
  ),
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
