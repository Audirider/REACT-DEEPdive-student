# LAB 28: Testing Forms & Async API Components

**Module:** 08 — Testing in React (Day 2)  
**Points:** 12.5  
**Due:** Day 2 EOD  

---

## 🎯 OBJECTIVE

Build a robust integration test suite verifying user interactions on a **Controlled Form** (`LoginForm`) using `@testing-library/user-event`, and test an **Asynchronous API Component** (`ProductFeed`) by mocking `global.fetch` to test loading, success, empty, and 500 error states.

---

## 📋 REQUIREMENTS

### Part 1: `src/components/LoginForm.test.jsx` (5 Tests)
Test the controlled form behavior:
- [ ] **Test 1: Initial Render**  
  Assert that the email input, password input, and "Sign In" button are all in the document using accessible queries (`getByLabelText` and `getByRole`).
- [ ] **Test 2: Typing Inputs**  
  Use `await user.type()` to type into both inputs. Assert that their values update (`expect(input).toHaveValue(...)`).
- [ ] **Test 3: Empty Validation**  
  Click "Sign In" with empty fields. Assert that "Email is required" and "Password is required" error messages appear. Assert that the `onSubmit` mock was **not** called (`expect(onSubmit).not.toHaveBeenCalled()`).
- [ ] **Test 4: Password Length Validation**  
  Type an email and a 3-character password. Submit the form. Assert that "Password must be at least 6 characters" error appears.
- [ ] **Test 5: Successful Submission**  
  Type valid email and password. Submit the form. Assert that `onSubmit` was called once with `{ email: '...', password: '...' }`, and that errors are cleared.

---

### Part 2: `src/components/ProductFeed.test.jsx` (5 Tests)
Test the asynchronous API communication and lifecycle:
- [ ] **Test 1: Loading State**  
  Assert that the "Loading products..." indicator is visible immediately upon component mount.
- [ ] **Test 2: Successful Data Render**  
  Mock `fetch` to return 2 products. Use `await screen.findByText(...)` to verify that product titles and prices appear on the screen.
- [ ] **Test 3: Loading Indicator Removal**  
  After data renders, assert that the loading indicator is **no longer in the document** using `queryByText()`.
- [ ] **Test 4: Empty Dataset**  
  Mock `fetch` to return an empty array `[]`. Assert that "No products found in inventory" is displayed.
- [ ] **Test 5: API Error Handling (500 Failure)**  
  Mock `fetch` to return a 500 failure (`{ ok: false, status: 500 }`). Assert that an error alert appears with text "Failed to load products. Please try again."

---

## 💡 STARTER CODE

### Component 1: `src/components/LoginForm.jsx`
```jsx
import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p role="alert" style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p role="alert" style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
}
```

### Component 2: `src/components/ProductFeed.jsx`
```jsx
import React, { useState, useEffect } from 'react';

export default function ProductFeed() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://api.example.com/products');
        if (!res.ok) throw new Error('Failed to load products. Please try again.');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <div role="alert" style={{ color: 'red' }}>{error}</div>;
  if (products.length === 0) return <p>No products found in inventory</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 💡 TEST SKELETON: `src/components/ProductFeed.test.jsx`

```jsx
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductFeed from './ProductFeed';

describe('ProductFeed Async Integration', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders products after successful fetch', async () => {
    const mockProducts = [
      { id: 1, title: 'Ergonomic Keyboard', price: 99.99 },
      { id: 2, title: 'Gaming Mouse', price: 49.99 }
    ];

    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockProducts
    });

    render(<ProductFeed />);

    // Check loading indicator appears synchronously:
    expect(screen.getByText(/loading products/i)).toBeInTheDocument();

    // Await arrival of async items:
    const item1 = await screen.findByText(/ergonomic keyboard/i);
    const item2 = await screen.findByText(/gaming mouse/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();

    // Verify loading spinner is gone:
    expect(screen.queryByText(/loading products/i)).not.toBeInTheDocument();
  });

  test('renders error alert on 500 failure', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({})
    });

    render(<ProductFeed />);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/failed to load products/i);
    expect(screen.queryByText(/loading products/i)).not.toBeInTheDocument();
  });
});
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] `LoginForm.test.jsx` passes all 5 tests using `userEvent.setup()` and `await user.*`
- [ ] `ProductFeed.test.jsx` passes all 5 tests with clean `beforeEach` and `afterEach` fetch mocking
- [ ] No `act(...)` console warnings during test execution
- [ ] `queryBy*` correctly used to verify loading disappearance
- [ ] `findBy*` correctly used to wait for async data resolution
- [ ] 100% passing test suite with zero flakiness

---

## 📤 SUBMISSION

```
LAB-28 Submission
Name: [Your Name]
GitHub: [Repository URL]
Tests Created: ✅ LoginForm.test.jsx (5 tests) ✅ ProductFeed.test.jsx (5 tests)
All 10 tests passing: ✅ Yes
Zero act() warnings: ✅ Yes
```
