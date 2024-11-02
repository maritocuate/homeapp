import { useEffect, useRef } from 'react'
import './Home.css'

export default function Home() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const text = headerRef.current
    if (text) {
      let shadow = ''
      for (let i = 1; i < 17; i++) {
        shadow += `${shadow ? ',' : ''} ${-i + 0.01}px ${i + 1}px 0 #d9d9d9`
      }
      text.style.textShadow = shadow
    }
  }, [])
  return (
    <div className="section">
      <section className="title-section dimension">
        <h1 ref={headerRef} className="header">
          Mario
          <br />
          Quiroga
        </h1>
        <p className="subtitle">software developer</p>
      </section>
    </div>
  )
}
