# Week 5 Monday — Student Lecture Notes
## Introduction to React: Components, JSX & Props

**Date:** Week 5, Monday  
**Topics:** React Introduction, JSX Syntax, Components, Props

---

## 📝 WHAT IS REACT?

React is a **JavaScript library** for building user interfaces, created by Facebook in 2013.

**Key ideas:**
- **Component-based:** Break your UI into reusable pieces (like LEGO blocks)
- **Declarative:** You describe WHAT the UI should look like; React handles HOW to update it
- **Virtual DOM:** React keeps a lightweight copy of the DOM and only updates what changed

**Why learn React?**
- 40%+ of frontend jobs require React
- Used by Facebook, Netflix, Airbnb, Instagram, Uber
- Huge community, tons of libraries and tools
- React Native lets you build mobile apps too!

---

## 🚀 SETTING UP

```bash
# Option A: Modern Standard (Vite — Recommended)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

# Option B: Legacy (Create React App)
npx create-react-app my-app
cd my-app
npm start
```

**Project structure (Vite vs CRA):**
```
my-app/
├── src/
│   ├── App.jsx       ← Main component (in Vite, use .jsx!)
│   ├── App.css       ← Styling
│   ├── main.jsx      ← Entry point (or index.js in CRA)
│   └── index.css     ← Global styles
├── index.html        ← Single HTML page (at root in Vite, in public/ in CRA)
└── package.json      ← Project dependencies and scripts
```

> ⚠️ **IMPORTANT RULE:** In Vite, any file containing JSX **must** have the extension `__________` (not `.js`), otherwise Vite will show a compiler error!

---

## ✏️ JSX — HTML IN JAVASCRIPT

JSX looks like HTML but lives inside JavaScript files.

### JSX Rules:
1. **One parent element** — wrap everything in a `<div>` or `<>...</>`
2. **className** not class — `<div className="box">`
3. **htmlFor** not for — `<label htmlFor="name">`
4. **Self-closing tags** — `<img />`, `<input />`, `<br />`
5. **JavaScript in curly braces** — `<h1>{variable}</h1>`
6. **camelCase** — `onClick`, `onChange`, `backgroundColor`

### Example:
```jsx
function App() {
  const name = "Alice";
  const skills = ["React", "JavaScript", "CSS"];

  return (
    <div className="profile">
      <h1>Hello, {name}!</h1>
      <p>2 + 2 = {2 + 2}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🧩 COMPONENTS

A component is a **reusable piece of UI** — a JavaScript function that returns JSX.

### Creating a component:
```jsx
// Greeting.js
function Greeting() {
  return (
    <div>
      <h2>Hello from Greeting!</h2>
      <p>I'm a reusable component</p>
    </div>
  );
}

export default Greeting;
```

### Using a component:
```jsx
// App.js
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}
```

### Rules:
- Component names are **PascalCase** (`UserCard`, not `userCard`)
- One component per file (convention)
- Must `export default` and `import` to use

---

## 🔍 REACT DEVTOOLS — YOUR DEBUGGING SUPERPOWER

> **Install before class:** Chrome extension or Firefox add-on — link in Resources below

### What is it?
A browser extension that adds a **React tab** to your DevTools. It lets you see inside your React app — the component tree, props, state, and re-renders — in real time.

### Guided Exercise — do this on your own running app:

**Step 1:** Open DevTools (F12) and find the **Components** tab
- What tabs do you see? Write them: _______________

**Step 2:** Click the `Components` tab — you'll see your component tree
- What components appear in the tree? _______________
- Click on one component — does it highlight in the browser? _____ (yes/no)

**Step 3:** Add props to `Greeting` — `<Greeting name="Alice" />`
- Click `Greeting` in DevTools. What prop do you see in the panel? _______________
- Change the name to `"Bob"`. DevTools shows: _______________

**Step 4:** Create 3 `<Greeting>` with different names
- Click each one in DevTools. What changes? _______________
- What stays the same? _______________

**Step 5 (Optional):** Open DevTools Settings (⚙️) → Highlight updates
- Click something on the page. What flashes? _______________
- Why does React only re-render some components? _______________

### Key DevTools actions you'll use every day:
| Action | Why |
|--------|-----|
| Click component in tree | See its props and state |
| Search bar in Components | Find a component by name |
| Highlight updates | Debug unnecessary re-renders |
| Profiler tab | Measure performance (Week 6) |

---

## 📦 PROPS — PASSING DATA

Props (properties) let you pass data from a **parent** component to a **child** component.

### Passing props:
```jsx
// Parent
<Greeting name="Alice" age={25} />
<Greeting name="Bob" age={30} />
```

### Receiving props (with destructuring):
```jsx
// Child
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old</p>
    </div>
  );
}
```

### Props rules:
- Strings: `name="Alice"` (use quotes)
- Numbers/booleans/expressions: `age={25}` (use curly braces)
- Props are **read-only** — the child cannot change them!
- Any data type can be passed (strings, numbers, arrays, objects, functions)

---

## 🔀 CONDITIONAL RENDERING

Show different content based on conditions:

### Ternary operator:
```jsx
{inStock ? <button>Add to Cart</button> : <p>Out of Stock</p>}
```

### Short-circuit (&&):
```jsx
{showMessage && <p>This only shows if showMessage is true</p>}
```

---

## 🔁 FUNCTIONS AS PROPS — PASSING BEHAVIOR

**The idea:** Props aren't just for data. You can pass **functions** down so a child component can trigger something in its parent.

**Analogy:** The child is like a _______________. It doesn't own the decision — it just sends a signal ___________ to the parent.

**Naming convention:**
- Function props on the child: prefix `on___` (e.g., `onDelete`, `onClick`)
- The actual function in the parent: prefix `handle___` (e.g., `handleDelete`, `handleClick`)

```jsx
// Parent — owns state and logic
function App() {
  const [message, setMessage] = useState('Nothing yet');

  function handleButtonClick(text) {
    setMessage(`You clicked: ${text}`);
  }

  return (
    <div>
      <p>{message}</p>
      <FancyButton label="Say Hello" onClick={_______________} />
    </div>
  );
}

// Child — receives and CALLS the function
function FancyButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(_______________)}>
      {label}
    </button>
  );
}
```

### ⚠️ The #1 Trap:
```jsx
// ✅ Correct — pass the function (runs on click)
<button onClick={handleClick}>Go</button>

// ❌ Wrong — calls immediately on render!
<button onClick={_______________}>Go</button>
```

**Rule:** The __________ always owns state. The __________ only reports what happened.

---

## 📋 RENDERING LISTS

Use `.map()` to render arrays:
```jsx
const fruits = ['Apple', 'Banana', 'Cherry'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

⚠️ **Always add a `key` prop** to list items! Use unique IDs when available.

---

## 🔑 KEY TAKEAWAYS

| Concept | Summary |
|---------|---------|
| **React** | Library for building component-based UIs |
| **JSX** | HTML-like syntax in JavaScript |
| **Component** | Reusable function that returns JSX |
| **Props** | Data passed from parent to child (read-only) |
| **Destructuring** | `{ name, age }` instead of `props.name` |
| **Conditional** | Ternary `? :` or short-circuit `&&` |
| **Lists** | Use `.map()` with a `key` prop |
| **Functions as Props** | Pass callbacks down so children can report events up |
| **Naming** | Parent: `handleX`, Prop name: `onX` |
| **React DevTools** | Browser extension to inspect component tree, props & state |

---

## 📚 RESOURCES

- [React Official Docs](https://react.dev/learn)
- [React DevTools — Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) ⬅️ Install this!
- [React DevTools — Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/)
- [MDN: Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

**Next class:** Tuesday — useState & Lifting State Up! ⛛️
