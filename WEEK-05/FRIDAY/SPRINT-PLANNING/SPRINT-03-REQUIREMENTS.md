# Sprint 03: React Task Manager Application

**Duration:** Week 5 Friday → Week 6 Thursday  
**Total Points:** 200  
**Presentations:** Week 6 Friday (10 min each)

---

## 🎯 PROJECT OVERVIEW

Build a **Task Manager Application** using React. This single-page application lets users create, manage, filter, and track tasks with a professional UI.

---

## 📋 FEATURE REQUIREMENTS

### 1. Task Management (Core)
- [ ] Add new tasks (title, description, priority, due date)
- [ ] Edit existing tasks
- [ ] Delete tasks (with confirmation)
- [ ] Mark tasks as complete/incomplete
- [ ] Assign priority levels (High, Medium, Low)

### 2. Filtering & Sorting
- [ ] Filter by status: All, Active, Completed
- [ ] Filter by priority: All, High, Medium, Low
- [ ] Sort by: Date Created, Due Date, Priority, Alphabetical
- [ ] Search tasks by title/description

### 3. Statistics Dashboard
- [ ] Total tasks count
- [ ] Completed vs active counts
- [ ] Completion percentage with progress bar
- [ ] Tasks by priority breakdown

### 4. Data Persistence
- [ ] Save tasks to localStorage
- [ ] Load tasks on app start
- [ ] Data survives page refresh

---

## ⚙️ TECHNICAL REQUIREMENTS

### React (100 points)
- [ ] Functional components only (no class components)
- [ ] useState for state management
- [ ] useEffect for side effects (localStorage, document title)
- [ ] Props for component communication
- [ ] Conditional rendering
- [ ] List rendering with `.map()` and keys

### Component Structure (30 points)
- [ ] Minimum 6 components in separate files
- [ ] Clear component hierarchy
- [ ] Reusable components (Button, Badge, Card)
- [ ] Clean imports/exports

### Styling (30 points)
- [ ] Professional design
- [ ] Responsive layout (mobile + desktop)
- [ ] Hover effects and transitions
- [ ] Color-coded priorities
- [ ] Clean typography

### Code Quality (20 points)
- [ ] No console errors or warnings
- [ ] Descriptive variable/function names
- [ ] Comments on complex logic
- [ ] Consistent code style

### Deployment (20 points)
- [ ] Deployed to Netlify, Vercel, or GitHub Pages
- [ ] Working live URL
- [ ] Professional README with screenshots

---

## 📊 GRADING RUBRIC (200 points)

| Category | Points | Criteria |
|----------|--------|----------|
| **Task CRUD** | 40 | Add, edit, delete, toggle complete |
| **Filtering/Sorting** | 25 | Status, priority, search, sort |
| **Statistics** | 15 | Counts, percentages, progress |
| **localStorage** | 20 | Save, load, persist data |
| **Component Structure** | 30 | 6+ components, hierarchy, reuse |
| **Styling & UX** | 30 | Professional, responsive, animations |
| **Code Quality** | 20 | Clean, organized, no errors |
| **Deployment** | 10 | Live URL, working links |
| **Presentation** | 10 | Demo quality, code explanation |
| **TOTAL** | **200** | |

---

## 📂 RECOMMENDED STRUCTURE

```
task-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── TaskForm.js
│   │   ├── TaskList.js
│   │   ├── TaskItem.js
│   │   ├── FilterBar.js
│   │   ├── Statistics.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 📤 SUBMISSION

1. **GitHub Repository URL** — clean, organized code
2. **Live Demo URL** — deployed app
3. **10-Minute Demo** — walk through features and code

---

**Build something amazing with React! ⚛️🚀**
