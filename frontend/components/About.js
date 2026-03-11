import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiShieldExclamation, HiLightBulb, HiUserGroup } from 'react-icons/hi'

const highlights = [
  {
    icon: HiCode,
    title: 'Full Stack Development',
    description: 'Building modern web applications with React, Node.js, and MongoDB'
  },
  {
    icon: HiShieldExclamation,
    title: 'Cybersecurity',
    description: 'Focused on threat detection, secure coding, and digital forensics'
  },
  {
    icon: HiLightBulb,
    title: 'Problem Solving',
    description: 'Constantly improving algorithmic thinking and system design skills'
  },
  {
    icon: HiUserGroup,
    title: 'Open Source',
    description: 'Contributing to open source projects and building developer tools'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Get to know me
            </span>
            <h2 className="section-heading mt-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto w-full max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
                
                {/* Main card */}
                <div className="relative glass rounded-2xl p-8 backdrop-blur-xl">
                  <div className="text-center">
                    {/* Avatar placeholder */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-4xl font-bold gradient-text">VC</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading mb-2">Vedant Chaudhari</h3>
                    <p className="text-primary font-medium mb-4">Computer Science Engineer</p>
                    
                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">10+</div>
                        <div className="text-xs text-text-muted">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">5+</div>
                        <div className="text-xs text-text-muted">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">100+</div>
                        <div className="text-xs text-text-muted">Problems Solved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-text-muted text-lg leading-relaxed">
                I am a <span className="text-text font-medium">Computer Science Engineering</span> student 
                with a strong interest in <span className="text-primary">Cybersecurity</span>, 
                <span className="text-primary"> Digital Forensics</span>, and 
                <span className="text-primary"> Secure System Design</span>.
              </p>
              
              <p className="text-text-muted text-lg leading-relaxed">
                My goal is to build technologies that detect threats, strengthen digital infrastructure, 
                and create safer systems. Apart from coding, I have experience in event management and 
                technical community involvement, which has helped me develop leadership and teamwork skills.
              </p>
              
              <p className="text-text-muted text-lg leading-relaxed">
                I believe in <span className="text-text font-medium">learning by building real-world projects</span> and 
                contributing to innovative technical ideas. I constantly work on improving my skills in 
                programming, security concepts, problem solving, and system design.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Connect
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass rounded-xl p-6 text-center card-hover group"
                whileHover={{ y: -10 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-text-muted text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
