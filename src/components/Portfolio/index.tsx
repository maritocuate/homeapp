import './Portfolio.css'

export default function Portfolio() {
  const projects = [
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/talkcorner/main/talkcorner/public/screenshot.png',
      description: 'Public chat room with message permanence',
      tech: 'ReactJs Socket.Io Turso Express',
      url: 'https://talkcorner.vercel.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/salvemospatitas/main/public/screenshot.png',
      description: 'ONG that raises funds for animal shelters',
      tech: 'NextJs Tailwindcss TS MatterJs Prisma',
      url: 'https://salvemospatitas.vercel.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/mbank/main/public/images/screenshot1.png',
      description: 'Dashboard to review balance and generate transactions',
      tech: 'NextJs Zustand Prisma TailwindCSS',
      url: 'https://mbank-three.vercel.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/marbnb/main/public/screenshot.png',
      description: 'Airbnb clone',
      tech: 'NextJs Zustand Nextauth Mongodb Sass',
      url: 'https://eclectic-churros-0472f9.netlify.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/simpsons-screensaver/main/public/screenshot.png',
      description: 'Shows random quotes from The Simpsons TV series',
      tech: 'ReactJs TypeScript NestJs Sass',
      url: 'https://simpsons-screensaver.vercel.app',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/3d-portfolio/main/public/screenshot.png',
      description: '3D designer portfolio',
      tech: 'ReactJs ThreeJs TailwindCSS',
      url: 'https://3d-portfolio-beta-five.vercel.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/react-criptomonedas/master/public/screenshot.png',
      description: 'App for the value of cryptocurrencies',
      tech: 'ReactJs',
      url: 'https://hardcore-jones-d2ffc9.netlify.app/',
    },
    {
      screenshot:
        'https://raw.githubusercontent.com/maritocuate/messenger/main/public/screenshot.png',
      description: 'Messenger clone',
      tech: 'NextJs PusherJs Zustand Prisma Sass',
      url: 'https://messenger-rho-taupe.vercel.app/',
    },
  ]

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
