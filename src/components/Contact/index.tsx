import './Contact.css'

export default function Contact() {
  const links = {
    linkedin: 'https://www.linkedin.com/in/mario-quiroga-73299527/',
    github: 'https://github.com/maritocuate',
    resume: '/resume.pdf',
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
          <a
            href={'https://marioquiroga.vercel.app' + links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link">resume</span>
          </a>
        </div>
        <span className="email">MARIO300@GMAIL.COM</span>
      </section>
    </div>
  )
}
