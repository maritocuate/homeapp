import './Portfolio.css'
import imgChat from '../../assets/ss-chat.png'

export default function Portfolio() {
  const projects = [
    {
      description: 'ONG that raises funds for animal shelters',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://salvemospatitas.vercel.app/',
    },
    {
      description: 'Cripto Currencies',
      tech: 'ReactJs',
      url: 'https://hardcore-jones-d2ffc9.netlify.app/',
    },
    {
      description: 'MBank',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://mbank-three.vercel.app/',
    },
    {
      description: 'Airbnb Clone (NextJS)',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://eclectic-churros-0472f9.netlify.app/',
    },
    {
      description: 'Simpsons Screensaver (ReactJS)',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://simpsons-screensaver.vercel.app',
    },
    {
      description: '3D Portfolio (ReactJS)',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://3d-portfolio-beta-five.vercel.app/',
    },
    {
      description: 'Messenger Clone (NextJS)',
      tech: 'NextJs, TypeScript, MatterJs, Prisma, TailwindCSS',
      url: 'https://messenger-rho-taupe.vercel.app/',
    },
  ]

  return (
    <div className="section">
      <section className="portfolio-section">
        <div className="card">
          <img src={imgChat} alt="chat" />
          <div className="card-info">
            <span className="card-title">Chat</span>
            <span>A simple chat app</span>
          </div>
        </div>
      </section>
    </div>
  )
}
