import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory storage (resets on redeploy - for demo purposes)
// In production, use Vercel KV or Postgres
let userProgress: Record<string, any> = {};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // For MVP, use a simple userId from query/header
  // In production, extract from JWT token
  const userId = (req.query.userId as string) || 'default-user';

  if (req.method === 'GET') {
    const progress = userProgress[userId] || {
      totalQuestions: 0,
      correctAnswers: 0,
      subjectScores: {},
      quizHistory: [],
    };
    return res.status(200).json({ progress });
  }

  if (req.method === 'POST') {
    const progressData = req.body;

    if (!progressData) {
      return res.status(400).json({ error: 'Progress data is required' });
    }

    // Merge with existing progress
    userProgress[userId] = {
      ...userProgress[userId],
      ...progressData,
      updatedAt: new Date().toISOString(),
    };

    return res.status(200).json({
      success: true,
      progress: userProgress[userId],
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
