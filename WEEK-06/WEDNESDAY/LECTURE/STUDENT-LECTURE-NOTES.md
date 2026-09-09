# 📝 Week 6 Wednesday — Student Lecture Notes
## Custom Hooks: Reusable Stateful Logic in React

**Name:** ___________________________  
**Date:** ___________________________  
**Topics:** Custom Hooks, Rules of Hooks, `useToggle`, `useLocalStorage`, `useWindowSize`, Refactoring

---

## 🎯 LEARNING OBJECTIVES
- [ ] Differentiate between reusing UI (Components) vs. reusing stateful logic (Custom Hooks)
- [ ] Understand why custom hooks share **logic**, not state instances
- [ ] Enforce the 2 official Rules of Hooks and the `use` naming prefix
- [ ] Build reusable custom hooks from scratch
- [ ] Refactor existing components to extract cluttered state logic

---

## 💡 THE BIG IDEA: COMPONENTS VS. CUSTOM HOOKS

- If you want to reuse **UI (HTML + CSS)**, you create a: _________________________
- If you want to reuse **stateful logic (`useState` + `useEffect`)**, you create a: _________________________

> 🚨 **Critical Question:**  
> If Component A and Component B both call `const [theme, setTheme] = useLocalStorage('theme', 'dark');`, do they share the exact same state variable in memory?  
> **Circle one:** [ YES / NO ]  
> **Why?** Because custom hooks share _________________________, NOT _________________________. Each component gets its own independent copy of state!

---

## 📜 THE RULES OF HOOKS

1. **Only call hooks at the _______________ level.**  
   ❌ Never call hooks inside `if` statements, loops (`for`, `while`), or nested functions.
2. **Only call hooks from _______________ functions.**  
   Call them only from React Function Components or other Custom Hooks.
3. **Custom hook names MUST start with the prefix: `__________`**  
   (Example: `useAuth`, `useLocalStorage`, `useFetch`). This allows ESLint to automatically catch bugs.

---

## 💻 CODE DRILLS: BUILD YOUR OWN HOOKS

### Drill 1: `useToggle` (Boolean State Management)
Fill in the blanks to build a reusable boolean toggler:

```jsx
import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // Define helpers:
  const toggle = () => setValue(prev => _______________);
  const setTrue = () => setValue(_______________);
  const setFalse = () => setValue(_______________);

  // Return value and an object of handlers:
  return [value, { toggle, setTrue, setFalse }];
}
```

**How to use it in a component:**
```jsx
function Modal() {
  const [isOpen, { toggle, setFalse: closeModal }] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Open Modal</button>
      {isOpen && <ModalBody onClose={closeModal} />}
    </div>
  );
}
```

---

### Drill 2: `useLocalStorage` (Persistent State)
Fill in the blanks:

```jsx
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // 1. Lazy state initialization (only reads from storage once on mount)
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON._______________(saved) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  // 2. Sync to localStorage whenever key or value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON._______________(value));
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }
  }, [key, value]); // Re-run effect when _______________ or _______________ changes

  return [value, setValue];
}
```

---

### Drill 3: `useWindowSize` (Window Event Listener + Cleanup)
Fill in the blanks:

```jsx
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Attach listener
    window.addEventListener('resize', handleResize);

    // Don't forget cleanup when component unmounts!
    return () => window._______________('resize', handleResize);
  }, []); // Run _______________ on mount

  return windowSize;
}
```

---

## ⚠️ COMMON MISTAKES WITH CUSTOM HOOKS

| Mistake | Why It Breaks | The Fix |
|---------|---------------|---------|
| Forgetting the `use` prefix (e.g. `checkAuth` instead of `useAuth`) | React ESLint linter won't recognize it as a hook and won't check hook rules | Always prefix with `use` |
| Calling a hook inside an `if (user) { ... }` block | Violates Rule 1: hooks must be called in identical order every render | Move the hook above the conditional |
| Assuming two components share state when using the same hook | Custom hooks share *logic*, not state values | If you need shared state, lift state up or use Context |
| Reading `localStorage` synchronously inside `useState(localStorage.getItem(k))` | Hits browser disk I/O on *every single render* | Use lazy state initialization: `useState(() => ...)` |

---

## 📊 KEY TAKEAWAYS

| Concept | Summary |
|---------|---------|
| **Custom Hook** | A JavaScript function starting with `use` that can call other React hooks |
| **Encapsulation** | Hides messy `useState` and `useEffect` logic inside a clean, reusable helper |
| **Independence** | Each component invoking a custom hook gets its own isolated state |
| **Return Flexibility** | Custom hooks can return arrays `[val, setVal]`, objects `{ data, loading }`, or single values |

---

## 🔗 RESOURCES
- [React: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React: Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [usehooks-ts — Collection of TypeScript React Hooks](https://usehooks-ts.com/)
