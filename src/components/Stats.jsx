import FadeIn from './FadeIn'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function Stats() {
  const { lang } = useLang()
  const t = translations[lang].stats

  return (
    <section className="bg-dark-surface border-y border-dark-border py-10 px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-matrix">
                {item.value}
              </span>
              <span className="font-mono text-xs text-dark-muted uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

export default Stats
