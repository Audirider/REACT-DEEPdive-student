// Demo 03: Data Fetching with useEffect
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  // Empty array = run once

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Loading users...</h1>
        <p>⏳ Fetching from JSONPlaceholder API</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#e74c3c' }}>
        <h1>Error!</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🌐 Data Fetching Demo</h1>
      <p>Loaded {users.length} users from JSONPlaceholder API</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        {/* User List */}
        <div>
          <h2>Users</h2>
          {users.map(user => (
            <div key={user.id}
              onClick={() => setSelectedUser(user)}
              style={{
                padding: '12px', marginBottom: '8px', borderRadius: '6px', cursor: 'pointer',
                background: selectedUser?.id === user.id ? '#667eea' : '#f8f9fa',
                color: selectedUser?.id === user.id ? 'white' : '#333'
              }}>
              <strong>{user.name}</strong>
              <br />
              <small>{user.email}</small>
            </div>
          ))}
        </div>

        {/* User Detail */}
        <div>
          <h2>Details</h2>
          {selectedUser ? (
            <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h3>{selectedUser.name}</h3>
              <p>📧 {selectedUser.email}</p>
              <p>📞 {selectedUser.phone}</p>
              <p>🌐 {selectedUser.website}</p>
              <p>🏢 {selectedUser.company.name}</p>
              <p>📍 {selectedUser.address.city}</p>
            </div>
          ) : (
            <p style={{ color: '#999' }}>Click a user to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
