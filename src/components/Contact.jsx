import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

function Contact() {
  const { lang } = useLang()
  const t = translations[lang].contact
  const [copied, setCopied] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText('deibygorrin@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-surface">

            <TerminalHeader filename="contact.sh" command="ssh deiby@contact" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

            <AnimatePresence initial={false}>
            {!collapsed && (
            <motion.div
              key="contact-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >

            {/* Body */}
            <motion.div
              className="px-5 py-8 flex flex-col gap-6"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants} className="font-mono text-sm text-dark-muted">
                <span className="text-matrix">[&gt;] </span>
                {t.subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <a href="https://www.linkedin.com/in/deibygorrin" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit">
                  <span className="font-mono text-xs text-dark-muted group-hover:text-matrix transition-colors duration-150 select-none">[link]</span>
                  <span className="flex items-center gap-2 bg-matrix text-dark-bg font-semibold px-5 py-2.5 text-sm border border-matrix group-hover:bg-transparent group-hover:text-matrix transition-all duration-150">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </span>
                </a>

                <a href="https://github.com/DeibyGS" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 group w-fit">
                  <span className="font-mono text-xs text-dark-muted group-hover:text-matrix transition-colors duration-150 select-none">[link]</span>
                  <span className="flex items-center gap-2 border border-dark-border text-dark-muted font-medium px-5 py-2.5 text-sm group-hover:border-matrix group-hover:text-matrix transition-all duration-150">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </span>
                </a>

                <div className="flex items-center gap-3 group w-fit">
                  <span className="font-mono text-xs text-dark-muted select-none">[mail]</span>
                  <a href="mailto:deibygorrin@gmail.com"
                    className="font-mono text-sm text-dark-muted hover:text-matrix transition-colors duration-150">
                    deibygorrin@gmail.com
                  </a>
                  <button
                    onClick={handleCopy}
                    className="font-mono text-xs border px-2 py-0.5 transition-all duration-150 shrink-0"
                    style={copied
                      ? { borderColor: '#00FF41', color: '#00FF41' }
                      : { borderColor: '#2A2A2A', color: '#6B6B6B' }
                    }
                    aria-label="Copiar email"
                  >
                    {copied ? t.copied : t.copy}
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-dark-border">
              <span className="font-mono text-xs text-dark-muted">
                <span className="text-matrix/70">connection</span>
                {'    '}
                {t.connection}
              </span>
            </div>

            </motion.div>
            )}
            </AnimatePresence>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Contact
