# Week 6 Tuesday — Student Lecture Notes
## React Router & Navigation

**Date:** Week 6, Tuesday  
**Topics:** React Router, Routes, Links, URL Parameters

---

## 🗺️ REACT ROUTER

### Installation:
```bash
npm install react-router-dom
```

### Basic Setup:
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Key Components:
| Component | Purpose |
|-----------|---------|
| `<BrowserRouter>` | Wraps entire app, enables routing |
| `<Routes>` | Contains all route definitions |
| `<Route>` | Maps URL path → component |
| `<Link>` | Navigation without page reload |
| `<NavLink>` | Link with active styling |

---

## 🔗 DYNAMIC ROUTES

### URL Parameters:
```jsx
<Route path="/users/:id" element={<UserDetail />} />
```

### Reading Params:
```jsx
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  // Fetch user with this id
  return <h1>User #{id}</h1>;
}
```

### Programmatic Navigation:
```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // After login success:
    navigate('/dashboard');
  };
}
```

---

## 🔑 KEY TAKEAWAYS

| Concept | Syntax |
|---------|--------|
| Link | `<Link to="/path">Text</Link>` |
| Route | `<Route path="/path" element={<Comp />} />` |
| Params | `:id` in path, `useParams()` to read |
| Navigate | `useNavigate()` for code-based navigation |
| 404 | `<Route path="*" element={<NotFound />} />` |

---

**Next class:** Wednesday — Sprint 03 Work Session! 🏗️
