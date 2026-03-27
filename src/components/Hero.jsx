import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import { availabilityStatus } from '../data/availability'

function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero

  const terminalLines = [
    `role: "Fullstack Developer"`,
    `status: "${availabilityStatus}"`,
    `stack: ["React", "Python", "Node.js", "..."]`,
  ]

  return (
    <section id="hero" className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-14">
      {/* Avatar — más grande, sin grayscale */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src="/avatar-deiby.png"
          alt="Deiby Gorrin"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-matrix"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text font-sans mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Deiby Gorrin
      </motion.h1>

      {/* Terminal block */}
      <motion.div
        className="font-mono text-sm text-dark-muted text-left bg-dark-surface border border-dark-border px-4 py-3 mb-6 max-w-sm w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {terminalLines.map((line, i) => (
          <div key={i} className="leading-relaxed">
            <span className="text-matrix select-none">› </span>{line}
          </div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-base md:text-lg text-dark-muted max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        {t.description}
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#projects"
        className="inline-block bg-matrix text-dark-bg font-semibold px-6 py-3 text-sm border border-matrix hover:bg-transparent hover:text-matrix transition-all duration-150 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {t.cta}
      </motion.a>

      {/* Social links */}
      <motion.div
        className="flex items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <a href="https://github.com/DeibyGS" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-muted hover:text-matrix transition-colors duration-150 text-sm font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/deibygorrin" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-dark-muted hover:text-matrix transition-colors duration-150 text-sm font-medium">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
