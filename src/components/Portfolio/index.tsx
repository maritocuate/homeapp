import './Portfolio.css'
import imgChat from '../../assets/ss-chat.png'

export default function Portfolio() {
  return (
    <div className="section">
      <section className="portfolio-section">
        <div className="card">
          <img src={imgChat} alt="chat" />
        </div>
      </section>
    </div>
  )
}
