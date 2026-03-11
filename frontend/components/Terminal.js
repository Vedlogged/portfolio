import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const commands = {
  help: {
    output: `Available commands:
  about     - Learn about me
  skills    - View my tech stack
  projects  - See my projects
  contact   - Get my contact info
  resume    - Download my resume
  socials   - View my social links
  clear     - Clear the terminal
  whoami    - Who am I?`
  },
  whoami: {
    output: 'Vedant Chaudhari - Computer Science Engineer'
  },
  about: {
    output: `I am a Computer Science student passionate about:
  → Cybersecurity & Digital Forensics
  → Full Stack Development
  → Building Secure Systems
  → AI & Machine Learning`
  },
  skills: {
    output: `Technical Skills:
  Languages   : Python | JavaScript | C/C++
  Frontend    : React | Next.js | TailwindCSS
  Backend     : Node.js | Express.js
  Database    : MongoDB | MySQL
  Security    : Network Security | Digital Forensics
  Tools       : Git | Linux | Docker`
  },
  projects: {
    output: `Featured Projects:
  1. AI Firewall
     → Python | ML | Security | In Progress
  
  2. Secure Authentication System
     → React | Node.js | JWT | MongoDB
  
  3. Portfolio Website
     → Next.js | Node.js | MongoDB`
  },
  contact: {
    output: `Contact Information:
  Email    : vedant@email.com
  GitHub   : github.com/vedant
  LinkedIn : linkedin.com/in/vedant`
  },
  socials: {
    output: `Social Links:
  → GitHub   : https://github.com/vedant
  → LinkedIn : https://linkedin.com/in/vedant
  → LeetCode : https://leetcode.com/vedant`
  },
  resume: {
    output: 'Opening resume... (In production, this would download the PDF)',
    action: () => window.open('/resume.pdf', '_blank')
  },
  clear: {
    output: '',
    clear: true
  }
}

export default function Terminal() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Vedant\'s Terminal! Type "help" for available commands.' }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    // Add command to history display
    setHistory(prev => [...prev, { type: 'command', text: cmd }])
    
    // Add to command history for up/down navigation
    if (trimmedCmd) {
      setCommandHistory(prev => [...prev, trimmedCmd])
      setHistoryIndex(-1)
    }

    // Process command
    if (trimmedCmd === '') {
      return
    }

    if (commands[trimmedCmd]) {
      const command = commands[trimmedCmd]
      
      if (command.clear) {
        setHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for commands.' }])
      } else {
        setHistory(prev => [...prev, { type: 'output', text: command.output }])
        if (command.action) {
          command.action()
        }
      }
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        text: `Command not found: ${trimmedCmd}. Type "help" for available commands.` 
      }])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput)
      setCurrentInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <section id="terminal" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Interactive Mode
            </span>
            <h2 className="section-heading mt-2">
              <span className="gradient-text">Terminal</span>
            </h2>
            <p className="section-subheading mt-4">
              Explore my portfolio through the command line
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="terminal shadow-2xl"
            onClick={focusInput}
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
              </div>
              <span className="text-text-muted text-xs ml-4 font-mono">vedant@portfolio ~ bash</span>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalRef}
              className="terminal-body h-80 overflow-y-auto"
            >
              {history.map((item, index) => (
                <div key={index} className="terminal-line">
                  {item.type === 'command' ? (
                    <>
                      <span className="terminal-prompt">❯</span>
                      <span className="terminal-command">{item.text}</span>
                    </>
                  ) : item.type === 'error' ? (
                    <span className="text-red-400 whitespace-pre-wrap">{item.text}</span>
                  ) : (
                    <span className="terminal-output whitespace-pre-wrap">{item.text}</span>
                  )}
                </div>
              ))}
              
              {/* Current Input Line */}
              <div className="terminal-line flex items-center">
                <span className="terminal-prompt">❯</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-text font-mono ml-2"
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
                <span className="w-2 h-5 bg-primary animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Quick Commands */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            <span className="text-text-muted text-sm">Quick commands:</span>
            {['help', 'whoami', 'skills', 'projects'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setCurrentInput(cmd)
                  handleCommand(cmd)
                  setCurrentInput('')
                }}
                className="px-3 py-1 bg-card border border-border rounded text-xs font-mono text-text-muted hover:text-primary hover:border-primary/50 transition-all"
              >
                {cmd}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
