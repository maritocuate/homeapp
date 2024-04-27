import '@fontsource/bebas-neue'
import './App.css'
import Gradient from './components/Gradient'

function App() {
  return (
    <>
      <Gradient />
      <div className="section">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right',
          }}
        >
          <h1 className="header">
            Mario
            <br />
            Quiroga
          </h1>
          <p style={{ marginTop: '-4.5rem', fontSize: '0.8rem' }}>
            software developer
          </p>
        </div>
      </div>
    </>
  )
}

export default App
