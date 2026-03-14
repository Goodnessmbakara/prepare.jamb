import { Router, type IRouter } from "express";
import { subjects, allQuestions, notes, progressStore } from "../data/progress.js";

const router: IRouter = Router();

// GET /api/subjects
router.get("/subjects", (_req, res) => {
  const subjectsWithCounts = subjects.map((s) => ({
    ...s,
    totalQuestions: allQuestions.filter((q) => q.subjectId === s.id).length,
  }));
  res.json(subjectsWithCounts);
});

// GET /api/subjects/:subjectId/questions
router.get("/subjects/:subjectId/questions", (req, res) => {
  const { subjectId } = req.params;
  const { category = "all", limit } = req.query as { category?: string; limit?: string };

  let questions = allQuestions.filter((q) => q.subjectId === subjectId);

  if (category && category !== "all") {
    questions = questions.filter((q) => q.category === category);
  }

  if (limit) {
    const n = parseInt(limit, 10);
    if (!isNaN(n) && n > 0) {
      // Shuffle for quiz mode variety
      questions = [...questions].sort(() => Math.random() - 0.5).slice(0, n);
    }
  }

  res.json(questions);
});

// GET /api/subjects/:subjectId/notes
router.get("/subjects/:subjectId/notes", (req, res) => {
  const { subjectId } = req.params;
  const subjectNotes = notes
    .filter((n) => n.subjectId === subjectId)
    .sort((a, b) => a.order - b.order);
  res.json(subjectNotes);
});

// GET /api/progress
router.get("/progress", (_req, res) => {
  res.json(progressStore);
});

// POST /api/progress
router.post("/progress", (req, res) => {
  const { subjectId, score, total, timestamp, category } = req.body;

  if (!subjectId || score === undefined || total === undefined) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  progressStore.totalQuizzesTaken += 1;
  progressStore.totalCorrect += score;
  progressStore.totalAttempted += total;

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  if (!progressStore.subjectScores[subjectId]) {
    progressStore.subjectScores[subjectId] = percentage;
  } else {
    // Rolling average
    progressStore.subjectScores[subjectId] = Math.round(
      (progressStore.subjectScores[subjectId] + percentage) / 2
    );
  }

  const result = {
    subjectId,
    score,
    total,
    timestamp: timestamp || new Date().toISOString(),
    category: category || "all",
  };

  progressStore.recentResults.unshift(result);
  if (progressStore.recentResults.length > 20) {
    progressStore.recentResults = progressStore.recentResults.slice(0, 20);
  }

  res.json(progressStore);
});

export default router;
