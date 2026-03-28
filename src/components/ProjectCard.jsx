function ProjectCard({ project, lang, featured }) {
  const { name, description, descriptionEn, stack, githubUrl, liveUrl, imageUrl } = project
  const desc = lang === 'en' && descriptionEn ? descriptionEn : description

  return (
    <article className={`bg-dark-card p-6 flex flex-col gap-4 group hover:bg-dark-surface transition-all duration-150 ${featured ? 'md:col-span-2' : ''}`}>
      {/* Image area con overlay hover */}
      <div className="aspect-video w-full overflow-hidden border border-dark-border relative">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            {/* Overlay con gradiente — se desvanece en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full bg-dark-surface flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"
              className="text-dark-border">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18M3 3v18" />
            </svg>
          </div>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono font-bold text-dark-text text-lg">{name}</h3>
        <div className="flex items-center gap-3 shrink-0">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`Ver ${name} en GitHub`}
            className="text-dark-muted hover:text-matrix transition-colors duration-150">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`Ver demo de ${name}`}
              className="text-dark-muted hover:text-matrix transition-colors duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-dark-muted leading-relaxed flex-1">{desc}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {stack.map((tech) => (
          <span key={tech}
            className="font-mono text-xs border border-dark-border text-dark-muted px-2 py-0.5 group-hover:border-matrix/40 transition-colors duration-150">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
