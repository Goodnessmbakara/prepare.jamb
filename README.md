# JAMB Preparation Platform

A comprehensive exam preparation system for Nigerian students preparing for JAMB (Joint Admissions and Matriculation Board) examinations.

## 📱 Applications

This monorepo contains **two independent applications**:

### 1. **Quiz App** (`apps/quiz-app`)
Practice tests and mock quizzes with 1000+ past questions across multiple subjects.

**Features:**
- 1000+ past JAMB questions (Mathematics, Physics, Chemistry, Biology, English, etc.)
- Interactive quiz interface with timer
- Instant feedback and explanations
- Progress tracking with localStorage
- Subject-specific practice
- Mock exam mode

**Access:** http://localhost:5173

### 2. **Study Guide** (`apps/study-guide`)
Comprehensive syllabus coverage with topic-by-topic breakdown.

**Features:**
- Complete JAMB syllabus for all subjects
- Topic-by-topic study materials
- Progress tracking (mark topics as understood)
- Organized by subject and learning objectives
- Offline-first design

**Access:** http://localhost:5174

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v24.x or higher
- **pnpm**: v10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Goodnessmbakara/prepare.jamb.git
cd prepare.jamb

# Install dependencies
pnpm install
```

### Development

**Start Quiz App:**
```bash
PORT=5173 pnpm --filter quiz-app dev
# Opens at http://localhost:5173
```

**Start Study Guide:**
```bash
PORT=5174 pnpm --filter study-guide dev
# Opens at http://localhost:5174
```

**Start Both Apps:**
```bash
# Terminal 1
PORT=5173 pnpm --filter quiz-app dev

# Terminal 2
PORT=5174 pnpm --filter study-guide dev
```

### Production Build

```bash
# Build all apps
pnpm run build

# Build specific app
pnpm --filter quiz-app build
pnpm --filter study-guide build
```

---

## 📂 Project Structure

```
prepare.jamb/
├── apps/
│   ├── quiz-app/              # Practice tests & mock quizzes
│   │   ├── src/
│   │   │   ├── data/          # Embedded question banks
│   │   │   ├── pages/         # Quiz, Dashboard, Subject pages
│   │   │   └── components/    # React components
│   │   └── package.json
│   │
│   ├── study-guide/           # Syllabus & study materials
│   │   ├── src/
│   │   │   ├── data/          # Syllabus content
│   │   │   ├── pages/         # Home, Subject pages
│   │   │   └── components/    # React components
│   │   └── package.json
│   │
│   ├── api-server/            # Backend API (optional)
│   └── mockup-sandbox/        # Component preview tool
│
├── lib/                       # Shared libraries
│   ├── api-zod/              # API schemas & validation
│   ├── api-client-react/     # React Query hooks (optional)
│   └── db/                   # Database schemas
│
├── ARCHITECTURE.md           # Detailed architecture docs
└── README.md                 # This file
```

---

## 🎯 Key Features

### Quiz App Features
- **1000+ Questions**: Past questions from 2010-2023 across 10+ subjects
- **Smart Filtering**: Filter by year, question type (past/repeated/likely)
- **Timed Quizzes**: 30-minute mock exams simulating real JAMB conditions
- **Instant Feedback**: See correct answers and explanations immediately
- **Progress Tracking**: Track your performance by subject (localStorage)
- **Offline-First**: All questions embedded, works without internet

### Study Guide Features
- **Complete Syllabus**: Full JAMB curriculum for all subjects
- **Topic Breakdown**: Learning objectives for each topic
- **Progress Markers**: Mark topics as understood
- **Subject Coverage**: English, Mathematics, Physics, Chemistry, Biology, and more
- **Organized Learning**: Topics grouped by subject area

---

## 🔧 Technology Stack

### Frontend
- **React** 19.1.0
- **Vite** 7.3.0 (build tool)
- **Tailwind CSS** 4.1.14 (styling)
- **Wouter** 3.3.5 (routing)
- **Framer Motion** 12.35.1 (animations)
- **Radix UI** (accessible components)

### Data Storage
- **LocalStorage**: Client-side progress tracking
- **Embedded Data**: Questions and syllabus bundled in apps

### Development
- **TypeScript** 5.9.3 (strict mode)
- **pnpm** workspaces (monorepo)
- **Prettier** (code formatting)

---

## 📊 Available Subjects

Both apps support the following JAMB subjects:

- **Core Subjects**:
  - English Language (200 questions)
  - Mathematics (500 questions)

- **Science Subjects**:
  - Physics (155 questions)
  - Chemistry (155 questions)
  - Biology (155 questions)

- **Social Sciences**:
  - Economics (100 questions)
  - Government (100 questions)
  - Commerce (80 questions)

- **Arts & Humanities**:
  - Literature in English (100 questions)
  - Christian Religious Knowledge (CRK) (85 questions)

- **Others**:
  - Computer Science (65 questions)
  - Accounting (60 questions)

---

## 💾 Data Persistence

### Quiz App
Progress is stored in **localStorage** under the key `jamb-progress`:

```json
{
  "totalQuizzesTaken": 15,
  "totalCorrect": 120,
  "totalAttempted": 150,
  "subjectScores": {
    "mathematics": 85,
    "physics": 78
  },
  "recentResults": [...]
}
```

### Study Guide
Progress is stored in **localStorage** under the key `progress`:

```json
{
  "mathematics": {
    "topic-1": true,
    "topic-2": false
  }
}
```

---

## 🏗 Architecture

Both apps are **completely independent**:

- ✅ No backend required
- ✅ All data embedded in the bundle
- ✅ Works offline
- ✅ Progress stored locally
- ✅ Can be deployed separately

### Deployment Options

**Static Hosting** (Recommended):
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

**Build Output**:
```
apps/quiz-app/dist/public/     # Quiz app static files
apps/study-guide/dist/public/  # Study guide static files
```

---

## 🎓 Usage Guide

### For Students

**Quiz App:**
1. Open http://localhost:5173
2. Select a subject (e.g., Mathematics)
3. Choose practice mode or take a timed quiz
4. Answer questions and get instant feedback
5. Track your progress on the dashboard

**Study Guide:**
1. Open http://localhost:5174
2. Select a subject to study
3. Browse topics and subtopics
4. Mark topics as understood as you learn
5. Track overall progress by subject

### For Developers

**Adding New Questions:**
1. Edit `apps/quiz-app/src/data/<subject>-questions.ts`
2. Add questions following the existing format
3. Run `pnpm run build` to verify

**Adding New Syllabus Topics:**
1. Edit `apps/study-guide/src/data/syllabus.ts`
2. Add topics under the appropriate subject
3. Run `pnpm run build` to verify

---

## 🤝 Contributing

### Development Guidelines
1. **TypeScript Strict Mode**: All code must pass type checking
2. **Component Structure**: Follow Shadcn UI patterns
3. **Commits**: Clean, descriptive messages (no AI co-author lines)
4. **Code Style**: Prettier auto-formatting

### Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm run build` to ensure everything builds
5. Commit and push
6. Open a pull request

---

## 📝 Scripts

```bash
# Development
pnpm --filter quiz-app dev       # Start quiz app
pnpm --filter study-guide dev    # Start study guide
pnpm --filter api-server dev     # Start API (optional)

# Build
pnpm run build                   # Build all apps
pnpm --filter quiz-app build     # Build quiz app only
pnpm --filter study-guide build  # Build study guide only

# Type checking
pnpm run typecheck               # Check all packages
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change the port
PORT=5175 pnpm --filter quiz-app dev
```

### Build Errors
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Data Not Loading
- Clear localStorage in browser DevTools
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- Question data compiled from past JAMB examinations
- Syllabus based on official JAMB curriculum
- UI components from Shadcn UI library
- Icons from Lucide React

---

## 📞 Support

For questions or issues:
- **Repository**: https://github.com/Goodnessmbakara/prepare.jamb
- **Issues**: https://github.com/Goodnessmbakara/prepare.jamb/issues

---

**Good luck with your JAMB preparation! 🎯📚**
