import { englishQuestions } from "./english-questions.js";
import { englishQuestions2 } from "./english-questions-2.js";
import { biologyQuestions } from "./biology-questions.js";
import { biologyQuestions2 } from "./biology-questions-2.js";
import { chemistryQuestions } from "./chemistry-questions.js";
import { chemistryQuestions2 } from "./chemistry-questions-2.js";
import { physicsQuestions } from "./physics-questions.js";
import { physicsQuestions2 } from "./physics-questions-2.js";
import { subjects } from "./subjects.js";

export const allEnglishQuestions = [...englishQuestions, ...englishQuestions2];
export const allBiologyQuestions = [...biologyQuestions, ...biologyQuestions2];
export const allChemistryQuestions = [...chemistryQuestions, ...chemistryQuestions2];
export const allPhysicsQuestions = [...physicsQuestions, ...physicsQuestions2];

export { subjects };

export const allQuestions = [
  ...allEnglishQuestions,
  ...allBiologyQuestions,
  ...allChemistryQuestions,
  ...allPhysicsQuestions,
];

export {
  englishQuestions, englishQuestions2,
  biologyQuestions, biologyQuestions2,
  chemistryQuestions, chemistryQuestions2,
  physicsQuestions, physicsQuestions2,
};

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
