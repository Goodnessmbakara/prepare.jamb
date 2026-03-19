import type { VercelRequest, VercelResponse } from '@vercel/node';

// Mock notes data
const mockNotes = [
  {
    id: "eng-note-1",
    subjectId: "english",
    title: "Parts of Speech",
    content: "# Parts of Speech\n\n## Nouns\nA noun is a word that names a person, place, thing, or idea.\n\n## Verbs\nA verb is a word that expresses action or a state of being.\n\n## Adjectives\nAn adjective modifies or describes a noun or pronoun.",
    order: 1,
  },
  {
    id: "eng-note-2",
    subjectId: "english",
    title: "Comprehension Strategies",
    content: "# Comprehension Strategies\n\n1. **Preview**: Scan the passage before reading\n2. **Main Idea**: Identify the central theme\n3. **Context Clues**: Use surrounding words to understand vocabulary",
    order: 2,
  },
  {
    id: "math-note-1",
    subjectId: "mathematics",
    title: "Algebra Fundamentals",
    content: "# Algebra Fundamentals\n\n## Variables\nA variable is a symbol (usually a letter) that represents a number.\n\n## Equations\nAn equation is a mathematical statement that two expressions are equal.",
    order: 1,
  },
];

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
    const notes = mockNotes
      .filter((note) => note.subjectId === subjectId)
      .sort((a, b) => a.order - b.order);
    return res.status(200).json({ notes });
  }

  // Return all notes
  return res.status(200).json({ notes: mockNotes });
}
