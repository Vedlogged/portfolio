import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiSparkles, HiStar, HiShieldExclamation } from 'react-icons/hi'

const achievements = [
  {
    icon: HiAcademicCap,
    title: 'Hackathon Participant',
    description: 'Participated in multiple hackathons, developing innovative solutions under time constraints.',
    color: 'from-secondary to-amber-500'
  },
  {
    icon: HiSparkles,
    title: 'Problem Solver',
    description: 'Actively solving problems on LeetCode and other competitive programming platforms.',
    color: 'from-primary to-accent'
  },
  {
    icon: HiStar,
    title: 'Open Source Contributor',
    description: 'Contributing to open source projects and building tools for the developer community.',
    color: 'from-primary to-emerald-400'
  },
  {
    icon: HiShieldExclamation,
    title: 'Security Enthusiast',
    description: 'Actively learning and implementing cybersecurity best practices in projects.',
    color: 'from-accent to-cyan-400'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
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
              Recognition
            </span>
            <h2 className="section-heading mt-2">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="section-subheading mt-4">
              Milestones and accomplishments in my journey
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full card-hover text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} p-0.5 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-text" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
