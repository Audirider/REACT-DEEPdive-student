# Week 5 Thursday — Student Lecture Notes
## Forms & Controlled Components

**Date:** Week 5, Thursday  
**Topics:** Controlled Components, Form Handling, Validation

---

## 📝 CONTROLLED COMPONENTS

In React, form inputs are **controlled** by state:

```jsx
const [name, setName] = useState('');

<input value={name} onChange={e => setName(e.target.value)} />
```

React state is the **single source of truth** for the input value.

---

## 🔧 FORM PATTERNS

### Single Input:
```jsx
const [email, setEmail] = useState('');
<input value={email} onChange={e => setEmail(e.target.value)} />
```

### Multiple Inputs (object state):
```jsx
const [form, setForm] = useState({ name: '', email: '', message: '' });

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
```

### Form Submit:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();  // Stop page reload!
  // Validate and process form data
  console.log('Submitted:', form);
};

<form onSubmit={handleSubmit}>
  ...
  <button type="submit">Submit</button>
</form>
```

### Select Dropdown:
```jsx
<select value={form.role} onChange={handleChange} name="role">
  <option value="">Select role</option>
  <option value="student">Student</option>
  <option value="developer">Developer</option>
</select>
```

### Checkbox:
```jsx
<input type="checkbox" checked={form.agree} 
  onChange={e => setForm({...form, agree: e.target.checked})} />
```

---

## ✅ FORM VALIDATION

### Error State Pattern:
```jsx
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!form.name) newErrors.name = 'Name is required';
  if (!form.email) newErrors.email = 'Email is required';
  if (!form.email.includes('@')) newErrors.email = 'Invalid email';
  if (form.password.length < 6) newErrors.password = 'Min 6 characters';
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    // Submit form!
    console.log('Valid form:', form);
  }
};
```

### Displaying Errors:
```jsx
<input name="email" value={form.email} onChange={handleChange} />
{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
```

---

## 🔑 KEY TAKEAWAYS

| Pattern | Summary |
|---------|---------|
| Controlled input | `value={state}` + `onChange` handler |
| Object state | `setForm({...form, [name]: value})` |
| Form submit | `onSubmit` + `e.preventDefault()` |
| Validation | Check state, set error messages |
| Error display | `{errors.field && <p>{errors.field}</p>}` |

---

## 📚 RESOURCES
- [React: Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [React: \<input\>](https://react.dev/reference/react-dom/components/input)

**Tomorrow:** Friday — Sprint 03 Planning! 🚀
