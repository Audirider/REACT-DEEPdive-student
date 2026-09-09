// Demo 02: Optimization Patterns
import React, { useState, useMemo, useCallback, memo } from 'react';

// React.memo — only re-renders if props change
const ExpensiveItem = memo(function ExpensiveItem({ item, onToggle }) {
  console.log(`  Rendered: ${item.text}`);
  return (
    <div onClick={() => onToggle(item.id)}
      style={{ padding: '10px', margin: '5px 0', background: item.done ? '#e8f5e9' : '#fff',
        borderRadius: '6px', cursor: 'pointer', border: '1px solid #eee' }}>
      {item.done ? '✅' : '⬜'} {item.text}
    </div>
  );
});

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React.memo', done: false },
    { id: 2, text: 'Learn useMemo', done: false },
    { id: 3, text: 'Learn useCallback', done: true },
    { id: 4, text: 'Deploy to Netlify', done: false },
    { id: 5, text: 'Prepare presentation', done: false }
  ]);
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);

  // useCallback — same function reference between renders
  const handleToggle = useCallback((id) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  }, []);

  // useMemo — only recalculates when items or search change
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(i => i.text.toLowerCase().includes(search.toLowerCase()));
  }, [items, search]);

  // useMemo for stats
  const stats = useMemo(() => ({
    total: items.length,
    done: items.filter(i => i.done).length,
    active: items.filter(i => !i.done).length
  }), [items]);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>⚡ Optimization Demo</h1>
      <p>Open console to see render logs.</p>

      {/* This counter re-renders App but NOT the memo'd items */}
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '6px' }}>
        <p>Counter: {counter} (re-renders App but NOT list items)</p>
        <button onClick={() => setCounter(c => c + 1)}
          style={{ padding: '8px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Increment Counter
        </button>
      </div>

      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search items..."
        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '15px' }} />

      <p style={{ color: '#666' }}>
        {stats.done}/{stats.total} done · {stats.active} active · Showing {filteredItems.length}
      </p>

      {filteredItems.map(item => (
        <ExpensiveItem key={item.id} item={item} onToggle={handleToggle} />
      ))}

      <div style={{ marginTop: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '6px', fontSize: '13px' }}>
        <strong>Optimization patterns used:</strong>
        <ul>
          <li><code>React.memo()</code> — ExpensiveItem only re-renders if props change</li>
          <li><code>useCallback()</code> — handleToggle keeps same reference</li>
          <li><code>useMemo()</code> — filteredItems & stats only recalculate when needed</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
