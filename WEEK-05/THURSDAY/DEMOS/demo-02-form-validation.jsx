// Demo 02: Form Validation
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!form.email.includes('@')) newErrors.email = 'Must be a valid email';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be 6+ characters';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setErrors({});
    }
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '10px', borderRadius: '4px', fontSize: '14px',
    border: errors[field] ? '2px solid #e74c3c' : '2px solid #ddd'
  });

  if (submitted) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h1>✅ Registration Complete!</h1>
        <p>Welcome, {form.name}!</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', password: '', confirmPassword: '' }); }}
          style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '450px', margin: '0 auto' }}>
      <h1>📝 Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {['name', 'email', 'password', 'confirmPassword'].map(field => (
          <div key={field} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              {field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              name={field}
              type={field.includes('password') || field.includes('Password') ? 'password' : field === 'email' ? 'email' : 'text'}
              value={form[field]}
              onChange={handleChange}
              style={inputStyle(field)}
            />
            {errors[field] && <p style={{ color: '#e74c3c', fontSize: '13px', margin: '4px 0 0' }}>{errors[field]}</p>}
          </div>
        ))}

        <button type="submit"
          style={{ width: '100%', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
