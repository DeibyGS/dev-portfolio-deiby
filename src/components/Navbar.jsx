import { useState } from 'react'
import AvailabilityBadge from './AvailabilityBadge'
import LangSwitch from './LangSwitch'
import MobileMenu from './MobileMenu'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function Navbar() {
  const { lang } = useLang()
  const t = translations[lang].nav
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#about',     label: t.about },
    { href: '#projects',  label: t.projects },
    { href: '#education', label: t.education },
    { href: '#skills',    label: t.skills },
    { href: '#activity',  label: t.activity },
    { href: '#contact',   label: t.contact },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-dark-bg border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#hero" className="font-mono font-bold text-dark-text text-sm hover:text-matrix transition-colors duration-150">
            ~/deiby
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-dark-muted font-medium hover:text-matrix transition-colors duration-150 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-matrix transition-all duration-150 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-3">
            <AvailabilityBadge />
            <div className="w-px h-4 bg-dark-border" />
            <LangSwitch />
          </div>

          {/* Badge visible solo en mobile (entre logo y hamburger) */}
          <div className="flex md:hidden">
            <AvailabilityBadge />
          </div>

          {/* Hamburger — solo mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 text-dark-text hover:text-matrix transition-colors duration-150"
            aria-label={t.openMenu}
          >
            <span className="block w-6 h-px bg-current transition-all duration-150" />
            <span className="block w-4 h-px bg-current transition-all duration-150" />
            <span className="block w-6 h-px bg-current transition-all duration-150" />
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
      />
    </>
  )
}

export default Navbar
