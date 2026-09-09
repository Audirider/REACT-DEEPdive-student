# LAB 23: Custom Hooks Library & Component Refactor

**Week:** 6 — Wednesday  
**Points:** 12.5  
**Due:** Wednesday EOD  

---

## 🎯 OBJECTIVE

Build a reusable, standalone **Custom Hooks Toolkit** in a dedicated `src/hooks/` directory, and refactor your React components (including your Sprint 03 Task Manager) to eliminate duplicated stateful logic.

---

## 📋 REQUIREMENTS

### Part 1: Build Your Hooks Library (`src/hooks/`)

Create three custom hooks in separate files:

#### 1. `src/hooks/useToggle.js`
- Accepts an optional `initialValue` (default `false`).
- Returns a tuple: `[value, { toggle, setTrue, setFalse }]`.
- Does not expose raw `setValue` directly; encapsulates transitions cleanly.

#### 2. `src/hooks/useLocalStorage.js`
- Accepts `key` (string) and `initialValue` (any serializable data).
- Uses a **lazy state initializer function** inside `useState` so that `localStorage.getItem` is only called once on mount.
- Automatically writes back to `localStorage` via `useEffect` whenever `key` or `value` changes.
- Catches errors gracefully (e.g., if storage is blocked or full).
- Returns `[storedValue, setStoredValue]`.

#### 3. `src/hooks/useWindowSize.js`
- Listens to the `window` `resize` event.
- Accurately tracks `{ width, height }`.
- **Must clean up** the event listener on unmount using `window.removeEventListener`.
- Returns `{ width, height }`.

---

### Part 2: Component Refactor & Integration

Apply your custom hooks in your application:
- [ ] Refactor your modal, sidebar, or dropdowns to use `useToggle`.
- [ ] Refactor your task persistence or user theme preference to use `useLocalStorage`.
- [ ] Add a responsive banner or conditional layout element that changes based on `useWindowSize` (e.g., shows "Mobile Layout" when `width < 768`).
- [ ] Verify all original functionality still works after the refactoring.

---

## 💡 STARTER TEMPLATES

### `src/hooks/useToggle.js`
```javascript
import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}
```

### `src/hooks/useLocalStorage.js`
```javascript
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}
```

### `src/hooks/useWindowSize.js`
```javascript
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

---

## 🏆 BONUS CHALLENGE: `useDebounce` or `useFetch`

Pick one to add to your toolkit:

### Option A: `useDebounce(value, delay = 500)`
- Delays updating a value until user stops typing for `delay` milliseconds.
- Perfect for search input bars to avoid firing an API call on every keystroke.
- Requires `setTimeout` and `clearTimeout` cleanup inside `useEffect`.

### Option B: `useFetch(url)`
- Automatically fetches data from `url`.
- Returns `{ data, loading, error }`.
- Uses `AbortController` in the cleanup function so unmounting mid-request doesn't trigger warnings.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] `src/hooks/` directory created with `useToggle.js`, `useLocalStorage.js`, and `useWindowSize.js`
- [ ] Each hook begins with the `use` prefix and complies with the Rules of Hooks
- [ ] `useLocalStorage` persists data across browser reloads
- [ ] `useWindowSize` updates on window resize and properly removes its listener on unmount
- [ ] At least 2 existing components successfully refactored to consume these hooks
- [ ] Zero console errors or warnings

---

## 📤 SUBMISSION

```
LAB-23 Submission
Name: [Your Name]
GitHub: [Repository URL]
Custom Hooks Built: ✅ useToggle ✅ useLocalStorage ✅ useWindowSize
Refactored Components: [List components refactored]
Bonus Hook: ⬜ useDebounce / ⬜ useFetch / ⬜ Not attempted
```
