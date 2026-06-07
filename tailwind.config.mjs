/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Couleur institutionnelle UNIGE (Pantone 214C) — remplace l'ancien #C8102E
        unige: {
          rose:       '#CF0063',
          'rose-deep':'#A8004F',
          ink:        '#172033',
          soft:       '#F6F7F9',
        },
        // Couleurs facultaires officielles (Pantone)
        faculty: {
          lettres:   '#0067C5',
          droit:     '#BA0C2F',
          sciences:  '#007E64',
          medecine:  '#96004B',
          theologie: '#4B0B71',
          gsem:      '#465F7F',
          sds:       '#F1AB00',
          fti:       '#FF5C00',
          fapse:     '#00B1AE',
          default:   '#6B7280',
        },
      },
      fontFamily: {
        sans: ['"TheSans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        sm:   '10px',
      },
    },
  },
};
