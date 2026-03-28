import { AnimatePresence, motion } from 'framer-motion'
import { LangProvider, useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Education from './components/Education'
import GithubActivity from './components/GithubActivity'
import Stats from './components/Stats'
import SectionNav from './components/SectionNav'
import Contact from './components/Contact'

// Componente interno para poder usar useLang() dentro del LangProvider
function MainContent() {
  const { lang } = useLang()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Education />
        <TechStack />
        <GithubActivity />
        <Contact />
      </motion.main>
    </AnimatePresence>
  )
}

function App() {
  return (
    <LangProvider>
      <div className="bg-dark-bg text-dark-text font-mono">
        <Navbar />
        <SectionNav />
        <MainContent />
      </div>
    </LangProvider>
  )
}

export default App
