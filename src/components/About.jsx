import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function About() {
  const { lang } = useLang()
  const t = translations[lang]
  const ta = t.about
  const bio = t.hero

  return (
    <section id="about" className="bg-[#FAFAFA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
          {ta.label}
        </span>

        {/* Grid 2 columnas separadas por línea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cool-gray border border-cool-gray">

          {/* Panel izquierdo — Bio */}
          <div className="bg-white p-8 flex flex-col gap-5">
            {/* Barra de terminal */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="font-mono text-xs text-gray-400 ml-2">{ta.terminalFile}</span>
            </div>

            {/* Líneas de inicialización */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-matrix">{ta.initLine}</span>
              <span className="font-mono text-xs text-gray-400">{ta.nameLine}</span>
              <span className="font-mono text-xs text-gray-400">{ta.roleLine}</span>
            </div>

            {/* Separador */}
            <div className="border-t border-cool-gray" />

            {/* Bio */}
            <p className="text-sm text-gray-700 leading-relaxed">{bio.bio1}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{bio.bio2}</p>
          </div>

          {/* Panel derecho — Skills [OK] */}
          <div className="bg-white p-8 flex flex-col gap-6">
            {/* Barra de terminal */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="w-2.5 h-2.5 rounded-full bg-cool-gray" />
              <span className="font-mono text-xs text-gray-400 ml-2">skills.sh</span>
            </div>

            <span className="font-mono text-xs text-matrix">{ta.skillsCmd}</span>

            {/* Grupos de habilidades */}
            {ta.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                  {group.title}
                </span>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-mono text-sm text-black">
                      <span className="text-matrix shrink-0">[OK]</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
