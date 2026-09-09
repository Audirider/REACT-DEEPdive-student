# Week 5 Wednesday — Student Lecture Notes
## useEffect & Component Lifecycle

**Date:** Week 5, Wednesday  
**Topics:** useEffect Hook, Side Effects, Cleanup, Data Fetching

---

## 📝 WHAT ARE SIDE EFFECTS?

Side effects = anything outside React's render cycle:
- 🌐 Fetching data from APIs
- ⏱️ Timers (setTimeout, setInterval)
- 📄 Updating the document title
- 💾 Reading/writing localStorage
- 🎧 Event listeners

---

## 🔧 useEffect HOOK

### Syntax:
```jsx
import React, { useState, useEffect } from 'react';

useEffect(() => {
  // Side effect code runs here
}, [dependencies]);
```

### Three Patterns:

**1. Run after EVERY render (no dependency array):**
```jsx
useEffect(() => {
  console.log('Runs after every render');
});
```

**2. Run ONCE on mount (empty array):**
```jsx
useEffect(() => {
  console.log('Runs once when component mounts');
}, []);
```

**3. Run when specific value changes:**
```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);  // Runs when count changes
```

---

## 🧹 CLEANUP FUNCTION — DEEP DIVE

**The rule:** If you SET IT UP in useEffect, you must _______________ it in the return.

**What happens without cleanup?**
- Timer without cleanup → _______________
- Event listener without cleanup → _______________
- Fetch without cleanup → _______________

---

### Pattern 1 — Timer Cleanup
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setTime(prev => prev + 1);
  }, 1000);

  return () => _______________(interval); // ← fill in the cleanup
}, []);
```

---

### Pattern 2 — Event Listener Cleanup
```jsx
useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  window._____________('resize', handleResize); // add listener

  return () => window._____________('resize', handleResize); // remove listener
}, []);
```

**Why this matters:** Without cleanup, every time the component re-mounts it adds _______________ listener. After 10 navigations, you have _______________ listeners all firing.

---

### Pattern 3 — AbortController (Cancel Fetch on Unmount)
```jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchData() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        { signal: controller.signal }  // link the abort signal
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      if (err.name === '_______________') return; // ignore cancelled
      setError(err.message);
    } finally {
      setLoading(false); // always runs!
    }
  }

  fetchData();

  return () => controller._______________(); // cancel in-flight request
}, []);
```

**Race condition problem this solves:**
> User clicks "Profile 1" → fetch starts → User clicks "Profile 2" → Profile 1 response arrives LATE and _______________ Profile 2's data.

With AbortController: when the component unmounts, the old fetch is _______________ before it can cause a problem.

---

### 📋 Cleanup Cheat Sheet

| Setup | Cleanup |
|-------|--------|
| `setInterval(fn, ms)` | `clearInterval(id)` |
| `setTimeout(fn, ms)` | `clearTimeout(id)` |
| `addEventListener(event, fn)` | `removeEventListener(event, fn)` |
| `new AbortController()` | `controller.abort()` |

### When does cleanup run?
| Scenario | Runs? |
|----------|-------|
| Component unmounts | ✅ Yes |
| Dependency changes (effect re-runs) | ✅ Yes, BEFORE re-run |
| Normal re-render (no dep change) | ❌ No |

---

**When to use cleanup:**
- Clear timers/intervals
- Remove event listeners
- Cancel API requests with AbortController
- Unsubscribe from services

---

## 🌐 DATA FETCHING PATTERN

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  // Empty array = fetch once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 🔑 KEY TAKEAWAYS

| Pattern | Dependency Array | When it Runs |
|---------|-----------------|--------------|
| Every render | (none) | After every render |
| Once on mount | `[]` | Only on first render |
| On change | `[val]` | When `val` changes |
| Cleanup | `return () => {}` | On unmount or before re-run |
| Timer cleanup | `return () => clearInterval(id)` | Prevents memory leak |
| Event listener cleanup | `return () => removeEventListener(...)` | Prevents listener stacking |
| Fetch cleanup | `return () => controller.abort()` | Prevents race conditions |

---

## 📚 RESOURCES
- [React: useEffect](https://react.dev/reference/react/useEffect)
- [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**Next class:** Thursday — Forms & Controlled Components! ⚛️
