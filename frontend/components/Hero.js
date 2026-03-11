import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// Letter-by-letter reveal component with glow
function AnimatedName({ text, className }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)'
          } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block"
          style={{
            textShadow: isVisible ? '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)' : 'none'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Animated title with gradient sweep
function AnimatedTitle({ titles }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <div className="relative h-8 md:h-10 overflow-hidden">
      {titles.map((title, index) => (
        <motion.span
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : -20
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute left-0 right-0 text-center text-primary font-medium"
        >
          {title}
        </motion.span>
      ))}
    </div>
  )
}

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const titles = [
    'Computer Science Engineer',
    'Cybersecurity Enthusiast',
    'Digital Forensics Specialist',
    'Full Stack Developer',
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name with letter reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              <span className="text-text">Hi, I am </span>
              <AnimatedName 
                text="Vedant Chaudhari" 
                className="text-primary"
              />
              <motion.span
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                className="inline-block w-1 h-12 md:h-16 bg-primary ml-1 align-middle"
                style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }}
              />
            </h1>
          </motion.div>

          {/* Animated title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xl sm:text-2xl md:text-3xl text-text-muted font-medium mb-6"
          >
            <AnimatedTitle titles={titles} />
          </motion.div>

          {/* Description with gradient sweep */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="relative max-w-3xl mx-auto mb-10"
          >
            <p className="text-text-muted text-lg md:text-xl leading-relaxed">
              I am a Computer Science student passionate about{' '}
              <span className="text-primary glow-text">cybersecurity</span>,{' '}
              <span className="text-accent">digital forensics</span>, and building{' '}
              <span className="text-secondary">secure systems</span>. Currently focused on 
              creating AI-powered security solutions and modern web applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <HiArrowDown className="animate-bounce" />
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload />
              Download Resume
            </motion.a>
            
            <motion.button
              onClick={scrollToContact}
              className="btn-accent flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Vedlogged"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-text-muted hover:text-primary transition-all icon-glow group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vedant-chaudhari-4421a1329"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl text-text-muted hover:text-accent transition-all icon-glow group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
