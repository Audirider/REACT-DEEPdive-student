// Demo 02: Custom Hook — useLocalStorage
import React, { useState, useEffect } from 'react';

// Custom Hook: persists state to localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  // Works just like useState, but survives page refresh!
  const [name, setName] = useLocalStorage('demo-name', '');
  const [todos, setTodos] = useLocalStorage('demo-todos', []);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const clearAll = () => { setTodos([]); setName(''); };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>💾 useLocalStorage Hook</h1>
      <p>Data persists across page refreshes! Try refreshing the page.</p>

      <div style={{ marginBottom: '20px' }}>
        <label><strong>Your name (persisted):</strong></label><br />
        <input value={name} onChange={e => setName(e.target.value)}
          placeholder="Type your name..."
          style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ddd', marginTop: '5px' }} />
        {name && <p>Hello, {name}! 👋</p>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && addTodo()}
            placeholder="Add a todo..."
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
          <button onClick={addTodo} style={{ padding: '10px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}
            style={{ padding: '10px', background: '#f8f9fa', margin: '5px 0', borderRadius: '4px', cursor: 'pointer',
              textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#999' : '#333' }}>
            {todo.done ? '✅' : '⬜'} {todo.text}
          </li>
        ))}
      </ul>

      {(todos.length > 0 || name) && (
        <button onClick={clearAll} style={{ marginTop: '10px', padding: '8px 16px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Clear All Data
        </button>
      )}

      <div style={{ marginTop: '20px', padding: '15px', background: '#e8f5e9', borderRadius: '6px' }}>
        <p><strong>Custom Hook Pattern:</strong></p>
        <code>const [val, setVal] = useLocalStorage('key', initial);</code>
        <p>Works exactly like useState — but data persists!</p>
      </div>
    </div>
  );
}

export default App;
