// Demo 02: Toggle & Controlled Inputs
import React, { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{
      padding: '40px', fontFamily: 'Arial',
      background: isDark ? '#1a1a2e' : '#ffffff',
      color: isDark ? '#eee' : '#333',
      minHeight: '100vh', transition: 'all 0.3s'
    }}>
      <h1>Toggle & Forms Demo</h1>

      {/* 1. Theme Toggle */}
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Theme Toggle (boolean state)</h2>
        <button onClick={() => setIsDark(!isDark)}
          style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <p>isDark = {isDark.toString()}</p>
      </section>

      {/* 2. Show/Hide Accordion */}
      <section style={{ marginBottom: '30px' }}>
        <h2>2. Show/Hide (conditional rendering)</h2>
        <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
          What is React? {isOpen ? '▲' : '▼'}
        </h3>
        {isOpen && (
          <p style={{ padding: '10px', background: isDark ? '#16213e' : '#f0f0f0', borderRadius: '6px' }}>
            React is a JavaScript library for building user interfaces. It uses a
            component-based architecture and a virtual DOM for efficient updates.
          </p>
        )}
      </section>

      {/* 3. Controlled Text Inputs */}
      <section style={{ marginBottom: '30px' }}>
        <h2>3. Controlled Inputs (string state)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginTop: '15px', padding: '15px', background: isDark ? '#16213e' : '#f0f0f0', borderRadius: '6px' }}>
          <p><strong>Live Preview:</strong></p>
          <p>Name: {name || '(empty)'}</p>
          <p>Email: {email || '(empty)'}</p>
          <p>Characters typed: {name.length + email.length}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
