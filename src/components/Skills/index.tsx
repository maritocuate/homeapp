import { SetStateAction, useState } from 'react'
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
export default function Skills() {
  const [pressedIndex, setPressedIndex] = useState<null | number>(null)

  const handlePressStart = (index: number) => {
    setPressedIndex(index)
  }
  const handlePressEnd = () => {
    setPressedIndex(null)
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
