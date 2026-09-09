// Demo 01: Pre-Deployment Checklist Component
import React, { useState } from 'react';

function App() {
  const [checks, setChecks] = useState([
    { id: 1, text: 'npm run build succeeds without errors', done: false },
    { id: 2, text: 'All features work in production build', done: false },
    { id: 3, text: 'No console.log statements left in code', done: false },
    { id: 4, text: 'README.md has project description', done: false },
    { id: 5, text: 'README.md has screenshots', done: false },
    { id: 6, text: 'Code pushed to GitHub', done: false },
    { id: 7, text: 'Environment variables configured', done: false },
    { id: 8, text: 'No API keys exposed in client code', done: false },
    { id: 9, text: 'Responsive design works on mobile', done: false },
    { id: 10, text: 'Error handling for edge cases', done: false },
    { id: 11, text: 'Loading states for async operations', done: false },
    { id: 12, text: 'App deployed and live URL working', done: false }
  ]);

  const toggle = (id) => {
    setChecks(checks.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  const done = checks.filter(c => c.done).length;
  const total = checks.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🚀 Deploy Checklist</h1>

      <div style={{ background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ width: `${pct}%`, background: pct === 100 ? '#2ecc71' : '#667eea', padding: '8px 16px', color: 'white', transition: 'width 0.3s', minWidth: '60px' }}>
          {pct}%
        </div>
      </div>

      <p>{done} of {total} complete</p>

      {checks.map(check => (
        <label key={check.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px', background: check.done ? '#e8f5e9' : '#fff',
          margin: '5px 0', borderRadius: '6px', cursor: 'pointer',
          border: '1px solid #eee'
        }}>
          <input type="checkbox" checked={check.done} onChange={() => toggle(check.id)} />
          <span style={{ textDecoration: check.done ? 'line-through' : 'none', color: check.done ? '#999' : '#333' }}>
            {check.text}
          </span>
        </label>
      ))}

      {pct === 100 && (
        <div style={{ marginTop: '20px', padding: '20px', background: '#2ecc71', color: 'white', borderRadius: '8px', textAlign: 'center', fontSize: '20px' }}>
          ✅ Ready to deploy! Ship it! 🚢
        </div>
      )}
    </div>
  );
}

export default App;
