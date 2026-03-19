# JAMB Preparation Platform - System Architecture

## 📋 Table of Contents
- [System Overview](#system-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Application Architecture](#application-architecture)
- [Data Flow](#data-flow)
- [API Design](#api-design)
- [Frontend Architecture](#frontend-architecture)
- [Development Workflow](#development-workflow)
- [Deployment Strategy](#deployment-strategy)

---

## 🎯 System Overview

The JAMB Preparation Platform is a comprehensive exam preparation system designed to help Nigerian students prepare for the Joint Admissions and Matriculation Board (JAMB) examinations. The platform provides:

- **Practice Questions**: 1000+ past questions across multiple subjects
- **Study Materials**: Comprehensive syllabus coverage with topic breakdowns
- **Progress Tracking**: Local storage-based progress monitoring
- **Interactive Quizzes**: Timed practice sessions with instant feedback
- **Multi-Subject Support**: Mathematics, Physics, Chemistry, Biology, English, and more

### Key Features
- ✅ Offline-first architecture (localStorage-based persistence)
- ✅ RESTful API backend
- ✅ Multiple frontend applications (quiz, syllabus, sandbox)
- ✅ Shared component library
- ✅ Type-safe API contracts with Zod validation
- ✅ Monorepo architecture for code sharing

---

## 🛠 Technology Stack

### **Frontend**
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI (headless components)
- **Routing**: Wouter 3.3.5 (lightweight client-side routing)
- **State Management**: React Query (TanStack Query 5.90.21)
- **Animations**: Framer Motion 12.35.1
- **Form Handling**: React Hook Form 7.55.0 + Zod validation
- **Icons**: Lucide React

### **Backend**
- **Runtime**: Node.js 24.x
- **Framework**: Express 5.x
- **Language**: TypeScript 5.9.3
- **API Validation**: Zod 3.25.76
- **Build Tool**: TSX (TypeScript eXecution)

### **Shared Libraries**
- **API Contract**: OpenAPI + Orval code generation
- **Validation**: Zod schemas (shared between frontend/backend)
- **Database ORM**: Drizzle ORM 0.45.1

### **Development Tools**
- **Package Manager**: pnpm 10.14.0
- **Monorepo**: pnpm workspaces
- **Type Checking**: TypeScript strict mode
- **Code Quality**: Prettier 3.8.1

---

## 📁 Project Structure

```
prepare.jamb/
├── apps/                          # Deployable applications
│   ├── api-server/               # Express REST API backend
│   │   ├── src/
│   │   │   ├── app.ts           # Express app configuration
│   │   │   ├── index.ts         # Server entry point
│   │   │   ├── routes/          # API route handlers
│   │   │   │   ├── health.ts    # Health check endpoint
│   │   │   │   ├── jamb.ts      # JAMB endpoints
│   │   │   │   └── index.ts     # Route aggregator
│   │   │   └── data/            # Question banks & study materials
│   │   │       ├── mathematics-questions.ts
│   │   │       ├── physics-questions.ts
│   │   │       ├── biology-questions.ts
│   │   │       ├── chemistry-questions.ts
│   │   │       ├── english-questions.ts
│   │   │       ├── subjects.ts   # Subject metadata
│   │   │       ├── notes.ts      # Study notes
│   │   │       └── progress.ts   # Mock progress data
│   │   ├── build.ts             # Production build script
│   │   └── package.json
│   │
│   ├── jamb-prep/               # Main quiz application
│   │   ├── src/
│   │   │   ├── pages/           # Route components
│   │   │   │   ├── dashboard.tsx   # Subject selection
│   │   │   │   ├── subject.tsx     # Subject detail view
│   │   │   │   ├── quiz.tsx        # Quiz interface
│   │   │   │   └── not-found.tsx
│   │   │   ├── components/      # React components
│   │   │   │   ├── ui/          # Shadcn UI components
│   │   │   │   └── layout.tsx   # App shell
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   ├── lib/             # Utilities
│   │   │   └── App.tsx          # Root component
│   │   ├── public/              # Static assets
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── jamb-syllabus/           # Syllabus study app
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── home.tsx        # Subject overview
│   │   │   │   ├── subject.tsx     # Topic breakdown
│   │   │   │   └── not-found.tsx
│   │   │   ├── components/
│   │   │   │   ├── ui/             # Shared UI components
│   │   │   │   ├── layout.tsx
│   │   │   │   └── topic-card.tsx
│   │   │   ├── data/
│   │   │   │   └── syllabus.ts     # Hardcoded syllabus data
│   │   │   ├── hooks/
│   │   │   │   └── use-progress.ts # LocalStorage progress
│   │   │   └── App.tsx
│   │   └── package.json
│   │
│   └── mockup-sandbox/          # Component preview/testing
│       ├── src/
│       │   ├── components/ui/   # UI component library
│       │   └── App.tsx
│       ├── mockupPreviewPlugin.ts  # Vite plugin for hot reload
│       └── package.json
│
├── lib/                         # Shared libraries
│   ├── api-zod/                # API type definitions & validation
│   │   ├── src/
│   │   │   ├── generated/      # Orval-generated schemas
│   │   │   │   ├── api.ts      # Zod schemas
│   │   │   │   └── types/      # TypeScript types
│   │   │   └── index.ts        # Public exports
│   │   └── package.json
│   │
│   ├── api-client-react/       # React Query hooks for API
│   │   └── src/
│   │       └── index.ts        # Custom hooks (useGetSubjects, etc.)
│   │
│   └── db/                     # Database schemas (Drizzle)
│       └── src/
│           └── schema.ts       # Database table definitions
│
├── scripts/                    # Build & utility scripts
│   └── post-merge.sh          # Git post-merge hook
│
├── package.json               # Root workspace config
├── pnpm-workspace.yaml        # Workspace definition
├── tsconfig.base.json         # Shared TypeScript config
├── tsconfig.json              # Root TypeScript config
└── ARCHITECTURE.md            # This document
```

---

## 🏗 Application Architecture

### **Monorepo Structure**
The project uses a **pnpm workspace monorepo** with three main layers:

```
┌─────────────────────────────────────────────────┐
│              Apps (Deployables)                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   API    │  │ Quiz App │  │ Syllabus App │  │
│  │  Server  │  │(jamb-prep│  │(jamb-syllabus│  │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│       │             │                │          │
└───────┼─────────────┼────────────────┼──────────┘
        │             │                │
┌───────┼─────────────┼────────────────┼──────────┐
│       │     Shared Libraries         │          │
│       ▼             ▼                ▼          │
│  ┌─────────┐  ┌─────────────┐  ┌──────────┐   │
│  │ api-zod │  │api-client-  │  │    db    │   │
│  │(schemas)│  │react (hooks)│  │ (schema) │   │
│  └─────────┘  └─────────────┘  └──────────┘   │
└─────────────────────────────────────────────────┘
```

### **Layer Responsibilities**

#### **1. Apps Layer** (`apps/`)
- **Purpose**: Independently deployable applications
- **Characteristics**:
  - Each app has its own build output
  - Can be deployed to different environments
  - Share common libraries but run independently
  - Have their own package.json and dependencies

#### **2. Library Layer** (`lib/`)
- **Purpose**: Reusable code shared across apps
- **Characteristics**:
  - Published as workspace packages (e.g., `@workspace/api-zod`)
  - No runtime dependencies on apps
  - Versioned independently
  - Type-safe exports

#### **3. Scripts Layer** (`scripts/`)
- **Purpose**: Build automation and tooling
- **Characteristics**:
  - Git hooks
  - Code generation scripts
  - Deployment utilities

---

## 🔄 Data Flow

### **API Request Flow**

```
┌──────────────┐
│   Browser    │
│ (React App)  │
└──────┬───────┘
       │ 1. User Action (e.g., "Load Questions")
       │
       ▼
┌──────────────────────────────────────────────┐
│   React Query Hook                            │
│   (useGetQuestions from api-client-react)    │
└──────┬───────────────────────────────────────┘
       │ 2. HTTP Request
       │    GET /api/v1/subjects/:subjectId/questions
       │
       ▼
┌──────────────────────────────────────────────┐
│   Express API Server (apps/api-server)       │
│   ┌────────────────────────────────────┐    │
│   │  Route Handler (routes/jamb.ts)    │    │
│   │  - Validate request params (Zod)   │    │
│   │  - Fetch data from data files      │    │
│   │  - Transform response              │    │
│   └────────────────────────────────────┘    │
└──────┬───────────────────────────────────────┘
       │ 3. JSON Response
       │    { questions: [...], total: 50 }
       │
       ▼
┌──────────────────────────────────────────────┐
│   React Query Cache                          │
│   - Store response                           │
│   - Update UI automatically                  │
└──────┬───────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│   React Component Re-render                  │
│   - Display questions                        │
│   - Enable quiz interaction                  │
└──────────────────────────────────────────────┘
```

### **Progress Tracking Flow (LocalStorage)**

```
┌──────────────┐
│   Browser    │
│ localStorage │
└──────┬───────┘
       │
       │ Read on mount
       ▼
┌──────────────────────────────────────────────┐
│   useProgress Hook (jamb-syllabus)           │
│   - getSubjectProgress(subjectId)            │
│   - markTopicComplete(topicId)               │
└──────┬───────────────────────────────────────┘
       │
       │ Write on user action
       ▼
┌──────────────────────────────────────────────┐
│   localStorage.setItem('progress', JSON)     │
│   {                                          │
│     "mathematics": {                         │
│       "topic-1": true,                       │
│       "topic-2": false                       │
│     }                                        │
│   }                                          │
└──────────────────────────────────────────────┘
```

---

## 🌐 API Design

### **RESTful Endpoints**

#### **Base URL**: `/api/v1`

#### **Health Check**
```
GET /health
Response: { status: "ok" }
```

#### **Subjects**
```
GET /subjects
Response: [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "JAMB Mathematics questions",
    totalQuestions: 500,
    icon: "calculator"
  },
  ...
]
```

#### **Questions**
```
GET /subjects/:subjectId/questions?category=past&limit=50

Query Parameters:
- category: "past" | "repeated" | "likely" | "all" (optional)
- limit: number (optional)

Response: [
  {
    id: "math-001",
    subjectId: "mathematics",
    text: "Simplify: 3x + 2x - x",
    options: ["4x", "5x", "6x", "2x"],
    correctAnswer: 0,
    explanation: "Combine like terms: 3x + 2x - x = 4x",
    year: 2020,
    category: "past",
    topic: "Algebra"
  },
  ...
]
```

#### **Notes**
```
GET /subjects/:subjectId/notes

Response: [
  {
    id: "note-001",
    subjectId: "mathematics",
    title: "Introduction to Algebra",
    content: "Algebra is...",
    topic: "Algebra",
    order: 1
  },
  ...
]
```

#### **Progress**
```
GET /progress
Response: {
  totalQuizzesTaken: 15,
  totalCorrect: 120,
  totalAttempted: 150,
  subjectScores: {
    "mathematics": 85,
    "physics": 78
  },
  recentResults: [...]
}

POST /progress
Body: {
  subjectId: "mathematics",
  score: 8,
  total: 10,
  timestamp: "2024-01-15T10:30:00Z",
  category: "past"
}
Response: { ...updated progress }
```

### **API Validation**
- **Request Validation**: Zod schemas in `lib/api-zod`
- **Type Safety**: Generated TypeScript types from OpenAPI
- **Error Responses**:
  ```json
  {
    "error": {
      "code": "validation_error",
      "message": "Invalid subject ID",
      "details": [...]
    }
  }
  ```

---

## 🎨 Frontend Architecture

### **Component Structure**

Each frontend app follows this structure:

```
src/
├── pages/              # Route-level components
│   ├── dashboard.tsx   # Full-page views
│   ├── subject.tsx
│   └── quiz.tsx
│
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout.tsx     # App shell (header, nav, footer)
│   └── ...            # Feature-specific components
│
├── hooks/             # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/               # Utilities
│   └── utils.ts       # cn() for className merging
│
└── App.tsx            # Root component with routing
```

### **Routing (Wouter)**

```tsx
// apps/jamb-prep/src/App.tsx
import { Route, Switch } from 'wouter';

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/subject/:id" component={SubjectDetail} />
      <Route path="/quiz/:id" component={Quiz} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### **State Management**

#### **Server State: React Query**
```tsx
import { useGetSubjects } from '@workspace/api-client-react';

function Dashboard() {
  const { data: subjects, isLoading } = useGetSubjects();

  if (isLoading) return <Spinner />;

  return (
    <div>
      {subjects.map(subject => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </div>
  );
}
```

#### **Client State: localStorage + React Context**
```tsx
// apps/jamb-syllabus/src/hooks/use-progress.ts
export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const stored = localStorage.getItem('progress');
    return stored ? JSON.parse(stored) : {};
  });

  const markTopicComplete = (topicId: string) => {
    const updated = { ...progress, [topicId]: true };
    setProgress(updated);
    localStorage.setItem('progress', JSON.stringify(updated));
  };

  return { progress, markTopicComplete };
}
```

### **Styling Approach**

**Tailwind CSS + Shadcn UI**
- **Utility-first**: Tailwind for rapid styling
- **Component Library**: Shadcn UI (copy-paste, not npm install)
- **Custom Design System**: Extended Tailwind config
- **Responsive**: Mobile-first approach
- **Dark Mode**: Theme switcher with next-themes

```tsx
// Example component with Tailwind
function SubjectCard({ subject }) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold text-foreground">
        {subject.name}
      </h3>
      <p className="text-muted-foreground mt-2">
        {subject.description}
      </p>
    </div>
  );
}
```

---

## 🔧 Development Workflow

### **Initial Setup**

```bash
# Clone repository
git clone https://github.com/Goodnessmbakara/prepare.jamb.git
cd prepare.jamb

# Install dependencies
pnpm install

# Build all packages
pnpm run build
```

### **Development Commands**

```bash
# Start API server
pnpm --filter api-server dev
# Runs on PORT from .env or defaults to port defined in code

# Start quiz app
PORT=5173 pnpm --filter jamb-prep dev
# Runs on http://localhost:5173

# Start syllabus app
PORT=5174 pnpm --filter jamb-syllabus dev
# Runs on http://localhost:5174

# Start mockup sandbox
PORT=5175 pnpm --filter mockup-sandbox dev
# Runs on http://localhost:5175

# Type check all packages
pnpm run typecheck

# Build for production
pnpm run build
```

### **Code Generation**

When API contract changes:
```bash
# Regenerate Zod schemas and TypeScript types
pnpm --filter api-zod generate
# Uses Orval to generate from OpenAPI spec
```

### **Git Workflow**

```bash
# 1. Create feature branch
git checkout -b feature/add-chemistry-questions

# 2. Make changes
# ...edit files...

# 3. Stage changes
git add apps/api-server/src/data/chemistry-questions.ts

# 4. Commit (commits are clean, no AI co-author lines)
git commit -m "Add 50 chemistry questions from 2020-2023 exams"

# 5. Push and create PR
git push origin feature/add-chemistry-questions
```

---

## 🚀 Deployment Strategy

### **Backend Deployment (API Server)**

**Platform Options**:
- **Vercel**: Zero-config deployment
- **Railway**: Node.js hosting
- **AWS Elastic Beanstalk**: Scalable infrastructure
- **DigitalOcean App Platform**: Simple PaaS

**Build Output**:
```bash
apps/api-server/dist/index.cjs  # Single bundled file
```

**Environment Variables**:
```env
NODE_ENV=production
PORT=8080
```

### **Frontend Deployment (Quiz & Syllabus Apps)**

**Platform Options**:
- **Vercel**: Optimized for Vite/React
- **Netlify**: Continuous deployment
- **Cloudflare Pages**: Global CDN
- **AWS S3 + CloudFront**: Static hosting

**Build Output**:
```bash
apps/jamb-prep/dist/public/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
```

**Build Commands**:
```bash
# Quiz App
cd apps/jamb-prep && pnpm run build

# Syllabus App
cd apps/jamb-syllabus && pnpm run build
```

### **Deployment Architecture**

```
┌─────────────────────────────────────────────────┐
│              CDN (Cloudflare/Vercel)             │
│  ┌──────────────┐      ┌──────────────┐         │
│  │  Quiz App    │      │ Syllabus App │         │
│  │  (Static)    │      │  (Static)    │         │
│  └──────┬───────┘      └──────┬───────┘         │
│         │                     │                  │
└─────────┼─────────────────────┼──────────────────┘
          │                     │
          │  API Requests       │
          └─────────┬───────────┘
                    │
          ┌─────────▼─────────┐
          │   API Server      │
          │ (Node.js/Express) │
          │   Port 8080       │
          └───────────────────┘
```

### **Environment-Specific Configs**

**Development**:
- API: http://localhost:8080
- Quiz: http://localhost:5173
- Hot reload enabled

**Production**:
- API: https://api.jambprep.com
- Quiz: https://prep.jambprep.com
- Syllabus: https://syllabus.jambprep.com
- Optimized builds with code splitting

---

## 📊 Performance Considerations

### **Frontend Optimizations**
- **Code Splitting**: Dynamic imports for routes
- **Image Optimization**: WebP format, lazy loading
- **Bundle Size**: Vite tree-shaking, manual chunks
- **Caching**: React Query cache, Service Worker (future)

### **Backend Optimizations**
- **Response Compression**: Gzip/Brotli
- **API Caching**: In-memory cache for static data
- **Database Indexing**: (Future: when DB is added)
- **Rate Limiting**: (Future: protect against abuse)

---

## 🔒 Security

### **Current Security Measures**
- ✅ Input validation with Zod
- ✅ CORS configuration
- ✅ Environment variable secrets
- ✅ No sensitive data in localStorage

### **Future Security Enhancements**
- [ ] JWT authentication
- [ ] Rate limiting per user
- [ ] XSS protection headers
- [ ] SQL injection prevention (when DB added)
- [ ] HTTPS enforcement
- [ ] Content Security Policy

---

## 🧪 Testing Strategy

### **Current Testing**
- TypeScript strict mode (compile-time checks)
- Manual testing in development

### **Recommended Testing Pyramid**
```
        ┌─────────┐
        │   E2E   │  10% - Critical user flows
        └─────────┘
      ┌─────────────┐
      │ Integration │  20% - API endpoints, component integration
      └─────────────┘
    ┌─────────────────┐
    │   Unit Tests    │  70% - Business logic, utilities
    └─────────────────┘
```

**Tools to Add**:
- **Unit**: Vitest
- **Component**: React Testing Library
- **E2E**: Playwright
- **API**: Supertest

---

## 📈 Future Roadmap

### **Phase 1: Database Integration**
- Replace in-memory data with PostgreSQL
- Implement Drizzle ORM migrations
- Add user authentication (JWT)

### **Phase 2: User Accounts**
- User registration/login
- Progress sync across devices
- Personalized recommendations

### **Phase 3: Advanced Features**
- Timed mock exams
- Performance analytics
- Leaderboards
- Study groups

### **Phase 4: Mobile Apps**
- React Native apps (iOS/Android)
- Offline mode with sync
- Push notifications for study reminders

---

## 🤝 Contributing

### **Development Guidelines**
1. **TypeScript Strict**: All code must pass strict type checking
2. **Component Structure**: Follow Shadcn UI patterns
3. **API Design**: RESTful conventions, Zod validation
4. **Commits**: Clean, descriptive messages (no AI co-author lines)
5. **Code Style**: Prettier auto-formatting

### **Adding New Features**

**Example: Adding a New Subject**

1. **Add Question Data**:
   ```typescript
   // apps/api-server/src/data/geography-questions.ts
   export const geographyQuestions = [
     {
       id: "geo-001",
       subjectId: "geography",
       text: "What is the capital of Nigeria?",
       options: ["Lagos", "Abuja", "Kano", "Ibadan"],
       correctAnswer: 1,
       explanation: "Abuja became the capital in 1991",
       year: 2020,
       category: "past" as const,
       topic: "Nigerian Geography"
     },
     // ... more questions
   ];
   ```

2. **Update Subject List**:
   ```typescript
   // apps/api-server/src/data/subjects.ts
   export const subjects = [
     // ... existing subjects
     {
       id: "geography",
       name: "Geography",
       description: "JAMB Geography questions",
       totalQuestions: 200,
       icon: "globe"
     }
   ];
   ```

3. **Test Locally**:
   ```bash
   pnpm --filter api-server dev
   curl http://localhost:8080/api/v1/subjects/geography/questions
   ```

4. **Commit & Push**:
   ```bash
   git add apps/api-server/src/data/
   git commit -m "Add geography subject with 200 questions"
   git push
   ```

---

## 📞 Support

For questions, issues, or contributions:
- **Repository**: https://github.com/Goodnessmbakara/prepare.jamb
- **Issues**: https://github.com/Goodnessmbakara/prepare.jamb/issues

---

**Last Updated**: March 19, 2026
**Version**: 1.0.0
**Maintainer**: JAMB Prep Team
