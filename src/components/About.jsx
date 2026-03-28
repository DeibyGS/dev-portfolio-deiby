import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

function About() {
  const { lang } = useLang()
  const t = translations[lang]
  const ta = t.about
  const bio = t.hero
  const [collapsedBio, setCollapsedBio] = useState(false)
  const [collapsedSkills, setCollapsedSkills] = useState(false)

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

            {/* ── Panel izquierdo — Bio ── */}
            <div className="bg-dark-card flex flex-col">
              <TerminalHeader filename={ta.terminalFile} command={ta.profileCmd} collapsed={collapsedBio} onToggle={() => setCollapsedBio(c => !c)} />

              <AnimatePresence initial={false}>
              {!collapsedBio && (
              <motion.div key="bio-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: 'hidden' }}>

                <div className="px-5 py-6 flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-matrix">{ta.initLine}</span>
                    <span className="font-mono text-xs text-dark-muted">{ta.nameLine}</span>
                    <span className="font-mono text-xs text-dark-muted">{ta.roleLine}</span>
                  </div>
                  <div className="border-t border-dark-border" />
                  <p className="text-sm text-dark-muted leading-relaxed">{bio.bio1}</p>
                  <p className="text-sm text-dark-muted leading-relaxed">{bio.bio2}</p>
                </div>

                <div className="px-5 py-3 border-t border-dark-border">
                  <span className="font-mono text-xs text-dark-muted">
                    <span className="text-matrix/70">status</span>
                    {'    '}
                    available · open to work
                  </span>
                </div>

              </motion.div>
              )}
              </AnimatePresence>
            </div>

            {/* ── Panel derecho — Skills ── */}
            <div className="bg-dark-card flex flex-col">
              <TerminalHeader filename={ta.skillsFile} command={ta.skillsCmd} collapsed={collapsedSkills} onToggle={() => setCollapsedSkills(c => !c)} />

              <AnimatePresence initial={false}>
              {!collapsedSkills && (
              <motion.div key="skills-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: 'hidden' }}>

                <div className="px-5 py-6 flex flex-col gap-6">
                  {ta.groups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-dark-muted uppercase tracking-widest">
                        {group.title}
                      </span>
                      <motion.ul
                        className="flex flex-col gap-1.5"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                      >
                        {group.items.map((item) => (
                          <motion.li key={item} variants={itemVariants} className="font-mono text-sm text-dark-text flex items-baseline gap-2">
                            <span className="text-matrix shrink-0 leading-none">[OK]</span>
                            <span className="leading-snug">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-3 border-t border-dark-border">
                  <span className="font-mono text-xs text-dark-muted">
                    <span className="text-matrix/70">checks</span>
                    {'    '}
                    {ta.groups.reduce((acc, g) => acc + g.items.length, 0)} passed · 0 failed
                  </span>
                </div>

              </motion.div>
              )}
              </AnimatePresence>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About
