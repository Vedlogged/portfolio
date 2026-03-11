import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import CodingProfiles from '@/components/CodingProfiles'
import CurrentWork from '@/components/CurrentWork'
import Terminal from '@/components/Terminal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen bg-background relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Background Effects */}
      <ParticlesBackground />
      <div className="noise-overlay" />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CodingProfiles />
        <CurrentWork />
        <Terminal />
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
