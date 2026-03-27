import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

const cyberTheme = {
  light: [
    '#E2E8F0', // sin contribuciones → cool-gray
    '#b9f5c8', // nivel 1
    '#6DF07A', // nivel 2
    '#00FF41', // nivel 3
    '#00CC33', // nivel 4 (máximo)
  ],
}

const CURRENT_YEAR = new Date().getFullYear()
// Años disponibles desde 2024 hasta el año actual
const YEARS = Array.from(
  { length: CURRENT_YEAR - 2024 + 1 },
  (_, i) => 2024 + i
)

function GithubActivity() {
  const { lang } = useLang()
  const t = translations[lang].github
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR)

  const totalCountLabel = lang === 'es'
    ? `{{count}} contribuciones en ${selectedYear}`
    : `{{count}} contributions in ${selectedYear}`

  return (
    <section id="activity" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
          {t.label}
        </span>

        {/* Cabecera con título y selector de año */}
        <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-sans">
            {t.title}
          </h2>

          {/* Tabs de año — estilo GitHub */}
          <div className="flex items-center gap-1">
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`font-mono text-xs px-3 py-1.5 border transition-colors duration-150 ${
                  selectedYear === year
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-500 border-cool-gray hover:border-black hover:text-black'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-cool-gray p-6 bg-[#FAFAFA] overflow-x-auto">
          <GitHubCalendar
            username="DeibyGS"
            year={selectedYear}
            theme={cyberTheme}
            colorScheme="light"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#6B7280' }}
            labels={{ totalCount: totalCountLabel }}
          />
        </div>

        <p className="font-mono text-xs text-gray-400 mt-3">
          <a
            href="https://github.com/DeibyGS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-matrix transition-colors duration-150"
          >
            github.com/DeibyGS ↗
          </a>
        </p>
      </div>
    </section>
  )
}

export default GithubActivity
