import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Vedlogged',
    username: '@Vedlogged',
    stats: '10+ Repositories',
    color: '#10B981',
    bgColor: 'bg-primary'
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    url: 'https://leetcode.com/vedant',
    username: '@vedant',
    stats: '100+ Problems Solved',
    color: '#F59E0B',
    bgColor: 'bg-secondary'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/vedant-chaudhari-4421a1329',
    username: '@vedant-chaudhari',
    stats: 'Connect with me',
    color: '#06B6D4',
    bgColor: 'bg-accent'
  }
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="profiles" className="py-20 md:py-32 relative">
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
              Find Me Online
            </span>
            <h2 className="section-heading mt-2">
              Coding <span className="gradient-text">Profiles</span>
            </h2>
            <p className="section-subheading mt-4">
              Connect with me on various coding platforms
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                whileHover={{ y: -10 }}
              >
                <div className="glass rounded-2xl p-6 h-full card-hover border-2 border-transparent hover:border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${profile.color}20` }}
                    >
                      <profile.icon 
                        className="w-7 h-7" 
                        style={{ color: profile.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-heading group-hover:text-primary transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-text-muted text-sm font-mono">{profile.username}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-muted text-sm">{profile.stats}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Stats (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-text-muted mb-4">Check out my GitHub activity</p>
            <motion.a
              href="https://github.com/vedant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
