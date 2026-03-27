import { GitHubCalendar } from 'react-github-calendar'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

// Tema alineado con la paleta Cyber-Minimalista
const cyberTheme = {
  light: [
    '#E2E8F0', // sin contribuciones → cool-gray
    '#b9f5c8', // nivel 1
    '#6DF07A', // nivel 2
    '#00FF41', // nivel 3
    '#00CC33', // nivel 4 (máximo)
  ],
}

function GithubActivity() {
  const { lang } = useLang()
  const t = translations[lang].github

  return (
    <section id="activity" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
          {t.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black font-sans mb-10">
          {t.title}
        </h2>

        <div className="border border-cool-gray p-6 bg-[#FAFAFA] overflow-x-auto">
          <GitHubCalendar
            username="DeibyGS"
            theme={cyberTheme}
            colorScheme="light"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#6B7280' }}
            labels={{
              totalCount: lang === 'es'
                ? '{{count}} contribuciones en el último año'
                : '{{count}} contributions in the last year',
            }}
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
