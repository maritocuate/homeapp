import React, { useState } from 'react'
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
const homeAlone = [
  'G4',
  'E4',
  'G4',
  'E4',
  'C5',
  'G4',
  'D4',
  'A4',
  'G4',
  'C4',
  'F4',
  'E4',
  'D4',
]
export default function Skills() {
  const [pressedIndex, setPressedIndex] = useState<null | number>(null)
  const [indexTheme, setIndexTheme] = useState(0)
  const synth = new Tone.Synth().toDestination()

  const handlePressStart = (index: number) => {
    setPressedIndex(index)
    setIndexTheme(indexTheme + 1)
    if (indexTheme === homeAlone.length - 1) setIndexTheme(0)
    playNote()
  }
  const handlePressEnd = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setPressedIndex(null)
  }

  const playNote = () => {
    const now = Tone.now()
    synth.triggerAttack(homeAlone[indexTheme], now)
    synth.triggerRelease(now + 0.5)
  }

  return (
    <div className="section">
      <div className="container-skills">
        <h1 className="header">Key Skills</h1>
        <div className="tiles">
          {socialMedia.map(({ type }, index) => (
            <div className="tile" key={index}>
              <div className="shadow"></div>
              <div
                className={`item ${pressedIndex === index ? 'pressed' : ''}`}
                onMouseDown={() => handlePressStart(index)}
                onMouseUp={handlePressEnd}
                /* onMouseLeave={handlePressEnd} */
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
