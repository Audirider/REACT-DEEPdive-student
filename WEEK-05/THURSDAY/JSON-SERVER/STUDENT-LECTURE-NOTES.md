# 📝 WEEK 5 THURSDAY: JSON Server & Full CRUD — Student Lecture Notes

**Name:** ___________________________  
**Date:** ___________________________  
**Topic:** Mock Backend APIs with JSON Server & Full CRUD in React

---

## 🎯 OBJECTIVES
- [ ] Understand why frontend engineers use mock APIs
- [ ] Spin up `json-server` using a `db.json` file
- [ ] Map CRUD operations to HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`)
- [ ] Connect React forms and state to a REST API
- [ ] Handle asynchronous network states (loading, error, success)

---

## 🧠 THE CORE CONCEPT: WHY MOCK APIS?

When building React applications, you usually need a backend server to store data. But in the real world:
- The backend team might still be building the database.
- You want to test real network requests, HTTP status codes, and loading spinners.
- Local variables (`useState([...])`) reset every time you refresh the page.

**What is JSON Server?**  
JSON Server is a tool that gives you a full fake _______________ API with zero coding in less than 30 seconds. All your data is saved in a local file called _______________.

---

## ⚙️ SETUP QUICK START

### 1. Create your database file: `db.json`
In your project root directory, create `db.json`:
```json
{
  "products": [
    { "id": "1", "title": "Wireless Mouse", "price": 29.99, "inStock": true },
    { "id": "2", "title": "Mechanical Keyboard", "price": 89.99, "inStock": true }
  ]
}
```

### 2. Start the JSON Server
Run this in your terminal:
```bash
# Pin to @0.17.4 for reliable, class-wide behavior:
npx json-server@0.17.4 db.json --port 5000
```

> 🚨 **CRITICAL TERMINAL RULE:**  
> You need **TWO** terminal windows open at the same time:  
> - **Terminal 1:** Runs JSON Server (`localhost:5000`). Keep it open!  
> - **Terminal 2:** Runs React dev server (`localhost:5173` or `3000`).  
> If you close Terminal 1, your backend turns off and all `fetch()` requests will _______________!

> ❓ **Quick Check:** Why do we specify `--port 5000`?  
> *Answer:* Because React dev server uses port _______________ or _______________, and we want to prevent a port _______________.

---

## 📋 REST & CRUD CHEAT SHEET

Fill in the missing HTTP Methods and Actions:

| Action | HTTP Verb | Example URL | Request Body Needed? | Expected Status |
|--------|-----------|-------------|----------------------|-----------------|
| **Read all items** | `__________` | `http://localhost:5000/products` | No | `200 OK` |
| **Read one item** | `__________` | `http://localhost:5000/products/1` | No | `200 OK` |
| **Create new item** | `__________` | `http://localhost:5000/products` | Yes (`JSON.stringify`) | `201 Created` |
| **Update partial fields** | `__________` | `http://localhost:5000/products/1` | Yes (only modified keys) | `200 OK` |
| **Delete an item** | `__________` | `http://localhost:5000/products/1` | No | `200 OK` |

> 💡 **PUT vs. PATCH:**  
> - `PUT` replaces the _______________ resource.  
> - `PATCH` modifies only the _______________ fields.

---

## 💻 CODE DRILLS: FULL CRUD IN REACT

### 1. READ (GET) — Fetching data on mount
```jsx
const API_URL = 'http://localhost:5000/products';

useEffect(() => {
  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(_______________); // What URL?
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res._______________(); // Parse response
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(_______________); // Finish loading
    }
  }

  fetchProducts();
}, []); // Empty dependency array means: run _______________ on mount
```

---

### 2. CREATE (POST) — Adding a new record
```jsx
const handleAdd = async (newProductData) => {
  try {
    const res = await fetch(API_URL, {
      method: '_______________', // Which HTTP method?
      headers: {
        '_______________': 'application/json' // Crucial header!
      },
      body: JSON._______________(newProductData) // Convert JS object to JSON string
    });

    if (!res.ok) throw new Error('Failed to create');
    const createdItem = await res.json();

    // Update React state with the item returned by the server:
    setProducts(prev => [...prev, _______________]);
  } catch (err) {
    console.error(err);
  }
};
```

---

### 3. UPDATE (PATCH) — Modifying an existing item
```jsx
const handleToggleStock = async (id, currentStatus) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: '_______________', // Method for partial update
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inStock: _______________ }) // Invert boolean
    });

    const updatedItem = await res.json();

    // Update the item in state using .map():
    setProducts(prev =>
      prev.map(item => item.id === id ? _______________ : item)
    );
  } catch (err) {
    console.error(err);
  }
};
```

---

### 4. DELETE — Removing an item
```jsx
const handleDelete = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: '_______________' // Which HTTP method?
    });

    if (!res.ok) throw new Error('Failed to delete');

    // Remove the item from React state using .filter():
    setProducts(prev => prev.filter(item => item.id !== _______________));
  } catch (err) {
    console.error(err);
  }
};
```

---

## ⚠️ TOP 4 MISTAKES TO AVOID

1. **Forgetting `Content-Type: application/json`:**
   Without this header, `json-server` won't know you are sending JSON data, and your `POST`/`PATCH` body will be ignored.
2. **Sending a raw object instead of `JSON.stringify(data)`:**
   `fetch()` bodies must be a string, not a raw JS object.
3. **Running JSON Server on the same port as React:**
   Always add `--port 5000` to avoid conflicts.
4. **Expecting IDs to always be numbers:**
   `json-server` assigns string IDs like `"1"`, `"2"`. Always use `item.id === id` or compare as strings!

---

## 📊 KEY TAKEAWAYS

| Concept | What It Does | Why It Matters |
|---------|--------------|----------------|
| **`json-server`** | Turns `db.json` into a full REST API | Practice real frontend-backend communication locally |
| **`POST`** | Creates a new record | Generates a persistent ID automatically |
| **`PATCH`** | Updates selected fields | Cleanest way to toggle booleans or edit single properties |
| **`DELETE`** | Deletes a record by ID | Cleans up persistent data |
| **`res.json()`** | Parses response body stream | Needed after every successful JSON response |

---

## 🔗 RESOURCES
- [JSON Server GitHub](https://github.com/typicode/json-server)
- [MDN Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTTP Status Codes Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
