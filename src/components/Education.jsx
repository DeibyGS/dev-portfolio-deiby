import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import CertModal from './CertModal'
import FadeIn from './FadeIn'
import TerminalHeader from './TerminalHeader'
import { listVariants, itemVariants } from '../animations'

const courses = [
  {
    pkg: 'dam',
    version: '2024.0',
    title: 'Grado Superior: Desarrollo de Aplicaciones Multiplataforma',
    institution: 'The Power · Madrid',
    inProgress: true,
    bar: 8,   // bloques completados sobre 10
  },
  {
    pkg: 'fullstack-master',
    version: '2024.0',
    title: 'Máster Web Full Stack',
    institution: 'The Power · Madrid',
    inProgress: true,
    bar: 8,
  },
  {
    pkg: 'oracle-epm',
    version: '2025.1',
    title: 'Especialista en informes empresariales Oracle EPM',
    institution: 'Cas-Training · Madrid',
    inProgress: false,
    bar: 10,
  },
  {
    pkg: 'oracle-sql-plsql',
    version: '2025.2',
    title: 'Desarrollador Oracle SQL-PL/SQL',
    institution: 'Cas-Training · Madrid',
    inProgress: false,
    bar: 10,
  },
  {
    pkg: 'web-ifcd0110',
    version: '2025.0',
    title: 'Confección y publicación de páginas web (IFCD0110)',
    institution: 'Dabo Consulting',
    inProgress: false,
    bar: 10,
  },
]

const certifications = [
  { pkg: 'ibm-ai-fundamentals',     label: 'Artificial Intelligence Fundamentals',                       org: 'IBM',    year: '2026', pdfUrl: '/IBM_Artificial_Intelligence_Fundamentals.pdf' },
  { pkg: 'oracle-sql-23ai',         label: 'Oracle Database 23ai SQL Certified Associate',               org: 'Oracle', year: '2025', pdfUrl: '/OracleDatabase23aiSQL.pdf' },
  { pkg: 'oracle-oci-ai-foundations',label: 'OCI 2025 Certified AI Foundations Associate',               org: 'Oracle', year: '2025', pdfUrl: '/OracleCloud2025AIFoundations.pdf' },
  { pkg: 'oracle-data-science',     label: 'OCI 2025 Data Science Professional',                         org: 'Oracle', year: '2025', pdfUrl: '/OracleCloud2025DataScienceProfessional.pdf' },
]

function getBar(filled) {
  return '█'.repeat(filled) + '░'.repeat(10 - filled)
}

function Education() {
  const { lang } = useLang()
  const t = translations[lang].education
  const [selectedCert, setSelectedCert] = useState(null)
  const [collapsedEdu, setCollapsedEdu] = useState(false)
  const [collapsedCerts, setCollapsedCerts] = useState(false)

  return (
    <section id="education" className="bg-dark-bg py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-10 block">
            {t.label}
          </span>
        </FadeIn>

        <div className="flex flex-col gap-4">

          {/* Bloque 1 — Formación */}
          <FadeIn delay={0.1}>
            <div className="border border-dark-border bg-dark-card">

              <TerminalHeader filename="education.sh" command="npm run load-education" collapsed={collapsedEdu} onToggle={() => setCollapsedEdu(c => !c)} />

              <AnimatePresence initial={false}>
              {!collapsedEdu && (
              <motion.div key="edu-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: 'hidden' }}>

              {/* Lista de cursos */}
              <motion.div
                className="px-5 py-5 flex flex-col gap-4"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {courses.map(({ pkg, version, title, institution, inProgress, bar }) => (
                  <motion.div key={pkg} variants={itemVariants} className="flex flex-col gap-1">
                    {/* Línea principal */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-matrix shrink-0">
                        {inProgress ? '[~]' : '[✓]'}
                      </span>
                      <span className="font-mono text-xs text-dark-text shrink-0">
                        {pkg}
                        <span className="text-dark-muted">@{version}</span>
                      </span>

                      {/* Barra — oculta en mobile */}
                      <span className="font-mono text-xs text-matrix/70 tracking-tighter hidden sm:block">
                        {getBar(bar)}
                      </span>

                      {/* Badge en curso */}
                      {inProgress && (
                        <span className="font-mono text-xs border border-matrix text-matrix px-1 shrink-0 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-matrix animate-pulse inline-block" />
                          {t.inProgress}
                        </span>
                      )}
                    </div>

                    {/* Subtítulo y institución */}
                    <div className="pl-6 flex flex-col gap-0.5">
                      <span className="font-sans text-xs text-dark-text leading-snug">{title}</span>
                      <span className="font-mono text-xs text-dark-muted">{institution}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-dark-border">
                <span className="font-mono text-xs text-matrix">✓ </span>
                <span className="font-mono text-xs text-dark-muted">
                  {lang === 'es' ? `${courses.length} cursos cargados` : `${courses.length} courses loaded`}
                </span>
              </div>

              </motion.div>
              )}
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Bloque 2 — Certificaciones */}
          <FadeIn delay={0.15}>
            <div className="border border-dark-border bg-dark-card">

              <TerminalHeader filename="certs.sh" command="npm run verify-certs" collapsed={collapsedCerts} onToggle={() => setCollapsedCerts(c => !c)} />

              <AnimatePresence initial={false}>
              {!collapsedCerts && (
              <motion.div key="certs-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: 'hidden' }}>

              {/* Lista de certificaciones */}
              <motion.div
                className="px-5 py-5 flex flex-col gap-3"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {certifications.map((cert) => (
                  <motion.div key={cert.pkg} variants={itemVariants}>
                  <button
                    key={cert.pkg}
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-2 group text-left w-full hover:bg-dark-surface transition-colors duration-150 rounded-none px-1 -mx-1"
                  >
                    {/* Prefix */}
                    <span className="font-mono text-xs text-matrix shrink-0">[cert]</span>

                    {/* Nombre del paquete */}
                    <span className="font-mono text-xs text-dark-text shrink-0 w-44 truncate">
                      {cert.pkg}
                    </span>

                    {/* Org · año */}
                    <span className="font-mono text-xs text-dark-muted shrink-0 hidden sm:block w-24">
                      {cert.org} · {cert.year}
                    </span>

                    {/* Verified */}
                    <span className="font-mono text-xs text-matrix shrink-0">✓ verified</span>

                    {/* Ver PDF — aparece en hover */}
                    <span className="font-mono text-xs text-dark-muted group-hover:text-matrix transition-colors duration-150 ml-auto shrink-0 flex items-center gap-1">
                      <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        {lang === 'es' ? 'ver PDF' : 'view PDF'}
                      </span>
                      <span>↗</span>
                    </span>
                  </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-dark-border">
                <span className="font-mono text-xs text-matrix">✓ </span>
                <span className="font-mono text-xs text-dark-muted">
                  {lang === 'es'
                    ? `${certifications.length} certificados verificados`
                    : `${certifications.length} certificates verified`}
                </span>
              </div>

              </motion.div>
              )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Modal PDF */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  )
}

export default Education
