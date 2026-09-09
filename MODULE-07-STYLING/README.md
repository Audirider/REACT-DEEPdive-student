# MODULE 07: Styling in React — Complete Guide & Curriculum

**Module:** 07 — Styling React Applications  
**Audience:** React Frontend Developers  
**Prerequisites:** React Fundamentals, Components, Props, State, Hooks  
**Duration:** 3 Days (Lectures, Labs, Tickets)

---

## 🎯 MODULE OVERVIEW

Styling in React is one of the most debated topics in modern frontend engineering. Unlike traditional multi-page websites where a single global `styles.css` was standard, React component architectures demand solutions that solve **name collisions**, **dead code elimination**, **dynamic prop-driven styling**, and **maintainability at scale**.

In this module, students explore and master the four dominant paradigms of modern React styling:
1. **Global Styles & CSS Modules** — Standard CSS scoped locally to components via automated hashing.
2. **CSS-in-JS (Styled-components & Emotion)** — Component-scoped styles with JavaScript interpolation and theme providers.
3. **Utility-First CSS (Tailwind CSS)** — Atomic CSS classes composed directly in JSX for rapid prototyping and strict design consistency.
4. **CSS Frameworks & Component Libraries (Bootstrap, Chakra UI, MUI)** — Pre-built component systems vs utility frameworks.

---

## 🗺️ MODULE STRUCTURE

```
MODULE-07-STYLING/
├── README.md                                  <-- You are here
├── DAY-01-CSS-MODULES/
│   ├── LECTURE-NOTES.md                       <-- Global vs Scoped CSS & CSS Modules
│   ├── STUDENT-LECTURE-NOTES.md               <-- Interactive blanks & scoping drills
│   └── LAB-INSTRUCTIONS.md                    <-- Lab 24: Scoped Component Design
├── DAY-02-STYLED-COMPONENTS/
│   ├── LECTURE-NOTES.md                       <-- CSS-in-JS, Tagged Templates, Props, ThemeProvider
│   ├── STUDENT-LECTURE-NOTES.md               <-- Interactive drills & prop-driven CSS
│   └── LAB-INSTRUCTIONS.md                    <-- Lab 25: Dynamic Design System
├── DAY-03-TAILWIND-AND-SURVEY/
│   ├── LECTURE-NOTES.md                       <-- Tailwind CSS, Utility Classes, Bootstrap Survey
│   ├── STUDENT-LECTURE-NOTES.md               <-- Utility class drills & responsive layout
│   └── LAB-INSTRUCTIONS.md                    <-- Lab 26: Tailwind Dashboard & Framework Survey
└── TICKETS/
    ├── TICKET-27.md                           <-- E-Commerce Product Card (CSS Modules)
    ├── TICKET-28.md                           <-- Dark/Light Themeable Dashboard (Styled-components)
    └── TICKET-29.md                           <-- SaaS Analytics Landing Page (Tailwind CSS)
```

---

## ⚖️ THE REACT STYLING TRADEOFF MATRIX

| Paradigm | Tools | Pros | Cons | When to Choose |
|----------|-------|------|------|----------------|
| **CSS Modules** | Built into Vite / CRA (`[name].module.css`) | Zero runtime cost, pure standard CSS syntax, scoped class names prevent leakage | Styles separated from JSX, harder to pass dynamic runtime props | Teams loving traditional CSS/SCSS wanting safe modularity |
| **CSS-in-JS** | `styled-components`, `emotion` | Colocated styles & logic, props adapt styles dynamically, built-in theming | Small runtime JS cost, larger bundle size, SSR considerations | Rich interactive component libraries & design systems |
| **Utility-First** | `Tailwind CSS` | Fastest build speed, zero unused CSS in production, no naming fatigue, design tokens | Long className strings in JSX, requires learning utility names | Modern product teams, rapid MVPs, scalable design systems |
| **UI Frameworks** | `Bootstrap`, `MUI`, `Chakra` | Ready-made pre-built accessible components | Opinionated designs, harder to customize, heavy bundle footprint | Internal tools, dashboards, rapid proof-of-concept projects |

---

## 🏆 GRADING & DELIVERABLES

| Day | Lab | Ticket | Points |
|-----|-----|--------|--------|
| Day 1 | Lab 24: Scoped Component Design | Ticket-27: E-Commerce Product Card | 25 pts |
| Day 2 | Lab 25: Dynamic Design System | Ticket-28: Dark/Light Themeable Dashboard | 25 pts |
| Day 3 | Lab 26: Tailwind Dashboard | Ticket-29: SaaS Analytics Landing Page | 25 pts |
| **Total** | | | **75 pts** |
