import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Menu, X, ArrowLeft, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SYLLABUS_DATA, SubjectId } from '@/data/syllabus';

interface LayoutProps {
  children: React.ReactNode;
  activeSubject?: SubjectId;
}

export function Layout({ children, activeSubject }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-primary/20">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 glass border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {activeSubject && (
              <Link href="/" className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            )}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
                JAMB<span className="text-primary">Prep</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50">
            {Object.values(SYLLABUS_DATA).map((subject) => (
              <Link 
                key={subject.id} 
                href={`/${subject.id}`}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeSubject === subject.id 
                    ? `bg-background shadow-sm ${subject.color}`
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                {subject.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex w-full max-w-7xl mx-auto">
        {children}
      </main>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-xs bg-background border-l z-50 p-6 flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-xl">Subjects</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link 
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "p-4 rounded-xl font-semibold transition-colors",
                    location === '/' ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  )}
                >
                  Home
                </Link>
                {Object.values(SYLLABUS_DATA).map((subject) => (
                  <Link 
                    key={subject.id} 
                    href={`/${subject.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "p-4 rounded-xl font-semibold transition-colors flex items-center justify-between",
                      activeSubject === subject.id ? `${subject.bgLight} ${subject.color} dark:bg-muted` : "hover:bg-muted"
                    )}
                  >
                    {subject.name}
                    {activeSubject === subject.id && (
                      <div className={cn("w-2 h-2 rounded-full bg-current")} />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
