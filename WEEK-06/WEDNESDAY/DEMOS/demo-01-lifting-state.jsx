// Demo 01: Lifting State Up
import React, { useState } from 'react';

// Two sibling components share state via parent
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ fontWeight: 'bold' }}>
        Temperature in {scaleNames[scale]}:
      </label>
      <br />
      <input
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
        style={{ padding: '10px', fontSize: '18px', width: '200px', borderRadius: '6px', border: '2px solid #ddd', marginTop: '5px' }}
        type="number"
      />
    </div>
  );
}

function BoilingVerdict({ celsius }) {
  const temp = parseFloat(celsius);
  if (isNaN(temp)) return <p>Enter a temperature.</p>;
  if (temp >= 100) return <p style={{ color: '#e74c3c', fontSize: '20px' }}>🔥 The water would boil!</p>;
  return <p style={{ color: '#3498db', fontSize: '20px' }}>❄️ The water would NOT boil.</p>;
}

function toCelsius(f) { return ((f - 32) * 5) / 9; }
function toFahrenheit(c) { return (c * 9) / 5 + 32; }
function tryConvert(temp, convertFn) {
  const val = parseFloat(temp);
  if (isNaN(val)) return '';
  return Math.round(convertFn(val) * 100) / 100;
}

function App() {
  // STATE LIFTED UP to parent — both inputs share this state
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => { setScale('c'); setTemperature(temp); };
  const handleFahrenheitChange = (temp) => { setScale('f'); setTemperature(temp); };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h1>🌡️ Lifting State Up Demo</h1>
      <p>Both inputs stay in sync because the parent owns the state.</p>

      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={celsius} />

      <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '6px' }}>
        <p><strong>Pattern:</strong> Parent owns state, passes value + setter to children.</p>
      </div>
    </div>
  );
}

export default App;
