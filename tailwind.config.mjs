/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        unige: {
          red:    '#C8102E',
          dark:   '#1a1a2e',
          gray:   '#f5f5f5',
        },
        faculty: {
          fpse:   '#4B0B71',
          gsem:   '#465F7F',
          fti:    '#FF5C00',
          sc:     '#007E64',
          medecine: '#96004B',
          droit:  '#0067C5',
          lettres:'#F1AB00',
          sds:    '#00b1ae',
          theologie: '#CF0063',
          default:'#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
