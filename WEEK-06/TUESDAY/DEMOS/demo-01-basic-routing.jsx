// Demo 01: Basic Routing with React Router
// Run: npm install react-router-dom
import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our React Router demo! Click the navigation above to explore.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>ℹ️ About Page</h1>
      <p>This is a Single Page Application using React Router.</p>
      <p>Notice the URL changes but the page doesn't reload!</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>📧 Contact Page</h1>
      <p>Email: hello@example.com</p>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page not found!</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function App() {
  const navStyle = {
    display: 'flex', gap: '20px', padding: '15px 40px',
    background: '#667eea', listStyle: 'none'
  };
  const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '16px' };
  const activeStyle = { ...linkStyle, borderBottom: '2px solid white', paddingBottom: '4px' };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : linkStyle}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : linkStyle}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : linkStyle}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
