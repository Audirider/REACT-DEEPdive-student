// Demo 03: Complete Todo List with State
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };

  const filtered = filter === 'active' ? todos.filter(t => !t.completed)
    : filter === 'completed' ? todos.filter(t => t.completed) : todos;

  const active = todos.filter(t => !t.completed).length;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>📝 React Todo</h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
          style={{ flex: 1, padding: '10px', fontSize: '16px', borderRadius: '6px', border: '2px solid #ddd' }}
        />
        <button onClick={addTodo}
          style={{ padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Add
        </button>
      </div>

      {todos.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            {['all', 'active', 'completed'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{
                  padding: '6px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer',
                  background: filter === f ? '#667eea' : '#eee', color: filter === f ? 'white' : '#333'
                }}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filtered.map(todo => (
              <li key={todo.id} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px', background: '#f8f9fa', marginBottom: '8px', borderRadius: '6px'
              }}>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#999' : '#333' }}>
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}
                  style={{ background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer' }}>
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#666', fontSize: '14px' }}>
            <span>{active} item{active !== 1 ? 's' : ''} left</span>
            {todos.some(t => t.completed) && (
              <button onClick={clearCompleted}
                style={{ background: 'none', border: 'none', color: '#667eea', cursor: 'pointer' }}>
                Clear completed
              </button>
            )}
          </div>
        </>
      )}

      {todos.length === 0 && <p style={{ color: '#999', textAlign: 'center' }}>No todos yet!</p>}
    </div>
  );
}

export default App;
