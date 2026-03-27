import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <LangProvider>
      <div className="bg-white text-black font-mono">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </LangProvider>
  )
}

export default App
