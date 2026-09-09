# TICKET-26: Production Custom Hooks Toolkit

**Assigned:** Week 6 Wednesday  
**Due:** Week 6 Friday, 5:00 PM  
**Points:** 12.5  
**Type:** Individual Task  

---

## 🎯 OBJECTIVE

Build and document a modular, reusable **React Custom Hooks Toolkit** along with an interactive **Interactive Playground Application** that demonstrates each hook's capabilities in real time.

---

## 📋 REQUIREMENTS

### 1. The Custom Hooks Library (`src/hooks/`)
Implement the following 4 custom hooks in separate files with JSDoc comments:

- [ ] **`useLocalStorage(key, initialValue)`**
  - Lazy initializer reads from storage only on mount.
  - Automatically serializes to JSON on state changes.
  - Returns `[storedValue, setValue]`.

- [ ] **`useDebounce(value, delay = 500)`**
  - Accepts a fast-changing value (e.g. search input text) and delay in ms.
  - Uses `useEffect` with `setTimeout` and `clearTimeout` cleanup.
  - Returns the debounced value only after the delay has passed without new keystrokes.

- [ ] **`useOnlineStatus()`**
  - Uses `navigator.onLine` to determine current connectivity.
  - Subscribes to `window` `online` and `offline` events with proper cleanup.
  - Returns boolean `isOnline`.

- [ ] **`useFetch(url)`**
  - Fetches JSON data from the given URL.
  - Manages `data`, `loading`, and `error` states.
  - Integrates `AbortController` in cleanup to cancel pending requests if `url` changes or component unmounts.
  - Returns `{ data, loading, error, refetch }`.

---

### 2. Interactive Playground Application (`App.jsx`)
Create a single-page playground with distinct cards/tabs demonstrating each hook live:
- [ ] **Debounce Demo:** A search input showing "Immediate Value" vs. "Debounced Value (fires 500ms later)" with a counter of simulated search queries.
- [ ] **Online Status Demo:** A live connection badge (🟢 Online / 🔴 Offline). Can be tested using DevTools Network throttling or toggling offline mode.
- [ ] **Persistent Counter / Notes Demo:** Demonstrates `useLocalStorage` preserving notes or counters across tab refreshes.
- [ ] **Fetch Demo:** A dropdown selecting different post/user IDs from `https://jsonplaceholder.typicode.com/users` showing live loading spinners and AbortController resilience when switching fast.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All 4 hooks start with the `use` prefix and follow the official Rules of Hooks
- [ ] Each hook has proper cleanup functions where necessary (event listeners, timers, abort signals)
- [ ] Playground app provides interactive, visual proof that each hook works
- [ ] Code is clean, modular, and has zero console errors or memory leak warnings
- [ ] Hooks can be copied into any new React project without modification

---

## 📤 SUBMISSION

```
TICKET-26 Submission
Name: [Your Name]
GitHub: [Repository URL]
Live Demo: [Vercel / Netlify / GitHub Pages URL]
Hooks Built: ✅ useLocalStorage ✅ useDebounce ✅ useOnlineStatus ✅ useFetch
Playground Features: ✅ Real-time Demos for all 4 hooks
```
