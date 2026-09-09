# LAB 27: Unit Testing Core UI Components with RTL

**Module:** 08 — Testing in React (Day 1)  
**Points:** 12.5  
**Due:** Day 1 EOD  

---

## 🎯 OBJECTIVE

Build a unit test suite for three essential UI components: **`Button`**, **`Badge`**, and **`ModalAlert`**. You will practice mounting components with `render()`, querying elements using the **Accessible Query Priority Ladder** (`getByRole`), and writing assertions with `@testing-library/jest-dom` matchers.

---

## 📋 REQUIREMENTS

### Part 1: `Button.test.jsx`
Test the `Button` component:
- [ ] **Test 1:** Renders button text correctly using `getByRole('button', { name: /text/i })`.
- [ ] **Test 2:** Calls `onClick` handler when clicked by user (use `vi.fn()` or `jest.fn()`).
- [ ] **Test 3:** When `disabled={true}`, the button has the `disabled` attribute (`expect(btn).toBeDisabled()`).
- [ ] **Test 4:** Does not fire `onClick` handler when clicked while disabled.
- [ ] **Test 5:** Applies styling variant class names (`btn-primary` vs `btn-danger`).

---

### Part 2: `Badge.test.jsx`
Test the `Badge` component:
- [ ] **Test 1:** Renders children text into document using `getByText`.
- [ ] **Test 2:** Applies status variant class (e.g. `badge-success`, `badge-danger`).
- [ ] **Test 3:** Conditionally applies `badge-pill` class when `isPill={true}`.
- [ ] **Test 4:** Does NOT apply `badge-pill` class when `isPill={false}`.

---

### Part 3: `ModalAlert.test.jsx`
Test the conditional rendering and callback interactions of `ModalAlert`:
- [ ] **Test 1:** When `isOpen={true}`, the modal dialog is rendered (`getByRole('dialog')`).
- [ ] **Test 2:** When `isOpen={true}`, displays the provided `title` (as an accessible heading) and `message`.
- [ ] **Test 3:** When `isOpen={false}`, the modal dialog is NOT in the document (use `queryByRole('dialog')` + `.not.toBeInTheDocument()`).
- [ ] **Test 4:** Clicking the "Close" button inside the modal triggers the `onClose` callback function.

---

## 💡 STARTER CODE

### Component 1: `src/components/Button.jsx`
```jsx
import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### Component 2: `src/components/Badge.jsx`
```jsx
import React from 'react';

export default function Badge({ children, variant = 'info', isPill = false }) {
  return (
    <span className={`badge badge-${variant} ${isPill ? 'badge-pill' : ''}`.trim()}>
      {children}
    </span>
  );
}
```

### Component 3: `src/components/ModalAlert.jsx`
```jsx
import React from 'react';

export default function ModalAlert({ isOpen, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="modal-backdrop">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} aria-label="Close dialog">
          Close
        </button>
      </div>
    </div>
  );
}
```

---

## 💡 TEST SKELETON: `src/components/ModalAlert.test.jsx`

```jsx
import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ModalAlert from './ModalAlert';

describe('ModalAlert Component', () => {
  test('does not render dialog when isOpen is false', () => {
    render(
      <ModalAlert
        isOpen={false}
        title="Notice"
        message="System update"
        onClose={vi.fn()}
      />
    );

    // queryByRole returns null instead of throwing:
    const dialog = screen.queryByRole('dialog');
    expect(dialog).not.toBeInTheDocument();
  });

  test('renders dialog, heading, and message when isOpen is true', () => {
    render(
      <ModalAlert
        isOpen={true}
        title="Warning"
        message="Battery low"
        onClose={vi.fn()}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /warning/i })).toBeInTheDocument();
    expect(screen.getByText(/battery low/i)).toBeInTheDocument();
  });
});
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All 3 test files created: `Button.test.jsx`, `Badge.test.jsx`, `ModalAlert.test.jsx`
- [ ] At least 12 individual tests written across the 3 files
- [ ] All tests pass cleanly (`npm test` / `vitest run`) with 0 failures
- [ ] Accessible queries used (`getByRole`, `getByText`) with regex patterns
- [ ] `queryByRole` correctly utilized to assert modal non-existence when closed
- [ ] Zero usage of `getByTestId` (all elements queried accessibly)

---

## 📤 SUBMISSION

```
LAB-27 Submission
Name: [Your Name]
GitHub: [Repository URL]
Tests Created: ✅ Button.test.jsx (5 tests) ✅ Badge.test.jsx (4 tests) ✅ ModalAlert.test.jsx (4 tests)
Test Runner: [Vitest / Jest] — 13 passing tests
```
