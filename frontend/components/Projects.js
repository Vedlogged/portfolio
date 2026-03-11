import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiSparkles, HiShieldExclamation, HiCode, HiChartBar, HiGlobe, HiSearch } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Intelligent Firewall System',
    description: 'A cybersecurity solution that monitors, analyzes, and filters network traffic in real time using intelligent detection mechanisms to identify suspicious patterns, malicious traffic, and potential cyber threats.',
    longDescription: 'This project implements machine learning algorithms to analyze network traffic patterns and identify potential security threats before they can cause damage.',
    technologies: ['Python', 'Scapy', 'Socket Programming', 'Machine Learning', 'Node.js'],
    category: 'cybersecurity',
    status: 'in-progress',
    features: ['Real-Time Traffic Monitoring', 'Threat Detection', 'Automated Blocking', 'Security Alerts'],
    github: 'https://github.com/Vedlogged/AI_Network_Penetrator_Project',
    demo: null,
    image: null,
    icon: HiShieldExclamation,
    featured: true
  },
  {
    id: 2,
    title: 'MERN Authentication System',
    description: 'A full-stack authentication system built with MERN stack featuring secure login, JWT token management, and encrypted password storage.',
    longDescription: 'Built with modern security best practices including password hashing, secure session management, and protection against common vulnerabilities.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'web',
    status: 'completed',
    features: ['Secure login', 'JWT authentication', 'Password encryption', 'Session management'],
    github: 'https://github.com/Vedlogged/mern-auth',
    demo: null,
    image: null,
    icon: HiSparkles,
    featured: true
  },
  {
    id: 3,
    title: 'ML Financial Analysis',
    description: 'A machine learning project for financial data analysis and predictions using Python with advanced data visualization.',
    longDescription: 'Leverages machine learning models for financial predictions and statistical analysis of market data.',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'ai',
    status: 'completed',
    features: ['Financial predictions', 'Data visualization', 'ML models', 'Statistical analysis'],
    github: 'https://github.com/Vedlogged/Ml_financial',
    demo: null,
    image: null,
    icon: HiChartBar,
    featured: true
  },
  {
    id: 4,
    title: 'Kisan-Agi',
    description: 'An agricultural technology solution built with TypeScript to help farmers with modern farming techniques and insights.',
    longDescription: 'A user-friendly platform providing agricultural insights and modern farming solutions.',
    technologies: ['TypeScript', 'React', 'Node.js', 'TailwindCSS'],
    category: 'web',
    status: 'completed',
    features: ['User-friendly interface', 'Agricultural insights', 'Modern tech stack', 'Responsive design'],
    github: 'https://github.com/Vedlogged/Kisan-Agi',
    demo: null,
    image: null,
    icon: HiGlobe,
    featured: true
  },
  {
    id: 5,
    title: 'Web Crawler',
    description: 'A Python script to crawl websites and extract data for analysis with automated scraping capabilities.',
    longDescription: 'Efficient web scraping tool for automated data extraction and analysis.',
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'Web Scraping'],
    category: 'tools',
    status: 'completed',
    features: ['Website crawling', 'Data extraction', 'Automated scraping', 'Data parsing'],
    github: 'https://github.com/Vedlogged/Web-Crawler',
    demo: null,
    image: null,
    icon: HiSearch,
    featured: true
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern full-stack portfolio website showcasing projects, skills, and professional experience with interactive features.',
    longDescription: 'Built with Next.js and featuring smooth animations, a contact form with backend integration, and a unique terminal mode interface.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    category: 'web',
    status: 'completed',
    features: ['Interactive UI', 'Contact form', 'Project showcase', 'Terminal mode'],
    github: 'https://github.com/Vedlogged/Portfolio',
    demo: null,
    image: null,
    icon: HiCode,
    featured: true
  }
]

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'cybersecurity', name: 'Cybersecurity', count: projects.filter(p => p.category === 'cybersecurity').length },
  { id: 'ai', name: 'AI / ML', count: projects.filter(p => p.category === 'ai').length },
  { id: 'tools', name: 'Tools', count: projects.filter(p => p.category === 'tools').length },
]

function ProjectNavArrow({ direction, onClick, disabled }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} z-10 w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary hover:bg-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
    </motion.button>
  )
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`glass rounded-2xl overflow-hidden transition-all duration-300 h-full ${
        isHovered ? 'shadow-glow-lg border-primary/50' : 'border-border'
      }`}>
        {/* Project Image/Header */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-background-light overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center"
            >
              <Icon className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' 
                ? 'bg-secondary/20 text-secondary' 
                : 'bg-accent/20 text-accent'
            }`}>
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold font-heading group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-text-muted text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            <p className="text-xs text-text-dark uppercase tracking-wider">Features</p>
            <ul className="grid grid-cols-2 gap-1">
              {project.features.map((feature) => (
                <li key={feature} className="text-xs text-text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card-hover border border-border rounded-lg text-sm font-medium transition-all hover:border-primary/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub />
                Code
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-sm font-medium text-primary transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaExternalLinkAlt />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              My Work
            </span>
            <h2 className="section-heading mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mt-4">
              A collection of projects showcasing my skills in development and security
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-card border border-border text-text-muted hover:border-primary/50 hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-background-light'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Vedlogged"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
