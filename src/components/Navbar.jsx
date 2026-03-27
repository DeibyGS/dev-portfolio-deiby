import AvailabilityBadge from './AvailabilityBadge'
import LangSwitch from './LangSwitch'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function Navbar() {
  const { lang } = useLang()
  const t = translations[lang].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-cool-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#hero" className="font-mono font-bold text-black text-sm hover:text-matrix transition-colors duration-150">
          deiby.gorrin
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '#hero',      label: t.about },
            { href: '#skills',    label: t.skills },
            { href: '#projects',  label: t.projects },
            { href: '#education', label: t.education },
            { href: '#contact',   label: t.contact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-black font-medium hover:text-matrix transition-colors duration-150 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-matrix transition-all duration-150 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <AvailabilityBadge />
          <div className="w-px h-4 bg-cool-gray" />
          <LangSwitch />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
