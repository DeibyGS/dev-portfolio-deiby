import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import { experience } from '../data/experience'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

function Experience() {
  const { lang } = useLang()
  const t = translations[lang].experience
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section id="experience" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-card">
            <TerminalHeader filename="experience.sh" command="git log --oneline" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

            <AnimatePresence initial={false}>
            {!collapsed && (
            <motion.div
              key="experience-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >

              <motion.div
                className="px-5 py-5 flex flex-col gap-6"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {experience.map((job, index) => {
                  const role = lang === 'en' && job.roleEn ? job.roleEn : job.role
                  const meta = lang === 'en' && job.metaEn ? job.metaEn : job.meta
                  const bullets = lang === 'en' && job.bulletsEn ? job.bulletsEn : job.bullets

                  return (
                    <motion.article
                      key={job.id}
                      variants={itemVariants}
                      className={`flex flex-col gap-2 ${index > 0 ? 'border-t border-dark-border pt-6' : ''}`}
                    >
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-mono text-xs text-matrix shrink-0">[job]</span>
                        <h3 className="font-sans text-sm font-semibold text-dark-text leading-snug">
                          {role}
                        </h3>
                      </div>

                      <span className="font-mono text-xs text-dark-muted">{meta}</span>

                      <ul className="flex flex-col gap-1.5 mt-1">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 items-baseline">
                            <span className="font-mono text-xs text-matrix shrink-0">-&gt;</span>
                            <span className="text-sm text-dark-muted leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-1">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs border border-dark-border text-dark-muted px-2 py-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  )
                })}
              </motion.div>

              <div className="px-5 py-3 border-t border-dark-border flex items-center gap-2">
                <span className="font-mono text-xs text-matrix">✓</span>
                <span className="font-mono text-xs text-dark-muted">
                  {t.entries(experience.length)}
                </span>
              </div>

            </motion.div>
            )}
            </AnimatePresence>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Experience
