export type TopicContent = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
};

function topic(
  eyebrow: string,
  heading: string,
  intro: string,
  titleLead: string,
): TopicContent {
  return {
    title: `${titleLead} | TutorMunk`,
    metaDescription: intro,
    eyebrow,
    heading,
    intro,
  };
}

export const topics: Record<string, TopicContent> = {
  "primary-maths": topic(
    "Primary K-6",
    "Primary maths tutoring that builds number confidence.",
    "Our tutors work through the NESA primary maths outcomes with your child in person, one step at a time.",
    "Primary Maths Tutoring K-6",
  ),
  "selective-school-prep": topic(
    "Exam prep",
    "Selective School preparation with weekly practice papers.",
    "Students sit timed sections each week and go through every mistake with their tutor before the next session.",
    "Selective School Prep",
  ),
  "oc-prep": topic(
    "Exam prep",
    "OC Prep for Year 4 students sitting the test.",
    "We cover reading, mathematical reasoning and thinking skills, with short practice sets between sessions.",
    "OC Prep",
  ),
  naplan: topic(
    "Exam prep",
    "NAPLAN preparation without the pressure.",
    "Sessions focus on the writing task, reading comprehension and numeracy questions that students find hardest.",
    "NAPLAN Preparation",
  ),
  "writing-program": topic(
    "Exam prep",
    "A writing program with marked work every week.",
    "Students plan, draft and edit one piece each week, and receive written feedback against a clear marking guide.",
    "Writing Program",
  ),
  "high-school-english": topic(
    "Years 7-10",
    "High school English tutoring tied to school tasks.",
    "We work on essay structure, text analysis and creative writing using the texts your child studies at school.",
    "High School English Tutoring",
  ),
  "high-school-maths": topic(
    "Years 7-10",
    "High school maths tutoring from Year 7 to Year 10.",
    "Tutors fill gaps in algebra, geometry and measurement while keeping pace with the current school topic.",
    "High School Maths Tutoring",
  ),
  "high-school-science": topic(
    "Years 7-10",
    "High school science tutoring with practical revision.",
    "Sessions cover the working scientifically skills, topic notes and practice questions for school tests.",
    "High School Science Tutoring",
  ),
  "naplan-years-7-and-9": topic(
    "Years 7-10",
    "NAPLAN preparation for Year 7 and Year 9.",
    "Short courses that focus on writing, reading and numeracy in the format students see on test day.",
    "NAPLAN Years 7 and 9",
  ),
  "english-studies": topic(
    "HSC English",
    "HSC English Studies tutoring for the common module.",
    "Tutors help students build their portfolio of work and prepare for the optional HSC examination.",
    "HSC English Studies Tutoring",
  ),
  "english-standard": topic(
    "HSC English",
    "HSC English Standard tutoring, module by module.",
    "We plan responses for each module, then mark them against the NESA marking criteria.",
    "HSC English Standard Tutoring",
  ),
  "english-advanced": topic(
    "HSC English",
    "HSC English Advanced tutoring with Band 6 tutors.",
    "Students write a full response every fortnight and receive line by line feedback on argument and expression.",
    "HSC English Advanced Tutoring",
  ),
  "english-extension-1": topic(
    "HSC English",
    "HSC English Extension 1 tutoring for the common module.",
    "Sessions cover wider reading, critical theory and the extended response required for Extension 1.",
    "HSC English Extension 1 Tutoring",
  ),
  "english-extension-2": topic(
    "HSC English",
    "HSC English Extension 2 support for the major work.",
    "Tutors work with students on proposal, drafting and reflection statement across the year.",
    "HSC English Extension 2 Tutoring",
  ),
  "english-eal-d": topic(
    "HSC English",
    "HSC English EAL-D tutoring for language and analysis.",
    "We build vocabulary and listening skills alongside the module work set by the school.",
    "HSC English EAL-D Tutoring",
  ),
  "maths-standard": topic(
    "HSC Maths",
    "HSC Maths Standard tutoring for Year 11.",
    "Tutors cover the Year 11 Standard course topics and prepare students for the Year 11 yearly examination.",
    "HSC Maths Standard Tutoring",
  ),
  "maths-standard-1": topic(
    "HSC Maths",
    "HSC Maths Standard 1 tutoring with worked examples.",
    "Sessions focus on financial maths, measurement and statistics using past examination questions.",
    "HSC Maths Standard 1 Tutoring",
  ),
  "maths-standard-2": topic(
    "HSC Maths",
    "HSC Maths Standard 2 tutoring for Year 12.",
    "We revise each topic, then work through timed sections so students finish the paper in time.",
    "HSC Maths Standard 2 Tutoring",
  ),
  "maths-extension-1": topic(
    "HSC Maths",
    "HSC Maths Extension 1 tutoring for harder questions.",
    "Tutors take students through proof, calculus and combinatorics with a focus on Band 6 style questions.",
    "HSC Maths Extension 1 Tutoring",
  ),
  "maths-extension-2": topic(
    "HSC Maths",
    "HSC Maths Extension 2 tutoring for top band students.",
    "Sessions cover complex numbers, mechanics and rigorous proof, with past papers marked each week.",
    "HSC Maths Extension 2 Tutoring",
  ),
  biology: topic(
    "HSC Science",
    "HSC Biology tutoring with clear topic notes.",
    "Students build a set of notes for every module and practise extended response questions.",
    "HSC Biology Tutoring",
  ),
  chemistry: topic(
    "HSC Science",
    "HSC Chemistry tutoring for calculations and theory.",
    "We work through equilibrium, acids and organic chemistry with past paper questions each session.",
    "HSC Chemistry Tutoring",
  ),
  physics: topic(
    "HSC Science",
    "HSC Physics tutoring with a focus on problem solving.",
    "Tutors break down each module and show students how to set out full mark solutions.",
    "HSC Physics Tutoring",
  ),
  "earth-and-environmental": topic(
    "HSC Science",
    "HSC Earth and Environmental Science tutoring.",
    "Sessions cover fieldwork skills, topic content and the depth study required by the course.",
    "HSC Earth and Environmental Science Tutoring",
  ),
  "investigating-science": topic(
    "HSC Science",
    "HSC Investigating Science tutoring for skills and reports.",
    "We focus on scientific method, data analysis and writing clear investigation reports.",
    "HSC Investigating Science Tutoring",
  ),
  icas: topic(
    "Exam prep",
    "ICAS preparation for primary and high school students.",
    "Short courses that build the reasoning skills the ICAS papers ask for, with practice questions each week.",
    "ICAS Preparation",
  ),
  "hsc-sprint": topic(
    "Exam prep",
    "HSC Sprint for the weeks before the examinations.",
    "Intensive in-person sessions that cover past papers, timing and the topics students still find shaky.",
    "HSC Sprint",
  ),
  "ask-munk": topic(
    "Exam prep",
    "Ask Munk for quick help between sessions.",
    "Students bring one hard question to a short drop in session at our Oran Park centre.",
    "Ask Munk",
  ),
};