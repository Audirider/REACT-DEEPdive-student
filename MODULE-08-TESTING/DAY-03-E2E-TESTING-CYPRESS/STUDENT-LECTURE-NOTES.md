# 📝 DAY 3: End-to-End Testing with Cypress — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** End-to-End Testing, Cypress Setup, Command Chaining, Assertions, `cy.intercept`

---

## 🎯 OBJECTIVES
- [ ] Understand what End-to-End (E2E) testing is and how it complements unit tests
- [ ] Install Cypress and configure `cypress.config.js` with a `baseUrl`
- [ ] Master the **Two-Terminal Concurrency Rule** (Dev server + Cypress)
- [ ] Chain Cypress commands: `cy.visit()`, `cy.get()`, `cy.contains()`, `cy.type()`, `cy.click()`
- [ ] Write assertions using `.should()` (`be.visible`, `have.length`, `contain.text`)
- [ ] Use `data-cy` attributes for resilient, unbreakable test selectors
- [ ] Stub API network requests using `cy.intercept()`

---

## 🌐 UNIT TESTS VS. E2E TESTS

Fill in the blanks:

| Feature | Unit Tests (Vitest / RTL) | E2E Tests (Cypress) |
|---------|---------------------------|---------------------|
| **Environment** | Terminal / simulated `__________` | Real graphical or headless `__________` |
| **Speed** | Extremely fast (milliseconds) | Slower (seconds per test) |
| **Scope** | Isolated components & pure logic | Full multi-page `__________` journeys |
| **Confidence** | High for component logic | Highest for whole application functionality |

---

## 🖥️ THE TWO-TERMINAL CONCURRENCY RULE

Draw or describe what each terminal must do when running Cypress tests:
- **Terminal 1:** Runs `npm run dev` (starts React app on `http://localhost:5173`). **MUST STAY OPEN!**
- **Terminal 2:** Runs `npx cypress open` (launches Cypress test runner window).

> ❓ **What error happens if you run Cypress without Terminal 1 running?**  
> *Answer:* Cypress cannot connect to `http://localhost:5173` and fails with `__________`!

---

## 🎯 RESILIENT SELECTORS: THE `data-cy` RULE

Why should you avoid using CSS class names (like `.btn-primary` or `.p-4`) in Cypress tests?  
*Answer:* Because CSS class names change whenever a developer tweaks _______________ or refactors styles, causing tests to break even though the application works perfectly!

**Best Practice:** Add dedicated test attributes to your JSX:
```jsx
<button data-cy="submit-button" className="bg-blue-500 text-white">
  Save
</button>
```

In your Cypress test:
```javascript
cy.get('[data-cy="submit-button"]').click();
```

---

## 📋 CYPRESS COMMANDS & ASSERTIONS CHEAT SHEET

Fill in the missing commands and assertions:

```javascript
// Navigate to a URL:
cy._______________('/dashboard');

// Find element by selector:
cy._______________('[data-cy="item"]');

// Find element containing visible text:
cy._______________('Delete');

// Type text into an input:
cy.get('input')._______________('Hello World{enter}');

// Click an element:
cy.get('button')._______________();

// Assert element is visible:
cy.get('.modal').should('_______________');

// Assert list has exactly 3 items:
cy.get('li').should('_______________', 3);

// Assert element contains text:
cy.get('h1').should('_______________', 'Welcome');

// Reload the current page:
cy._______________();
```

---

## 💻 CODE DRILLS: CYPRESS IN ACTION

### Drill 1: Testing a Full Add-Todo Flow
Fill in the blanks to complete the test:

```javascript
describe('Todo Flow', () => {
  it('adds and completes a todo item', () => {
    // 1. Visit root page:
    cy.visit('_______________');

    // 2. Type a new todo and press Enter:
    cy.get('[data-cy="todo-input"]').type('Study for React Exam{_______________}');

    // 3. Verify it appears in the list:
    cy.contains('Study for React Exam').should('be._______________');

    // 4. Click the complete button/checkbox:
    cy.contains('[data-cy="todo-item"]', 'Study for React Exam')
      .find('[data-cy="todo-checkbox"]')
      .click();

    // 5. Verify it has the completed class:
    cy.contains('[data-cy="todo-item"]', 'Study for React Exam')
      .should('have.class', '_______________');
  });
});
```

---

### Drill 2: Network Stubbing with `cy.intercept`
How do you stub an API call so tests don't depend on real internet?

```javascript
it('mocks API products', () => {
  // 1. Intercept network request:
  cy._______________('GET', '**/products', {
    statusCode: 200,
    body: [{ id: 1, name: 'Mock Laptop' }]
  }).as('fetchProducts');

  // 2. Visit page:
  cy.visit('/products');

  // 3. Wait for request alias:
  cy.wait('@_______________');

  // 4. Assert item renders:
  cy.contains('Mock Laptop').should('be.visible');
});
```

---

## 📊 KEY TAKEAWAYS

| Concept | Golden Rule |
|---------|-------------|
| **`baseUrl`** | Set in `cypress.config.js` to avoid typing localhost URLs in tests |
| **Command Chaining** | Cypress commands run in a managed queue; chain actions with `.should()` |
| **`data-cy`** | The gold standard selector attribute for resilient E2E tests |
| **`cy.intercept()`** | Use to spy on or stub network requests for deterministic tests |
| **Page Refresh Test** | Use `cy.reload()` to verify state persists in `localStorage` or backend |

---

## 🔗 RESOURCES
- [Cypress Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Assertions Reference](https://docs.cypress.io/guides/references/assertions)
