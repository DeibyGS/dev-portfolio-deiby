import { useLang } from '../context/LangContext'

function LangSwitch() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <button
        onClick={() => setLang('es')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'es' ? 'text-cyan-400 bg-slate-800' : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        ES
      </button>
      <span className="text-slate-600 select-none">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'en' ? 'text-cyan-400 bg-slate-800' : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LangSwitch
