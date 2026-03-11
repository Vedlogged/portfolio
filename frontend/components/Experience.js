import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiAcademicCap, HiUserGroup, HiCalendar } from 'react-icons/hi'

const experiences = [
  {
    type: 'education',
    title: 'Computer Science Engineering',
    organization: 'Vellore Institute of Technology Bhopal',
    location: 'Bhopal, India',
    duration: '2024 - 2028',
    description: 'Pursuing Bachelor of Engineering in Computer Science with specialization in Cybersecurity and Digital Forensics.',
    highlights: [
      'Relevant coursework in Data Structures, Algorithms, Network Security',
      'Active member of technical clubs and communities',
      'Participated in various hackathons and coding competitions'
    ],
    icon: HiAcademicCap
  },
  {
    type: 'internship',
    title: 'Software Development Intern',
    organization: 'Bluestock Fintech',
    location: 'Remote',
    duration: '2025 - 2026',
    description: 'Working on fintech solutions and gaining hands-on experience in software development.',
    highlights: [
      'Developed and maintained web applications',
      'Collaborated with cross-functional teams',
      'Implemented new features and bug fixes'
    ],
    icon: HiBriefcase
  },
  {
    type: 'internship',
    title: 'Cyber Security Intern',
    organization: 'Teachnook (Wipro)',
    location: 'Remote',
    duration: '2024',
    description: 'Gained foundational exposure to cybersecurity and ethical hacking concepts through hands-on learning.',
    highlights: [
      'Gained foundational exposure to cybersecurity and ethical hacking concepts through hands-on learning',
      'Designed and developed a Python-based web crawler that systematically scans websites and extracts all accessible links',
      'Compiled results into a structured PDF report for analysis and documentation'
    ],
    icon: HiBriefcase
  }
]

const certifications = [
  {
    title: 'Linux Fundamentals',
    issuer: 'Cyber Certification',
    date: '2025',
    credential: '#'
  },
  {
    title: 'Networking Security',
    issuer: 'Cyber Certification',
    date: '2025',
    credential: '#'
  }
]

function TimelineItem({ item, index, inView }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>

      {/* Content Card */}
      <motion.div 
        className="glass rounded-xl p-6 ml-4 card-hover"
        whileHover={{ x: 10 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-semibold font-heading">{item.title}</h3>
            <p className="text-primary font-medium">{item.organization}</p>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <HiCalendar className="w-4 h-4" />
            {item.duration}
          </div>
        </div>

        <p className="text-text-muted mb-4">{item.description}</p>

        {item.highlights && (
          <ul className="space-y-2">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            item.type === 'education' 
              ? 'bg-accent/20 text-accent' 
              : 'bg-primary/20 text-primary'
          }`}>
            {item.type === 'education' ? 'Education' : 'Internship'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              My Journey
            </span>
            <h2 className="section-heading mt-2">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subheading mt-4">
              My academic background and professional experiences
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold font-heading mb-8 flex items-center gap-3"
              >
                <HiBriefcase className="text-primary" />
                Timeline
              </motion.h3>
              
              <div className="space-y-0">
                {experiences.map((item, index) => (
                  <TimelineItem key={item.title} item={item} index={index} inView={inView} />
                ))}
              </div>
            </div>

            {/* Certifications & Coursework */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold font-heading mb-8 flex items-center gap-3"
              >
                <HiAcademicCap className="text-primary" />
                Certifications
              </motion.h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-xl p-5 card-hover"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                        <p className="text-text-muted text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-primary text-sm font-mono">{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Relevant Coursework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
              >
                <h4 className="text-xl font-semibold font-heading mb-4">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Computer Networks',
                    'Operating Systems',
                    'Database Management',
                    'Network Security',
                    'Digital Forensics',
                    'Software Engineering',
                    'Machine Learning'
                  ].map((course) => (
                    <span key={course} className="tech-badge">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
