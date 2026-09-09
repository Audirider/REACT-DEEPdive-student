// Demo 02: Dynamic Routes with useParams
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', bio: 'React enthusiast' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', bio: 'Node.js expert' },
  { id: 3, name: 'Charlie Brown', role: 'Full Stack', bio: 'Loves building things' }
];

function UserList() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>👥 Users</h1>
      {users.map(user => (
        <div key={user.id} style={{ padding: '15px', background: '#f8f9fa', margin: '10px 0', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong>{user.name}</strong> — {user.role}
          </div>
          <Link to={`/users/${user.id}`} style={{ color: '#667eea' }}>View Profile →</Link>
        </div>
      ))}
    </div>
  );
}

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <div style={{ padding: '40px' }}><h1>User not found</h1><button onClick={() => navigate('/users')}>Back</button></div>;

  return (
    <div style={{ padding: '40px' }}>
      <button onClick={() => navigate('/users')} style={{ background: 'none', border: 'none', color: '#667eea', cursor: 'pointer', fontSize: '16px' }}>
        ← Back to Users
      </button>
      <h1>{user.name}</h1>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><em>URL parameter id: {id}</em></p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '15px 40px', background: '#667eea', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div style={{ padding: '40px' }}><h1>Home</h1><Link to="/users">View Users →</Link></div>} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
