import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Gradient from './components/Gradient'
import Home from './components/Home'
import { useOperatingSystem, getOSClass } from './hooks/useOperatingSystem'
// import Skills from './components/Skills'

function App() {
  const operatingSystem = useOperatingSystem();
  const osClass = getOSClass(operatingSystem);

  return (
    <main className={osClass}>
      <Gradient />
      <Home />
      <About />
      {/* <Skills /> */}
      <Contact />
    </main>
  )
}

export default App
