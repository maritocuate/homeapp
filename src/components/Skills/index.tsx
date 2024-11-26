import { useState } from 'react'
import * as Tone from 'tone'
import './Skills.css'

const socialMedia = [
  { type: 'javascript' },
  { type: 'react' },
  { type: 'next' },
  { type: 'gsap' },
  { type: 'jest' },
  { type: 'git' },
  { type: 'sass' },
  { type: 'node' },
  { type: 'postgresql' },
  { type: 'swift' },
]
const odeToJoy = ['E4', 'E4', 'F4', 'G4', 'G4', 'F4', 'E4', 'D4']
export default function Skills() {
  const [pressedIndex, setPressedIndex] = useState<null | number>(null)
  const [indexTheme, setIndexTheme] = useState(0)
  const synth = new Tone.Synth().toDestination()
  const now = Tone.now()

  const handlePressStart = (index: number) => {
    setPressedIndex(index)
    setIndexTheme(indexTheme + 1)
    if (indexTheme === odeToJoy.length - 1) setIndexTheme(0)
    playNote()
  }
  const handlePressEnd = () => {
    setPressedIndex(null)
  }

  const playNote = () => {
    console.log(indexTheme)
    synth.triggerAttack(odeToJoy[indexTheme], now)
    synth.triggerRelease(now + 0.5)
  }

  return (
    <div className="section">
      <div className="container-skills">
        <div className="tiles">
          {socialMedia.map(({ type }, index) => (
            <div className="tile" key={index}>
              <div className="shadow"></div>
              <div
                className={`item ${pressedIndex === index ? 'pressed' : ''}`}
                onMouseDown={() => handlePressStart(index)}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={() => handlePressStart(index)}
                onTouchEnd={handlePressEnd}
              >
                <img
                  src={`/images/${type}.png`}
                  alt={type}
                  width={48}
                  height="auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
