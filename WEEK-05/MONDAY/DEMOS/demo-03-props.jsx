// Demo 03: Props — Passing Data to Components
// Copy into src/App.js of a create-react-app project

import React from 'react';

// Component with props (destructured)
function UserCard({ name, role, avatar, skills }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      margin: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }}>
      <img 
        src={avatar} 
        alt={name}
        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
      />
      <div>
        <h3 style={{ margin: '0 0 5px' }}>{name}</h3>
        <p style={{ margin: '0 0 10px', color: '#666' }}>{role}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {skills.map((skill, index) => (
            <span key={index} style={{
              background: '#667eea',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component with conditional rendering via props
function ProductCard({ title, price, inStock }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      margin: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      border: inStock ? '2px solid #2ecc71' : '2px solid #e74c3c'
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>
        ${price}
      </p>
      {inStock ? (
        <button style={{
          background: '#2ecc71',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Add to Cart
        </button>
      ) : (
        <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>
          Out of Stock
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      background: '#f4f4f4',
      minHeight: '100vh'
    }}>
      <h1>Props Demo</h1>

      <h2>User Cards (same component, different props)</h2>
      <UserCard
        name="Alice Johnson"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=1"
        skills={['React', 'JavaScript', 'CSS']}
      />
      <UserCard
        name="Bob Smith"
        role="Backend Developer"
        avatar="https://i.pravatar.cc/150?img=3"
        skills={['Node.js', 'Python', 'PostgreSQL']}
      />

      <h2 style={{ marginTop: '30px' }}>Product Cards (conditional rendering)</h2>
      <ProductCard title="Laptop Pro" price={999} inStock={true} />
      <ProductCard title="Wireless Mouse" price={49} inStock={false} />
      <ProductCard title="USB-C Hub" price={79} inStock={true} />
    </div>
  );
}

export default App;
