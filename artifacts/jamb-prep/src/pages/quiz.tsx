import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useGetQuestions, useGetSubjects, useSaveProgress } from "@workspace/api-client-react";
import { Button, Card, LoadingSpinner } from "@/components/ui-elements";
import { formatTime, cn } from "@/lib/utils";
import { Timer, AlertTriangle, ArrowRight, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";

const QUIZ_DURATION = 30 * 60; // 30 minutes in seconds

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  // Data fetching
  const { data: subjects } = useGetSubjects();
  const { data: questions, isLoading } = useGetQuestions(id || "", { limit: 40 });
  const { mutate: saveProgress, isPending: isSaving } = useSaveProgress({
    mutation: {
      onSuccess: () => {
        // Invalidate progress so dashboard updates
        queryClient.invalidateQueries({ queryKey: ["/api/progress"] });
      }
    }
  });

  const subject = subjects?.find(s => s.id === id);

  // Quiz State
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isSubmitted]);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const submitQuiz = () => {
    if (!questions) return;
    setIsSubmitted(true);
    
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    
    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);

    saveProgress({
      data: {
        subjectId: id || "",
        score: finalScore,
        total: questions.length,
        timestamp: new Date().toISOString(),
        category: "mock"
      }
    });
  };

  if (isLoading || !subject || !questions) {
    return <LoadingSpinner className="min-h-screen" />;
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No Questions Available</h2>
        <Button onClick={() => setLocation(`/subject/${id}`)}>Go Back</Button>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto mt-20">
        <Card className="text-center p-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Timer className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">{subject.name} Mock Exam</h1>
          <ul className="text-left text-muted-foreground space-y-4 mb-8 max-w-md mx-auto bg-muted/30 p-6 rounded-2xl">
            <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-orange-500" /> Once started, the timer cannot be paused.</li>
            <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-orange-500" /> You have 30 minutes to complete {questions.length} questions.</li>
            <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-orange-500" /> Unanswered questions will be marked incorrect.</li>
          </ul>
          <Button size="lg" className="w-full text-xl" onClick={() => setHasStarted(true)}>
            Start Exam Now
          </Button>
        </Card>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-700">
        <Card className="text-center p-12 relative overflow-hidden bg-gradient-to-b from-white to-muted/20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
          <h2 className="text-3xl font-display font-bold mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground mb-8">Here is your detailed performance breakdown.</p>
          
          <div className="w-48 h-48 mx-auto rounded-full border-[12px] border-primary/10 flex items-center justify-center relative mb-8">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="44" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="12" 
                className={score > 50 ? "text-primary" : "text-orange-500"}
                strokeDasharray={`${score * 2.76} 276`} 
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <span className="text-5xl font-bold">{score}%</span>
              <p className="text-sm font-medium text-muted-foreground mt-1">Accuracy</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => setLocation(`/subject/${id}`)}>Return to Subject</Button>
            <Button onClick={() => setLocation(`/`)}>Go to Dashboard</Button>
          </div>
        </Card>

        <h3 className="text-2xl font-bold px-2">Review Answers</h3>
        <div className="space-y-6">
          {questions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isSkipped = userAns === undefined;

            return (
              <Card key={q.id} className={cn("p-6", isCorrect ? "border-l-4 border-l-primary" : "border-l-4 border-l-destructive")}>
                <div className="flex gap-4">
                  <div className="mt-1">
                    {isCorrect ? <CheckCircle2 className="w-6 h-6 text-primary" /> : <XCircle className="w-6 h-6 text-destructive" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg mb-4">{idx + 1}. {q.text}</p>
                    <div className="grid gap-2 mb-4">
                      {q.options.map((opt, oIdx) => (
                        <div 
                          key={oIdx} 
                          className={cn(
                            "p-3 rounded-lg border text-sm font-medium",
                            oIdx === q.correctAnswer ? "bg-primary/10 border-primary text-primary" : 
                            userAns === oIdx ? "bg-destructive/10 border-destructive text-destructive" : 
                            "bg-muted/30 border-border"
                          )}
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </div>
                      ))}
                    </div>
                    {isSkipped && <p className="text-orange-500 font-medium mb-2">You skipped this question.</p>}
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      <span className="font-bold text-foreground">Explanation: </span>
                      <span className="text-muted-foreground">{q.explanation}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-md py-4 border-b border-border/50 mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
        
        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl font-bold font-display text-lg shadow-sm border",
          timeLeft < 300 ? "bg-red-50 text-red-600 border-red-200 animate-pulse" : "bg-white text-foreground border-border"
        )}>
          <Timer className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-8 md:p-12 mb-8 shadow-2xl shadow-black/[0.02] border-border/50">
              <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-10 text-foreground">
                {question.text}
              </h2>
              
              <div className="grid gap-4">
                {question.options.map((opt, oIdx) => {
                  const isSelected = answers[question.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(question.id, oIdx)}
                      className={cn(
                        "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 group",
                        isSelected 
                          ? "border-primary bg-primary/5 shadow-md shadow-primary/10" 
                          : "border-border bg-white hover:border-primary/40 hover:bg-muted/30"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors",
                        isSelected ? "bg-primary border-primary text-white" : "border-muted-foreground/30 text-muted-foreground group-hover:border-primary/50"
                      )}>
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className={cn("text-lg", isSelected ? "font-semibold text-foreground" : "text-foreground/80")}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between py-6 mt-auto">
        <Button 
          variant="outline" 
          onClick={() => setCurrentIndex(c => Math.max(0, c - 1))}
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="w-5 h-5" /> Previous
        </Button>
        
        {currentIndex === questions.length - 1 ? (
          <Button 
            onClick={submitQuiz} 
            disabled={isSaving}
            className="bg-accent text-accent-foreground shadow-accent/20 hover:shadow-accent/40"
          >
            {isSaving ? "Submitting..." : "Submit Exam"} <CheckCircle2 className="w-5 h-5" />
          </Button>
        ) : (
          <Button onClick={() => setCurrentIndex(c => Math.min(questions.length - 1, c + 1))}>
            Next Question <ArrowRight className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
