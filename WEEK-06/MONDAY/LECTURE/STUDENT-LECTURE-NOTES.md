# Week 6 Monday — Student Lecture Notes
## API Integration & Async Operations

**Date:** Week 6, Monday  
**Topics:** Fetch API, async/await, Loading/Error States

---

## 🌐 WHAT IS AN API?

**API** = Application Programming Interface. A way for your app to talk to external servers and get data.

- **REST API:** Uses URLs (endpoints) to access data
- **JSON:** Data format APIs commonly return
- **HTTP Methods:** GET (read), POST (create), PUT (update), DELETE (remove)

---

## 🔧 FETCH IN REACT

### Pattern 1: .then() chain
```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);
```

### Pattern 2: async/await (preferred)
```jsx
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchUsers();
}, []);
```

---

## ⏳ THREE STATES

Always handle: **Loading → Success → Error**

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
return <div>{/* render data */}</div>;
```

---

## 🔑 KEY TAKEAWAYS

| Concept | Summary |
|---------|---------|
| `fetch(url)` | Makes HTTP request |
| `.json()` | Parses response body |
| `async/await` | Cleaner than .then() |
| `try/catch` | Error handling |
| Loading state | Show spinner while fetching |
| `useEffect([], [])` | Fetch on mount |

---

## 📚 RESOURCES
- [MDN: Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [PokeAPI](https://pokeapi.co/)

**Next class:** Tuesday — React Router! 🗺️
