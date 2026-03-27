import AvailabilityBadge from './AvailabilityBadge'
import LangSwitch from './LangSwitch'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function Navbar() {
  const { lang } = useLang()
  const t = translations[lang].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#hero" className="text-slate-100 font-semibold hover:text-cyan-400 transition-colors">
          Deiby Gorrin
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#hero" className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200">{t.about}</a>
          <a href="#skills" className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200">{t.skills}</a>
          <a href="#projects" className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200">{t.projects}</a>
          <a href="#education" className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200">{t.education}</a>
          <a href="#contact" className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200">{t.contact}</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <AvailabilityBadge />
          <div className="w-px h-4 bg-slate-700" />
          <LangSwitch />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
