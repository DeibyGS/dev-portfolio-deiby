import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'

const cyberTheme = {
  light: [
    '#2A2A2A', // sin contribuciones → dark-border
    '#003d10',
    '#006622',
    '#00AA2E',
    '#00FF41', // máximo → matrix green
  ],
}

const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: CURRENT_YEAR - 2024 + 1 }, (_, i) => 2024 + i)

function GithubActivity() {
  const { lang } = useLang()
  const t = translations[lang].github
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR)

  const totalCountLabel = lang === 'es'
    ? `{{count}} contribuciones en ${selectedYear}`
    : `{{count}} contributions in ${selectedYear}`

  return (
    <section id="activity" className="bg-dark-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
            {t.label}
          </span>

          <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text font-sans">
              {t.title}
            </h2>

            <div className="flex items-center gap-1">
              {YEARS.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`font-mono text-xs px-3 py-1.5 border transition-colors duration-150 ${
                    selectedYear === year
                      ? 'bg-matrix text-dark-bg border-matrix'
                      : 'bg-transparent text-dark-muted border-dark-border hover:border-matrix hover:text-matrix'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border p-6 bg-dark-card overflow-x-auto">
            <GitHubCalendar
              username="DeibyGS"
              year={selectedYear}
              theme={cyberTheme}
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              style={{ fontFamily: 'JetBrains Mono, monospace', color: '#6B6B6B' }}
              labels={{ totalCount: totalCountLabel }}
            />
          </div>

          <p className="font-mono text-xs text-dark-muted mt-3">
            <a
              href="https://github.com/DeibyGS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-matrix transition-colors duration-150"
            >
              github.com/DeibyGS ↗
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default GithubActivity
