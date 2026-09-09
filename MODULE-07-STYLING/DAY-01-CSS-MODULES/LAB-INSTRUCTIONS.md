# LAB 24: Scoped Component Design with CSS Modules

**Module:** 07 — Styling in React (Day 1)  
**Points:** 12.5  
**Due:** Day 1 EOD  

---

## 🎯 OBJECTIVE

Build a reusable, collision-free **Design System Component Suite** (Button, Badge, and Product Card) using **CSS Modules**. You will prove that CSS Modules prevent class name collisions by reusing common class names (`.container`, `.title`, `.button`) across multiple components without side effects.

---

## 📋 REQUIREMENTS

### Part 1: Reusable `Button` Component
- [ ] Create `src/components/Button/Button.jsx` and `src/components/Button/Button.module.css`.
- [ ] Support variants via props: `variant="primary" | "secondary" | "danger" | "outline"`.
- [ ] Support sizes via props: `size="sm" | "md" | "lg"`.
- [ ] Include smooth `:hover`, `:active`, and `:focus-visible` states.
- [ ] Support a `disabled` prop with reduced opacity and `cursor: not-allowed`.

### Part 2: Reusable `Badge` Component
- [ ] Create `src/components/Badge/Badge.jsx` and `src/components/Badge/Badge.module.css`.
- [ ] Support status color variants: `success` (green), `warning` (amber), `info` (blue), `danger` (red).
- [ ] Support `pill` prop (boolean for fully rounded pill shape).

### Part 3: `ProductCard` Component
- [ ] Create `src/components/ProductCard/ProductCard.jsx` and `src/components/ProductCard/ProductCard.module.css`.
- [ ] Re-use the identical class name `.title` in `ProductCard.module.css` and `Header.module.css` to verify locally scoped compilation.
- [ ] Card features:
  - Product Image with smooth hover zoom effect (`transform: scale(1.03)`).
  - Status Badge (`New`, `Sale`, or `Sold Out`).
  - Product Title and Category.
  - Price display with strikethrough for discounted prices.
  - Embedded `Button` component for "Add to Cart".
- [ ] Dynamic styling: add an `isFeatured` prop that renders a distinct glowing border or "Staff Pick" ribbon.

### Part 4: The Collision Proof
- [ ] Create a showcase page (`App.jsx`) rendering:
  1. A `Header` with `.title { font-size: 32px; color: purple; }` (using `Header.module.css`)
  2. Three `ProductCard` components with `.title { font-size: 18px; color: #1e293b; }` (using `ProductCard.module.css`)
- [ ] Open Chrome DevTools and inspect both titles: confirm that the generated HTML has different hashed class names and neither overrides the other.

---

## 💡 STARTER SNIPPETS

### `Button.module.css`
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Sizes */
.sm { padding: 6px 12px; font-size: 0.85rem; }
.md { padding: 10px 18px; font-size: 1rem; }
.lg { padding: 14px 24px; font-size: 1.15rem; }

/* Variants */
.primary { background: #2563eb; color: #ffffff; }
.primary:hover { background: #1d4ed8; }

.secondary { background: #f1f5f9; color: #334155; }
.secondary:hover { background: #e2e8f0; }

.danger { background: #ef4444; color: #ffffff; }
.danger:hover { background: #dc2626; }

.disabled { opacity: 0.6; cursor: not-allowed; }
```

### `Button.jsx`
```jsx
import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  ...props
}) {
  const classNames = [
    styles.btn,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All components created with corresponding `[Name].module.css` files
- [ ] Button supports all 4 variants and 3 sizes
- [ ] ProductCard embeds Button and Badge seamlessly
- [ ] Inspection in DevTools confirms class names are compiled with unique hashes
- [ ] No global CSS leaks anywhere in the application
- [ ] Zero console errors or layout breaks

---

## 📤 SUBMISSION

```
LAB-24 Submission
Name: [Your Name]
GitHub: [Repository URL]
Components Built: ✅ Button ✅ Badge ✅ ProductCard
DevTools Hashing Verified: ✅ Yes
```
