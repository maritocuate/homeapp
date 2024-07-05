import projects from '../../lib/portfolioData'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="section">
      <section className="portfolio-section">
        {projects.map(project => (
          <div className="card" key={project.url}>
            <span className="card-info">{project.description}</span>
            <span className="image">
              <img src={project.screenshot} alt="chat" />
              <span className="image-text">{project.tech}</span>
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
