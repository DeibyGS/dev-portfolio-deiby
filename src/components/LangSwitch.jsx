import { useLang } from '../context/LangContext'

function LangSwitch() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLang('es')}
        className={`px-1.5 py-0.5 font-mono text-xs transition-colors duration-150 ${
          lang === 'es' ? 'text-dark-bg bg-dark-text' : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        ES
      </button>
      <span className="text-dark-border select-none font-mono text-xs">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-1.5 py-0.5 font-mono text-xs transition-colors duration-150 ${
          lang === 'en' ? 'text-dark-bg bg-dark-text' : 'text-dark-muted hover:text-dark-text'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LangSwitch
