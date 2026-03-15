import React, { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { SYLLABUS_DATA, SubjectId } from '@/data/syllabus';
import { TopicCard } from '@/components/topic-card';
import { cn } from '@/lib/utils';
import { BookOpen, CheckCircle2, ChevronRight, List } from 'lucide-react';
import { useProgress } from '@/hooks/use-progress';

export default function SubjectPage() {
  const [, params] = useRoute('/:subjectId');
  const subjectId = params?.subjectId as SubjectId;
  const subject = SYLLABUS_DATA[subjectId];
  
  const { isViewed, getSubjectProgress } = useProgress();
  const [activeTopicId, setActiveTopicId] = useState<string>('');

  // Scrollspy logic
  useEffect(() => {
    if (!subject) return;

    const handleScroll = () => {
      const topicElements = subject.topics.map(t => document.getElementById(t.id));
      
      // Find the first topic element that is near the top of the viewport
      const current = topicElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 300;
      });

      if (current) {
        setActiveTopicId(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [subject]);

  if (!subject) {
    return (
      <Layout>
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <BookOpen className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <h2 className="text-2xl font-bold">Subject not found</h2>
          <p className="text-muted-foreground mt-2">The subject you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const progress = getSubjectProgress(subject.id);

  const scrollToTopic = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Layout activeSubject={subject.id}>
      <div className="flex flex-col lg:flex-row w-full bg-background relative">
        
        {/* Desktop Sidebar (Sticky) */}
        <aside className="hidden lg:block w-80 shrink-0 border-r border-border min-h-[calc(100vh-4rem)]">
          <div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col">
            <div className={cn("p-6 border-b", subject.bgLight + " dark:bg-muted/30")}>
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-inner", `bg-gradient-to-br ${subject.gradient}`)}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-lg leading-tight">{subject.name}</h1>
                  <p className="text-xs text-muted-foreground font-semibold">{subject.topics.length} Topics</p>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Progress</span>
                  <span className={subject.color}>{progress}%</span>
                </div>
                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-border/50">
                  <div 
                    className={cn("h-full transition-all duration-500", `bg-gradient-to-r ${subject.gradient}`)}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider px-2 pb-2">
                <List className="w-4 h-4" /> Syllabus Topics
              </div>
              
              {subject.topics.map((topic, idx) => {
                const viewed = isViewed(topic.id);
                const isActive = activeTopicId === topic.id;
                
                return (
                  <button
                    key={topic.id}
                    onClick={() => scrollToTopic(topic.id)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-start gap-3 group",
                      isActive 
                        ? `${subject.bgLight} ${subject.color} dark:bg-muted` 
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    <div className="mt-0.5 shrink-0">
                      {viewed ? (
                        <CheckCircle2 className={cn("w-4 h-4", isActive ? subject.color : "text-emerald-500")} />
                      ) : (
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2",
                          isActive ? `border-${subject.color.split('-')[1]}-400` : "border-muted-foreground/30"
                        )} />
                      )}
                    </div>
                    <span className="flex-1 line-clamp-2 leading-snug">{topic.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0 pb-24">
          {/* Mobile Header Hero */}
          <div className="lg:hidden relative overflow-hidden bg-muted border-b">
            <div className="absolute inset-0 opacity-20 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
              <img src={`${import.meta.env.BASE_URL}images/${subject.patternImg}`} alt="" className="w-full h-full object-cover blur-md" />
            </div>
            <div className={cn("relative p-6", subject.bgLight + " dark:bg-transparent")}>
              <h1 className={cn("text-3xl font-display font-bold mb-2", subject.color)}>{subject.name}</h1>
              <p className="text-muted-foreground text-sm max-w-md">{subject.description}</p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-2 bg-background/50 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full", `bg-gradient-to-r ${subject.gradient}`)}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-bold">{progress}%</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto space-y-8 lg:space-y-12">
            {/* Introductory Desktop Header */}
            <div className="hidden lg:flex items-end justify-between border-b pb-6 mb-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-3"
                >
                  <Link href="/" className="hover:text-foreground transition-colors">Subjects</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className={subject.color}>{subject.name}</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-display font-extrabold"
                >
                  Study Guide
                </motion.h2>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 opacity-20"
              >
                <img src={`${import.meta.env.BASE_URL}images/${subject.patternImg}`} alt="" className="w-full h-full object-contain rounded-full" />
              </motion.div>
            </div>

            {/* Topics List */}
            <div className="space-y-12">
              {subject.topics.map((topic, idx) => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  subjectId={subject.id}
                  index={idx}
                />
              ))}
            </div>

            {/* End of content marker */}
            <div className="py-12 flex flex-col items-center justify-center text-center opacity-50">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", subject.bgLight)}>
                <CheckCircle2 className={cn("w-6 h-6", subject.color)} />
              </div>
              <h3 className="font-display font-bold text-xl">End of Syllabus</h3>
              <p className="text-sm mt-1">You've reached the end of the {subject.name} topics.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
