import { useEffect } from 'react'

function CertModal({ cert, onClose }) {
  // Cerrar con tecla ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal — detener propagación para no cerrar al hacer click dentro */}
      <div
        className="bg-white border border-black w-full max-w-4xl flex flex-col"
        style={{ height: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header estilo terminal */}
        <div className="flex items-center justify-between border-b border-black px-4 py-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-matrix">▸</span>
            <span className="font-mono text-xs text-black truncate max-w-xs sm:max-w-md">
              {cert.name}
            </span>
            <span className="font-mono text-xs text-gray-400">{cert.org} · {cert.year}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {/* Botón descarga */}
            <a
              href={cert.pdfUrl}
              download
              className="font-mono text-xs text-gray-500 hover:text-matrix transition-colors duration-150 flex items-center gap-1"
              title="Descargar PDF"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              descargar
            </a>
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="font-mono text-sm text-black hover:text-matrix transition-colors duration-150 leading-none"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Iframe PDF */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={cert.pdfUrl}
            title={cert.name}
            className="w-full h-full"
          />
        </div>

        {/* Footer fallback para móvil */}
        <div className="border-t border-cool-gray px-4 py-2 shrink-0 flex items-center justify-between">
          <span className="font-mono text-xs text-gray-400">
            ESC para cerrar · click fuera para cerrar
          </span>
          <a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-gray-500 hover:text-matrix transition-colors duration-150"
          >
            abrir en nueva pestaña ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default CertModal
