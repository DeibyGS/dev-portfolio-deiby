import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'
import CertModal from './CertModal'

const education = [
  { period: '02/2024 — hoy',     title: 'Grado Superior: Desarrollo de Aplicaciones Multiplataforma (DAM)', institution: 'The Power · Madrid', inProgress: true },
  { period: '02/2024 — hoy',     title: 'Máster Web Full Stack',                                            institution: 'The Power · Madrid', inProgress: true },
  { period: '09/2025 — 10/2025', title: 'Especialista en creación de informes empresariales Oracle (EPM)',  institution: 'Cas-Training · Madrid', inProgress: false },
  { period: '06/2025 — 07/2025', title: 'Curso Desarrollador Oracle SQL-PL/SQL',                            institution: 'Cas-Training · Madrid', inProgress: false },
  { period: '01/2025',           title: 'Confección y publicación de páginas web (IFCD0110)',                institution: 'Dabo Consulting', inProgress: false },
]

const certifications = [
  { name: 'Artificial Intelligence Fundamentals', org: 'IBM', year: '2026', pdfUrl: '/IBM_Artificial_Intelligence_Fundamentals.pdf' },
  { name: 'Oracle Database 23ai SQL Certified Associate', org: 'Oracle', year: '2025', pdfUrl: '/OracleDatabase23aiSQL.pdf' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', org: 'Oracle', year: '2025', pdfUrl: '/OracleCloud2025AIFoundations.pdf' },
  { name: 'Oracle Cloud Infrastructure 2025 Data Science Professional', org: 'Oracle', year: '2025', pdfUrl: '/OracleCloud2025DataScienceProfessional.pdf' },
]

function Education() {
  const { lang } = useLang()
  const t = translations[lang].education
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="education" className="bg-[#FAFAFA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-matrix uppercase tracking-widest mb-2 block">
          {t.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black font-sans mb-12">
          {t.title}
        </h2>

        {/* Timeline */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="font-mono text-xs text-gray-400 w-36 shrink-0 pt-1 leading-relaxed">
                {item.period}
              </span>
              <div>
                <p className="font-sans text-base font-semibold text-black">{item.title}</p>
                <p className="font-mono text-sm text-gray-500 mt-0.5">{item.institution}</p>
                {item.inProgress && (
                  <span className="inline-flex items-center font-mono text-xs px-2 py-0.5 border border-matrix text-matrix bg-transparent mt-1">
                    {t.inProgress}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="font-sans text-base font-semibold text-black mt-12 mb-4">
          {t.certTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="flex items-start gap-3 bg-white border border-cool-gray hover:border-black transition-colors duration-150 p-4 text-left group w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                className="text-matrix shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 3.99 8.093 3.99 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-sm font-medium text-black">{cert.name}</p>
                <p className="font-mono text-xs text-gray-400 mt-0.5">{cert.org} · {cert.year}</p>
              </div>
              {/* Indicador "ver" — aparece en hover */}
              <span className="font-mono text-xs text-matrix opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0 mt-0.5">
                ver ↗
              </span>
            </button>
          ))}
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
