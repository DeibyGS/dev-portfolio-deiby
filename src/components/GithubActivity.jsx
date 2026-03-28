import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

const cyberTheme = {
  dark: [
    '#1a1a1a',
    '#003d10',
    '#006622',
    '#00AA2E',
    '#00FF41',
  ],
}

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: CURRENT_YEAR - 2024 + 1 }, (_, i) => 2024 + i)

function GithubActivity() {
  const { lang } = useLang()
  const t = translations[lang].github
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section id="activity" className="bg-dark-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-card">

            <TerminalHeader filename="activity.sh" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

            <AnimatePresence initial={false}>
            {!collapsed && (
            <motion.div
              key="activity-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >

            <motion.div variants={listVariants} initial="hidden" animate="visible">

            {/* Comando con selector de año inline */}
            <motion.div variants={itemVariants} className="px-5 py-4 border-b border-dark-border flex items-center gap-2 flex-wrap">
              <span className="font-mono text-sm">
                <span className="text-matrix">$ </span>
                <span className="text-dark-text">git log --contributions --year=</span>
              </span>
              <span className="font-mono text-sm text-matrix animate-pulse">▌</span>
              <div className="flex items-center gap-1">
                {YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`font-mono text-xs px-2 py-0.5 border transition-colors duration-150 ${
                      selectedYear === year
                        ? 'border-matrix text-matrix bg-matrix/10'
                        : 'border-dark-border text-dark-muted hover:border-matrix hover:text-matrix'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Calendario */}
            <motion.div variants={itemVariants} className="px-5 py-6 overflow-x-auto">
              <GitHubCalendar
                username="DeibyGS"
                year={selectedYear}
                theme={cyberTheme}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#6B6B6B' }}
                labels={{
                  totalCount: lang === 'es'
                    ? `{{count}} contribuciones en ${selectedYear}`
                    : `{{count}} contributions in ${selectedYear}`,
                }}
              />
            </motion.div>

            {/* Footer estilo git remote */}
            <motion.div variants={itemVariants} className="px-5 py-3 border-t border-dark-border flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs text-dark-muted">
                  <span className="text-matrix/70">remote</span>
                  {'    '}
                  git@github.com:DeibyGS.git
                </span>
                <span className="font-mono text-xs text-dark-muted">
                  <span className="text-matrix/70">branch</span>
                  {'    '}
                  main
                </span>
              </div>
              <a
                href="https://github.com/DeibyGS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dark-muted hover:text-matrix transition-colors duration-150"
              >
                github.com/DeibyGS ↗
              </a>
            </motion.div>

            </motion.div>
            </motion.div>
            )}
            </AnimatePresence>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default GithubActivity
