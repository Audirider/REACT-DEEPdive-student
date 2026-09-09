# TICKET-30: Component Unit Testing Suite

**Assigned:** Module 8 Day 1
**Due:** Module 8 Day 2, 9:00 AM
**Points:** 12.5
**Type:** Individual Task

---

## 🎯 OBJECTIVE

Build a **complete unit test suite** for a small React component library using **React Testing Library (RTL)** and **Vitest**. You will prove you can query the DOM the way a user sees it, write precise assertions, and test edge cases — all without touching implementation details like state variable names or internal methods.

---

## 📋 REQUIREMENTS

You will test **three components** with a combined minimum of **15 passing tests**.

---

### Component 1: `<Badge />` — Status Indicator

```jsx
// src/components/Badge.jsx
function Badge({ label, variant = "default" }) {
  const colors = {
    default: "badge--default",
    success: "badge--success",
    danger:  "badge--danger",
    warning: "badge--warning",
  };
  return (
    <span className={`badge ${colors[variant] ?? colors.default}`}>
      {label}
    </span>
  );
}
export default Badge;
```

**Required tests (minimum 5):**
- [ ] Renders the `label` text correctly.
- [ ] Applies the `badge--success` class when `variant="success"`.
- [ ] Applies the `badge--danger` class when `variant="danger"`.
- [ ] Falls back to `badge--default` when `variant` is an unknown string.
- [ ] Falls back to `badge--default` when no `variant` prop is supplied.

---

### Component 2: `<ToggleButton />` — On/Off Switch

```jsx
// src/components/ToggleButton.jsx
import { useState } from "react";
function ToggleButton({ label = "Toggle" }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn((prev) => !prev)}
      aria-pressed={on}
    >
      {on ? `${label}: ON` : `${label}: OFF`}
    </button>
  );
}
export default ToggleButton;
```

**Required tests (minimum 5):**
- [ ] Renders with initial text `"Toggle: OFF"`.
- [ ] `aria-pressed` is `"false"` on initial render.
- [ ] Clicking once changes text to `"Toggle: ON"`.
- [ ] `aria-pressed` becomes `"true"` after first click.
- [ ] Clicking twice returns text to `"Toggle: OFF"`.

---

### Component 3: `<AlertBanner />` — Dismissible Alert

```jsx
// src/components/AlertBanner.jsx
import { useState } from "react";
function AlertBanner({ message, type = "info" }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div role="alert" className={`alert alert--${type}`}>
      <p>{message}</p>
      <button onClick={() => setDismissed(true)} aria-label="Dismiss alert">
        ✕
      </button>
    </div>
  );
}
export default AlertBanner;
```

**Required tests (minimum 5):**
- [ ] Renders the `message` text inside the alert.
- [ ] The dismiss button is accessible with `aria-label="Dismiss alert"`.
- [ ] Clicking dismiss removes the alert from the DOM entirely.
- [ ] `queryByRole("alert")` returns `null` after dismissal (use `queryBy*` — NOT `getBy*`).
- [ ] Alert applies the correct class based on the `type` prop (e.g., `alert--warning`).

---

## ✅ ACCEPTANCE CRITERIA

- [ ] **Vitest + RTL configured** — `npm run test` runs all tests with no setup errors.
- [ ] **Minimum 15 tests** across the 3 components, all passing (green).
- [ ] **Zero implementation detail tests** — no assertions on `useState` values, internal variable names, or component method calls.
- [ ] **Query discipline enforced:**
  - `getByRole` / `getByText` used for elements that MUST be present.
  - `queryByRole` / `queryByText` used to assert element is NOT present.
- [ ] **Accessible queries first** — prefer `getByRole` with `{ name: /regex/ }` over `getByTestId`.
- [ ] Each component has its own `*.test.jsx` file (`Badge.test.jsx`, `ToggleButton.test.jsx`, `AlertBanner.test.jsx`).

---

## 🏆 BONUS (Up to +3 pts)

- [ ] Add a `<Tooltip />` component and write 3 tests for it (visible on hover, hidden by default, shows correct content).
- [ ] Use `screen.debug()` in a `// DEBUG` comment (then remove) — show you know how to inspect the DOM during TDD.
- [ ] Add a `describe()` block with a `beforeEach` that resets between tests.

---

## 📤 SUBMISSION

```
TICKET-30 Submission
Name: [Your Name]
GitHub: [Repository URL]
Test Results: [screenshot or paste of "X passed" Vitest output]
Components tested: Badge ✅  ToggleButton ✅  AlertBanner ✅
Total tests: [N] / 15 minimum
```
