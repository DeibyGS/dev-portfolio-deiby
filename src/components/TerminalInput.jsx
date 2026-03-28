import { useState, useRef } from 'react'

const SECTIONS = ['hero', 'about', 'projects', 'education', 'skills', 'activity', 'contact']
const COMMANDS = ['help', 'ls', 'goto', 'open', 'whoami', 'clear']

/**
 * Terminal interactiva inline para el Hero.
 * Props:
 *   t — objeto t.terminal de i18n (textos localizados)
 */
function TerminalInput({ t }) {
  const [input, setValue] = useState('')
  const [output, setOutput] = useState([])
  const [showHint, setShowHint] = useState(true)
  const historyRef = useRef([])   // comandos ejecutados
  const histIndexRef = useRef(-1) // posición actual en historial
  const inputRef = useRef(null)

  function execute(raw) {
    const cmd = raw.trim()
    if (!cmd) return

    // Añadir al historial
    historyRef.current = [cmd, ...historyRef.current]
    histIndexRef.current = -1

    // Eco del comando
    const echo = [{ text: `$ ${cmd}`, type: 'echo' }]

    const [base, ...args] = cmd.toLowerCase().split(/\s+/)

    if (base === 'clear') {
      setOutput([])
      setValue('')
      return
    }

    let result = []

    if (base === 'help') {
      result = t.help.map(line => ({ text: line, type: 'default' }))
    } else if (base === 'ls') {
      result = [{ text: t.ls.join('  '), type: 'matrix' }]
    } else if (base === 'whoami') {
      result = t.whoami.map(line => ({ text: line, type: 'default' }))
    } else if (base === 'goto') {
      const section = args[0]
      if (!section) {
        result = [{ text: t.gotoUnknown(''), type: 'error' }]
      } else if (!SECTIONS.includes(section)) {
        result = [{ text: t.gotoUnknown(section), type: 'error' }]
      } else {
        result = [{ text: t.goto(section), type: 'matrix' }]
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    } else if (base === 'open') {
      const target = args[0]
      if (target === 'github') {
        result = [{ text: t.opening('github.com/DeibyGS'), type: 'matrix' }]
        setTimeout(() => window.open('https://github.com/DeibyGS', '_blank', 'noopener,noreferrer'), 150)
      } else if (target === 'linkedin') {
        result = [{ text: t.opening('linkedin.com/in/deibygorrin'), type: 'matrix' }]
        setTimeout(() => window.open('https://www.linkedin.com/in/deibygorrin', '_blank', 'noopener,noreferrer'), 150)
      } else {
        result = [{ text: t.notFound(`open ${target || ''}`), type: 'error' }]
      }
    } else {
      result = [{ text: t.notFound(cmd), type: 'error' }]
    }

    setOutput(prev => [...prev, ...echo, ...result])
    setValue('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      execute(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const history = historyRef.current
      const next = Math.min(histIndexRef.current + 1, history.length - 1)
      histIndexRef.current = next
      setValue(history[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIndexRef.current - 1, -1)
      histIndexRef.current = next
      setValue(next === -1 ? '' : historyRef.current[next])
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.toLowerCase()
      if (!partial) return
      const match = COMMANDS.find(c => c.startsWith(partial) && c !== partial)
      if (match) {
        // Añadir espacio después si es un comando que necesita argumento
        const needsArg = ['goto', 'open'].includes(match)
        setValue(needsArg ? match + ' ' : match)
      }
    }
  }

  const typeClass = {
    echo:    'text-dark-muted/70',
    default: 'text-dark-text',
    matrix:  'text-matrix',
    error:   'text-red-400',
  }

  return (
    <div
      className="flex flex-col gap-2 w-full"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Hint — desaparece al hacer focus */}
      {showHint && (
        <span className="font-mono text-xs text-dark-muted/60 animate-pulse select-none">
          {'[>] '}{t.hint}{'_'}
        </span>
      )}

      {/* Output area */}
      {output.length > 0 && (
        <div className="flex flex-col gap-0.5 max-h-32 overflow-y-auto">
          {output.map((line, i) => (
            <span key={i} className={`font-mono text-xs ${typeClass[line.type] ?? typeClass.default}`}>
              {line.text}
            </span>
          ))}
        </div>
      )}

      {/* Input row */}
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-sm text-matrix select-none shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowHint(false)}
          className="bg-transparent outline-none border-none font-mono text-sm text-dark-text w-full caret-matrix placeholder:text-dark-muted/40"
          placeholder={showHint ? '' : t.hint}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal interactiva"
        />
      </div>
    </div>
  )
}

export default TerminalInput
