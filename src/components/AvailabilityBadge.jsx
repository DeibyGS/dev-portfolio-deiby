import { availabilityStatus } from '../data/availability'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

const config = {
  available_remote: { dotClass: 'bg-green-400 animate-pulse', textClass: 'text-green-400' },
  available_onsite: { dotClass: 'bg-green-400 animate-pulse', textClass: 'text-green-400' },
  not_available:    { dotClass: 'bg-red-400', textClass: 'text-red-400' },
}

function AvailabilityBadge() {
  const { lang } = useLang()
  const t = translations[lang]
  const { dotClass, textClass } = config[availabilityStatus]
  const label = t.availability[availabilityStatus]

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass}`} />
      <span className={textClass}>{label}</span>
    </div>
  )
}

export default AvailabilityBadge
