# Week 5 Tuesday — Student Lecture Notes
## State Management with useState

**Date:** Week 5, Tuesday  
**Topics:** State, useState Hook, Interactive Components

---

## 📝 WHAT IS STATE?

**State** = data that changes over time inside a component.

When state changes, React **automatically re-renders** the component to reflect the new data.

### Props vs State:
| Props | State |
|-------|-------|
| Passed from parent | Created inside component |
| Read-only | Can be updated |
| Parent controls | Component controls |

---

## 🔧 useState HOOK

### Syntax:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  //       ↑        ↑              ↑
  //    value    setter       initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### Key points:
- `count` is the current value
- `setCount` is the function to update it
- `useState(0)` sets the initial value to 0
- When `setCount` is called, the component re-renders

---

## ✅ STATE UPDATE PATTERNS

### Boolean toggle:
```jsx
const [isDark, setIsDark] = useState(false);
// Toggle: setIsDark(!isDark)
```

### String (text input):
```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

### Object (use spread!):
```jsx
const [form, setForm] = useState({ name: '', email: '' });
// Update one field:
setForm({ ...form, name: 'Alice' });
```

### Array — Add:
```jsx
setItems([...items, newItem]);
```

### Array — Remove:
```jsx
setItems(items.filter(item => item.id !== idToRemove));
```

### Array — Update one item:
```jsx
setItems(items.map(item => 
  item.id === targetId ? { ...item, done: !item.done } : item
));
```

---

## 🎯 LIFTING STATE UP

**When do we need this?** When two components need to share the same data but they are _______________.

**The fix:** Move the state UP to their _______________ (shared parent).

**The 3-step pattern:**
1. Move state to the _______________
2. Pass the data _____________ as props
3. Pass a _____________ function down so the child can request changes

```jsx
// App.js — owns the state
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
  ]);

  function handleToggle(id) {
    // Update the todo with matching id
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function handleDelete(id) {
    setTodos(todos.filter(t => t.id !== _______________));
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={_______________}
          onDelete={_______________}
        />
      ))}
    </ul>
  );
}

// TodoItem.js — displays one todo, reports up
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span onClick={() => _______________}>{todo.text}</span>
      <button onClick={() => _______________}>Delete</button>
    </li>
  );
}
```

> ❓ **Quick Check: Why `() => onDelete(todo.id)` instead of `onClick={onDelete}`?**  
> If you write `onClick={onDelete}`, React passes the browser's ___________________ object as the argument instead of `todo.id`!  
> In `App.jsx`, your delete function receives that event object instead of the ID, and ___________________ gets deleted!  
> **Rule:** Whenever you need to pass an argument into a callback prop, you must wrap it in an ___________________ function!

**Golden rule:**
> If two components need the same data, put it in their ________________________________.

---

## ⚠️ STATE RULES

1. **Never mutate directly:**
   ```jsx
   // ❌ WRONG
   count = count + 1;
   
   // ✅ CORRECT
   setCount(count + 1);
   ```

2. **Always create new objects/arrays** (immutability):
   ```jsx
   // ❌ WRONG
   state.name = 'Alice';
   
   // ✅ CORRECT
   setState({ ...state, name: 'Alice' });
   ```

3. **State updates are asynchronous** — the new value isn't available immediately after calling the setter.

4. **useState only at the top level** — not inside if statements or loops.

---

## 🔑 KEY TAKEAWAYS

| Concept | Example |
|---------|---------|
| Declare state | `const [x, setX] = useState(0)` |
| Update state | `setX(newValue)` |
| Toggle boolean | `setShow(!show)` |
| Add to array | `setArr([...arr, item])` |
| Remove from array | `setArr(arr.filter(...))` |
| Update in array | `setArr(arr.map(...))` |
| Update object | `setObj({...obj, key: val})` |
| Functions as Props | Pass `onX` down; parent defines `handleX` |
| Lifting State Up | Move shared state to the lowest common ancestor |

---

## 📚 RESOURCES
- [React: useState Reference](https://react.dev/reference/react/useState)
- [React: Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [React: Updating Objects in State](https://react.dev/learn/updating-objects-in-state)

---

**Next class:** Wednesday — useEffect & Component Lifecycle! ⚛️
