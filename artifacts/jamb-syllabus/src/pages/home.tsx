import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { BookOpen, Target, Trophy, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout';
import { SYLLABUS_DATA } from '@/data/syllabus';
import { useProgress } from '@/hooks/use-progress';
import { cn } from '@/lib/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export default function Home() {
  const { getSubjectProgress, getOverallProgress } = useProgress();
  const overallProgress = getOverallProgress();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <Layout>
      <div className="w-full pb-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem] border-b shadow-sm">
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt="Background"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center mt-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20"
            >
              <Target className="w-4 h-4" />
              Score 300+ in JAMB 2025
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-foreground mb-6"
            >
              Master Your <span className="text-primary relative whitespace-nowrap">
                <span className="relative z-10">Syllabus</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/40 -rotate-1 z-0 rounded-full blur-[1px]"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              A beautifully structured, comprehensive guide to all topics in English, Biology, Chemistry, and Physics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass max-w-md mx-auto rounded-2xl p-6 flex flex-col items-center border border-border/50 shadow-xl"
            >
              <div className="flex items-center gap-3 w-full mb-2">
                <Trophy className="w-6 h-6 text-secondary" />
                <h3 className="font-bold text-lg">Overall Preparation</h3>
                <span className="ml-auto font-display font-bold text-2xl text-primary">{overallProgress}%</span>
              </div>
              <ProgressPrimitive.Root 
                className="relative overflow-hidden bg-muted rounded-full w-full h-3"
                value={overallProgress}
              >
                <ProgressPrimitive.Indicator
                  className="bg-primary w-full h-full transition-transform duration-1000 ease-out"
                  style={{ transform: `translateX(-${100 - overallProgress}%)` }}
                />
              </ProgressPrimitive.Root>
            </motion.div>
          </div>
        </section>

        {/* Subject Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {Object.values(SYLLABUS_DATA).map((subject) => {
              const progress = getSubjectProgress(subject.id);
              return (
                <motion.div key={subject.id} variants={item}>
                  <Link href={`/${subject.id}`} className="block group h-full">
                    <div className={cn(
                      "h-full bg-card rounded-[2rem] p-8 border shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden",
                      "group-hover:-translate-y-1"
                    )}>
                      {/* Decorative Background Pattern */}
                      <div className="absolute -right-12 -top-12 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
                         <img src={`${import.meta.env.BASE_URL}images/${subject.patternImg}`} alt="" className="w-full h-full object-cover rounded-full blur-2xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner",
                            `bg-gradient-to-br ${subject.gradient}`
                          )}>
                            <BookOpen className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="text-right">
                            <span className="text-3xl font-display font-bold">{progress}%</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Completed</p>
                          </div>
                        </div>

                        <h2 className={cn("text-3xl font-display font-bold mb-3", subject.color)}>
                          {subject.name}
                        </h2>
                        
                        <p className="text-muted-foreground mb-8 line-clamp-2">
                          {subject.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          Start Studying <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Bottom Progress Bar Indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-muted">
                        <div 
                          className={cn("h-full transition-all duration-1000", `bg-gradient-to-r ${subject.gradient}`)}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
