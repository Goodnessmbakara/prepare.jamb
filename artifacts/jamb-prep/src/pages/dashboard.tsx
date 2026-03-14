import { Link } from "wouter";
import { motion } from "framer-motion";
import { useGetSubjects, useGetProgress } from "@workspace/api-client-react";
import { Book, BrainCircuit, FlaskConical, Microscope, Calculator, Target, Trophy, Clock } from "lucide-react";
import { Card, LoadingSpinner } from "@/components/ui-elements";

// Map string icons to actual components
const IconMap: Record<string, React.ElementType> = {
  book: Book,
  flask: FlaskConical,
  microscope: Microscope,
  calculator: Calculator,
};

export default function Dashboard() {
  const { data: subjects, isLoading: isLoadingSubjects } = useGetSubjects();
  const { data: progress, isLoading: isLoadingProgress } = useGetProgress();

  if (isLoadingSubjects || isLoadingProgress) {
    return <LoadingSpinner className="min-h-[60vh]" />;
  }

  const accuracy = progress?.totalAttempted 
    ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) 
    : 0;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-8 md:p-12 shadow-2xl shadow-primary/20"
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract Background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 pointer-events-none"
        />
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Ready to crush your JAMB exams?
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            Master English, Mathematics, Biology, Chemistry, and Physics with our targeted notes and over 200+ past questions.
          </p>
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium">
              <Target className="w-4 h-4 text-green-300" />
              Goal: 300+ Score
            </span>
          </div>
        </div>
      </motion.div>

      {/* Progress Stats */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BrainCircuit className="text-primary" />
          Your Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Card className="flex items-center gap-6 group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <p className="text-muted-foreground font-medium text-sm">Quizzes Taken</p>
                <p className="text-3xl font-bold font-display">{progress?.totalQuizzesTaken || 0}</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <Card className="flex items-center gap-6 group hover:border-green-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <p className="text-muted-foreground font-medium text-sm">Global Accuracy</p>
                <p className="text-3xl font-bold font-display">{accuracy}%</p>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <Card className="flex items-center gap-6 group hover:border-orange-500/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <p className="text-muted-foreground font-medium text-sm">Questions Attempted</p>
                <p className="text-3xl font-bold font-display">{progress?.totalAttempted || 0}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Select a Subject</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects?.map((subject, idx) => {
            const Icon = IconMap[subject.icon] || Book;
            const score = progress?.subjectScores?.[subject.id] || 0;
            
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Link href={`/subject/${subject.id}`} className="block h-full">
                  <Card className="h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 cursor-pointer relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {subject.description}
                    </p>
                    
                    <div className="space-y-3 mt-auto">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-muted-foreground">Mastery</span>
                        <span className="text-primary">{score}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium pt-2 border-t border-border/50">
                        {subject.totalQuestions}+ Questions & Notes
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
