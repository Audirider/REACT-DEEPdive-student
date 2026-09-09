# Wednesday Demos - useEffect & Component Lifecycle

**Session:** Physical Class (Wednesday 2:00-5:00 PM)  
**Topic:** useEffect Hook, Side Effects, Data Fetching

---

## DEMO FILES

1. **demo-01-document-title.jsx** — useEffect to update document title on state change
2. **demo-02-timer.jsx** — setInterval with cleanup on unmount
3. **demo-03-data-fetching.jsx** — Fetch API data with loading and error states

---

## KEY CONCEPTS

### Dependency Array
- No array: runs every render
- Empty `[]`: runs once on mount
- `[value]`: runs when value changes

### Cleanup
```jsx
useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, []);
```

### Fetch Pattern
```jsx
useEffect(() => {
  fetch(url).then(r => r.json()).then(setData);
}, []);
```
