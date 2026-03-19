import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, TrendingUp, Calendar, Award, BookOpen } from "lucide-react";
import { Card, LoadingSpinner } from "@/components/ui-elements";
import { apiClient, type Subject } from "@/lib/api-client";
import { Link } from "wouter";

export default function Progress() {
  const [progress, setProgress] = useState<any>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [progressData, subjectsData] = await Promise.all([
          apiClient.getProgress(),
          apiClient.getSubjects(),
        ]);

        setProgress(progressData);
        setSubjects(subjectsData);
      } catch (error) {
        console.error('Failed to load progress:', error);
        setProgress({
          totalQuestions: 0,
          correctAnswers: 0,
          subjectScores: {},
          quizHistory: [],
        });
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading || !progress) {
    return <LoadingSpinner className="min-h-[60vh]" />;
  }

  const accuracy = progress.totalQuestions
    ? Math.round((progress.correctAnswers / progress.totalQuestions) * 100)
    : 0;

  const getGradeColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50";
    if (score >= 60) return "text-blue-600 bg-blue-50";
    if (score >= 40) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getGrade = (score: number) => {
    if (score >= 80) return "A";
    if (score >= 60) return "B";
    if (score >= 40) return "C";
    return "D";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold font-display mb-2">Your Progress</h1>
        <p className="text-muted-foreground text-lg">
          Track your performance and improvement over time
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Quizzes Taken</p>
                <p className="text-2xl font-bold">{progress.quizHistory?.length || 0}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="text-2xl font-bold">{accuracy}%</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Questions</p>
                <p className="text-2xl font-bold">{progress.totalQuestions || 0}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Correct Answers</p>
                <p className="text-2xl font-bold">{progress.correctAnswers || 0}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Subject Performance */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Performance by Subject</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const subjectScore = progress.subjectScores?.[subject.id];
            const score = subjectScore
              ? Math.round((subjectScore.correct / subjectScore.total) * 100)
              : 0;
            const hasData = subjectScore && subjectScore.total > 0;

            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/subject/${subject.id}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{subject.icon}</span>
                        <h3 className="font-semibold">{subject.name}</h3>
                      </div>
                      {hasData && (
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(score)}`}>
                          {getGrade(score)}
                        </div>
                      )}
                    </div>

                    {hasData ? (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Accuracy</span>
                            <span className="font-semibold">{score}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{subjectScore.correct} correct</span>
                            <span>{subjectScore.total} attempted</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground text-sm">No quiz taken yet</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Start practicing to see your progress
                        </p>
                      </div>
                    )}
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz History */}
      {progress.quizHistory && progress.quizHistory.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Quiz History</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {progress.quizHistory.slice(0, 10).map((quiz: any, index: number) => {
                const subject = subjects.find((s) => s.id === quiz.subjectId);
                const score = Math.round((quiz.score / quiz.totalQuestions) * 100);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center justify-between py-3 border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{subject?.icon}</span>
                      <div>
                        <p className="font-semibold">{subject?.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(quiz.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-bold inline-block ${getGradeColor(score)}`}>
                        {score}%
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {quiz.score}/{quiz.totalQuestions} correct
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {(!progress.quizHistory || progress.quizHistory.length === 0) && (
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No quiz history yet</h3>
            <p className="text-muted-foreground mb-6">
              Start taking quizzes to track your progress and see detailed analytics
            </p>
            <Link href="/">
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Start Your First Quiz
              </button>
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
}
