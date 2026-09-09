# LAB 19: Timer & Data Fetcher

**Week:** 5 — Wednesday  
**Points:** 12.5  
**Due:** Wednesday EOD

---

## 🎯 OBJECTIVE

Build two mini-applications that demonstrate key useEffect patterns: a **Stopwatch/Timer** and a **Data Fetcher** component.

---

## 📋 REQUIREMENTS

### Part 1: Stopwatch Timer
- [ ] Start/pause/reset functionality
- [ ] Displays minutes and seconds (MM:SS format)
- [ ] Uses `useEffect` with `setInterval`
- [ ] Proper cleanup function (clears interval)
- [ ] Lap recording (bonus)

### Part 2: Data Fetcher
- [ ] Fetches data from `https://jsonplaceholder.typicode.com/posts`
- [ ] Shows loading state while fetching
- [ ] Shows error state if fetch fails
- [ ] Displays list of posts (title + body preview)
- [ ] Uses `useEffect` with empty dependency array `[]`
- [ ] Search/filter posts by title (uses state + filtered rendering)

### Technical Requirements:
- [ ] At least 2 `useEffect` calls (one for timer, one for fetch)
- [ ] Proper dependency arrays
- [ ] Cleanup function for timer
- [ ] Loading and error states for data fetching
- [ ] No console errors or warnings

---

## 💡 STARTER CODE

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <h1>useEffect Patterns</h1>
      <StopWatch />
      <hr />
      <PostList />
    </div>
  );
}

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // TODO: useEffect with setInterval
  // TODO: cleanup function

  return (
    <div>
      <h2>⏱️ Stopwatch</h2>
      {/* TODO: Display time, start/pause/reset buttons */}
    </div>
  );
}

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // TODO: useEffect to fetch posts

  return (
    <div>
      <h2>📄 Posts</h2>
      {/* TODO: Search input, loading state, error state, post list */}
    </div>
  );
}

export default App;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Stopwatch counts up correctly
- [ ] Start/pause/reset all work
- [ ] Timer cleans up on component changes
- [ ] Posts load from API successfully
- [ ] Loading spinner/message shown while fetching
- [ ] Error handled gracefully
- [ ] Search filters posts in real-time

---

## 🏆 BONUS CHALLENGE — AbortController Cleanup

> **Practice Pattern 3 from today's lecture.** Do the core requirements first.

### Part 3: Race Condition-Proof Fetcher

Your current `PostList` fetches on mount. But what if a user navigates away before the fetch completes?  
Without cleanup, the component tries to call `setPosts` on an **unmounted component** — a React warning and potential memory leak.

**Your task:**
1. Upgrade your `PostList` fetch to use `AbortController`
2. Pass `{ signal: controller.signal }` as the second argument to `fetch()`
3. In the cleanup function, call `controller.abort()`
4. In the catch block, check `if (err.name === 'AbortError') return;` to ignore cancelled requests
5. Wrap your fetch in a `try/catch/finally` — move `setLoading(false)` into `finally`

**How to test it works:**
- Open React DevTools → Components tab
- Find your `PostList` component
- Slow down the network in Chrome DevTools: **Network** tab → Throttle → Slow 3G
- Refresh and quickly hide/remove the `PostList` component before it loads
- Check the Console: you should see NO "Can't perform a React state update on an unmounted component" warning

**Acceptance criteria for bonus:**
- [ ] `AbortController` created inside `useEffect`
- [ ] `signal` passed to `fetch()`
- [ ] Cleanup function calls `controller.abort()`
- [ ] `AbortError` handled in catch (doesn't show as an error to user)
- [ ] `setLoading(false)` is in `finally` block
- [ ] No console warnings when component unmounts mid-fetch

---

## 📤 SUBMISSION

```
LAB-19 Submission
Name: [Your Name]
GitHub: [Repository URL]
Features: ✅ Timer ✅ Cleanup ✅ Fetch ✅ Loading ✅ Search
Bonus: ✅ AbortController / ⬜ Not attempted
```
