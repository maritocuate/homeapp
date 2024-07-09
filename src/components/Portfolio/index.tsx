import { useRef } from 'react'
import projects from '../../lib/portfolioData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './Portfolio.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
  const main = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.card-background') as HTMLDivElement[]
      boxes.forEach(bg => {
        gsap.from(bg, {
          scale: 0.95,
          opacity: 0,
          scrollTrigger: {
            trigger: bg,
            start: '70% bottom',
            end: 'top top',
            scrub: true,
            //markers: true,
          },
        })
      })

      const textImages = gsap.utils.toArray('.card-title') as HTMLDivElement[]
      textImages.forEach(txt => {
        gsap.from(txt, {
          left: '120px',
          scrollTrigger: {
            trigger: txt,
            start: 'bottom 90%',
            end: 'top 50%',
            scrub: true,
            //markers: true,
          },
        })
      })

      const description = gsap.utils.toArray(
        '.text-description'
      ) as HTMLDivElement[]
      description.forEach(txt => {
        gsap.from(txt, {
          left: '30px',
          opacity: 0,
          scrollTrigger: {
            trigger: txt,
            start: 'bottom 85%',
            end: 'top 50%',
            scrub: true,
            //markers: true,
          },
        })
      })

      const buttons = gsap.utils.toArray('button') as HTMLDivElement[]
      buttons.forEach(btn => {
        gsap.from(btn, {
          opacity: 0,
          left: '30px',
          scrollTrigger: {
            trigger: btn,
            start: 'bottom 80%',
            end: 'top 50%',
            scrub: true,
            //markers: true,
          },
        })
      })

      const images = gsap.utils.toArray('.image img') as HTMLDivElement[]
      images.forEach(img => {
        gsap.from(img, {
          top: '30px',
          opacity: 0,
          scrollTrigger: {
            trigger: img,
            start: 'bottom 90%',
            end: 'top 30%',
            scrub: true,
            //markers: true,
          },
        })
      })
    },
    { scope: main }
  )

  return (
    <div className="portfolio-section" ref={main}>
      <h2 className="header">Projects</h2>
      {projects.map(project => (
        <div className="card" key={project.url}>
          <span className="card-background"></span>
          <span className="image">
            <span className="sidepanel">
              <span className="header card-title">{project.title}</span>
              <span className="text-description">
                {project.description}
                <br />
                <span className="image-text">{project.tech}</span>
              </span>
              <button>See more</button>
            </span>
            <img src={project.screenshot} alt="chat" />
          </span>
        </div>
      ))}
    </div>
  )
}
