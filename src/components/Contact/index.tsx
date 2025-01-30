import './Contact.css'

export default function Contact() {
  const links = {
    linkedin: 'https://www.linkedin.com/in/mario-quiroga-73299527/',
    github: 'https://github.com/maritocuate',
    resume: '/resume.pdf',
  }

  const handleClick = async () => {
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'new_prop',
          score: 5,
        }),
      })

      if (!response.ok) {
        throw new Error('Error en el servidor: ' + response.statusText)
      }

      const result = await response.json()
      console.log(result)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unknown error occurred')
      }
    } finally {
      console.log(false)
    }
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
        <span className="email" onClick={handleClick}>
          MARIO300@GMAIL.COM
        </span>
      </section>
    </div>
  )
}
