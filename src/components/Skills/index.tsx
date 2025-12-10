import React from 'react'
import SkillTile from './SkillTile'
import { keySkills } from '../../constants/skills'
import './Skills.css'

const Skills: React.FC = () => {
  return (
    <div className="section">
      <div className="container-skills">
        <div className="tiles-wrapper">
          <div className="tiles-scroll tiles-scroll-left">
            {keySkills.map((type, index) => (
              <SkillTile
                key={`original-left-${index}`}
                type={type}
              />
            ))}
            {keySkills.map((type, index) => (
              <SkillTile
                key={`duplicate-left-${index}`}
                type={type}
              />
            ))}
          </div>
          <div className="tiles-scroll tiles-scroll-right">
            {keySkills.map((type, index) => (
              <SkillTile
                key={`original-right-${index}`}
                type={type}
              />
            ))}
            {keySkills.map((type, index) => (
              <SkillTile
                key={`duplicate-right-${index}`}
                type={type}
              />
            ))}
          </div>
          <div className="tiles-scroll tiles-scroll-left-fast">
            {keySkills.map((type, index) => (
              <SkillTile
                key={`original-left-fast-${index}`}
                type={type}
              />
            ))}
            {keySkills.map((type, index) => (
              <SkillTile
                key={`duplicate-left-fast-${index}`}
                type={type}
              />
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h2 className="header">Key Skills</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills
