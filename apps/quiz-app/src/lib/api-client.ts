// API Client for backend communication
// In development, calls will go to /api/* which Vite will proxy
// In production on Vercel, /api/* endpoints are serverless functions

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Question {
  id: string;
  subjectId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
  difficulty: string;
}

export interface Note {
  id: string;
  subjectId: string;
  title: string;
  content: string;
  order: number;
}

export interface Progress {
  totalQuestions: number;
  correctAnswers: number;
  subjectScores: Record<string, { correct: number; total: number }>;
  quizHistory: Array<{
    subjectId: string;
    score: number;
    totalQuestions: number;
    date: string;
  }>;
}

class APIClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Subjects
  async getSubjects(): Promise<Subject[]> {
    const data = await this.request<{ subjects: Subject[] }>('/subjects');
    return data.subjects;
  }

  // Questions
  async getQuestions(subjectId?: string): Promise<Question[]> {
    const endpoint = subjectId ? `/questions?subjectId=${subjectId}` : '/questions';
    const data = await this.request<{ questions: Question[] }>(endpoint);
    return data.questions;
  }

  // Notes
  async getNotes(subjectId?: string): Promise<Note[]> {
    const endpoint = subjectId ? `/notes?subjectId=${subjectId}` : '/notes';
    const data = await this.request<{ notes: Note[] }>(endpoint);
    return data.notes;
  }

  // Progress
  async getProgress(userId: string = 'default-user'): Promise<Progress> {
    const data = await this.request<{ progress: Progress }>(`/progress?userId=${userId}`);
    return data.progress;
  }

  async saveProgress(progress: Partial<Progress>, userId: string = 'default-user'): Promise<void> {
    await this.request(`/progress?userId=${userId}`, {
      method: 'POST',
      body: JSON.stringify(progress),
    });
  }
}

export const apiClient = new APIClient();
