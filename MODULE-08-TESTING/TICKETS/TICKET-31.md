# TICKET-31: Async Form & API Integration Testing Suite

**Assigned:** Module 8 Day 2
**Due:** Module 8 Day 3, 9:00 AM
**Points:** 12.5
**Type:** Individual Task

---

## 🎯 OBJECTIVE

Build a **10-test integration suite** that validates a login form and an async data-fetching component. You will use `@testing-library/user-event` for realistic user interactions, mock `global.fetch` to control API responses, and use the correct query family (`findBy*`) to safely await async DOM updates — completely eliminating `act(...)` warnings.

---

## 📋 REQUIREMENTS

You will test **two components** with a combined minimum of **10 passing tests**.

---

### Component 1: `<LoginForm />` — Controlled Form

```jsx
// src/components/LoginForm.jsx
import { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    onLogin({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Login form">
      {error && <p role="alert">{error}</p>}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
export default LoginForm;
```

**Required tests (minimum 5):**
- [ ] Renders the `"Log In"` button accessible by role.
- [ ] Submitting with empty fields shows validation error `"All fields are required."`.
- [ ] Error is NOT visible on initial render (`queryByRole("alert")` returns null).
- [ ] Typing into email and password fields updates their values visibly.
- [ ] Submitting with valid values calls `onLogin` spy with `{ email, password }`.

> **Key constraints:**
> - Use `const user = userEvent.setup()` BEFORE `render()`.
> - All `user.type()` and `user.click()` calls must be `await`ed.
> - Use `vi.fn()` for the `onLogin` prop spy.

---

### Component 2: `<UserDirectory />` — Async API Fetch

```jsx
// src/components/UserDirectory.jsx
import { useState, useEffect } from "react";

function UserDirectory() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => { setUsers(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error)   return <p role="alert">Error: {error}</p>;

  return (
    <ul aria-label="User directory">
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
export default UserDirectory;
```

**Required tests (minimum 5):**
- [ ] Shows `"Loading users..."` immediately after mount.
- [ ] Renders user names in the list after the fetch resolves successfully.
- [ ] The list is accessible via `getByRole("list", { name: /user directory/i })`.
- [ ] Shows error message when `fetch` rejects / returns a non-ok response.
- [ ] Uses `findByText()` (not `getByText()`) to wait for async users — no `act(...)` warnings.

> **Key constraints:**
> - Mock `global.fetch` in `beforeEach` using `vi.fn()`.
> - Call `vi.restoreAllMocks()` in `afterEach` to prevent mock bleed.
> - Use `findBy*` queries for any assertion on elements that appear after an async operation.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] **Minimum 10 tests** across both components, all passing (green).
- [ ] **Zero `act(...)` warnings** in the terminal during test runs.
- [ ] **`userEvent.setup()` pattern** used correctly — called before `render()`.
- [ ] **`await`** applied to every `user.type()`, `user.click()`, and `user.clear()` call.
- [ ] **`findBy*`** used for all elements that appear after async state updates.
- [ ] **`queryByRole("alert")`** (not `getByRole`) used to assert the error is absent at start.
- [ ] **Mock isolation** — `vi.restoreAllMocks()` in `afterEach` for every fetch-mocking test.
- [ ] Test files: `LoginForm.test.jsx` and `UserDirectory.test.jsx`.

---

## 🏆 BONUS (Up to +3 pts)

- [ ] Add a loading spinner test: assert spinner is present, then gone after fetch resolves.
- [ ] Add a retry button to `UserDirectory` and write a test that clicks Retry, then resolves the second fetch successfully.
- [ ] Use `msw` (Mock Service Worker) instead of `vi.fn()` to intercept `fetch` at the network level.

---

## 📤 SUBMISSION

```
TICKET-31 Submission
Name: [Your Name]
GitHub: [Repository URL]
Test Results: [screenshot or paste of "X passed" Vitest output]
Components tested: LoginForm ✅  UserDirectory ✅
act() warnings: ZERO ✅
Total tests: [N] / 10 minimum
```
