# MODULE 08: Testing in React — Complete Guide & Architecture

**Module:** 08 — Testing in React (Month 3)  
**Audience:** React Frontend Developers  
**Prerequisites:** React Components, Props, State, Hooks, Forms, Async/Fetch  
**Duration:** 3 Days (Lectures, Hands-On Labs, Real-World Portfolio Tickets)

---

## 🎯 MODULE OVERVIEW

Testing is what separates junior developers who hope their code works from professional engineers who **guarantee** it works. In production React applications, automated testing prevents regressions, validates complex user workflows, ensures accessibility compliance, and allows teams to ship features with high confidence.

In this module, students master the full industry testing stack:
1. **Unit Testing & React Testing Library (RTL)** — Testing individual UI components using user-centric accessible queries.
2. **Integration Testing & Async Mocking** — Simulating realistic user interactions (`@testing-library/user-event`), testing controlled forms, and mocking network API calls with zero test pollution.
3. **End-to-End (E2E) Testing with Cypress** — Running automated test scripts in real headless and graphical browsers simulating complete end-to-end customer journeys.

---

## 🔺 THE TESTING PYRAMID

```
           / \
          /   \
         / E2E \         ~10% (Cypress)
        /       \        • Full user flows (login → cart → checkout)
       /---------\       • Slowest, highest confidence, runs in real browser
      /           \
     / Integration \     ~20% (RTL + user-event + Mocked API)
    /               \    • Multi-component workflows, forms, API data fetching
   /-----------------\   • Fast, simulated DOM, tests component cooperation
  /                   \
 /    Unit Tests       \  ~70% (Vitest / Jest + RTL)
/                       \ • Isolated components (Button, Modal, Badge), pure logic
------------------------- • Extremely fast, runs in milliseconds on every file save
```

---

## 🧠 THE CORE PHILOSOPHY: TEST LIKE A USER

> *"The more your tests resemble the way your software is used, the more confidence they can give you."*  
> — **Kent C. Dodds** (Creator of React Testing Library)

### The Two Golden Rules of React Testing Library:
1. **Never test implementation details:**
   - ❌ Don't test what the internal state variable is named (`wrapper.state('count')`).
   - ❌ Don't test internal component method names (`instance.handleClick()`).
   - If you refactor your component from `useState` to `useReducer`, or rename internal functions, **your tests should still pass without changing a single line of test code!**
2. **Test what the user sees and hears:**
   - ✔️ Does the button say "Submit"? (`screen.getByRole('button', { name: /submit/i })`)
   - ✔️ When clicked, does an error banner appear? (`expect(screen.getByText(/email is required/i)).toBeInTheDocument()`)
   - ✔️ Does the screen reader know this is an alert?

---

## ⚙️ TOOLING SETUP RECIPES

### Option A: Modern Standard — Vite + Vitest (Recommended)

Vitest is the modern test runner built natively for Vite. It uses the **exact same syntax and API as Jest** (`describe`, `test`, `expect`, `vi.fn()`), but requires zero Babel configuration and runs up to 10x faster.

#### 1. Install Dependencies:
```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

#### 2. Configure `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
});
```

#### 3. Create `src/setupTests.js`:
```javascript
// Automatically adds custom DOM matchers (like toBeInTheDocument())
import '@testing-library/jest-dom';
```

#### 4. Add script to `package.json`:
```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:run": "vitest run"
}
```

---

### Option B: Legacy Standard — Create React App (Jest)

If your project was initialized with Create React App:
- Jest and React Testing Library are already installed out of the box!
- Run tests directly with:
  ```bash
  npm test
  ```
- `src/setupTests.js` is already configured.

---

### Option C: E2E Setup — Cypress

Cypress runs separately from unit test runners to test the built application in a real browser:
```bash
# 1. Install Cypress
npm install -D cypress

# 2. Launch Cypress interactive test runner
npx cypress open
```

---

## 🗺️ MODULE ROADMAP

```
MODULE-08-TESTING/
├── README.md                                         <-- You are here
├── DAY-01-UNIT-TESTING-RTL/
│   ├── LECTURE-NOTES.md                              <-- Test anatomy, render, screen, query hierarchy
│   ├── STUDENT-LECTURE-NOTES.md                      <-- Interactive drills & query priority ladder
│   └── LAB-INSTRUCTIONS.md                           <-- Lab 27: Unit Testing Core UI Components
├── DAY-02-USER-INTERACTIONS-AND-MOCKING/
│   ├── LECTURE-NOTES.md                              <-- user-event, form testing, queryBy vs findBy, mocking fetch
│   ├── STUDENT-LECTURE-NOTES.md                      <-- Async drills, act-warning prevention, mock recipes
│   └── LAB-INSTRUCTIONS.md                           <-- Lab 28: Testing Forms & Async API Components
├── DAY-03-E2E-TESTING-CYPRESS/
│   ├── LECTURE-NOTES.md                              <-- Cypress setup, real browser testing, user flows
│   ├── STUDENT-LECTURE-NOTES.md                      <-- Cypress cheat sheet & selector best practices
│   └── LAB-INSTRUCTIONS.md                           <-- Lab 29: Full E2E Journey for Task Manager
└── TICKETS/
    ├── TICKET-30.md                                  <-- Component Unit Test Suite with RTL (12.5 pts)
    ├── TICKET-31.md                                  <-- Form Validation & API Integration Tests (12.5 pts)
    └── TICKET-32.md                                  <-- Cypress E2E Critical Path Test Suite (12.5 pts)
```

---

## 🏆 DELIVERABLES & GRADING

| Day | Topic | Hands-On Lab | Individual Ticket | Points |
|-----|-------|--------------|-------------------|--------|
| **Day 1** | Unit Testing & RTL | Lab 27: UI Component Suite | Ticket-30: Component Test Suite | 25 pts |
| **Day 2** | User Events & API Mocks | Lab 28: Form & Async Fetch | Ticket-31: Async Form & API Suite | 25 pts |
| **Day 3** | E2E Testing with Cypress | Lab 29: Task Manager Flow | Ticket-32: Cypress Critical Path | 25 pts |
| **Total** | | | | **75 pts** |
