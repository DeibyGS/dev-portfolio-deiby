import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

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
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 divide-x divide-dark-border"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {t.items.map((item) => (
                <motion.div key={item.label} variants={itemVariants} className="flex flex-col items-center gap-1 py-8 px-4">
                  <span className="font-mono text-3xl md:text-4xl font-bold text-matrix">
                    {item.value}
                  </span>
                  <span className="font-mono text-xs text-dark-muted uppercase tracking-widest">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          )}
          </AnimatePresence>

        </div>
      </FadeIn>
    </section>
  )
}

export default Stats
