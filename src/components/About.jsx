import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'

function About() {
  const { lang } = useLang()
  const t = translations[lang]
  const ta = t.about
  const bio = t.hero

  return (
    <section id="about" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {ta.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border border border-dark-border">

            {/* Panel izquierdo — Bio */}
            <div className="bg-dark-card p-8 flex flex-col gap-5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="font-mono text-xs text-dark-muted ml-2">{ta.terminalFile}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-matrix">{ta.initLine}</span>
                <span className="font-mono text-xs text-dark-muted">{ta.nameLine}</span>
                <span className="font-mono text-xs text-dark-muted">{ta.roleLine}</span>
              </div>

              <div className="border-t border-dark-border" />

              <p className="text-sm text-dark-muted leading-relaxed">{bio.bio1}</p>
              <p className="text-sm text-dark-muted leading-relaxed">{bio.bio2}</p>
            </div>

            {/* Panel derecho — Skills [OK] */}
            <div className="bg-dark-card p-8 flex flex-col gap-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-dark-border" />
                <span className="font-mono text-xs text-dark-muted ml-2">skills.sh</span>
              </div>

              <span className="font-mono text-xs text-matrix">{ta.skillsCmd}</span>

              {ta.groups.map((group) => (
                <div key={group.title} className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-dark-muted uppercase tracking-widest">
                    {group.title}
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-mono text-sm text-dark-text">
                        <span className="text-matrix shrink-0">[OK]</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About
