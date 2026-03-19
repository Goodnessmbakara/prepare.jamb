import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  Lightbulb,
  Target,
  List
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui-elements";
import type { StudyNote } from "@/data/notes";

interface StudyNotesViewerProps {
  notes: StudyNote[];
  subjectId: string;
}

export function StudyNotesViewer({ notes, subjectId }: StudyNotesViewerProps) {
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem(`jamb-bookmarks-${subjectId}`);
    if (savedBookmarks) {
      setBookmarks(new Set(JSON.parse(savedBookmarks)));
    }
  }, [subjectId]);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem(`jamb-bookmarks-${subjectId}`, JSON.stringify(Array.from(bookmarks)));
  }, [bookmarks, subjectId]);

  const toggleNote = (noteId: string) => {
    const newSet = new Set(expandedNotes);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }
    setExpandedNotes(newSet);
  };

  const toggleTopic = (topicId: string) => {
    const newSet = new Set(expandedTopics);
    if (newSet.has(topicId)) {
      newSet.delete(topicId);
    } else {
      newSet.add(topicId);
    }
    setExpandedTopics(newSet);
  };

  const toggleBookmark = (noteId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSet = new Set(bookmarks);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }
    setBookmarks(newSet);
  };

  const expandAll = () => {
    setExpandedNotes(new Set(notes.map(n => n.id)));
    const allTopicIds = notes.flatMap(n =>
      n.content.topics.map((_, idx) => `${n.id}-topic-${idx}`)
    );
    setExpandedTopics(new Set(allTopicIds));
  };

  const collapseAll = () => {
    setExpandedNotes(new Set());
    setExpandedTopics(new Set());
  };

  if (!notes || notes.length === 0) {
    return (
      <Card className="text-center py-16">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-bold">No study notes available</h3>
        <p className="text-muted-foreground">Check back later for comprehensive study materials.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold">
            {notes.length} Study {notes.length === 1 ? 'Section' : 'Sections'}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-sm font-medium text-primary hover:underline"
          >
            Expand All
          </button>
          <span className="text-muted-foreground">|</span>
          <button
            onClick={collapseAll}
            className="text-sm font-medium text-primary hover:underline"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map((note) => {
          const isNoteExpanded = expandedNotes.has(note.id);
          const isBookmarked = bookmarks.has(note.id);

          return (
            <Card
              key={note.id}
              className={cn(
                "overflow-hidden border-2 transition-all duration-300",
                isBookmarked && "border-primary/30 shadow-md shadow-primary/10",
                isNoteExpanded && "shadow-lg"
              )}
            >
              {/* Note Header */}
              <button
                onClick={() => toggleNote(note.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white text-left hover:bg-muted/30 transition-colors"
                aria-expanded={isNoteExpanded}
                aria-label={`Toggle ${note.title} section`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                    isNoteExpanded
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {note.order}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{note.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                      {note.content.overview}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => toggleBookmark(note.id, e)}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      isBookmarked
                        ? "text-primary bg-primary/10 hover:bg-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    )}
                    aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-5 h-5" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-muted-foreground transition-transform duration-300",
                      isNoteExpanded && "rotate-180"
                    )}
                  />
                </div>
              </button>

              {/* Note Content */}
              <AnimatePresence>
                {isNoteExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-muted/20 border-t border-border"
                  >
                    <div className="p-6 md:p-8 space-y-6">
                      {/* Overview */}
                      <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                        <p className="text-foreground leading-relaxed">
                          {note.content.overview}
                        </p>
                      </div>

                      {/* Topics */}
                      <div className="space-y-4">
                        {note.content.topics.map((topic, topicIdx) => {
                          const topicId = `${note.id}-topic-${topicIdx}`;
                          const isTopicExpanded = expandedTopics.has(topicId);

                          return (
                            <div
                              key={topicIdx}
                              className="bg-white rounded-xl border-2 border-border overflow-hidden"
                            >
                              {/* Topic Header */}
                              <button
                                onClick={() => toggleTopic(topicId)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                aria-expanded={isTopicExpanded}
                                aria-label={`Toggle ${topic.title}`}
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <ChevronRight
                                    className={cn(
                                      "w-5 h-5 text-primary transition-transform duration-200",
                                      isTopicExpanded && "rotate-90"
                                    )}
                                  />
                                  <h4 className="text-lg font-bold text-foreground">
                                    {topic.title}
                                  </h4>
                                </div>
                                <span className="text-xs font-semibold text-muted-foreground px-3 py-1 bg-muted rounded-full">
                                  {topic.subtopics.length} {topic.subtopics.length === 1 ? 'Topic' : 'Topics'}
                                </span>
                              </button>

                              {/* Topic Content */}
                              <AnimatePresence>
                                {isTopicExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="border-t border-border"
                                  >
                                    <div className="p-5 space-y-6">
                                      {/* Learning Objectives */}
                                      {topic.objectives && topic.objectives.length > 0 && (
                                        <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                                          <div className="flex items-center gap-2 mb-3">
                                            <Target className="w-4 h-4 text-accent" />
                                            <h5 className="font-bold text-accent text-sm uppercase tracking-wider">
                                              Learning Objectives
                                            </h5>
                                          </div>
                                          <ul className="space-y-2">
                                            {topic.objectives.map((obj, idx) => (
                                              <li
                                                key={idx}
                                                className="flex items-start gap-2 text-sm text-foreground/80"
                                              >
                                                <span className="text-accent mt-1">•</span>
                                                <span>{obj}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Subtopics */}
                                      <div className="space-y-5">
                                        {topic.subtopics.map((subtopic, subIdx) => (
                                          <div
                                            key={subIdx}
                                            className="bg-muted/30 rounded-lg p-5 space-y-4"
                                          >
                                            <h5 className="text-base font-bold text-foreground flex items-center gap-2">
                                              <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                                                {subIdx + 1}
                                              </span>
                                              {subtopic.title}
                                            </h5>

                                            <p className="text-foreground/80 leading-relaxed">
                                              {subtopic.content}
                                            </p>

                                            {/* Key Points */}
                                            {subtopic.keyPoints && subtopic.keyPoints.length > 0 && (
                                              <div className="bg-white rounded-lg p-4 border border-border">
                                                <div className="flex items-center gap-2 mb-3">
                                                  <Lightbulb className="w-4 h-4 text-primary" />
                                                  <h6 className="font-bold text-primary text-sm uppercase tracking-wider">
                                                    Key Points
                                                  </h6>
                                                </div>
                                                <ul className="space-y-2">
                                                  {subtopic.keyPoints.map((point, pointIdx) => (
                                                    <li
                                                      key={pointIdx}
                                                      className="flex items-start gap-3 text-sm"
                                                    >
                                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                                                        ✓
                                                      </span>
                                                      <span className="text-foreground/80">{point}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>

      {/* Bookmarked Sections Summary */}
      {bookmarks.size > 0 && (
        <Card className="p-5 bg-primary/5 border-primary/30">
          <div className="flex items-center gap-2 mb-3">
            <BookmarkCheck className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-primary">
              {bookmarks.size} Bookmarked {bookmarks.size === 1 ? 'Section' : 'Sections'}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your bookmarked sections are saved locally and will be available when you return.
          </p>
        </Card>
      )}
    </div>
  );
}
