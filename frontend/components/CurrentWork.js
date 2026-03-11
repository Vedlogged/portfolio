import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiSparkles, HiCode, HiBookOpen, HiCog } from 'react-icons/hi'

const currentWork = [
  {
    icon: HiSparkles,
    title: 'AI-based Firewall System',
    description: 'Building an intelligent firewall that uses machine learning to detect and prevent cyber threats in real-time.',
    status: 'In Progress',
    progress: 60
  },
  {
    icon: HiBookOpen,
    title: 'Cybersecurity Learning Roadmap',
    description: 'Creating a comprehensive guide for beginners to learn cybersecurity from basics to advanced concepts.',
    status: 'In Progress',
    progress: 40
  },
  {
    icon: HiCode,
    title: 'LeetCode Practice',
    description: 'Improving problem-solving skills by solving algorithmic challenges and data structure problems.',
    status: 'Ongoing',
    progress: 52
  },
  {
    icon: HiCog,
    title: 'Full-Stack Web Applications',
    description: 'Developing modern web applications using React, Node.js, and MongoDB stack.',
    status: 'Ongoing',
    progress: 80
  }
]

export default function CurrentWork() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="current-work" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              What I&apos;m Working On
            </span>
            <h2 className="section-heading mt-2">
              Currently <span className="gradient-text">Building</span>
            </h2>
            <p className="section-subheading mt-4">
              Projects and learning goals I&apos;m currently focused on
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Current Work Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold font-heading group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-text-muted text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-text-muted">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
