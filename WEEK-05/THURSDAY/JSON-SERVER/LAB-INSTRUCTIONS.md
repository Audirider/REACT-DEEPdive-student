# LAB 20B: Mock REST API & Full CRUD with JSON Server

**Week:** 5 — Thursday (Applied Workshop & Lab)  
**Points:** 12.5  
**Due:** Friday EOD  

---

## 🎯 OBJECTIVE

Build an interactive **Product Inventory Dashboard** in React connected to a local mock backend powered by **JSON Server**. You will implement full persistent **CRUD** (Create, Read, Update, Delete) operations using real HTTP requests (`GET`, `POST`, `PATCH`, `DELETE`).

---

## 📋 REQUIREMENTS

### Part 1: Backend Setup (`db.json`)
- [ ] Create `db.json` in your project root with a `products` resource.
- [ ] Include at least 4 starting products with these fields:
  ```json
  {
    "products": [
      { "id": "1", "name": "Mechanical Keyboard", "category": "Accessories", "price": 79.99, "inStock": true },
      { "id": "2", "name": "Ergonomic Chair", "category": "Furniture", "price": 249.99, "inStock": false },
      { "id": "3", "name": "Ultra-wide Monitor", "category": "Monitors", "price": 399.00, "inStock": true },
      { "id": "4", "name": "Noise Cancelling Headphones", "category": "Audio", "price": 149.50, "inStock": true }
    ]
  }
  ```
- [ ] Run JSON Server on port `5000`: `npx json-server@0.17.4 db.json --port 5000` (in a separate terminal window — **leave this running!**)

---

### Part 2: Read (GET) — Fetching Data
- [ ] Fetch the list of products from `http://localhost:5000/products` when the component mounts.
- [ ] Display a **Loading...** indicator while the fetch is in progress.
- [ ] Display a user-friendly **Error message** if the server is down or unreachable.
- [ ] Render products in a clean, responsive card grid or table.
- [ ] Handle empty state: show "No products found" if the database has 0 items.

---

### Part 3: Create (POST) — Adding Products
- [ ] Build a controlled form with inputs for:
  - Product Name (`text`, required, min 2 characters)
  - Category (`select` dropdown: Accessories, Furniture, Monitors, Audio)
  - Price (`number`, required, > 0)
- [ ] On submit:
  - Prevent default form submission (`e.preventDefault()`).
  - Send a `POST` request to `http://localhost:5000/products` with `Content-Type: application/json`.
  - Append the newly created product (including the server-generated `id`) to your React state.
  - Reset the form inputs.

---

### Part 4: Update (PATCH) — Toggling Stock Status
- [ ] Add an action button next to each product: **"Toggle Stock"**.
- [ ] When clicked, send a `PATCH` request to `http://localhost:5000/products/:id` with `{ inStock: !currentInStock }`.
- [ ] Update that specific product in React state so the UI reflects the change immediately.

---

### Part 5: Delete (DELETE) — Removing Products
- [ ] Add a **"Delete"** button with a distinct red/danger style for each product.
- [ ] Prompt the user for confirmation (`window.confirm()` or custom modal).
- [ ] Send a `DELETE` request to `http://localhost:5000/products/:id`.
- [ ] Filter out the deleted product from React state so it vanishes from the UI without needing a page refresh.

---

## 💡 STARTER CODE SKELETON

```jsx
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/products';

export default function InventoryApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'Accessories',
    price: ''
  });

  // 1. Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Could not fetch data');
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    // TODO: Send POST request to API_URL
    // TODO: Append result to products state
    // TODO: Reset formData
  };

  const handleToggleStock = async (id, currentStock) => {
    // TODO: Send PATCH request to `${API_URL}/${id}`
    // TODO: Update state using products.map(...)
  };

  const handleDelete = async (id) => {
    // TODO: Confirm with user
    // TODO: Send DELETE request to `${API_URL}/${id}`
    // TODO: Filter from products state
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📦 Product Inventory Dashboard</h1>

      {/* Form Component */}
      <form onSubmit={handleCreate} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Add New Product</h3>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <select name="category" value={formData.category} onChange={handleInputChange}>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
          <option value="Monitors">Monitors</option>
          <option value="Audio">Audio</option>
        </select>
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Loading & Error States */}
      {loading && <p>⏳ Loading products from mock server...</p>}
      {error && <p style={{ color: 'red' }}>⚠️ Error: {error}</p>}

      {/* Product List */}
      {!loading && !error && (
        <div>
          {products.length === 0 ? (
            <p>No products in inventory yet.</p>
          ) : (
            products.map(p => (
              <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
                <div>
                  <strong>{p.name}</strong> ({p.category}) — ${Number(p.price).toFixed(2)}
                  <span style={{ marginLeft: '12px', color: p.inStock ? 'green' : '#999' }}>
                    {p.inStock ? '● In Stock' : '○ Out of Stock'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleToggleStock(p.id, p.inStock)}>Toggle Stock</button>
                  <button onClick={() => handleDelete(p.id)} style={{ color: 'red' }}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
```

---

## 🏆 BONUS CHALLENGES

> **Want to test your real-world frontend chops? Try these!**

1. **Live Search Filter:**  
   Add a search input that queries `http://localhost:5000/products?q={searchTerm}` and updates the list as you type (or with a debounce).
2. **Category Filter Dropdown:**  
   Filter items on the server by category using `http://localhost:5000/products?category={selectedCategory}`.
3. **Optimistic UI for Toggling Stock:**  
   Immediately flip the stock indicator in React state before the `fetch` finishes. If the request fails, revert it and notify the user.

---

## ✅ ACCEPTANCE CRITERIA

- [ ] `db.json` configured with starting dataset
- [ ] JSON Server running on port `5000`
- [ ] Data fetches automatically on page load
- [ ] Loading and Error indicators visible during async transitions
- [ ] New items persist to `db.json` upon creation
- [ ] Toggling stock updates `db.json` and updates UI
- [ ] Deleting an item removes it from `db.json` and from UI
- [ ] Refreshing the browser preserves all changes made during the session

---

## 📤 SUBMISSION

```
LAB-20B Submission
Name: [Your Name]
GitHub: [Repository URL]
Features: ✅ JSON Server ✅ GET on Mount ✅ POST Form ✅ PATCH Toggle ✅ DELETE
Bonus: ⬜ Search / ⬜ Category Filter / ⬜ Optimistic UI
```
