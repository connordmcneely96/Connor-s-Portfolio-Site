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
        // Primary: Deep Navy (Engineering Authority)
        primary: {
          900: '#0a1628',
          800: '#152238',
          700: '#1e3a5f',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          DEFAULT: '#2563eb',
        },
        // Accent: Electric Teal (Innovation)
        accent: {
          600: '#0891b2',
          500: '#06b6d4',
          400: '#22d3ee',
          300: '#67e8f9',
          DEFAULT: '#06b6d4',
        },
        // Secondary: Amber (Engineering Caution/Highlight)
        secondary: {
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
          DEFAULT: '#f59e0b',
        },
        // Neutrals: Steel Grays
        steel: {
          950: '#030712',
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
          400: '#9ca3af',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb',
        },
        // Legacy brand colors (keeping for compatibility)
        brand: {
          cyan: {
            light: '#00D4FF',
            DEFAULT: '#00B8E6',
            dark: '#0096C7',
          },
          blue: {
            electric: '#0077FF',
          },
        },
        // Neural/Tech Palette (keeping for compatibility)
        neural: {
          dark: '#0a1628',
          slate: '#152238',
          gray: '#1e3a5f',
        },
        circuit: {
          silver: '#9ca3af',
          white: '#f3f4f6',
        },
        // Glow Colors
        glow: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          amber: '#fbbf24',
        },
        // Semantic Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        display: ['Outfit', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'blueprint-draw': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'blueprint-draw': 'blueprint-draw 2s ease-in-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(6, 182, 212, 0.5)',
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(37, 99, 235, 0.5)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.3)',
        'glow-amber-lg': '0 0 40px rgba(245, 158, 11, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blueprint-grid': `
          linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        'blueprint-grid-dense': `
          linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-50': '50px 50px',
        'grid-25': '25px 25px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
