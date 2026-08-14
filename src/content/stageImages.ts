import heroPrimary from "@/assets/hero-primary.jpg";
import heroHighSchool from "@/assets/hero-high-school.jpg";
import heroSenior from "@/assets/hero-senior.jpg";
import heroExamPrep from "@/assets/hero-exam-prep.jpg";

// Single source of truth for stage hero photos. Every Primary, High School,
// Senior/HSC and Exam Prep subject-level page inherits its image from here,
// matching the same photo its stage's hub page already uses. Swapping in
// the real photo library later is a one-line change per stage, here only.
export const stageImages = {
  primary: heroPrimary,
  highSchool: heroHighSchool,
  senior: heroSenior,
  examPrep: heroExamPrep,
} as const;

export type Stage = keyof typeof stageImages;
