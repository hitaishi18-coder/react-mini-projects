import { useState } from "react";
import './App.css';
import Hitaishi from './Hitaishi';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter((prev) => (prev < 30 ? prev + 1 : 30));
  };

  const subtractValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="counter-container">
      <Hitaishi />
      <div className="counter-card">
        <h3 className="counter-value">{counter}</h3>
        <div className="button-group">
          <button className="btn btn-add" onClick={addValue}>
            + Add
          </button>
          <button className="btn btn-subtract" onClick={subtractValue}>
            − Subtract
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
