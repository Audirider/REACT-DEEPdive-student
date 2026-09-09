# Tuesday Demos - React Router

**Topic:** Client-side routing, Links, Routes, Params

---

## DEMO FILES

1. **demo-01-basic-routing.jsx** — Multi-page SPA with React Router
2. **demo-02-dynamic-routes.jsx** — URL parameters and user detail pages

---

## HOW TO RUN

```bash
# Install React Router in your project
npm install react-router-dom

# Replace App.js with demo content
npm start
```

## KEY CONCEPTS
- `<BrowserRouter>` wraps the app
- `<Link>` for navigation (no page reload)
- `<Route path="/path" element={<Component />} />`
- `useParams()` for URL parameters
- `useNavigate()` for programmatic navigation
