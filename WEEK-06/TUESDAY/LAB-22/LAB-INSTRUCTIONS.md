# LAB 22: Multi-Page SPA

**Week:** 6 — Tuesday  
**Points:** 12.5  
**Due:** Tuesday EOD

---

## 🎯 OBJECTIVE

Build a multi-page SPA (Single Page Application) using **React Router** with navigation, dynamic routes, and at least 4 pages.

---

## 📋 REQUIREMENTS

- [ ] Install and configure React Router (`react-router-dom`)
- [ ] At least 4 routes: Home, About, Items List, Item Detail
- [ ] Navigation bar with `<NavLink>` (active state styling)
- [ ] Dynamic route: `/items/:id` with `useParams`
- [ ] 404 Not Found page for unknown routes
- [ ] `useNavigate` for at least one programmatic navigation
- [ ] Clean, consistent layout across pages

### Technical:
- [ ] `<BrowserRouter>` wrapping the app
- [ ] `<Routes>` and `<Route>` for routing
- [ ] Shared nav component visible on all pages
- [ ] No console errors

---

## 💡 STARTER CODE

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* TODO: NavLinks */}
      </nav>
      <Routes>
        {/* TODO: Routes for Home, About, Items, Item Detail, 404 */}
      </Routes>
    </BrowserRouter>
  );
}
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] 4+ page routes working
- [ ] NavLink highlights current page
- [ ] Dynamic route reads URL parameter
- [ ] 404 page catches unknown URLs
- [ ] Navigation doesn't reload page
- [ ] Professional layout

## 📤 SUBMISSION

```
LAB-22 Submission
Name: [Your Name]
GitHub: [Repository URL]
Pages: ✅ Home ✅ About ✅ Items ✅ Detail ✅ 404
```
