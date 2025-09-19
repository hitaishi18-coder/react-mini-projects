import Clock from './Clock';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="app-container">
      <h1>Digital Clock</h1>

      {/* Clock Component */}
      <div className="clock-display">
        <Clock color={color} />
      </div>

      {/* Color Selector */}
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="skyblue">Sky blue</option>
      </select>
    </div>
  );
}

export default App;
