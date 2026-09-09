# Thursday Demos - Forms & Controlled Components

**Session:** Physical Class (Thursday 2:00-5:00 PM)  
**Topic:** Forms, Controlled Inputs, Validation

---

## DEMO FILES

1. **demo-01-controlled-inputs.jsx** — Basic controlled form with live preview
2. **demo-02-form-validation.jsx** — Registration form with validation and error messages

---

## KEY CONCEPTS

### Controlled Input
```jsx
<input value={state} onChange={e => setState(e.target.value)} />
```

### Object State for Forms
```jsx
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
```

### Validation Pattern
- Validate on submit or blur
- Store errors in object state `{ fieldName: 'Error message' }`
- Display conditionally: `{errors.field && <p>{errors.field}</p>}`
