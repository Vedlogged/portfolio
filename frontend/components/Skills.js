import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiPython, SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiLinux, SiDocker,
  SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiNextdotjs
} from 'react-icons/si'
import { HiShieldExclamation, HiDatabase, HiCode, HiServer, HiCog } from 'react-icons/hi'
import { FaJava } from 'react-icons/fa'
import { DiRust } from 'react-icons/di'
import { SiGoland } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: HiCode,
    skills: [
      { name: 'Python', level: 90, icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'C / C++', level: 80, icon: SiCplusplus, color: '#00599C' },
      { name: 'TypeScript', level: 75, icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', level: 70, icon: FaJava, color: '#ED8B00' },
      { name: 'Go', level: 45, icon: SiGoland, color: '#00ADD8' },
      { name: 'Rust', level: 35, icon: DiRust, color: '#DEA584' },
    ]
  },
  {
    title: 'Web Development',
    icon: HiServer,
    skills: [
      { name: 'React.js', level: 85, icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', level: 80, icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', level: 75, icon: SiExpress, color: '#000000' },
      { name: 'HTML5', level: 95, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: SiCss3, color: '#1572B6' },
      { name: 'TailwindCSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Databases',
    icon: HiDatabase,
    skills: [
      { name: 'MongoDB', level: 80, icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', level: 75, icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: HiCog,
    skills: [
      { name: 'Git', level: 85, icon: SiGit, color: '#F05032' },
      { name: 'GitHub', level: 90, icon: SiGithub, color: '#181717' },
      { name: 'Linux', level: 80, icon: SiLinux, color: '#FCC624' },
      { name: 'Docker', level: 60, icon: SiDocker, color: '#2496ED' },
    ]
  },
  {
    title: 'Security & Forensics',
    icon: HiShieldExclamation,
    skills: [
      { name: 'Network Security', level: 75 },
      { name: 'Digital Forensics', level: 70 },
      { name: 'Threat Analysis', level: 70 },
      { name: 'Secure Coding', level: 80 },
    ]
  }
]

function SkillBar({ skill, inView }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {skill.icon && (
            <skill.icon 
              className="w-5 h-5" 
              style={{ color: skill.color || '#3B82F6' }} 
            />
          )}
          <span className="font-medium text-text">{skill.name}</span>
        </div>
        <span className="text-primary font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, inView, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all ${isHovered ? 'bg-primary/20 scale-110' : ''}`}>
          <category.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold font-heading">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} inView={inView} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              What I work with
            </span>
            <h2 className="section-heading mt-2">
              Skills & <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="section-subheading mt-4">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard 
                key={category.title} 
                category={category} 
                inView={inView}
                index={index}
              />
            ))}
          </div>

          {/* Tech Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <p className="text-center text-text-muted mb-8">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: SiPython, name: 'Python', color: '#3776AB' },
                { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
                { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
                { icon: FaJava, name: 'Java', color: '#ED8B00' },
                { icon: SiReact, name: 'React', color: '#61DAFB' },
                { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
                { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
                { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
                { icon: SiGit, name: 'Git', color: '#F05032' },
                { icon: SiLinux, name: 'Linux', color: '#FCC624' },
                { icon: SiDocker, name: 'Docker', color: '#2496ED' },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs text-text-muted group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
