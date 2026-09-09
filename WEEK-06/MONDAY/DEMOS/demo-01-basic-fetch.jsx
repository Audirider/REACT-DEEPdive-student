// Demo 01: Basic Fetch with Loading/Error
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}><h1>⏳ Loading users...</h1></div>;
  if (error) return <div style={{ padding: '40px', textAlign: 'center', color: '#e74c3c' }}><h1>Error: {error}</h1></div>;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🌐 User Directory (from API)</h1>
      <p>{users.length} users loaded from JSONPlaceholder</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          {users.map(user => (
            <div key={user.id} onClick={() => setSelected(user)}
              style={{
                padding: '12px', margin: '8px 0', borderRadius: '6px', cursor: 'pointer',
                background: selected?.id === user.id ? '#667eea' : '#f8f9fa',
                color: selected?.id === user.id ? '#fff' : '#333'
              }}>
              <strong>{user.name}</strong><br />
              <small>{user.email}</small>
            </div>
          ))}
        </div>
        <div>
          {selected ? (
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', position: 'sticky', top: '20px' }}>
              <h2>{selected.name}</h2>
              <p>📧 {selected.email}</p>
              <p>📞 {selected.phone}</p>
              <p>🌐 {selected.website}</p>
              <p>🏢 {selected.company.name}</p>
              <p>📍 {selected.address.city}, {selected.address.street}</p>
            </div>
          ) : <p style={{ color: '#999' }}>Select a user</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
