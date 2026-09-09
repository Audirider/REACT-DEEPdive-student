// Demo 04: Lists and Conditional Rendering
// Copy into src/App.js of a create-react-app project

import React from 'react';

function App() {
  // Sample data
  const students = [
    { id: 1, name: 'Alice', grade: 92, passed: true },
    { id: 2, name: 'Bob', grade: 45, passed: false },
    { id: 3, name: 'Charlie', grade: 88, passed: true },
    { id: 4, name: 'Diana', grade: 34, passed: false },
    { id: 5, name: 'Eve', grade: 95, passed: true }
  ];

  const notifications = [
    { id: 1, message: 'New assignment posted', type: 'info' },
    { id: 2, message: 'Deadline tomorrow!', type: 'warning' },
    { id: 3, message: 'Great job on Lab 16!', type: 'success' }
  ];

  const isLoggedIn = true;
  const itemCount = 3;

  // Notification colors by type
  const typeColors = {
    info: '#3498db',
    warning: '#f39c12',
    success: '#2ecc71'
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Lists & Conditionals Demo</h1>

      {/* 1. Basic list rendering */}
      <section style={{ marginBottom: '30px' }}>
        <h2>1. Student List (using .map)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#667eea', color: 'white' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '10px' }}>Grade</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{student.name}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{student.grade}%</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  {student.passed ? (
                    <span style={{ color: '#2ecc71' }}>✅ Passed</span>
                  ) : (
                    <span style={{ color: '#e74c3c' }}>❌ Failed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 2. Filtered list */}
      <section style={{ marginBottom: '30px' }}>
        <h2>2. Only Passing Students (filtered)</h2>
        <ul>
          {students
            .filter(s => s.passed)
            .map(s => (
              <li key={s.id}>{s.name} — {s.grade}%</li>
            ))
          }
        </ul>
      </section>

      {/* 3. Notification list with dynamic styles */}
      <section style={{ marginBottom: '30px' }}>
        <h2>3. Notifications (dynamic styling)</h2>
        {notifications.map(notif => (
          <div key={notif.id} style={{
            padding: '12px 16px',
            margin: '8px 0',
            borderRadius: '6px',
            borderLeft: `4px solid ${typeColors[notif.type]}`,
            background: '#f8f9fa'
          }}>
            {notif.message}
          </div>
        ))}
      </section>

      {/* 4. Conditional rendering patterns */}
      <section style={{ marginBottom: '30px' }}>
        <h2>4. Conditional Rendering Patterns</h2>

        {/* Pattern 1: Ternary */}
        <p>
          Status: {isLoggedIn ? '🟢 Logged In' : '🔴 Logged Out'}
        </p>

        {/* Pattern 2: Short-circuit && */}
        {isLoggedIn && <p>Welcome back! 👋</p>}

        {/* Pattern 3: Multiple conditions */}
        <p>
          Cart: {itemCount === 0 
            ? 'Empty' 
            : `${itemCount} item${itemCount > 1 ? 's' : ''}`
          }
        </p>
      </section>

      {/* 5. Empty state */}
      <section>
        <h2>5. Empty State Pattern</h2>
        {students.length > 0 ? (
          <p>Showing {students.length} students</p>
        ) : (
          <p style={{ color: '#999' }}>No students found</p>
        )}
      </section>
    </div>
  );
}

export default App;
