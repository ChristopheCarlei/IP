import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://innovuni.netlify.app';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).filter(p => p.data.status === 'actif');

  // Les plus récents d'abord : date d'ajout si connue, sinon id décroissant
  const sorted = projects.sort((a, b) => {
    const da = a.data.date_added?.getTime() ?? 0;
    const db = b.data.date_added?.getTime() ?? 0;
    if (da !== db) return db - da;
    return b.data.id - a.data.id;
  }).slice(0, 30);

  const items = sorted.map(p => {
    const url = `${SITE}/projets/${p.slug}`;
    const pubDate = p.data.date_added ? `\n      <pubDate>${p.data.date_added.toUTCString()}</pubDate>` : '';
    const desc = p.data.description_short ? `\n      <description>${esc(p.data.description_short)}</description>` : '';
    return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>${desc}${pubDate}
    </item>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Innovations Pédagogiques — Université de Genève</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Derniers projets d'innovation pédagogique recensés à l'Université de Genève</description>
    <language>fr</language>
${items}
  </channel>
</rss>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
