// Demo 01: JSX Basics
// Copy this into src/App.js of a create-react-app project

import React from 'react';
import './App.css';

function App() {
  // Variables - used inside JSX with {curly braces}
  const name = "Alice";
  const age = 25;
  const isStudent = true;
  const skills = ["React", "JavaScript", "CSS", "HTML"];

  // Current date/time
  const now = new Date();

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>JSX Basics Demo</h1>

      {/* 1. Variables in JSX */}
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Variables in JSX</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
      </section>

      {/* 2. Expressions in JSX */}
      <section style={{ marginBottom: '30px' }}>
        <h2>2. Expressions</h2>
        <p>2 + 2 = {2 + 2}</p>
        <p>Name uppercase: {name.toUpperCase()}</p>
        <p>Current time: {now.toLocaleTimeString()}</p>
      </section>

      {/* 3. className (not class!) */}
      <section style={{ marginBottom: '30px' }}>
        <h2>3. className Example</h2>
        <div className="highlight">
          This uses className, not class
        </div>
      </section>

      {/* 4. Self-closing tags */}
      <section style={{ marginBottom: '30px' }}>
        <h2>4. Self-Closing Tags</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Placeholder" 
        />
        <br />
        <input type="text" placeholder="Self-closing input" />
      </section>

      {/* 5. Inline styles (object with camelCase) */}
      <section style={{ marginBottom: '30px' }}>
        <h2>5. Inline Styles</h2>
        <p style={{ 
          color: 'white', 
          backgroundColor: '#667eea', 
          padding: '10px 20px',
          borderRadius: '6px',
          fontSize: '16px'
        }}>
          Styled with inline style object
        </p>
      </section>

      {/* 6. Rendering a list with .map() */}
      <section style={{ marginBottom: '30px' }}>
        <h2>6. Rendering Lists</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* 7. Conditional rendering */}
      <section style={{ marginBottom: '30px' }}>
        <h2>7. Conditional Rendering</h2>
        {isStudent && <p>✅ This person is a student</p>}
        {age >= 18 ? <p>Adult</p> : <p>Minor</p>}
      </section>
    </div>
  );
}

export default App;
