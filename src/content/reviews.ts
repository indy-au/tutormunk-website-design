export type ReviewEntry = {
  name: string;
  initials: string;
  suburb: string;
  rating: number;
  when: string;
  stage: string;
  quote: string;
};

export const reviewSummary = {
  score: "4.9",
  total: "184",
  breakdown: [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 6 },
    { stars: 3, percent: 1 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
  note: "Reviews are placeholder copy for design review. Live reviews will feed from our Google Business Profile.",
};

export const reviewFilters = ["All reviews", "Primary K-6", "Years 7-10", "HSC", "Exam prep"];

export const reviewWall: ReviewEntry[] = [
  { name: "Melissa T.", initials: "MT", suburb: "Oran Park", rating: 5, when: "2 weeks ago", stage: "Primary K-6", quote: "Our Year 5 daughter went from avoiding maths homework to asking for extra questions. The tutor is patient and very organised." },
  { name: "Hasan A.", initials: "HA", suburb: "Gregory Hills", rating: 5, when: "3 weeks ago", stage: "Exam prep", quote: "We started six weeks before the Selective test. The practice papers and weekly feedback made a real difference." },
  { name: "Priya S.", initials: "PS", suburb: "Narellan", rating: 5, when: "last month", stage: "Years 7-10", quote: "Sessions at the centre suit us better than home. Our son is focused there and the reports are clear and honest." },
  { name: "Daniel W.", initials: "DW", suburb: "Leppington", rating: 5, when: "last month", stage: "HSC", quote: "Our Year 11 son needed help with Maths Advanced. His marks lifted a full band by the trial exams." },
  { name: "Jess M.", initials: "JM", suburb: "Harrington Park", rating: 5, when: "last month", stage: "Primary K-6", quote: "Booking was simple and we met the tutor before committing. No pressure and no long contracts." },
  { name: "Anita R.", initials: "AR", suburb: "Gledswood Hills", rating: 5, when: "2 months ago", stage: "Years 7-10", quote: "The tutor works straight from the school assessment notification. Our daughter knows what to do each week." },
  { name: "Vikram P.", initials: "VP", suburb: "Catherine Field", rating: 5, when: "2 months ago", stage: "HSC", quote: "Chemistry finally makes sense to our son. The tutor sets past paper questions and marks them properly." },
  { name: "Rebecca L.", initials: "RL", suburb: "Kirkham", rating: 4, when: "2 months ago", stage: "Primary K-6", quote: "Good communication and a tutor who turns up on time. We would like a slightly later session slot." },
  { name: "Omar H.", initials: "OH", suburb: "Oran Park", rating: 5, when: "3 months ago", stage: "Exam prep", quote: "The OC preparation was well timed. Weekly reasoning practice and a short report after every session." },
  { name: "Sarah K.", initials: "SK", suburb: "Narellan", rating: 5, when: "3 months ago", stage: "Years 7-10", quote: "Our Year 9 son writes a full essay now. The tutor breaks the task into steps he can follow." },
  { name: "Ling C.", initials: "LC", suburb: "Gregory Hills", rating: 5, when: "3 months ago", stage: "HSC", quote: "Band 6 tutor for English Advanced who knows the rubrics. Our daughter feels ready for trials." },
  { name: "Michael B.", initials: "MB", suburb: "Leppington", rating: 5, when: "4 months ago", stage: "Primary K-6", quote: "In-home sessions save us the drive. Our twins have the same tutor on the same afternoon." },
  { name: "Fatima N.", initials: "FN", suburb: "Harrington Park", rating: 5, when: "4 months ago", stage: "Exam prep", quote: "NAPLAN practice was calm and steady, not a panic. The writing feedback was the most useful part." },
  { name: "Grant S.", initials: "GS", suburb: "Kirkham", rating: 5, when: "4 months ago", stage: "Years 7-10", quote: "Science marks moved from the mid 50s to the mid 70s across two terms. The notes after each session help us follow along." },
  { name: "Nadia F.", initials: "NF", suburb: "Catherine Field", rating: 5, when: "5 months ago", stage: "HSC", quote: "Maths Extension 1 support at the centre. The tutor sets weekly work and checks it before the next session." },
  { name: "Peter D.", initials: "PD", suburb: "Oran Park", rating: 4, when: "5 months ago", stage: "Primary K-6", quote: "Our Year 3 son enjoys the small group. It took two tutors to find the right fit and the swap was handled well." },
  { name: "Amrita G.", initials: "AG", suburb: "Gledswood Hills", rating: 5, when: "5 months ago", stage: "Years 7-10", quote: "Every session starts with the next task and the marking criteria. That focus has changed how our daughter studies." },
  { name: "Chris V.", initials: "CV", suburb: "Narellan", rating: 5, when: "6 months ago", stage: "HSC", quote: "Physics tutoring with a tutor who explains the working, not just the answer. Reports each term are honest." },
];

const extraNames = [
  "Aisha B.", "Tom R.", "Sunita K.", "Luke P.", "Mai T.", "Ahmed S.", "Karen D.", "Josh L.",
  "Ranjit S.", "Emma C.", "Bilal K.", "Sophie N.", "Hung N.", "Claire O.", "Deepak M.",
  "Zoe A.", "Sam F.", "Hana Y.", "Paul E.", "Nisha J.", "Ben W.", "Layla M.", "Trent H.",
  "Mona Z.", "Ivan D.", "Rachel T.", "Kiran P.", "Adam G.", "Julie S.", "Wei L.",
];

const extraSuburbs = [
  "Oran Park", "Gregory Hills", "Narellan", "Leppington", "Harrington Park",
  "Gledswood Hills", "Catherine Field", "Kirkham",
];

const extraStages = ["Primary K-6", "Years 7-10", "HSC", "Exam prep"];

const extraQuotes = [
  "The tutor works from the NESA syllabus and the school assessment notification, so nothing feels random.",
  "Sessions run 60 minutes and we get short written notes the same night.",
  "Our daughter was quiet in class and now asks questions. The tutor built that up slowly.",
  "Weekly past paper practice with proper marking. That is what lifted the marks.",
  "The tutor is WWCC verified and always on time. Small things, but they matter to us.",
  "Small group at the centre suits our son. Four students in the same stage, all working.",
  "We had a term report that was honest about the gaps and what to do next.",
  "Maths went from a struggle each night to steady homework without arguments.",
  "Writing feedback was specific. Structure first, then evidence, then expression.",
  "Easy to reschedule when sport clashed. No fuss and no fees.",
  "Our Year 8 son now plans his study week. The tutor showed him how.",
  "Reading fluency improved over one term of in-home sessions.",
  "Band 6 tutor who knows the rubrics and marks to them.",
  "The tutor matched our daughter well on the first try.",
  "Trial exam preparation was calm and organised, not a last minute rush.",
];

const extraWhen = [
  "a week ago", "2 weeks ago", "3 weeks ago", "last month", "2 months ago",
  "3 months ago", "4 months ago", "5 months ago", "6 months ago", "7 months ago",
];

const generated: ReviewEntry[] = Array.from({ length: 108 }, (_, index) => {
  const name = extraNames[index % extraNames.length] as string;
  return {
    name,
    initials: name
      .split(" ")
      .map((part) => part[0])
      .join(""),
    suburb: extraSuburbs[index % extraSuburbs.length] as string,
    rating: index % 17 === 0 ? 4 : 5,
    when: extraWhen[index % extraWhen.length] as string,
    stage: extraStages[index % extraStages.length] as string,
    quote: extraQuotes[index % extraQuotes.length] as string,
  };
});

export const allReviews: ReviewEntry[] = [...reviewWall, ...generated];
