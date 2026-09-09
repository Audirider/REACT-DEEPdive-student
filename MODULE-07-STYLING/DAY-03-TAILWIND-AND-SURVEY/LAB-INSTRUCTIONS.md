# LAB 26: Tailwind CSS Dashboard & Styling Paradigms Comparison

**Module:** 07 — Styling in React (Day 3)  
**Points:** 12.5  
**Due:** Day 3 EOD  

---

## 🎯 OBJECTIVE

Build a sleek, fully responsive **Developer Analytics Dashboard** using **Tailwind CSS**, implement class-based dark mode toggling, and complete an architectural review comparing the three styling approaches learned in this module (CSS Modules, Styled-components, and Tailwind CSS).

---

## 📋 REQUIREMENTS

### Part 1: Tailwind Setup & Configuration
- [ ] Install Tailwind CSS, PostCSS, and Autoprefixer in your Vite React app:
  ```bash
  npm install -D tailwindcss@^3.4 postcss autoprefixer
  npx tailwindcss init -p
  ```
- [ ] Configure `tailwind.config.js` with `darkMode: 'class'`.
- [ ] Include `@tailwind base; @tailwind components; @tailwind utilities;` in `src/index.css`.

---

### Part 2: Responsive Navbar with Dark Mode Switcher
- [ ] Responsive navigation bar:
  - Brand Logo + Title with modern gradient text (`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`).
  - Navigation links that highlight on hover (`hover:text-blue-500`).
  - **Theme Toggle Button**: switches between Light and Dark mode by toggling the `'dark'` class on `document.documentElement.classList`.

---

### Part 3: Analytics Metrics Grid
- [ ] Create a responsive grid: 1 column on mobile (`grid-cols-1`), 2 columns on tablet (`md:grid-cols-2`), 4 columns on desktop (`lg:grid-cols-4`).
- [ ] Each stat card must feature:
  - Metric label (e.g., "Total Revenue", "Active Users", "Conversion Rate").
  - Large, bold metric figure (`text-3xl font-extrabold`).
  - Percentage change badge (green for positive e.g. `text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40`, red for negative).
  - Smooth hover elevation transition (`hover:-translate-y-1 transition duration-200 shadow-sm hover:shadow-md`).

---

### Part 4: Recent Activity Table or Activity Feed
- [ ] Create a styled card container containing a recent activity table or transaction list.
- [ ] Use alternating row backgrounds or borders (`divide-y divide-slate-200 dark:divide-slate-800`).
- [ ] Status badges using Tailwind utility classes (`rounded-full px-2.5 py-0.5 text-xs font-medium`).

---

### Part 5: Written Paradigm Comparison (The Reflection)
In your project `README.md`, write a 1–2 paragraph comparison answering:
1. Which styling approach did you find fastest for prototyping?
2. Which approach felt safest against CSS bugs in a large team?
3. What is one disadvantage of Tailwind CSS compared to Styled-components?

---

## 💡 STARTER SNIPPET: DARK MODE HOOK

```jsx
import React, { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Tailwind CSS configured properly with zero build errors
- [ ] Mobile-first responsive layout verified on mobile (375px) and desktop (1280px)
- [ ] Dark mode toggle adds/removes `.dark` class on root HTML element
- [ ] All elements styled using Tailwind utility classes (no inline `style={{}}` attributes)
- [ ] Written paradigm comparison included in submission

---

## 📤 SUBMISSION

```
LAB-26 Submission
Name: [Your Name]
GitHub: [Repository URL]
Tailwind Features: ✅ Responsive Grid (sm/md/lg) ✅ Dark Mode Class ✅ Stats Cards
Reflection: [Brief summary of preferred styling approach and why]
```
