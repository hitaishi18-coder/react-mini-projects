import { useState } from 'react'
import './App.css'

function App() {
  const colors = JSON.parse(localStorage.getItem('color'))
  const [r, setR] = useState(colors?.r ?? 0)
  const [g, setG] = useState(colors?.g ?? 0)
  const [b, setB] = useState(colors?.b ?? 0)

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ r, g, b }))
  }

  return (
    <div className="app-container">
      <h1>Color Mixer</h1>
      <div
        className="color-box"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          height: "200px",
          width: "200px"
        }}
      />

      <label>RED</label>
      <input type='range' value={r} onChange={(e) => setR(Number(e.target.value))} min={0} max={255} />

      <label>GREEN</label>
      <input type='range' value={g} onChange={(e) => setG(Number(e.target.value))} min={0} max={255} />

      <label>BLUE</label>
      <input type='range' value={b} onChange={(e) => setB(Number(e.target.value))} min={0} max={255} />

      <br /><br />
      <button onClick={save}>Save Color Combination</button>
    </div>
  )
}

export default App
