import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import GithubActivity from './components/GithubActivity'
import Stats from './components/Stats'
import Contact from './components/Contact'

function App() {
  return (
    <LangProvider>
      <div className="bg-dark-bg text-dark-text font-mono">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <TechStack />
          <Projects />
          <Education />
          <GithubActivity />
          <Contact />
        </main>
      </div>
    </LangProvider>
  )
}

export default App
