# LAB 25: Dynamic Design System & Theming with Styled-components

**Module:** 07 — Styling in React (Day 2)  
**Points:** 12.5  
**Due:** Day 2 EOD  

---

## 🎯 OBJECTIVE

Build a **Dynamic Component Design System** featuring a dark/light mode theme switcher using **styled-components** (or Emotion). You will practice prop-driven styles, transient props (`$prop`), style inheritance, and global theme distribution via `ThemeProvider`.

---

## 📋 REQUIREMENTS

### Part 1: Design Tokens & Theme Setup (`src/styles/themes.js`)
- [ ] Define two theme objects: `lightTheme` and `darkTheme` with matching keys:
  - `bg`: Main application background
  - `surface`: Card and component background
  - `textPrimary`: Main body text
  - `textSecondary`: Muted labels and subtitles
  - `border`: Border line colors
  - `primary`: Accent action color (e.g., `#3b82f6` in light, `#60a5fa` in dark)
  - `danger`: Red error/alert color
  - `shadow`: Box-shadow values suited for light vs dark mode
- [ ] Implement `GlobalStyle` using `createGlobalStyle` to reset margins, set body background/text, and add smooth transition easing.

---

### Part 2: The Core Component Suite

Build all components in a dedicated `src/components/` folder:

#### 1. `Button.jsx`
- [ ] Styled `<button>` supporting transient props:
  - `$variant`: `'primary' | 'secondary' | 'danger'`
  - `$size`: `'sm' | 'md' | 'lg'`
  - `$isFullWidth`: boolean
  - `$outline`: boolean
- [ ] Use hover filters and active scale transitions (`transform: scale(0.98)`).
- [ ] Demonstrate the polymorphic `as` prop by rendering one button as an external link `<a>`.

#### 2. `Input.jsx`
- [ ] Styled `<input>` element.
- [ ] Supports `$hasError` boolean: turns border red and adds a faint red focus ring.
- [ ] Dynamically reads `props.theme.border` and `props.theme.surface`.

#### 3. `Card.jsx`
- [ ] Styled `<div>` container with theme-driven surface background and border.
- [ ] Subtle hover lift animation (`transform: translateY(-4px)`).
- [ ] Supports an `$isFeatured` boolean prop that adds a glowing primary border.

---

### Part 3: Themed Showcase Application (`App.jsx`)

Assemble a showcase dashboard containing:
- [ ] A Header with Title and **Theme Toggle Button** (displays ☀️ Light or 🌙 Dark).
- [ ] Theme state managed via `useState` and passed to `<ThemeProvider>`.
- [ ] A sample Feedback / Contact card featuring the `Input` and `Button` components.
- [ ] Verification that switching themes alters colors seamlessly across every component without page reloads.

---

## 💡 STARTER SNIPPETS

### `src/styles/themes.js`
```javascript
export const lightTheme = {
  bg: '#f8fafc',
  surface: '#ffffff',
  textPrimary: '#0f172a',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  primary: '#2563eb',
  danger: '#ef4444',
  shadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
};

export const darkTheme = {
  bg: '#0f172a',
  surface: '#1e293b',
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  border: '#334155',
  primary: '#3b82f6',
  danger: '#f87171',
  shadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
};
```

### `src/components/Button.jsx`
```jsx
import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  /* Sizes */
  ${props => props.$size === 'sm' && css`
    padding: 6px 12px;
    font-size: 0.85rem;
  `}
  ${props => (!props.$size || props.$size === 'md') && css`
    padding: 10px 18px;
    font-size: 1rem;
  `}
  ${props => props.$size === 'lg' && css`
    padding: 14px 24px;
    font-size: 1.15rem;
  `}

  /* Variants */
  ${props => props.$variant === 'danger' ? css`
    background: ${props.theme.danger};
    color: #ffffff;
  ` : css`
    background: ${props.theme.primary};
    color: #ffffff;
  `}

  /* Full Width */
  ${props => props.$isFullWidth && css`
    width: 100%;
  `}

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] `styled-components` installed and configured correctly
- [ ] Theme tokens defined in separate `themes.js` file
- [ ] `<ThemeProvider>` wraps application root
- [ ] Button, Input, and Card use transient props (`$`) to avoid React DOM warnings
- [ ] Theme switch toggles smoothly without page refresh
- [ ] All styled components are declared **outside** render functions
- [ ] Zero console errors

---

## 📤 SUBMISSION

```
LAB-25 Submission
Name: [Your Name]
GitHub: [Repository URL]
Components: ✅ Button ($variant, $size) ✅ Input ($hasError) ✅ Card ($isFeatured)
Theming: ✅ Light/Dark ThemeProvider with smooth transitions
```
