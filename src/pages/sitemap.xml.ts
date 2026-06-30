import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { innovations } from '../innovations';

const SITE = 'https://innovuni.netlify.app';

// Pages statiques bilingues
const staticPaths = [
  '/', '/catalogue', '/ia', '/videos', '/soutien', '/observation', '/prix', '/commission', '/contact',
  '/en', '/en/catalogue', '/en/ia', '/en/videos', '/en/soutien', '/en/observation', '/en/prix', '/en/commission', '/en/contact',
];

const axes = ['preparer', 'rendre-actif', 'responsabiliser', 'faire-creer'];

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).filter(p => p.data.status === 'actif');

  const urls = new Set<string>(staticPaths);
  projects.forEach(p => { urls.add(`/projets/${p.slug}`); urls.add(`/en/projets/${p.slug}`); });
  innovations.forEach(i => { urls.add(`/innovations/${i.slug}`); urls.add(`/en/innovations/${i.slug}`); });
  axes.forEach(a => urls.add(`/axes/${a}`));

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [...urls].map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
