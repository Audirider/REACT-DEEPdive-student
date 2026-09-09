# LAB 18: Interactive Todo App

**Week:** 5 — Tuesday  
**Points:** 12.5  
**Time:** 45 minutes (in class) + homework  
**Due:** Tuesday EOD

---

## 🎯 OBJECTIVE

Build a fully functional **Todo Application** using React state management (useState). Practice adding, toggling, deleting, and filtering items in state.

---

## 📋 REQUIREMENTS

### Core Features:
- [ ] Add new todos via text input + button
- [ ] Mark todos as complete (checkbox toggle)
- [ ] Delete individual todos
- [ ] Filter todos: All / Active / Completed
- [ ] Display count of remaining active todos
- [ ] Clear all completed todos button

### Technical Requirements:
- [ ] useState for todos array, input value, and filter
- [ ] Immutable state updates (spread, map, filter)
- [ ] Unique `key` prop on all list items (use Date.now() for IDs)
- [ ] Controlled input (value + onChange)
- [ ] Enter key support for adding todos
- [ ] No console errors

---

## 💡 STARTER CODE

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // TODO: addTodo function
  // TODO: toggleTodo function  
  // TODO: deleteTodo function
  // TODO: clearCompleted function
  // TODO: getFilteredTodos function

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="App">
      <h1>📝 React Todo List</h1>
      {/* TODO: Input section */}
      {/* TODO: Filter buttons */}
      {/* TODO: Todo list */}
      {/* TODO: Footer with count and clear button */}
    </div>
  );
}

export default App;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Can add todos (button click and Enter key)
- [ ] Can toggle todos complete/incomplete
- [ ] Can delete individual todos
- [ ] Filter buttons work (All, Active, Completed)
- [ ] Active count updates correctly
- [ ] Clear completed removes all done todos
- [ ] Empty state message when no todos
- [ ] Clean, well-organized code

---

## 🏆 BONUS CHALLENGE — Functions as Props + Lifting State Up

> **Connect today's lecture to the lab.** Do the core requirements first, then attempt this.

### Extract a `TodoItem` Component

Right now your todo rendering logic is probably directly inside `TodoList`. Let's refactor it properly:

1. Create a `TodoItem` component in its own file (or above `TodoList`)
2. `TodoItem` should accept these props:
   - `todo` (the todo object)
   - `onToggle` (function — called when the item is clicked)
   - `onDelete` (function — called when the delete button is clicked)
3. `TodoItem` should NOT hold any state itself — it is a **controlled presentation component**
4. All state remains in `TodoList` (or `App`) and operations are passed down as callbacks.

**Acceptance criteria for bonus:**
- [ ] `TodoItem.jsx` (or `.js`) exists as a separate component file
- [ ] `TodoItem` receives and uses `onToggle` and `onDelete` as props
- [ ] `App.jsx` defines `handleToggle` and `handleDelete` and passes them down
- [ ] All original features still work after the refactor
- [ ] No console errors

**Stuck? Ask yourself:**
- Who owns the `todos` array? (That's where the handlers live — in the parent!)
- What does `TodoItem` need to *know*? (Pass it as a prop: `todo={todo}`)
- What does `TodoItem` need to *report*? (That's a function prop: `onDelete`, `onToggle`)
- **Is Delete not working or receiving an event object?** Make sure you wrap the call in an arrow function so you pass the ID: `onClick={() => onDelete(todo.id)}`!

---

## 📤 SUBMISSION

```
LAB-18 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Show todos with different states]
Features: ✅ Add ✅ Toggle ✅ Delete ✅ Filter ✅ Count
```
