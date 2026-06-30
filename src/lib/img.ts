// Helper Netlify Image CDN — redimensionne / compresse les images à la volée en production.
// En local (astro dev / preview) l'endpoint /.netlify/images n'existe pas : on garde alors le
// chemin d'origine pour ne pas casser l'aperçu. La détection se fait via import.meta.env.DEV.
export function cdnImg(
  src: string | undefined | null,
  w: number,
  opts: { h?: number; fit?: 'cover' | 'contain' | 'fill'; fm?: 'webp' | 'avif' | 'jpg' | 'png'; q?: number } = {}
): string {
  if (!src || !src.startsWith('/')) return src ?? '';          // externe / vide : inchangé
  if (import.meta.env.DEV) return src;                          // dev local : pas de CDN
  const p = new URLSearchParams({ url: src, w: String(w), fm: opts.fm ?? 'webp', q: String(opts.q ?? 70) });
  // fit=cover ne recadre correctement que si une hauteur est fournie ; sinon Netlify
  // produit un crop zoomé indésirable. Sans h, on se limite à un redimensionnement proportionnel.
  if (opts.h) {
    p.set('h', String(opts.h));
    if (opts.fit) p.set('fit', opts.fit);
  }
  return `/.netlify/images?${p.toString()}`;
}
