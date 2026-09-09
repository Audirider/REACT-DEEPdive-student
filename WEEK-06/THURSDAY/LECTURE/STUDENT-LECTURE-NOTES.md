# Week 6 Thursday — Student Lecture Notes
## Deployment & Optimization

**Date:** Week 6, Thursday  
**Topics:** Build Process, Deployment (Netlify/Vercel), Performance Optimization

---

## 🏗️ BUILD PROCESS

### Development vs Production:
| `npm start` | `npm run build` |
|------------|----------------|
| Hot reload | Minified files |
| localhost:3000 | Static files in `/build` |
| Source maps | Optimized bundles |
| Debug tools | Production-ready |

### How to build:
```bash
npm run build
# Creates /build folder with optimized static files
```

---

## 🚀 DEPLOYMENT

### Option A: Netlify (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → Sign in with GitHub
3. "New site from Git" → Select your repo
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click Deploy → **Live in ~60 seconds!**

### Option B: Vercel
1. Go to [vercel.com](https://vercel.com) → Import from GitHub
2. Select your repo → Deploy
3. Automatic deploys on every git push!

### Option C: GitHub Pages
```bash
npm install gh-pages
# Add to package.json:
# "homepage": "https://username.github.io/repo-name"
# "scripts": { "deploy": "gh-pages -d build" }
npm run deploy
```

---

## 🔑 ENVIRONMENT VARIABLES

```bash
# .env file in project root
REACT_APP_API_URL=https://api.example.com
```

```jsx
// Access in your code
const url = process.env.REACT_APP_API_URL;
```

⚠️ **Must** start with `REACT_APP_`  
⚠️ **Never** commit API keys to GitHub!

---

## ⚡ PERFORMANCE OPTIMIZATION

### React.memo (prevent re-renders):
```jsx
const TaskItem = React.memo(function TaskItem({ task }) {
  return <div>{task.text}</div>;
});
// Only re-renders if props actually change
```

### useMemo (cache calculations):
```jsx
const filtered = useMemo(() => {
  return tasks.filter(t => t.title.includes(search));
}, [tasks, search]);
```

### useCallback (cache functions):
```jsx
const handleToggle = useCallback((id) => {
  setTasks(prev => prev.map(t => 
    t.id === id ? { ...t, done: !t.done } : t
  ));
}, []);
```

### Lazy Loading:
```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));

<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>
```

---

## 📋 PRESENTATION CHECKLIST (for Friday!)

- [ ] App deployed with working live URL
- [ ] README with description & screenshots
- [ ] All features working in production
- [ ] 10-minute demo prepared
- [ ] Know what to show (demo flow planned)

---

## 🔑 KEY TAKEAWAYS

| Topic | Key Point |
|-------|-----------|
| Build | `npm run build` creates optimized static files |
| Deploy | Netlify/Vercel — connect GitHub, auto-deploy |
| Env vars | `REACT_APP_*` prefix, never commit secrets |
| Memo | `React.memo()` prevents unnecessary re-renders |
| Performance | Profile first, optimize only what's slow |

---

## 📚 RESOURCES
- [CRA: Deployment](https://create-react-app.dev/docs/deployment/)
- [Netlify](https://docs.netlify.com/)
- [React: memo](https://react.dev/reference/react/memo)

**Tomorrow:** Sprint 03 Presentations! 🎤
