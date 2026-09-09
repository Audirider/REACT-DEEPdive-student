# Thursday Demos - Deployment & Optimization

**Session:** Physical Class (Thursday 2:00-5:00 PM)  
**Topic:** Build, Deploy, Performance

---

## DEMO FILES

1. **demo-01-deploy-checklist.jsx** — Pre-deployment verification component
2. **demo-02-optimization.jsx** — React.memo, useMemo, useCallback patterns

---

## KEY CONCEPTS

### Build & Deploy
```bash
npm run build        # Create production build
# Deploy /build folder to Netlify or Vercel
```

### Performance
- `React.memo()` — skip re-renders if props unchanged
- `useMemo()` — cache expensive calculations
- `useCallback()` — cache function references
- `React.lazy()` — code splitting / lazy loading
