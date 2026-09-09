# LAB 21: API Data Explorer

**Week:** 6 — Monday  
**Points:** 12.5  
**Due:** Monday EOD

---

## 🎯 OBJECTIVE

Build a **Data Explorer** application that fetches data from a public API and displays it with search, filtering, and detail views.

---

## 📋 REQUIREMENTS

- [ ] Fetch data from JSONPlaceholder (`/posts`, `/users`, or `/todos`)
- [ ] Loading state with spinner or message
- [ ] Error handling with user-friendly message
- [ ] Search/filter the fetched data
- [ ] Display list of items (cards or list format)
- [ ] Click to view item details
- [ ] Responsive layout

### Technical:
- [ ] useEffect with empty dependency array
- [ ] async/await for fetch calls
- [ ] useState for data, loading, error, search, selected
- [ ] Conditional rendering for all three states

---

## 💡 STARTER CODE

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // TODO: Fetch data with async/await
  }, []);

  // TODO: Filter data based on search
  // TODO: Render loading, error, or data

  return (
    <div>
      <h1>API Data Explorer</h1>
      {/* TODO: Search input, data list, detail view */}
    </div>
  );
}

export default App;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Data loads from API on mount
- [ ] Loading indicator shows while fetching
- [ ] Error handled gracefully
- [ ] Search filters results in real-time
- [ ] Can view item details
- [ ] Clean, professional UI

## 📤 SUBMISSION

```
LAB-21 Submission
Name: [Your Name]
GitHub: [Repository URL]
API Used: [Which endpoint]
Features: ✅ Fetch ✅ Loading ✅ Error ✅ Search ✅ Detail View
```
