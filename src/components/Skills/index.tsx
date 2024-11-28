import React, { useState } from 'react'
import useSynth from '../../hooks/useSynth'
import SkillTile from './SkillTile'
import { keySkills } from '../../constants/skills'
import './Skills.css'

const Skills: React.FC = () => {
  const [pressedIndex, setPressedIndex] = useState<null | number>(null)
  const { playNote } = useSynth()

  const handlePressStart = (index: number) => {
    setPressedIndex(index)
    playNote()
  }

  const handlePressEnd = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    setPressedIndex(null)
  }

  return (
    <div className="section">
      <div className="container-skills">
        <div className="skills-section">
          <h1 className="header">Key Skills</h1>
          <p className="about-description">
            Some general abilities that I have acquired in the last years (with
            sound 😃).
          </p>
        </div>
        <div className="tiles">
          {keySkills.map((type, index) => (
            <SkillTile
              key={index}
              type={type}
              isPressed={pressedIndex === index}
              onPressStart={() => handlePressStart(index)}
              onPressEnd={handlePressEnd}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
