import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import TerminalHeader from './TerminalHeader'

function Stats() {
  const { lang } = useLang()
  const t = translations[lang].stats
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section className="bg-dark-surface border-y border-dark-border">
      <FadeIn>
        <div className="max-w-6xl mx-auto border-x border-dark-border">

          <TerminalHeader filename="stats.sh" command="uptime --portfolio" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

          <AnimatePresence initial={false}>
          {!collapsed && (
          <motion.div
            key="stats-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-dark-border">
              {t.items.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 py-8 px-4">
                  <span className="font-mono text-3xl md:text-4xl font-bold text-matrix">
                    {item.value}
                  </span>
                  <span className="font-mono text-xs text-dark-muted uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          )}
          </AnimatePresence>

        </div>
      </FadeIn>
    </section>
  )
}

export default Stats
