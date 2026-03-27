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
    <section id="skills" className="bg-[#FAFAFA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
          {t.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black font-sans mb-12">
          {t.title}
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {techs.map(({ label, icon, fallbackText }) => (
            <div key={label} className="flex flex-col items-center gap-2 group cursor-default">
              {icon ? (
                <img
                  src={`${DEVICON_BASE}/${icon}`}
                  alt={label}
                  width={40}
                  height={40}
                  className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-150"
                />
              ) : (
                <div className="w-10 h-10 border border-black flex items-center justify-center text-black text-xs font-mono font-bold">
                  {fallbackText}
                </div>
              )}
              <span className="font-mono text-xs text-gray-500 group-hover:text-black transition-colors duration-150 text-center leading-tight">
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
