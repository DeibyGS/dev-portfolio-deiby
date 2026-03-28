import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

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
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section id="skills" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-card">

            <TerminalHeader filename="skills.sh" command="npm run load-stack" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

            <AnimatePresence initial={false}>
            {!collapsed && (
            <motion.div
              key="skills-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >

            {/* Lista de paquetes */}
            <motion.div
              className="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {techs.map(({ label, src, level }) => (
                <motion.div key={label} variants={itemVariants} className="flex items-center gap-2 group">
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
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-dark-border flex items-center gap-2">
              <span className="font-mono text-xs text-matrix">✓</span>
              <span className="font-mono text-xs text-dark-muted">
                {lang === 'es' ? `${techs.length} paquetes cargados` : `${techs.length} packages loaded`}
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

export default TechStack
