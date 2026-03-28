import { availabilityStatus } from '../data/availability'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

const config = {
  available_remote: { dotClass: 'bg-matrix animate-pulse', textClass: 'text-matrix' },
  available_onsite: { dotClass: 'bg-matrix animate-pulse', textClass: 'text-matrix' },
  not_available:    { dotClass: 'bg-red-500', textClass: 'text-red-500' },
}

function AvailabilityBadge() {
  const { lang } = useLang()
  const t = translations[lang]
  const { dotClass, textClass } = config[availabilityStatus]
  const label = t.availability[availabilityStatus]

  return (
    <div className="flex items-center gap-1.5 text-xs font-mono">
      <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass}`} />
      <span className={textClass}>{label}</span>
    </div>
  )
}

export default AvailabilityBadge
