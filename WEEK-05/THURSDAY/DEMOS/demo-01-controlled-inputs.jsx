// Demo 01: Controlled Inputs
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', role: 'student', bio: '', agree: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form data:\n' + JSON.stringify(form, null, 2));
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Controlled Form Demo</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input name="name" value={form.name} onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Role:</label><br />
          <select name="role" value={form.role} onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Bio:</label><br />
          <textarea name="bio" value={form.bio} onChange={handleChange} rows="3"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} />
            {' '}I agree to terms
          </label>
        </div>

        <button type="submit" disabled={!form.agree}
          style={{ padding: '12px 24px', background: form.agree ? '#667eea' : '#ccc', color: 'white', border: 'none', borderRadius: '6px', cursor: form.agree ? 'pointer' : 'not-allowed' }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '6px' }}>
        <h3>Live State Preview:</h3>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
