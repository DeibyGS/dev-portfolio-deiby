import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'

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

  return (
    <section id="activity" className="bg-dark-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text font-sans mb-10">
            {t.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-card">

            {/* Terminal header */}
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-dark-border">
              <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
              <span className="font-mono text-xs text-dark-muted ml-2">activity.sh</span>
            </div>

            {/* Comando con selector de año inline */}
            <div className="px-5 py-4 border-b border-dark-border flex items-center gap-2 flex-wrap">
              <span className="font-mono text-sm">
                <span className="text-matrix">$ </span>
                <span className="text-dark-text">git log --contributions --year=</span>
              </span>
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
            </div>

            {/* Calendario */}
            <div className="px-5 py-6 overflow-x-auto">
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
            </div>

            {/* Footer estilo git remote */}
            <div className="px-5 py-3 border-t border-dark-border flex items-center justify-between flex-wrap gap-2">
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
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default GithubActivity
