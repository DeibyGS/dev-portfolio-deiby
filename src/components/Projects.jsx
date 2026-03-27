import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import FadeIn from './FadeIn'

function Projects() {
  const { lang } = useLang()
  const t = translations[lang].projects

  return (
    <section id="projects" className="bg-dark-surface py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text font-sans mb-12">
            {t.title}
          </h2>
        </FadeIn>

        {/* Bento Grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border border border-dark-border">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={index === 0}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Projects
