// Demo 01: Counter with useState
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const MIN = 0;
  const MAX = 20;

  const increment = () => { if (count < MAX) setCount(count + 1); };
  const decrement = () => { if (count > MIN) setCount(count - 1); };
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Counter Demo</h1>

      <p style={{ fontSize: '72px', margin: '20px 0' }}>{count}</p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement} disabled={count === MIN}
          style={{ padding: '12px 24px', fontSize: '20px', cursor: 'pointer' }}>
          −
        </button>
        <button onClick={reset}
          style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}>
          Reset
        </button>
        <button onClick={increment} disabled={count === MAX}
          style={{ padding: '12px 24px', fontSize: '20px', cursor: 'pointer' }}>
          +
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <progress value={count} max={MAX} style={{ width: '300px', height: '20px' }} />
        <p>{count} / {MAX}</p>
      </div>

      {count === MAX && <p style={{ color: 'red', fontWeight: 'bold' }}>Maximum reached!</p>}
      {count === MIN && count !== 0 && <p style={{ color: 'blue' }}>At minimum</p>}
    </div>
  );
}

export default App;
