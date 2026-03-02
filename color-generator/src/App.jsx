import { useState } from "react"
import HexColor from "./components/HexColor"
import RgbColor from "./components/RgbColor"
import "./index.css"

export default function App() {
  const [color, setColor] = useState("#000000")

  const generateHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
    setColor(`#${randomColor}`)
  }

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="card">
        <h1>Color Generator</h1>
        <p className="color-value">{color}</p>
        <div className="button-group">
          <HexColor generateHexColor={generateHexColor} />
          <RgbColor generateRgbColor={generateRgbColor} />
        </div>
      </div>
    </div>
  )
}