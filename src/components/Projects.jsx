import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

function Projects() {
  const { lang } = useLang()
  const t = translations[lang].projects
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section id="projects" className="bg-dark-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-dark-border bg-dark-card">

            <TerminalHeader filename="projects.sh" command="ls -la ./projects" collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />

            <AnimatePresence initial={false}>
            {!collapsed && (
            <motion.div
              key="projects-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >

            {/* Bento Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={index === 0 ? 'md:col-span-2' : ''}
                >
                  <ProjectCard
                    project={project}
                    lang={lang}
                    featured={index === 0}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-dark-border">
              <span className="font-mono text-xs text-dark-muted">
                <span className="text-matrix/70">{projects.length} entries</span>

                {'    '}
                {t.github.toLowerCase().replace('ver en ', '').replace('view on ', '')} →{' '}
                <a
                  href="https://github.com/DeibyGS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-matrix transition-colors duration-150"
                >
                  github.com/DeibyGS
                </a>
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

export default Projects
