import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        // New color scheme - emerald, cyan, amber
        const colors = [
          'rgba(16, 185, 129, opacity)', // Emerald
          'rgba(6, 182, 212, opacity)',  // Cyan
          'rgba(245, 158, 11, opacity)', // Amber
        ]
        this.baseColor = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.1
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed

        // Pulsing opacity
        const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.1

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        return pulseOpacity
      }

      draw(opacity) {
        const color = this.baseColor.replace('opacity', opacity.toFixed(2))
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = color
      }
    }

    // Create particles
    const particleCount = 80
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Mouse interaction
    let mouse = { x: null, y: null, radius: 150 }
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null
      mouse.y = null
    })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.shadowBlur = 0
      ctx.shadowColor = 'transparent'

      particles.forEach(particle => {
        const opacity = particle.update()
        particle.draw(opacity)
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach(particle => {
          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const angle = Math.atan2(dy, dx)
            particle.x += Math.cos(angle) * force * 2
            particle.y += Math.sin(angle) * force * 2
          }
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{ background: 'transparent' }}
    />
  )
}
