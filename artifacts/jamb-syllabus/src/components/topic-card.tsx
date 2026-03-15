import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Lightbulb, Beaker } from 'lucide-react';
import { Topic, SubjectId, SYLLABUS_DATA } from '@/data/syllabus';
import { cn } from '@/lib/utils';
import { useProgress } from '@/hooks/use-progress';

interface TopicCardProps {
  topic: Topic;
  subjectId: SubjectId;
  index: number;
}

export function TopicCard({ topic, subjectId, index }: TopicCardProps) {
  const { isViewed, toggleTopic } = useProgress();
  const subject = SYLLABUS_DATA[subjectId];
  const viewed = isViewed(topic.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
      id={topic.id}
      className={cn(
        "bg-card rounded-2xl md:rounded-3xl border shadow-sm overflow-hidden scroll-mt-24 transition-all duration-300",
        viewed ? "border-muted-foreground/20" : `border-${subject.color.split('-')[1]}-200/50 hover:shadow-lg`
      )}
    >
      <div className={cn(
        "px-6 py-4 md:px-8 md:py-6 border-b flex items-start justify-between gap-4 transition-colors",
        viewed ? "bg-muted/30" : subject.bgLight + " dark:bg-muted/50"
      )}>
        <div>
          <span className={cn(
            "text-xs font-bold tracking-wider uppercase mb-1 block opacity-70",
            subject.color
          )}>
            Topic {index + 1}
          </span>
          <h2 className="text-2xl md:text-3xl font-display text-foreground leading-tight">
            {topic.title}
          </h2>
        </div>
        
        <button 
          onClick={() => toggleTopic(topic.id)}
          className={cn(
            "flex-shrink-0 p-2 md:px-4 md:py-2 rounded-full border transition-all duration-200 flex items-center gap-2 group",
            viewed 
              ? "bg-primary text-primary-foreground border-primary" 
              : "bg-background/80 hover:bg-background border-border text-muted-foreground hover:text-foreground shadow-sm"
          )}
        >
          {viewed ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span className="hidden md:inline font-medium text-sm">Understood</span>
            </>
          ) : (
            <>
              <Circle className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="hidden md:inline font-medium text-sm">Mark Complete</span>
            </>
          )}
        </button>
      </div>

      <div className={cn(
        "p-6 md:p-8 space-y-8 study-prose",
        viewed && "opacity-80"
      )}>
        {topic.content.map((block, idx) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={idx} className="text-muted-foreground text-lg">
                  {block.text}
                </p>
              );
            case 'list':
              return (
                <ul key={idx} className="space-y-3">
                  {block.items.map((item, i) => {
                    // Simple bold parsing for '**text**'
                    const parts = item.split(/(\*\*.*?\*\*)/g);
                    return (
                      <li key={i} className="text-foreground">
                        {parts.map((part, j) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j}>{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </li>
                    );
                  })}
                </ul>
              );
            case 'formula':
              return (
                <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden shadow-inner my-6">
                  <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                    <Beaker className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{block.title}</span>
                  </div>
                  <div className="p-4 md:p-6 space-y-2">
                    {block.equations.map((eq, i) => (
                      <div key={i} className="font-mono text-lg md:text-xl text-emerald-300">
                        {eq}
                      </div>
                    ))}
                  </div>
                </div>
              );
            case 'key-point':
              return (
                <div key={idx} className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-4 md:p-6 flex gap-4 my-6">
                  <div className="text-amber-500 flex-shrink-0 mt-1">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-1">Key to Remember</h4>
                    <p className="text-amber-800 dark:text-amber-200/80 m-0">{block.text}</p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </motion.div>
  );
}
