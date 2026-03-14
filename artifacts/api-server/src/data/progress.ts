import { englishQuestions } from "./english-questions.js";
import { biologyQuestions } from "./biology-questions.js";
import { chemistryQuestions } from "./chemistry-questions.js";
import { physicsQuestions } from "./physics-questions.js";
import { notes } from "./notes.js";
import { subjects } from "./subjects.js";

export { englishQuestions, biologyQuestions, chemistryQuestions, physicsQuestions, notes, subjects };

export const allQuestions = [
  ...englishQuestions,
  ...biologyQuestions,
  ...chemistryQuestions,
  ...physicsQuestions,
];

// In-memory progress store (per session)
export const progressStore = {
  totalQuizzesTaken: 0,
  totalCorrect: 0,
  totalAttempted: 0,
  subjectScores: {} as Record<string, number>,
  recentResults: [] as Array<{
    subjectId: string;
    score: number;
    total: number;
    timestamp: string;
    category: string;
  }>,
};
