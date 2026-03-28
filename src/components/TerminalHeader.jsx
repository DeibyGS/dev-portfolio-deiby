// Cabecera reutilizable de panel terminal — estilo macOS
// - Hover: dots cambian a rojo/amarillo/verde y muestran ✕ / − / +
// - Click en amarillo: colapsa/expande el contenido del panel
function TerminalHeader({ filename, command, collapsed = false, onToggle }) {
  const canToggle = typeof onToggle === 'function'

  return (
    <>
      {/* Dots + nombre de archivo */}
      <div className="flex items-center gap-1.5 px-5 py-3 border-b border-dark-border group/header">

        {/* Rojo — ✕ (visual) */}
        <span className="relative w-2.5 h-2.5 rounded-full bg-dark-border transition-colors duration-150 group-hover/header:bg-[#FF5F57] flex items-center justify-center overflow-hidden shrink-0">
          <span className="opacity-0 group-hover/header:opacity-100 text-[#7A0000] text-[7px] font-black leading-none select-none transition-opacity duration-150">
            ✕
          </span>
        </span>

        {/* Amarillo — − colapsa / + expande */}
        <span
          onClick={canToggle ? onToggle : undefined}
          className={`relative w-2.5 h-2.5 rounded-full bg-dark-border transition-colors duration-150 group-hover/header:bg-[#FFBD2E] flex items-center justify-center overflow-hidden shrink-0 ${canToggle ? 'cursor-pointer' : ''}`}
          title={canToggle ? (collapsed ? 'Expandir' : 'Minimizar') : undefined}
        >
          <span className="opacity-0 group-hover/header:opacity-100 text-[#7A4500] text-[7px] font-black leading-none select-none transition-opacity duration-150">
            {collapsed ? '+' : '−'}
          </span>
        </span>

        {/* Verde — + (visual) */}
        <span className="relative w-2.5 h-2.5 rounded-full bg-dark-border transition-colors duration-150 group-hover/header:bg-[#28C840] flex items-center justify-center overflow-hidden shrink-0">
          <span className="opacity-0 group-hover/header:opacity-100 text-[#003A00] text-[7px] font-black leading-none select-none transition-opacity duration-150">
            +
          </span>
        </span>

        <span className="font-mono text-xs text-dark-muted ml-2">{filename}</span>
      </div>

      {/* Línea de comando con cursor — siempre visible */}
      {command && (
        <div className="px-5 py-3 border-b border-dark-border flex items-center">
          <span className="font-mono text-sm">
            <span className="text-matrix">$ </span>
            <span className="text-dark-text">{command}</span>
          </span>
          <span className="font-mono text-sm text-matrix animate-pulse ml-1">▌</span>
        </div>
      )}
    </>
  )
}

export default TerminalHeader
