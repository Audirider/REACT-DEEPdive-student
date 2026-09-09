// Demo 02: Timer with Cleanup
import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // Cleanup: clear interval when isRunning changes or unmount
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const reset = () => { setIsRunning(false); setSeconds(0); };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>⏱️ Stopwatch (useEffect + Cleanup)</h1>

      <p style={{ fontSize: '72px', fontFamily: 'monospace', margin: '20px 0' }}>
        {formatTime(seconds)}
      </p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setIsRunning(!isRunning)}
          style={{ padding: '12px 24px', fontSize: '16px', background: isRunning ? '#e74c3c' : '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button onClick={reset}
          style={{ padding: '12px 24px', fontSize: '16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          🔄 Reset
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', background: '#f0f0f0', borderRadius: '6px', textAlign: 'left', maxWidth: '400px', margin: '30px auto 0' }}>
        <p><strong>Cleanup pattern:</strong></p>
        <pre style={{ fontSize: '13px' }}>{`useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, [isRunning]);`}</pre>
      </div>
    </div>
  );
}

export default App;
