import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AvailabilityBadge from './AvailabilityBadge'
import LangSwitch from './LangSwitch'

function MobileMenu({ isOpen, onClose, links }) {
  // Cerrar con ESC y bloquear scroll del body
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer — slide desde la derecha */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-72 bg-dark-surface border-l border-dark-border z-50 flex flex-col md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header del drawer */}
            <div className="flex items-center justify-between px-6 h-14 border-b border-dark-border shrink-0">
              <span className="font-mono text-xs text-matrix">// nav</span>
              <button
                onClick={onClose}
                className="text-dark-muted hover:text-matrix transition-colors duration-150 font-mono text-lg leading-none"
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* Links de navegación */}
            <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="font-mono text-lg text-dark-text hover:text-matrix transition-colors duration-150 flex items-center gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <span className="text-matrix text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-150">▸</span>
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* Footer del drawer */}
            <div className="px-6 py-6 border-t border-dark-border flex items-center justify-between shrink-0">
              <AvailabilityBadge />
              <LangSwitch />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
