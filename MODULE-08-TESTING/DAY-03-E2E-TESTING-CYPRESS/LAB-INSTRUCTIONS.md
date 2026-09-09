# LAB 29: End-to-End Testing with Cypress

**Module:** 08 — Testing in React (Day 3)  
**Points:** 12.5  
**Due:** Day 3 EOD  

---

## 🎯 OBJECTIVE

Install and configure **Cypress** in your React application (e.g. your Sprint 03 Task Manager or Product Catalog app) and write a complete **End-to-End (E2E) Test Suite** simulating a real user creating, completing, filtering, and deleting tasks, and verifying data persistence across page reloads.

---

## 📋 REQUIREMENTS

### Part 1: Cypress Setup & `data-cy` Attributes
- [ ] Install Cypress in your project:
  ```bash
  npm install -D cypress
  ```
- [ ] Create or update `cypress.config.js`:
  ```javascript
  import { defineConfig } from 'cypress';

  export default defineConfig({
    e2e: {
      baseUrl: 'http://localhost:5173', // or http://localhost:3000
      supportFile: false,
    },
  });
  ```
- [ ] Add scripts to `package.json`:
  ```json
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
  ```
- [ ] Instrument your React components with dedicated `data-cy` attributes:
  - `data-cy="task-input"`
  - `data-cy="add-task-btn"`
  - `data-cy="task-item"`
  - `data-cy="task-checkbox"`
  - `data-cy="delete-btn"`
  - `data-cy="filter-active"`
  - `data-cy="filter-completed"`

---

### Part 2: E2E Test Suite (`cypress/e2e/task-manager.cy.js`)

Implement the following 4 end-to-end tests:

#### Test 1: Initial Page Load
- [ ] Visits `/`.
- [ ] Asserts application header and title are visible.
- [ ] Asserts task input field is focused or ready for typing.

#### Test 2: Task Creation Flow
- [ ] Types "Buy groceries" into input and clicks Add (or presses Enter).
- [ ] Asserts new task appears in the task list.
- [ ] Asserts input field resets to empty after submission.

#### Test 3: Completion & Status Filtering Flow
- [ ] Clicks the checkbox of "Buy groceries".
- [ ] Asserts the task item reflects completed styling (e.g. line-through text or completed badge).
- [ ] Clicks the "Active" filter tab: asserts "Buy groceries" is **not visible** in the list.
- [ ] Clicks the "Completed" filter tab: asserts "Buy groceries" is **visible**.

#### Test 4: Deletion & Page Reload Persistence
- [ ] Creates a task named "Temporary Item".
- [ ] Clicks the delete button for "Temporary Item".
- [ ] Asserts "Temporary Item" vanishes from the screen.
- [ ] Calls `cy.reload()` to refresh the page.
- [ ] Asserts "Temporary Item" is still gone after reload (proves persistent state in `localStorage` or `json-server`).

---

## 💡 STARTER TEST SPECIFICATION

```javascript
// cypress/e2e/task-manager.cy.js

describe('Task Manager E2E User Journey', () => {
  beforeEach(() => {
    // Visits the configured baseUrl:
    cy.visit('/');
  });

  it('allows a user to create, complete, filter, and delete tasks', () => {
    // 1. Create a new task
    cy.get('[data-cy="task-input"]')
      .type('Ship React Project to Production{enter}');

    cy.get('[data-cy="task-item"]')
      .should('contain.text', 'Ship React Project to Production');

    // 2. Mark as completed
    cy.contains('[data-cy="task-item"]', 'Ship React Project to Production')
      .find('[data-cy="task-checkbox"]')
      .click();

    // 3. Test filter tabs
    cy.get('[data-cy="filter-active"]').click();
    cy.contains('Ship React Project to Production').should('not.exist');

    cy.get('[data-cy="filter-completed"]').click();
    cy.contains('Ship React Project to Production').should('be.visible');

    // 4. Delete and verify persistence
    cy.contains('[data-cy="task-item"]', 'Ship React Project to Production')
      .find('[data-cy="delete-btn"]')
      .click();

    cy.contains('Ship React Project to Production').should('not.exist');

    // Reload page to verify persistence
    cy.reload();
    cy.contains('Ship React Project to Production').should('not.exist');
  });
});
```

---

## 🏆 BONUS CHALLENGE: Network Stubbing with `cy.intercept`

Create `cypress/e2e/api-stub.cy.js`:
- [ ] Intercept an API request using `cy.intercept('GET', '**/products', { fixture: 'products.json' })`.
- [ ] Assert that mock data from the fixture is displayed on the page without depending on a real backend.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Cypress installed and configured with `baseUrl`
- [ ] Both terminals running concurrently during testing (Dev server + Cypress)
- [ ] React components instrumented with `data-cy` attributes
- [ ] All 4 E2E test cases pass in headless runner (`npm run cypress:run`) or GUI runner (`npm run cypress:open`)
- [ ] Tests use `.should()` assertions rather than manual timeouts (`cy.wait(ms)`)
- [ ] Zero flaky failures

---

## 📤 SUBMISSION

```
LAB-29 Submission
Name: [Your Name]
GitHub: [Repository URL]
Cypress Tests: ✅ Initial Load ✅ Task Creation ✅ Toggle & Filter ✅ Delete & Reload Persistence
Runner Status: All tests passing (0 failures)
```
