import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // Domaine de déploiement réel (à changer en cas de migration vers un domaine unige.ch).
  site: 'https://innovuni.netlify.app',
});
