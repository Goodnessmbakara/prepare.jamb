import { useState, useEffect, useCallback } from 'react';
import { SubjectId, SYLLABUS_DATA } from '@/data/syllabus';

const STORAGE_KEY = 'jamb_syllabus_progress';

export function useProgress() {
  const [viewedTopics, setViewedTopics] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setViewedTopics(new Set(JSON.parse(stored)));
      }
    } catch (e) {
      console.error("Failed to load progress", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(viewedTopics)));
    }
  }, [viewedTopics, isLoaded]);

  const toggleTopic = useCallback((topicId: string) => {
    setViewedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  }, []);

  const isViewed = useCallback((topicId: string) => {
    return viewedTopics.has(topicId);
  }, [viewedTopics]);

  const getSubjectProgress = useCallback((subjectId: SubjectId) => {
    const subject = SYLLABUS_DATA[subjectId];
    if (!subject || subject.topics.length === 0) return 0;
    
    let completedCount = 0;
    subject.topics.forEach(topic => {
      if (viewedTopics.has(topic.id)) completedCount++;
    });
    
    return Math.round((completedCount / subject.topics.length) * 100);
  }, [viewedTopics]);

  const getOverallProgress = useCallback(() => {
    let totalTopics = 0;
    let completedTopics = 0;
    
    Object.values(SYLLABUS_DATA).forEach(subject => {
      totalTopics += subject.topics.length;
      subject.topics.forEach(topic => {
        if (viewedTopics.has(topic.id)) completedTopics++;
      });
    });
    
    if (totalTopics === 0) return 0;
    return Math.round((completedTopics / totalTopics) * 100);
  }, [viewedTopics]);

  return {
    viewedTopics,
    toggleTopic,
    isViewed,
    getSubjectProgress,
    getOverallProgress,
    isLoaded
  };
}
