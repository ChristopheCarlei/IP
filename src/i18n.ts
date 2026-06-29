// Internationalisation FR (défaut) / EN
// Contenu de référence : https://www.unige.ch/innovations-pedagogiques (site bilingue UNIGE)

export type Lang = 'fr' | 'en';
export const defaultLang: Lang = 'fr';

// Navigation principale — chemin FR canonique + libellés
export const navItems = [
  { path: '/catalogue',   fr: 'Catalogue',   en: 'Catalogue' },
  { path: '/ia',          fr: 'IA',          en: 'AI' },
  { path: '/videos',      fr: 'Vidéos',      en: 'Videos' },
  { path: '/soutien',     fr: 'Soutien',     en: 'Support' },
  { path: '/observation', fr: 'Observation', en: 'Observation' },
  { path: '/prix',        fr: 'Prix',        en: 'Award' },
  { path: '/commission',  fr: 'Commission',  en: 'Committee' },
  { path: '/contact',     fr: 'Contact',     en: 'Contact' },
];

// Chemins institutionnels UNIGE (header) — version FR / EN
export const instItems = [
  { fr: 'Université',     en: 'University', href_fr: 'https://www.unige.ch/universite/',     href_en: 'https://www.unige.ch/en/university/' },
  { fr: 'Facultés',       en: 'Faculties',  href_fr: 'https://www.unige.ch/facultes/',       href_en: 'https://www.unige.ch/en/faculties/' },
  { fr: 'Études',         en: 'Students',   href_fr: 'https://www.unige.ch/etudiants/',      href_en: 'https://www.unige.ch/en/students/' },
  { fr: 'Collaborateurs', en: 'Staff',      href_fr: 'https://www.unige.ch/collaborateurs/', href_en: 'https://www.unige.ch/collaborateurs/' },
  { fr: 'Services',       en: 'Services',   href_fr: 'https://www.unige.ch/services/',       href_en: 'https://www.unige.ch/en/services/' },
];

// Chaînes communes (header / footer)
export const ui = {
  fr: {
    brandTagline: 'Université de Genève · Pôle SEA',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    navAria: 'Navigation Innovations Pédagogiques',
    instAria: 'Navigation institutionnelle UNIGE',
    footerAbout: "Plateforme de recensement et de valorisation des projets d'innovation pédagogique de l'Université de Genève — une initiative du Pôle SEA et de la Commission d'Innovation Pédagogique.",
    footerColIP: 'Innovations Pédagogiques',
    footerColUnige: 'Université de Genève',
    footerColSocial: 'Médias sociaux',
    footerCatalogue: 'Catalogue des projets',
    footerIA: 'IA & pédagogie',
    footerVideos: 'Promotion vidéo',
    footerSoutien: 'Soutien pédagogique',
    footerObservation: 'Observation entre pairs',
    footerPrix: 'Prix de la pédagogie',
    footerCommission: 'Commission IP',
    footerContact: 'Contact',
    footerAdmin: 'Administration CMS',
    footerContactLink: 'Contact',
    footerCookies: 'Cookies',
  },
  en: {
    brandTagline: 'University of Geneva · SEA Pole',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navAria: 'Pedagogical Innovations navigation',
    instAria: 'UNIGE institutional navigation',
    footerAbout: 'A platform for recording and showcasing the pedagogical innovation projects of the University of Geneva — an initiative of the SEA Pole and the Pedagogical Innovation Commission.',
    footerColIP: 'Pedagogical Innovations',
    footerColUnige: 'University of Geneva',
    footerColSocial: 'Social media',
    footerCatalogue: 'Project catalogue',
    footerIA: 'AI & teaching',
    footerVideos: 'Video promotion',
    footerSoutien: 'Pedagogical support',
    footerObservation: 'Peer observation',
    footerPrix: 'Pedagogy Award',
    footerCommission: 'Pedagogical Innovation Commission',
    footerContact: 'Contact',
    footerAdmin: 'CMS administration',
    footerContactLink: 'Contact',
    footerCookies: 'Cookies',
  },
};

// Préfixe une route FR canonique avec /en si nécessaire
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'fr') return path;
  if (path === '/') return '/en';
  return '/en' + path;
}

// Pages disposant d'une version EN (les autres — axes, projets — retombent sur l'accueil EN)
const translatedPaths = new Set(['/', ...navItems.map(n => n.path)]);

// Équivalent dans l'autre langue de la page courante
export function altLangPath(currentPath: string, target: Lang): string {
  const isEn = currentPath === '/en' || currentPath.startsWith('/en/');
  if (target === 'en') {
    if (isEn) return currentPath;
    if (currentPath.startsWith('/projets/')) return '/en' + currentPath;        // fiche projet
    if (currentPath.startsWith('/innovations/')) return '/en' + currentPath;    // page innovation
    return translatedPaths.has(currentPath) ? localizePath(currentPath, 'en') : '/en';
  }
  // target fr — toute page EN possède son origine FR
  if (!isEn) return currentPath;
  const stripped = currentPath.replace(/^\/en/, '');
  return stripped === '' ? '/' : stripped;
}
