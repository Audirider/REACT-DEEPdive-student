# Monday Demos - Introduction to React

**Session:** Physical Class (Monday 2:00-5:00 PM)  
**Topic:** React Basics — JSX, Components, Props

---

## DEMO FILES

> **Note:** Since React requires a build environment (create-react-app), demo files are provided as standalone component files (.jsx) meant to be copied into a React project's `src/` folder. Run them with `npm start` in a create-react-app project.

1. **demo-01-jsx-basics/** - JSX syntax, expressions, rules
2. **demo-02-first-component/** - Creating and importing components
3. **demo-03-props/** - Passing and destructuring props
4. **demo-04-lists-conditionals/** - Rendering lists with map, conditional rendering

---

## HOW TO RUN DEMOS

```bash
# Create a fresh React app (one-time)
npx create-react-app week5-demos
cd week5-demos

# For each demo, replace src/App.js with the demo file content
# Then run:
npm start
```

---

## KEY CONCEPTS

### JSX
- HTML-like syntax in JavaScript
- `className` not `class`
- Self-closing tags required
- JavaScript expressions in `{curly braces}`

### Components
- Functions that return JSX
- PascalCase naming
- One per file (convention)
- Import/export to use

### Props
- Data from parent → child
- Destructure in function signature
- Read-only (cannot modify)
- Any data type

---

## RESOURCES

- [React Docs: Your First Component](https://react.dev/learn/your-first-component)
- [React Docs: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Docs: Passing Props](https://react.dev/learn/passing-props-to-a-component)
