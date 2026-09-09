# LAB 20: Registration Form with Validation

**Week:** 5 — Thursday  
**Points:** 12.5  
**Due:** Thursday EOD

---

## 🎯 OBJECTIVE

Build a **Registration Form** with controlled components, real-time validation, and error messages — the React way.

---

## 📋 REQUIREMENTS

### Form Fields:
- [ ] Name (required, min 2 characters)
- [ ] Email (required, valid email format)
- [ ] Password (required, min 6 characters)
- [ ] Confirm Password (must match password)
- [ ] Role (select dropdown: Student, Developer, Designer)
- [ ] Terms checkbox (must be checked to submit)

### Validation:
- [ ] Validate on form submit
- [ ] Display field-level error messages (red text below input)
- [ ] Highlight invalid fields (red border)
- [ ] Clear errors when user starts typing in a field
- [ ] Disable submit button if terms not accepted

### Success State:
- [ ] Show success message after valid submission
- [ ] Display submitted data summary
- [ ] "Register Another" button to reset

### Technical:
- [ ] All inputs are controlled (value + onChange)
- [ ] Object state for form data
- [ ] Object state for error messages
- [ ] `e.preventDefault()` on submit
- [ ] No console errors

---

## 💡 STARTER CODE

```jsx
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    role: '', agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    // TODO: Update form state (handle checkbox vs text)
    // TODO: Clear error for this field
  };

  const validate = () => {
    // TODO: Return object with error messages
    // { name: 'Name is required', email: 'Invalid email', ... }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate, set errors or submit
  };

  return (
    <div>
      <h1>Registration Form</h1>
      {/* TODO: Build form with error display */}
    </div>
  );
}

export default App;
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All 6 fields present and controlled
- [ ] Validation runs on submit
- [ ] Error messages display below invalid fields
- [ ] Invalid field borders turn red
- [ ] Errors clear as user corrects them
- [ ] Success screen shows after valid submission
- [ ] Can reset and register again

---

## 📤 SUBMISSION

```
LAB-20 Submission
Name: [Your Name]
GitHub: [Repository URL]
Features: ✅ Controlled Inputs ✅ Validation ✅ Errors ✅ Success State
```
