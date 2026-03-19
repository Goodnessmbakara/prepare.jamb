import type { VercelRequest, VercelResponse } from '@vercel/node';

// Mock questions - in production, this would come from a database
const mockQuestions = {
  english: [
    {
      id: "eng-1",
      subjectId: "english",
      question: "Choose the word that best completes the sentence: The student was _____ for his exemplary behavior.",
      options: ["rewarded", "awarded", "granted", "presented"],
      correctAnswer: "rewarded",
      explanation: "'Rewarded' is the correct word when someone receives something in recognition of their service, effort, or achievement.",
      category: "vocabulary",
      difficulty: "medium",
    },
    {
      id: "eng-2",
      subjectId: "english",
      question: "Identify the figure of speech in: 'The classroom was a zoo.'",
      options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
      correctAnswer: "Metaphor",
      explanation: "This is a metaphor because it directly compares the classroom to a zoo without using 'like' or 'as'.",
      category: "literature",
      difficulty: "easy",
    },
  ],
  mathematics: [
    {
      id: "math-1",
      subjectId: "mathematics",
      question: "Solve for x: 2x + 5 = 15",
      options: ["5", "10", "7.5", "20"],
      correctAnswer: "5",
      explanation: "2x + 5 = 15, therefore 2x = 10, so x = 5",
      category: "algebra",
      difficulty: "easy",
    },
    {
      id: "math-2",
      subjectId: "mathematics",
      question: "What is the value of π (pi) to 2 decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      correctAnswer: "3.14",
      explanation: "The value of π is approximately 3.14159, which rounds to 3.14 to 2 decimal places.",
      category: "geometry",
      difficulty: "easy",
    },
  ],
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { subjectId } = req.query;

  if (subjectId && typeof subjectId === 'string') {
    const questions = mockQuestions[subjectId as keyof typeof mockQuestions] || [];
    return res.status(200).json({ questions });
  }

  // Return all questions
  const allQuestions = Object.values(mockQuestions).flat();
  return res.status(200).json({ questions: allQuestions });
}
