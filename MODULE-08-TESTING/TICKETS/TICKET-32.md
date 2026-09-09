# TICKET-32: Cypress E2E Critical Path Test Suite

**Assigned:** Module 8 Day 3
**Due:** Following Monday, 9:00 AM
**Points:** 12.5
**Type:** Individual Task

---

## 🎯 OBJECTIVE

Build a **production-grade Cypress end-to-end test suite** that covers the critical user journeys of a full-stack React + JSON Server Task Manager application. You will prove that a real browser, running real JavaScript, can complete the most important workflows — from adding a task to filtering, editing, and deleting it — without a single `.wait(N)` or arbitrary sleep.

---

## ⚠️ PRE-REQUISITE: The Two-Terminal Rule

Before Cypress can run, **two terminals must be active simultaneously**:

| Terminal | Command | Purpose |
|----------|---------|---------|
| **Terminal 1** | `npm run dev` | Start the React dev server (Vite → `http://localhost:5173`) |
| **Terminal 2** | `npx json-server@0.17.4 --watch db.json --port 5001` | Start the JSON Server mock API |

**Do NOT skip this step.** Cypress will fail with connection errors if either server is offline.

---

## 📋 APPLICATION SETUP

### `db.json` (JSON Server seed data)
```json
{
  "tasks": [
    { "id": 1, "title": "Buy groceries",   "completed": false, "priority": "high"   },
    { "id": 2, "title": "Walk the dog",    "completed": true,  "priority": "medium" },
    { "id": 3, "title": "Read a book",     "completed": false, "priority": "low"    }
  ]
}
```

### `cypress.config.js`
```js
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {},
  },
});
```

> ⚡ **Always use `cy.visit("/")` (never `cy.visit("http://localhost:5173")`) — that is what `baseUrl` is for.**

---

## 📋 REQUIREMENTS

You will write **4 E2E test flows** with a minimum of **12 `cy.` assertions** total.

---

### Flow 1: Page Load & Initial State

**File:** `cypress/e2e/task_manager_load.cy.js`

- [ ] `cy.visit("/")` loads without errors.
- [ ] The page heading is visible (e.g., `cy.contains("h1", "Task Manager")`).
- [ ] All 3 seed tasks are visible in the list on load.
- [ ] Each task item is queryable by its `data-cy` attribute (e.g., `[data-cy="task-item"]`).

---

### Flow 2: Add a New Task

**File:** `cypress/e2e/task_manager_add.cy.js`

- [ ] Type a new task title into the input (`[data-cy="task-input"]`).
- [ ] Click the "Add Task" button (`[data-cy="add-task-btn"]`).
- [ ] The new task appears in the list without a full page reload.
- [ ] The input field is cleared after submission.
- [ ] The total task count increases by 1 (e.g., list now shows 4 items).

---

### Flow 3: Mark a Task Complete & Filter

**File:** `cypress/e2e/task_manager_filter.cy.js`

- [ ] Click the completion checkbox on the first incomplete task.
- [ ] The task shows a visual "completed" indicator (e.g., class or strikethrough).
- [ ] Click the "Show Completed" filter button (`[data-cy="filter-completed"]`).
- [ ] Only completed tasks are displayed in the list.
- [ ] Click the "Show All" filter button — all tasks are visible again.

---

### Flow 4: Delete a Task

**File:** `cypress/e2e/task_manager_delete.cy.js`

- [ ] Locate a task by its title using `cy.contains()`.
- [ ] Click its delete button (`[data-cy="delete-btn"]`).
- [ ] The task is removed from the DOM (use `.should("not.exist")`).
- [ ] The remaining tasks are still displayed (the list is not empty).

---

## ✅ ACCEPTANCE CRITERIA

- [ ] **4 spec files** created in `cypress/e2e/`, each covering one flow.
- [ ] **Minimum 12 `cy.` assertions** across all specs (`.should(...)`, `.and(...)`).
- [ ] **Zero `cy.wait(N)` calls** — use `.should()`, `cy.intercept()`, or `cy.contains()` for synchronization.
- [ ] **`data-cy` selectors** used exclusively — no CSS class selectors, no `id` selectors, no XPath.
- [ ] **`baseUrl` configured** in `cypress.config.js` — no hardcoded URLs in spec files.
- [ ] **Both servers running** before `npx cypress open` (Two-Terminal Rule enforced).
- [ ] **All 4 flows pass** in the Cypress Test Runner (green checkmarks).

---

## 🏆 BONUS (Up to +3 pts)

- [ ] **`cy.intercept()`** — Stub the JSON Server `GET /tasks` response with a fixture file (`cypress/fixtures/tasks.json`). Verify the stub is called with `cy.wait("@alias")`.
- [ ] **Edit Flow** — Write a 5th spec that double-clicks a task title to enter edit mode, changes the text, saves, and verifies the new title appears.
- [ ] **Cypress Component Testing** — Set up one component test (not E2E) for the `<TaskItem />` component using `cy.mount()`.

---

## 🎓 REFLECTION QUESTIONS (Add answers to your README)

1. Why do we use `data-cy` attributes instead of CSS classes as selectors?
2. What would happen if you ran `npx cypress open` without starting the React dev server first?
3. Explain the difference between `cy.get(".my-button").click()` and using `cy.contains("button", "Add Task").click()`. Which is more resilient?

---

## 📤 SUBMISSION

```
TICKET-32 Submission
Name: [Your Name]
GitHub: [Repository URL]
Cypress Recording: [screenshot or video of Test Runner showing 4 passing flows]
Spec files: load ✅  add ✅  filter ✅  delete ✅
Total assertions: [N] / 12 minimum
cy.wait(N) calls: ZERO ✅
```
