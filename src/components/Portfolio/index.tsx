import { useRef } from 'react'
import projects from '../../lib/portfolioData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './Portfolio.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Portfolio() {
  const main = useRef()

  /* useGSAP(
    () => {
      const textImages = gsap.utils.toArray('.image-text')
      textImages.forEach(txt => {
        gsap.to(txt, {
          left: '400px',
          scrollTrigger: {
            trigger: txt,
            start: 'bottom bottom',
            end: 'top 50%',
            scrub: true,
            markers: true,
          },
        })
      })

      const images = gsap.utils.toArray('.image img')
      images.forEach(img => {
        gsap.to(img, {
          left: '-200px',
          scrollTrigger: {
            trigger: img,
            start: 'bottom bottom',
            end: 'top 50%',
            scrub: true,
            markers: true,
          },
        })
      })

      const boxes = gsap.utils.toArray('.card-background')
      boxes.forEach(bg => {
        gsap.to(bg, {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: bg,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            markers: true,
          },
        })
      })
    },
    { scope: main }
  ) */

  return (
    <div className="portfolio-section" ref={main}>
      <h2 className="header">Projects</h2>
      {projects.map(project => (
        <div className="card" key={project.url}>
          <span className="card-background"></span>
          <span className="image">
            <span className="sidepanel">
              <span className="header card-info">{project.title}</span>
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
