# 📝 DAY 2: CSS-in-JS (Styled-components & Emotion) — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** Styled-components, Dynamic Props, Transient Props, and Theming

---

## 🎯 OBJECTIVES
- [ ] Understand why CSS-in-JS colocates styling with React components
- [ ] Create styled components using tagged template literals (`styled.tag\`...\``)
- [ ] Read React props inside CSS blocks to trigger dynamic styling
- [ ] Use transient props (`$prop`) to avoid HTML DOM attribute warnings
- [ ] Implement global dark/light theming using `ThemeProvider`
- [ ] Avoid the fatal mistake of declaring styled components inside render functions

---

## 🧠 THE CORE CONCEPT: CSS-IN-JS

In traditional CSS or CSS Modules:
- Markup lives in `.jsx`
- Styles live in `.css` or `.module.css`

In **CSS-in-JS (styled-components)**:
- Styles are defined directly as **React Components**.
- You write real CSS inside JavaScript using ES6 **tagged template literals**.

```jsx
import styled from 'styled-components';

// This is both a React component AND a styled element!
const Title = styled.h1`
  font-size: 2rem;
  color: #1e293b;
`;
```

---

## 💻 CODE DRILLS: PROPS & DYNAMIC STYLES

### Drill 1: Dynamic Background from Props
Fill in the function interpolation to change background based on `$variant`:

```jsx
const Alert = styled.div`
  padding: 1rem;
  border-radius: 8px;
  color: white;

  /* If $variant is 'danger', make red (#ef4444); otherwise make blue (#3b82f6) */
  background-color: ${props => props.$variant === 'danger' ? '_______________' : '_______________'};
`;
```

---

### Drill 2: Transient Props (`$`)
Look at this code:
```jsx
// Option A:
<Button variant="primary">Click Me</Button>

// Option B:
<Button $variant="primary">Click Me</Button>
```

Why is Option B with the `$` prefix preferred in styled-components?  
*Answer:* The `$` marks it as a _______________ prop. Styled-components uses it to compute CSS, but prevents it from being passed to the native HTML `<button>` element, avoiding React DOM _______________ warnings.

---

### Drill 3: Extending Existing Styles
How do you create a `DangerButton` that has all the styles of `Button` plus a red border?

```jsx
const DangerButton = styled(_______________)`
  border: 2px solid red;
`;
```

---

### Drill 4: The Polymorphic `as` Prop
If you have a styled `<Button>`, how do you render it as an `<a>` tag so it acts as an anchor link?

```jsx
<Button as="__________" href="https://example.com">
  Visit Link
</Button>
```

---

## 🎨 THEMING WITH THEMEPROVIDER

Fill in the blanks for the theming workflow:

1. Create theme token objects:
   ```javascript
   const lightTheme = { bg: '#ffffff', text: '#000000' };
   const darkTheme  = { bg: '#121212', text: '#ffffff' };
   ```

2. Wrap your application with `ThemeProvider`:
   ```jsx
   <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
     <App />
   </ThemeProvider>
   ```

3. Read theme tokens inside ANY styled component via props:
   ```jsx
   const Card = styled.div`
     background-color: ${props => props.theme._______________};
     color: ${props => props.theme._______________};
   `;
   ```

---

## 🚨 THE #1 DEADLY MISTAKE TO AVOID

```jsx
// ❌ WRONG! NEVER DO THIS:
function MyComponent() {
  // DECLARING STYLED COMPONENT INSIDE RENDER:
  const Box = styled.div`
    padding: 10px;
  `;

  return <Box>Hello</Box>;
}
```

**Why does this break your app?**  
Every time `MyComponent` re-renders, a completely new `Box` component is created in memory. React unmounts and remounts the entire DOM node, causing:
- Form inputs to lose focus on every keystroke
- Animations to restart constantly
- Massive performance lag and memory leaks

**The Fix:** Always declare styled components **outside** your component function!

---

## 📊 KEY TAKEAWAYS

| Concept | What It Does |
|---------|--------------|
| **`styled.tag\`...\``** | Creates a styled React component |
| **`styled(Comp)\`...\``** | Inherits and extends existing component styles |
| **`${props => ...}`** | JavaScript interpolation to adapt styles based on React state |
| **`$transientProp`** | Prevents styling props from leaking into HTML attributes |
| **`ThemeProvider`** | Injects theme tokens down the component tree via React Context |

---

## 🔗 RESOURCES
- [Styled-components Cheatsheet](https://styled-components.com/docs/basics)
- [Polymorphic `as` Prop Guide](https://styled-components.com/docs/api#as-polymorphic-prop)
