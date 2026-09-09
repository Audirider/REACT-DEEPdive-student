# Tuesday Demos - State Management with useState

**Session:** Virtual Class (Tuesday 2:00-5:00 PM)  
**Topic:** useState Hook, Interactive Components

---

## DEMO FILES

1. **demo-01-counter.jsx** — Basic counter with increment, decrement, reset
2. **demo-02-toggle-and-forms.jsx** — Boolean toggles and controlled text inputs
3. **demo-03-todo-list.jsx** — Complete todo with add, toggle, delete, filter

---

## KEY CONCEPTS

### useState Syntax
```jsx
const [value, setValue] = useState(initialValue);
```

### Update Patterns
- **Toggle:** `setValue(!value)`
- **Add to array:** `setArr([...arr, newItem])`
- **Remove:** `setArr(arr.filter(...))`
- **Update:** `setArr(arr.map(...))`
- **Object update:** `setObj({...obj, key: newVal})`

---

## RESOURCES
- [React: useState](https://react.dev/reference/react/useState)
- [React: Managing State](https://react.dev/learn/managing-state)
