import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import { availabilityStatus } from '../data/availability'
import TerminalHeader from './TerminalHeader'
import TerminalInput from './TerminalInput'

function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero
  const [collapsed, setCollapsed] = useState(false)

  const dataLines = [
    { key: 'role',   value: '"Fullstack Developer"' },
    { key: 'status', value: `"${availabilityStatus}"` },
    { key: 'stack',  value: '["React", "Python", "Node.js", "..."]' },
  ]

  const socialLinks = [
    { label: 'github',   href: 'https://github.com/DeibyGS' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/deibygorrin' },
  ]

  return (
    <section id="hero" className="min-h-screen bg-dark-bg flex items-center px-4 sm:px-6 lg:px-8 pt-14">
      <div className="max-w-6xl mx-auto w-full py-16">

        <motion.div
          className="border border-dark-border bg-dark-surface"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <TerminalHeader filename="hero.sh" command="./init-profile" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

          <AnimatePresence initial={false}>
          {!collapsed && (
          <motion.div
            key="hero-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >

            {/* Content: photo left + data right */}
            <div className="flex flex-col md:flex-row gap-8 px-5 py-8">

              {/* Photo */}
              <motion.div
                className="shrink-0 flex justify-center md:justify-start"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/avatar-deiby.png"
                  alt="Deiby Gorrin"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-matrix"
                />
              </motion.div>

              {/* Data */}
              <div className="flex flex-col justify-center gap-4 min-w-0">

                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-text font-sans"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  Deiby Gorrin
                </motion.h1>

                <motion.div
                  className="font-mono text-sm text-dark-muted flex flex-col gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {dataLines.map(({ key, value }) => (
                    <div key={key} className="leading-relaxed">
                      <span className="text-matrix select-none">[&gt;] </span>
                      <span className="text-dark-muted/70">{key}: </span>
                      <span className="text-dark-text">{value}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-base text-dark-muted max-w-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  {t.description}
                </motion.p>

                <motion.div
                  className="font-mono text-sm flex flex-col gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-muted hover:text-matrix transition-colors duration-150 w-fit"
                    >
                      <span className="text-matrix select-none">[link] </span>
                      {label}
                    </a>
                  ))}
                </motion.div>

              </div>
            </div>

            {/* Terminal interactiva */}
            <motion.div
              className="px-5 py-4 border-t border-dark-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TerminalInput t={t.terminal} />
            </motion.div>

          </motion.div>
          )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
