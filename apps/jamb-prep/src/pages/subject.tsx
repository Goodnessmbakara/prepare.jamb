import { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useGetSubjects, useGetNotes, useGetQuestions } from "@workspace/api-client-react";
import { AnimatedTab, Button, Card, LoadingSpinner } from "@/components/ui-elements";
import { BookOpen, CheckCircle2, ChevronDown, ChevronRight, Play, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const TABS = ["Study Notes", "Practice Questions", "Take Quiz"];
const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "past", label: "Past Questions" },
  { id: "repeated", label: "Most Repeated" },
  { id: "likely", label: "Most Likely" },
] as const;

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]["id"]>("all");
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<string>>(new Set());

  // Data fetching
  const { data: subjects } = useGetSubjects();
  const { data: notes, isLoading: isLoadingNotes } = useGetNotes(id || "");
  const { data: questions, isLoading: isLoadingQuestions } = useGetQuestions(id || "", { 
    category: activeCategory 
  });

  const subject = subjects?.find(s => s.id === id);

  if (!subject) return <LoadingSpinner />;

  const toggleAnswer = (qId: string) => {
    const newSet = new Set(revealedAnswers);
    if (newSet.has(qId)) newSet.delete(qId);
    else newSet.add(qId);
    setRevealedAnswers(newSet);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-primary">{subject.name}</span>
          </div>
          <h1 className="text-4xl font-display font-bold">{subject.name} Prep</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{subject.description}</p>
        </div>
        <Button size="lg" onClick={() => setLocation(`/quiz/${id}`)}>
          <Play className="w-5 h-5 fill-current" />
          Start Mock Quiz
        </Button>
      </div>

      <AnimatedTab tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* TAB: STUDY NOTES */}
          {activeTab === "Study Notes" && (
            <div className="space-y-6">
              {isLoadingNotes ? (
                <LoadingSpinner />
              ) : notes && notes.length > 0 ? (
                <div className="grid gap-4">
                  {notes.sort((a,b) => a.order - b.order).map((note) => (
                    <Card 
                      key={note.id} 
                      className="p-0 overflow-hidden border-2 transition-colors hover:border-primary/20"
                    >
                      <button
                        className="w-full px-6 py-5 flex items-center justify-between bg-white text-left"
                        onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                            expandedNote === note.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                          )}>
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-primary font-bold tracking-wider uppercase mb-1">{note.topic}</p>
                            <h3 className="text-lg font-bold text-foreground">{note.title}</h3>
                          </div>
                        </div>
                        <ChevronDown className={cn("w-6 h-6 text-muted-foreground transition-transform duration-300", expandedNote === note.id && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedNote === note.id && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-muted/20 border-t border-border"
                          >
                            <div className="p-6 md:p-8 prose prose-sm prose-green max-w-none text-foreground/80">
                              <ReactMarkdown>{note.content}</ReactMarkdown>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-16">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold">No notes available yet</h3>
                  <p className="text-muted-foreground">Check back later for updated syllabus notes.</p>
                </Card>
              )}
            </div>
          )}

          {/* TAB: PRACTICE QUESTIONS */}
          {activeTab === "Practice Questions" && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-semibold transition-all border-2",
                      activeCategory === cat.id 
                        ? "bg-primary border-primary text-white shadow-md shadow-primary/20" 
                        : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {isLoadingQuestions ? (
                <LoadingSpinner />
              ) : questions && questions.length > 0 ? (
                <div className="space-y-6">
                  {questions.map((q, idx) => {
                    const isRevealed = revealedAnswers.has(q.id);
                    return (
                      <Card key={q.id} className="relative p-6 md:p-8">
                        {q.year && (
                          <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                            JAMB {q.year}
                          </span>
                        )}
                        <div className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                            {idx + 1}
                          </span>
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                              {q.text}
                            </h4>
                            <div className="grid gap-3 mb-6">
                              {q.options.map((opt, oIdx) => {
                                const isCorrect = isRevealed && oIdx === q.correctAnswer;
                                return (
                                  <div 
                                    key={oIdx}
                                    className={cn(
                                      "p-4 rounded-xl border-2 transition-all flex items-center gap-3",
                                      isCorrect ? "bg-accent/10 border-accent" : "bg-white border-border",
                                      isRevealed && !isCorrect && "opacity-50"
                                    )}
                                  >
                                    <div className={cn(
                                      "w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs",
                                      isCorrect ? "bg-accent border-accent text-white" : "border-border text-muted-foreground"
                                    )}>
                                      {String.fromCharCode(65 + oIdx)}
                                    </div>
                                    <span className={cn("font-medium", isCorrect && "text-accent font-bold")}>{opt}</span>
                                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-accent ml-auto" />}
                                  </div>
                                );
                              })}
                            </div>
                            
                            {!isRevealed ? (
                              <Button variant="outline" onClick={() => toggleAnswer(q.id)}>
                                Show Answer
                              </Button>
                            ) : (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="bg-primary/5 rounded-xl p-5 border border-primary/20"
                              >
                                <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                                  <BookOpen className="w-4 h-4" /> Explanation
                                </h5>
                                <p className="text-foreground/80 leading-relaxed">{q.explanation}</p>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <Card className="text-center py-16">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold">No questions found</h3>
                  <p className="text-muted-foreground">Try selecting a different category.</p>
                </Card>
              )}
            </div>
          )}

          {/* TAB: TAKE QUIZ */}
          {activeTab === "Take Quiz" && (
            <Card className="text-center py-20 px-6 max-w-2xl mx-auto border-dashed border-2 border-primary/20 bg-primary/5">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Mock Exam Mode</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Test your readiness under real exam conditions. 40 random questions, 30 minutes, instant grading.
              </p>
              <Button size="lg" onClick={() => setLocation(`/quiz/${id}`)} className="w-full sm:w-auto text-xl px-12">
                Begin Assessment
              </Button>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
