# 📝 DAY 1: Unit Testing with React Testing Library — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** Unit Testing, React Testing Library, Accessible Queries, Matchers

---

## 🎯 OBJECTIVES
- [ ] Understand the role of Unit Tests in professional software engineering
- [ ] Structure tests using `describe`, `test` (or `it`), and `expect`
- [ ] Mount components using `render()` and inspect virtual DOM via `screen.debug()`
- [ ] Master the official **Accessible Query Priority Ladder**
- [ ] Use Jest-DOM matchers to assert document presence, visibility, and disabled states
- [ ] Test component props and conditional rendering without testing implementation details

---

## 🧠 THE CORE PHILOSOPHY

Fill in the blanks:
> *"The more your tests resemble the way your software is _______________, the more _______________ they can give you."*  
> — Kent C. Dodds

In React Testing Library:
- We **DO NOT** test component _______________ (e.g. `state`, internal helper functions).
- We **DO** test what the user _______________ and interacts with on the screen.

---

## 🏗️ ANATOMY OF A TEST

```javascript
describe('Button Component', () => {
  test('renders button text correctly', () => {
    // 1. Arrange: Mount the component into the virtual DOM
    render(<Button>Save Changes</Button>);

    // 2. Act: Find the element on screen
    const btn = screen.getByRole('button', { name: /save changes/i });

    // 3. Assert: Check the expected outcome
    expect(btn).toBeInTheDocument();
  });
});
```

Fill in what each keyword does:
- `describe()`: __________________________________________________
- `test()`: __________________________________________________
- `expect()`: __________________________________________________

---

## 🪜 THE ACCESSIBLE QUERY PRIORITY LADDER

Rank these query methods from **1 (Highest/Best)** to **5 (Lowest/Last Resort)**:

| Rank (1–5) | Query Method | When to Use |
|------------|--------------|-------------|
| [ &nbsp;&nbsp; ] | `screen.getByTestId(...)` | Escape hatch when element has no text or ARIA role |
| [ &nbsp;&nbsp; ] | `screen.getByRole(...)` | Accessible elements (buttons, headings, links, inputs) |
| [ &nbsp;&nbsp; ] | `screen.getByText(...)` | Non-interactive text like paragraphs and spans |
| [ &nbsp;&nbsp; ] | `screen.getByLabelText(...)` | Form controls connected to a `<label>` |
| [ &nbsp;&nbsp; ] | `screen.getByPlaceholderText(...)` | Search inputs or fields without visible labels |

> ❓ **Why use `/submit/i` (regex) instead of `"Submit"` (exact string)?**  
> *Answer:* Case-insensitive regex makes tests resilient against minor CSS styling (like `text-transform: uppercase`) or copy capitalization changes.

---

## 📋 MATCHERS REFERENCE CHEAT SHEET

Fill in the missing matcher names:

```javascript
// Check if an element is in the document:
expect(element).____________________();

// Check if an element is disabled:
expect(element).____________________();

// Check if an element is clickable/active:
expect(element).____________________();

// Check if an element contains specific text:
expect(element).____________________('Hello World');

// Check if an element has a specific CSS class:
expect(element).____________________('btn-primary');
```

---

## 💻 CODE DRILLS

### Drill 1: Testing a Basic Button Render
```jsx
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders with primary label', () => {
    // Render the button:
    render(<Button>Sign Up</Button>);

    // Find the button by its accessible role and text:
    const button = screen.getByRole('_______________', { name: /_______________/i });

    // Assert it is in the document:
    expect(button).toBeInTheDocument();
  });
});
```

---

### Drill 2: Testing the `disabled` Prop
```jsx
test('button is disabled when disabled prop is true', () => {
  render(<Button disabled={true}>Submit</Button>);

  const button = screen.getByRole('button', { name: /submit/i });

  // Assert disabled:
  expect(button)._______________();
});
```

---

### Drill 3: The `getBy` vs `queryBy` Trap (Asserting Non-Existence)
Look at this code:
```jsx
function Banner({ isVisible, message }) {
  if (!isVisible) return null;
  return <div role="alert">{message}</div>;
}
```

If we want to test that the banner is **NOT** in the document when `isVisible={false}`:

```jsx
test('does not render banner when isVisible is false', () => {
  render(<Banner isVisible={false} message="Error" />);

  // ❌ WRONG: screen.getByRole('alert') throws an error and crashes the test!
  // ✔️ CORRECT: Use queryByRole:
  const alert = screen._______________('alert');
  expect(alert).not.toBeInTheDocument();
});
```

> 🚨 **GOLDEN RULE:**  
> Use `getBy*` when you expect the element **TO EXIST**.  
> Use `queryBy*` when you expect the element **NOT TO EXIST**.

---

## 📊 KEY TAKEAWAYS

| Concept | Purpose |
|---------|---------|
| **`render()`** | Renders React elements into jsdom for testing |
| **`screen`** | Provides global query utilities scoped to the current render |
| **`screen.debug()`** | Prints the formatted DOM tree to the terminal for debugging |
| **`getByRole`** | Best query practice: validates accessibility and UI presence simultaneously |
| **`queryBy*`** | Returns `null` instead of throwing; used exclusively to assert non-existence |

---

## 🔗 RESOURCES
- [Testing Library Queries Cheatsheet](https://testing-library.com/docs/queries/about)
- [Jest-DOM Custom Matchers](https://github.com/testing-library/jest-dom)
