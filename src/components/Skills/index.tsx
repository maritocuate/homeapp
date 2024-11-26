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
  return (
    <div className="section">
      <div className="container-skills">
        <div className="tiles">
          {socialMedia.map(({ type }, index) => (
            <div className="tile" key={index}>
              <div className="shadow"></div>
              <div className="item">
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
