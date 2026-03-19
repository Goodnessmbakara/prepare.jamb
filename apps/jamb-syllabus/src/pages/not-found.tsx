import React from 'react';
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex w-full items-center justify-center min-h-[70vh]">
        <div className="text-center p-8 glass rounded-3xl max-w-md mx-4">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">404</h1>
          <p className="text-muted-foreground mb-8">
            The page or topic you're looking for doesn't exist in our syllabus guide.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Return to Subjects
          </Link>
        </div>
      </div>
    </Layout>
  );
}
