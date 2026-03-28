import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// level: 0-100
const techs = [
  { label: 'HTML5',        src: `${D}/html5/html5-original.svg`,             level: 88 },
  { label: 'CSS3',         src: `${D}/css3/css3-original.svg`,               level: 85 },
  { label: 'JavaScript',   src: `${D}/javascript/javascript-original.svg`,   level: 80 },
  { label: 'TypeScript',   src: `${D}/typescript/typescript-original.svg`,   level: 65 },
  { label: 'React',        src: `${D}/react/react-original.svg`,             level: 82 },
  { label: 'React Native', src: `${D}/react/react-original.svg`,             level: 52 },
  { label: 'Tailwind',     src: `${D}/tailwindcss/tailwindcss-original.svg`, level: 45 },
  { label: 'SCSS',         src: `${D}/sass/sass-original.svg`,               level: 80 },
  { label: 'Node.js',      src: `${D}/nodejs/nodejs-original.svg`,           level: 68 },
  { label: 'Python',       src: `${D}/python/python-original.svg`,           level: 70 },
  { label: 'FastAPI',      src: `${D}/fastapi/fastapi-original.svg`,         level: 45 },
  { label: 'MongoDB',      src: `${D}/mongodb/mongodb-original.svg`,         level: 62 },
  { label: 'PostgreSQL',   src: `${D}/postgresql/postgresql-original.svg`,   level: 60 },
  { label: 'MySQL',        src: `${D}/mysql/mysql-original.svg`,             level: 63 },
  { label: 'Oracle SQL',   src: `${D}/oracle/oracle-original.svg`,           level: 65 },
  { label: 'Docker',       src: `${D}/docker/docker-original.svg`,           level: 58 },
  { label: 'Git',          src: `${D}/git/git-original.svg`,                 level: 80 },
  { label: 'Power BI',     src: 'https://img.icons8.com/color/48/power-bi.png', level: 65 },
]

function getBar(level) {
  const filled = Math.round(level / 10)
  return '█'.repeat(filled) + '░'.repeat(10 - filled)
}

function getLevelLabel(level, lang) {
  if (level >= 75) return lang === 'es' ? 'avanzado'     : 'advanced'
  if (level >= 55) return lang === 'es' ? 'intermedio'   : 'intermediate'
  return                  lang === 'es' ? 'aprendiendo'  : 'learning'
}

function getLevelColor(level) {
  if (level >= 75) return 'text-matrix border-matrix/50'
  if (level >= 55) return 'text-dark-muted border-dark-border'
  return 'text-dark-muted/60 border-dark-border/60'
}

function TechStack() {
  const { lang } = useLang()
  const t = translations[lang].skills

  return (
    <section id="skills" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
              <span className="font-mono text-xs text-dark-muted ml-2">skills.sh</span>
            </div>

            {/* Comando */}
            <div className="px-5 py-4 border-b border-dark-border">
              <span className="font-mono text-sm">
                <span className="text-matrix">$ </span>
                <span className="text-dark-text">npm run load-stack</span>
              </span>
            </div>

            {/* Lista de paquetes */}
            <div className="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {techs.map(({ label, src, level }) => (
                <div key={label} className="flex items-center gap-2 group">
                  {/* Prefijo */}
                  <span className="font-mono text-xs text-matrix shrink-0 w-5">[+]</span>

                  {/* Icono */}
                  <img
                    src={src}
                    alt={label}
                    width={16}
                    height={16}
                    className="w-4 h-4 shrink-0 object-contain"
                  />

                  {/* Nombre */}
                  <span className="font-mono text-xs text-dark-text w-24 shrink-0 truncate">
                    {label}
                  </span>

                  {/* Barra */}
                  <span className="font-mono text-xs text-matrix/70 tracking-tighter shrink-0 hidden sm:block">
                    {getBar(level)}
                  </span>

                  {/* Nivel */}
                  <span className={`font-mono text-xs border px-1 shrink-0 ml-auto ${getLevelColor(level)}`}>
                    {getLevelLabel(level, lang)}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-dark-border flex items-center gap-2">
              <span className="font-mono text-xs text-matrix">✓</span>
              <span className="font-mono text-xs text-dark-muted">
                {lang === 'es' ? `${techs.length} paquetes cargados` : `${techs.length} packages loaded`}
              </span>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default TechStack
