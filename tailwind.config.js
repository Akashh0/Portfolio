/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keeping Inter for UI, but adding a sleek serif for designer accents
        sans: ['Inter', 'sans-serif'], 
        serif: ['"Playfair Display"', 'serif'], 
      },
      colors: {
        'studio-900': '#09090b', // Deepest Zinc (not pure black)
        'studio-800': '#18181b', // Card Backgrounds
        'studio-700': '#27272a', // Borders
        'studio-400': '#a1a1aa', // Muted Text
        'studio-50': '#fafafa',  // Primary Text
      },
      transitionTimingFunction: {
        // "Apple-style" silky smooth easing curve
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      }
    },
  },
  plugins: [],
}