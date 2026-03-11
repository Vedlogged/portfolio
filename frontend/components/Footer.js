import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Vedlogged', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vedant-chaudhari-4421a1329', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/vedant', label: 'Twitter' }
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-background-light border-t border-border">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <HiArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold font-heading">
                <span className="text-primary">&lt;</span>
                <span className="gradient-text">VC</span>
                <span className="text-primary">/&gt;</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              Computer Science Engineer passionate about cybersecurity, 
              digital forensics, and building secure systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a 
              href="mailto:chaudharivedant62@gmail.com"
              className="text-text-muted hover:text-primary transition-colors text-sm"
            >
              chaudharivedant62@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1">
            Built with <FaHeart className="text-red-500 w-4 h-4" /> by Vedant Chaudhari
          </p>
          <p className="text-text-dark text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
