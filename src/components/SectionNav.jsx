import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

const SECTION_IDS = ['about', 'projects', 'education', 'skills', 'activity', 'contact']

function SectionNav() {
  const { lang } = useLang()
  const nav = translations[lang].nav
  const [active, setActive] = useState(null)

  // Etiquetas traducidas alineadas con los IDs de cada sección
  const sections = [
    { id: 'about',    label: nav.about },
    { id: 'projects', label: nav.projects },
    { id: 'education',label: nav.education },
    { id: 'skills',   label: nav.skills },
    { id: 'activity', label: lang === 'es' ? 'actividad' : 'activity' },
    { id: 'contact',  label: nav.contact },
  ]

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        // Sección activa cuando ocupa la franja central del viewport
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    // Solo visible en pantallas grandes
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative flex flex-col gap-5 items-end">

        {/* Línea vertical conectora */}
        <div className="absolute right-[5px] top-2 bottom-2 w-px bg-dark-border" />

        {sections.map(({ id, label }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 group"
              aria-label={label}
            >
              {/* Etiqueta — visible siempre, activa en matrix */}
              <motion.span
                className="font-mono text-xs"
                animate={{
                  color: isActive ? '#00FF41' : 'rgba(107,107,107,0.5)',
                }}
                whileHover={{ color: '#6B6B6B' }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>

              {/* Punto */}
              <motion.span
                className="relative z-10 rounded-full shrink-0"
                animate={isActive
                  ? { width: 10, height: 10, backgroundColor: '#00FF41', borderColor: '#00FF41' }
                  : { width: 7,  height: 7,  backgroundColor: '#1A1A1A', borderColor: '#2A2A2A' }
                }
                whileHover={{ borderColor: '#00FF41' }}
                style={{ border: '1px solid' }}
                transition={{ duration: 0.2 }}
              />
            </a>
          )
        })}

        {/* Marcador activo — línea lateral izquierda del punto activo */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="absolute right-0 w-px bg-matrix"
              style={{ originY: 0 }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.25 }}
            />
          )}
        </AnimatePresence>

      </div>
    </aside>
  )
}

export default SectionNav
