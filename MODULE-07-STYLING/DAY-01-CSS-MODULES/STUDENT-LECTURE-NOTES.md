# 📝 DAY 1: CSS Modules — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** Global Styles, Class Name Collisions, and CSS Modules

---

## 🎯 OBJECTIVES
- [ ] Understand why global CSS creates naming collisions in React
- [ ] Explain how CSS Modules hash class names at build time
- [ ] Correctly name, import, and apply CSS module styles
- [ ] Combine multiple and conditional class names using template literals
- [ ] Master camelCase naming for frictionless JavaScript property access

---

## 💥 THE PROBLEM WITH GLOBAL CSS

In React, when you write:
```jsx
import './Header.css';
```
Does that CSS only apply to `Header.jsx`?  
**Circle one:** [ YES / NO ]  
**Why?** In React/Vite/Webpack, all imported CSS files are combined into one single _______________ stylesheet in the document head.

**The Naming Collision Scenario:**
If both `Header.jsx` and `Footer.jsx` have a class called `.title`, which styles win?  
*Answer:* Whichever stylesheet was imported _______________ in the code.

---

## 🛡️ THE SOLUTION: CSS MODULES

### What is a CSS Module?
A CSS file where all class names and animation names are scoped **locally** by default.

1. **File naming convention:**
   The file MUST be named: `[ComponentName]._______________.css`  
   (Example: `Button.module.css` or `Navbar.module.css`)

2. **How hashing works:**
   When you write `.btn { color: blue; }` in `Button.module.css`, the build tool compiles it to something unique like:  
   `._btn_1s8x4_5`

3. **Import syntax:**
   ```jsx
   import styles from './Button.module.css';
   ```
   Here, `styles` is a JavaScript _______________ containing key-value pairs of original class names to hashed class names!

---

## 💻 CODE DRILLS: CSS MODULES IN ACTION

### Drill 1: Applying a Single Class
In `Button.module.css`:
```css
.primaryBtn {
  background-color: #2563eb;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
}
```

In `Button.jsx`:
```jsx
import React from 'react';
import styles from './Button.module.css';

export default function Button({ children }) {
  // Fill in the className prop using the styles object:
  return (
    <button className={styles._______________}>
      {children}
    </button>
  );
}
```

---

### Drill 2: Combining Multiple Classes & Conditionals
How do you apply a base class AND an active/disabled class?

```jsx
export default function Tab({ label, isActive }) {
  // Use template literals to combine classes:
  const tabClassName = `${styles.tab} ${isActive ? styles._______________ : ''}`;

  return (
    <button className={tabClassName}>
      {label}
    </button>
  );
}
```

---

### Drill 3: CamelCase vs Kebab-Case
Look at these two class names:
- Option A: `.card-header { ... }`
- Option B: `.cardHeader { ... }`

Why is Option B strongly recommended for CSS Modules?  
*Answer:* Option B allows you to access it with clean dot notation: `styles.cardHeader`.  
Option A forces you to use bracket notation: `styles['card-header']`.

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Writing `className="card"` instead of `className={styles.card}`**  
   If you pass a string `"card"`, it will look for a global class named `card`, NOT the hashed module class!
2. **Forgetting `.module` in the filename**  
   If you name the file `Card.css`, `import styles from './Card.css'` will simply be `undefined` or empty!
3. **Overusing `:global()`**  
   Use `:global()` only when styling external elements (like third-party widgets).

---

## 📊 KEY TAKEAWAYS

| Concept | Explanation |
|---------|-------------|
| **CSS Module** | A CSS file with local class name scoping via automatic hashing |
| **`styles` object** | Maps your source class name to the compiled hashed name |
| **Encapsulation** | You can reuse common class names like `.container` or `.title` without fear of collisions |
| **Zero Runtime** | CSS Modules are processed at build time; no JavaScript runtime performance penalty |

---

## 🔗 RESOURCES
- [Vite CSS Modules Guide](https://vitejs.dev/guide/features.html#css-modules)
- [React Documentation on Styling](https://react.dev/learn)
