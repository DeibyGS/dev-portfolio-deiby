import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const techs = [
  { label: 'JavaScript',   icon: 'javascript/javascript-original.svg' },
  { label: 'HTML5',        icon: 'html5/html5-original.svg' },
  { label: 'CSS3',         icon: 'css3/css3-original.svg' },
  { label: 'React',        icon: 'react/react-original.svg' },
  { label: 'React Native', icon: 'react/react-original.svg' },
  { label: 'Angular',      icon: 'angularjs/angularjs-original.svg' },
  { label: 'Tailwind',     icon: 'tailwindcss/tailwindcss-original.svg' },
  { label: 'SCSS',         icon: 'sass/sass-original.svg' },
  { label: 'Node.js',      icon: 'nodejs/nodejs-original.svg' },
  { label: 'Python',       icon: 'python/python-original.svg' },
  { label: 'FastAPI',      icon: 'fastapi/fastapi-original.svg' },
  { label: 'MongoDB',      icon: 'mongodb/mongodb-original.svg' },
  { label: 'PostgreSQL',   icon: 'postgresql/postgresql-original.svg' },
  { label: 'MySQL',        icon: 'mysql/mysql-original.svg' },
  { label: 'Docker',       icon: 'docker/docker-original.svg' },
  { label: 'Git',          icon: 'git/git-original.svg' },
  { label: 'Oracle SQL',   icon: null, fallbackText: 'ORA' },
  { label: 'Power BI',     icon: null, fallbackText: 'PBI' },
]

function TechStack() {
  const { lang } = useLang()
  const t = translations[lang].skills

  return (
    <section id="skills" className="bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
          {t.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          {t.title}
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {techs.map(({ label, icon, fallbackText }) => (
            <div key={label} className="flex flex-col items-center gap-2 group">
              {icon ? (
                <img
                  src={`${DEVICON_BASE}/${icon}`}
                  alt={label}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              ) : (
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 text-xs font-bold">
                  {fallbackText}
                </div>
              )}
              <span className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
