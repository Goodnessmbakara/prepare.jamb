import type { VercelRequest, VercelResponse } from '@vercel/node';

// Mock subjects data
const subjects = [
  { id: "english", name: "English Language", icon: "📚", color: "bg-blue-500" },
  { id: "mathematics", name: "Mathematics", icon: "🔢", color: "bg-green-500" },
  { id: "physics", name: "Physics", icon: "⚛️", color: "bg-purple-500" },
  { id: "chemistry", name: "Chemistry", icon: "🧪", color: "bg-red-500" },
  { id: "biology", name: "Biology", icon: "🧬", color: "bg-emerald-500" },
  { id: "literature", name: "Literature in English", icon: "📖", color: "bg-indigo-500" },
  { id: "government", name: "Government", icon: "🏛️", color: "bg-amber-500" },
  { id: "economics", name: "Economics", icon: "📊", color: "bg-cyan-500" },
  { id: "commerce", name: "Commerce", icon: "💼", color: "bg-orange-500" },
  { id: "accounting", name: "Accounting", icon: "💰", color: "bg-teal-500" },
  { id: "crk", name: "Christian Religious Knowledge", icon: "✝️", color: "bg-violet-500" },
  { id: "computer", name: "Computer Studies", icon: "💻", color: "bg-slate-500" },
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

  return res.status(200).json({ subjects });
}
