/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal/matte black theme
        background: '#0B0B0F',
        'background-light': '#111111',
        'background-lighter': '#1A1A1F',
        // Emerald green primary
        primary: '#10B981',
        'primary-light': '#34D399',
        'primary-dark': '#059669',
        // Neon amber accent
        secondary: '#F59E0B',
        'secondary-light': '#FBBF24',
        // Soft cyan highlight
        accent: '#06B6D4',
        'accent-light': '#22D3EE',
        // Text colors
        text: '#E5E7EB',
        'text-muted': '#9CA3AF',
        'text-dark': '#6B7280',
        // Card/UI colors
        card: '#151518',
        'card-hover': '#1E1E23',
        border: '#27272A',
        'border-light': '#3F3F46',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        heading: ['Inter', 'Satoshi', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-emerald': 'glowEmerald 2s ease-in-out infinite alternate',
        'letter-glow': 'letterGlow 0.5s ease-out forwards',
        'gradient-sweep': 'gradientSweep 3s ease-in-out infinite',
        'cursor-pulse': 'cursorPulse 1s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4)' },
        },
        glowEmerald: {
          '0%': { textShadow: '0 0 10px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)' },
        },
        letterGlow: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        gradientSweep: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        cursorPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(16, 185, 129, 0.5)' },
          '50%': { borderColor: 'rgba(6, 182, 212, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B0B0F 0%, #111111 50%, #0B0B0F 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-lg': '0 0 40px rgba(16, 185, 129, 0.3)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.1)',
      },
    },
  },
  plugins: [],
}
