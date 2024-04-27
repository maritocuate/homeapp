import './Contact.css'

export default function Contact() {
  const links = {
    linkedin: 'https://www.linkedin.com/in/mario-quiroga-73299527/',
    github: 'https://github.com/maritocuate',
  }

  return (
    <div className="section">
      <section className="section-contact">
        <div className="links">
          <span
            className="link"
            onClick={() => window.open(links.linkedin, '_blank')}
          >
            linkedin
          </span>
          <span
            className="link"
            onClick={() => window.open(links.github, '_blank')}
          >
            github
          </span>
        </div>
        <span className="email">MARIO300@GMAIL.COM</span>
      </section>
    </div>
  )
}
