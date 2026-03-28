import { motion } from 'framer-motion'

/**
 * Wrapper reutilizable — fade + slide-up al entrar en el viewport.
 * Props:
 *   delay  — retraso en segundos (default 0)
 *   y      — desplazamiento vertical inicial (default 24)
 *   className — clases extra para el div contenedor
 */
function FadeIn({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
