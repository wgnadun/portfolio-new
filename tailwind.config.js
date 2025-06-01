export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
    },
  },
}