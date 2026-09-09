// Demo 02: Creating and Using Components
// Copy this into src/App.js — also create Greeting.js and InfoCard.js

// ======= src/Greeting.js =======
// function Greeting() {
//   return (
//     <div style={{ padding: '15px', background: '#e8f5e9', borderRadius: '8px', margin: '10px 0' }}>
//       <h2>👋 Hello from Greeting Component!</h2>
//       <p>I am a reusable component</p>
//     </div>
//   );
// }
// export default Greeting;

// ======= src/InfoCard.js =======
// function InfoCard() {
//   return (
//     <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px', margin: '10px 0' }}>
//       <h3>ℹ️ Info Card</h3>
//       <p>Components are like LEGO blocks — build once, use everywhere!</p>
//     </div>
//   );
// }
// export default InfoCard;

// ======= src/App.js (below) =======
import React from 'react';
// import Greeting from './Greeting';
// import InfoCard from './InfoCard';

// For demo purposes, defining components in same file:
function Greeting() {
  return (
    <div style={{ padding: '15px', background: '#e8f5e9', borderRadius: '8px', margin: '10px 0' }}>
      <h2>👋 Hello from Greeting Component!</h2>
      <p>I am a reusable component</p>
    </div>
  );
}

function InfoCard() {
  return (
    <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px', margin: '10px 0' }}>
      <h3>ℹ️ Info Card</h3>
      <p>Components are like LEGO blocks — build once, use everywhere!</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Component Demo</h1>
      <p>Each component below is reusable:</p>

      {/* Use Greeting component 3 times */}
      <Greeting />
      <Greeting />
      <Greeting />

      {/* Use InfoCard component */}
      <InfoCard />
      <InfoCard />

      <p style={{ marginTop: '20px', color: '#666' }}>
        👆 5 component instances from just 2 component definitions!
      </p>
    </div>
  );
}

export default App;
