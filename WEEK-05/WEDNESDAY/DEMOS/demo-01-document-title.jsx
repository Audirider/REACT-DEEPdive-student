// Demo 01: Document Title with useEffect
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React App');

  // Update document title when count changes
  useEffect(() => {
    document.title = `(${count}) ${name}`;
    console.log('Title updated! Count:', count);
  }, [count, name]);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>useEffect: Document Title</h1>
      <p>Look at the browser tab — it updates automatically!</p>

      <div style={{ marginBottom: '20px' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px', marginRight: '8px' }}>+</button>
        <button onClick={() => setCount(0)} style={{ padding: '8px 16px' }}>Reset</button>
      </div>

      <div>
        <h3>App Name:</h3>
        <input value={name} onChange={e => setName(e.target.value)}
          style={{ padding: '8px', width: '100%', fontSize: '16px' }} />
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '6px' }}>
        <p><strong>How it works:</strong></p>
        <code>useEffect(() =&gt; document.title = ..., [count, name])</code>
        <p>Runs whenever <code>count</code> or <code>name</code> changes.</p>
      </div>
    </div>
  );
}

export default App;
