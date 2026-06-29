// Données des 14 types d'innovation pédagogique (situations à résoudre)
// banner = illustration FR (texte français) ; icon = pictogramme neutre (FR+EN)

export type Innovation = {
  slug: string;
  fr: string;  en: string;
  descFr: string; descEn: string;
  banner: string;   // /images/Bannieres/*.jpg (texte FR)
  icon: string;     // /images/innovations/*.svg (neutre)
  axisSlug: string; axisFr: string; axisEn: string; color: string;
  typeFr: string;   // valeur de innovation_type dans les fiches projet
};

export const innovations: Innovation[] = [
  {
    slug: 'questionner', fr: 'Questionner', en: 'Question',
    descFr: "Questionner vos étudiant·es avant ou pendant le cours permet de vérifier leur compréhension, d'activer leurs connaissances préalables et de cibler les notions à approfondir. Les questions peuvent prendre la forme de quiz, de sondages ou de questions ouvertes.",
    descEn: "Questioning your students before or during class lets you check their understanding, activate prior knowledge and target the concepts to deepen. Questions can take the form of quizzes, polls or open-ended prompts.",
    banner: '/images/Bannieres/Preparer_Questionner.jpg', icon: '/images/innovations/1.Questionner.svg',
    axisSlug: 'preparer', axisFr: 'Préparer', axisEn: 'Prepare', color: '#9966ff', typeFr: 'Questionner',
  },
  {
    slug: 'faire-reagir', fr: 'Faire réagir', en: 'Prompt reactions',
    descFr: "Faire réagir vos étudiant·es à un contenu (lecture, vidéo, cas) suscite leur intérêt et les engage activement. En recueillant leurs réactions en amont, vous adaptez la séance à leurs besoins réels.",
    descEn: "Prompting students to react to content (a reading, a video, a case) sparks their interest and engages them actively. By gathering their reactions beforehand, you tailor the session to their real needs.",
    banner: '/images/Bannieres/Preparer_FaireReagir.jpg', icon: '/images/innovations/1.FaireReagir.svg',
    axisSlug: 'preparer', axisFr: 'Préparer', axisEn: 'Prepare', color: '#9966ff', typeFr: 'Faire réagir',
  },
  {
    slug: 'demontrer', fr: 'Démontrer', en: 'Demonstrate',
    descFr: "Démontrer un phénomène, une manipulation ou un raisonnement en direct rend les concepts concrets et marquants. La démonstration capte l'attention et facilite la mémorisation.",
    descEn: "Demonstrating a phenomenon, a procedure or a line of reasoning live makes concepts concrete and memorable. A demonstration captures attention and aids retention.",
    banner: '/images/Bannieres/RendreActif_Demontrer.jpg', icon: '/images/innovations/2.Demontrer.svg',
    axisSlug: 'rendre-actif', axisFr: 'Rendre actif', axisEn: 'Engage', color: '#33cc99', typeFr: 'Démontrer',
  },
  {
    slug: 'donner-la-parole', fr: 'Donner la parole', en: 'Give a voice',
    descFr: "Donner la parole à vos étudiant·es pendant le cours favorise leur participation, valorise leurs idées et crée des échanges riches. Micros baladeurs, tours de table ou outils numériques facilitent cette prise de parole.",
    descEn: "Giving students a voice during class encourages participation, values their ideas and creates rich exchanges. Roving microphones, round-table formats or digital tools make speaking up easier.",
    banner: '/images/Bannieres/RendreActif_DonnerLaParole.jpg', icon: '/images/innovations/2.DonnerParole.svg',
    axisSlug: 'rendre-actif', axisFr: 'Rendre actif', axisEn: 'Engage', color: '#33cc99', typeFr: 'Donner la parole',
  },
  {
    slug: 'simuler-une-situation', fr: 'Simuler une situation', en: 'Simulate a situation',
    descFr: "Simuler une situation place les étudiant·es dans un contexte réaliste où ils/elles mobilisent leurs connaissances pour agir et décider. Jeux de rôle, études de cas immersives ou simulations numériques préparent à la pratique professionnelle.",
    descEn: "Simulating a situation places students in a realistic context where they apply their knowledge to act and decide. Role-plays, immersive case studies or digital simulations prepare them for professional practice.",
    banner: '/images/Bannieres/RendreActif_Simuler.jpg', icon: '/images/innovations/2.Simuler.svg',
    axisSlug: 'rendre-actif', axisFr: 'Rendre actif', axisEn: 'Engage', color: '#33cc99', typeFr: 'Simuler une situation',
  },
  {
    slug: 'faire-collaborer', fr: 'Faire collaborer', en: 'Foster collaboration',
    descFr: "Faire collaborer vos étudiant·es développe les apprentissages par l'échange entre pairs et les compétences de travail en équipe. Activités de groupe, classe puzzle ou production collective structurent cette collaboration.",
    descEn: "Fostering collaboration develops learning through peer exchange and teamwork skills. Group activities, jigsaw classrooms or collective production structure this collaboration.",
    banner: '/images/Bannieres/RendreActif_FaireCollaborer.jpg', icon: '/images/innovations/2.FaireCollaborer.svg',
    axisSlug: 'rendre-actif', axisFr: 'Rendre actif', axisEn: 'Engage', color: '#33cc99', typeFr: 'Faire collaborer',
  },
  {
    slug: 'faire-voter', fr: 'Faire voter', en: 'Run votes',
    descFr: "Faire voter vos étudiant·es en direct (boîtiers, applications) maintient leur attention, révèle instantanément leur compréhension et alimente la discussion. Le vote rend visible la diversité des points de vue.",
    descEn: "Running live votes (clickers, apps) keeps students attentive, instantly reveals their understanding and feeds discussion. Voting makes the diversity of viewpoints visible.",
    banner: '/images/Bannieres/RendreActif_FaireVoter.jpg', icon: '/images/innovations/2.FaireVoter.svg',
    axisSlug: 'rendre-actif', axisFr: 'Rendre actif', axisEn: 'Engage', color: '#33cc99', typeFr: 'Faire voter',
  },
  {
    slug: 'impliquer-dans-l-enseignement', fr: "Impliquer dans l'enseignement", en: 'Involve in teaching',
    descFr: "Impliquer les étudiant·es dans l'enseignement — en leur faisant préparer et présenter des contenus — les responsabilise et ancre les apprentissages. Enseigner à ses pairs est l'un des moyens les plus efficaces d'apprendre.",
    descEn: "Involving students in teaching — having them prepare and present content — gives them responsibility and anchors learning. Teaching one's peers is one of the most effective ways to learn.",
    banner: '/images/Bannieres/Responsabiliser_Enseignement.jpg', icon: '/images/innovations/3.ImpliquerEnseignement.svg',
    axisSlug: 'responsabiliser', axisFr: 'Responsabiliser', axisEn: 'Make responsible', color: '#0099ff', typeFr: "Impliquer dans l'enseignement",
  },
  {
    slug: 'exposer-des-cas-pratiques', fr: 'Exposer des cas pratiques', en: 'Present case studies',
    descFr: "Exposer des cas pratiques confronte les étudiant·es à des situations réelles à analyser et résoudre. Le travail sur cas développe l'esprit critique et le transfert des connaissances vers la pratique.",
    descEn: "Presenting case studies confronts students with real situations to analyse and solve. Case-based work develops critical thinking and the transfer of knowledge to practice.",
    banner: '/images/Bannieres/Responsabiliser_CasPratiques.jpg', icon: '/images/innovations/3.ExposerCasPratiques.svg',
    axisSlug: 'responsabiliser', axisFr: 'Responsabiliser', axisEn: 'Make responsible', color: '#0099ff', typeFr: 'Exposer des cas pratiques',
  },
  {
    slug: 'impliquer-dans-la-recherche', fr: 'Impliquer dans la Recherche', en: 'Involve in research',
    descFr: "Impliquer les étudiant·es dans la recherche — collecte de données, expérimentation, publication — les rend acteur·rices de la production de savoir et développe leur autonomie scientifique.",
    descEn: "Involving students in research — data collection, experimentation, publication — makes them active producers of knowledge and develops their scientific autonomy.",
    banner: '/images/Bannieres/Responsabiliser_Recherche.jpg', icon: '/images/innovations/3.ImpliquerRecherche.svg',
    axisSlug: 'responsabiliser', axisFr: 'Responsabiliser', axisEn: 'Make responsible', color: '#0099ff', typeFr: 'Impliquer dans la Recherche',
  },
  {
    slug: 'developper-des-competences', fr: 'Développer des compétences', en: 'Develop skills',
    descFr: "Développer des compétences transversales et disciplinaires par la mise en pratique prépare les étudiant·es à leur futur professionnel. Des activités authentiques et un feedback régulier soutiennent cette montée en compétences.",
    descEn: "Developing transversal and disciplinary skills through hands-on practice prepares students for their professional future. Authentic activities and regular feedback support this growth.",
    banner: '/images/Bannieres/Responsabiliser_Competences.jpg', icon: '/images/innovations/3.DevelopperCompetences.svg',
    axisSlug: 'responsabiliser', axisFr: 'Responsabiliser', axisEn: 'Make responsible', color: '#0099ff', typeFr: 'Développer des compétences',
  },
  {
    slug: 'faire-conceptualiser-un-projet', fr: 'Faire conceptualiser un projet', en: 'Conceptualise a project',
    descFr: "Faire conceptualiser un projet amène les étudiant·es à définir un problème, imaginer une solution et planifier sa réalisation. Cette phase de conception développe la créativité et la pensée structurée.",
    descEn: "Having students conceptualise a project leads them to define a problem, imagine a solution and plan its realisation. This design phase develops creativity and structured thinking.",
    banner: '/images/Bannieres/FaireCreer_Conceptualiser.jpg', icon: '/images/innovations/4.FaireConceptualiserProjet.svg',
    axisSlug: 'faire-creer', axisFr: 'Faire créer', axisEn: 'Create', color: '#ffa248', typeFr: 'Faire conceptualiser un projet',
  },
  {
    slug: 'faire-gerer-un-projet', fr: 'Faire gérer un projet', en: 'Manage a project',
    descFr: "Faire gérer un projet de bout en bout développe l'organisation, la gestion du temps et le travail d'équipe. Les étudiant·es expérimentent les compétences clés de la conduite de projet.",
    descEn: "Having students manage a project from start to finish develops organisation, time management and teamwork. Students experience the key skills of project management.",
    banner: '/images/Bannieres/FaireCreer_Gerer.jpg', icon: '/images/innovations/4.FaireGererProjet.svg',
    axisSlug: 'faire-creer', axisFr: 'Faire créer', axisEn: 'Create', color: '#ffa248', typeFr: 'Faire gérer un projet',
  },
  {
    slug: 'faire-realiser-une-production-originale', fr: 'Faire réaliser une production originale', en: 'Create an original production',
    descFr: "Faire réaliser une production originale (vidéo, podcast, site, poster…) place la création des étudiant·es au cœur de l'apprentissage et valorise leur travail au-delà de la simple évaluation.",
    descEn: "Having students create an original production (video, podcast, website, poster…) puts their creativity at the heart of learning and values their work beyond mere assessment.",
    banner: '/images/Bannieres/FaireCreer_Numerique.jpg', icon: '/images/innovations/4.FaireRealiser.svg',
    axisSlug: 'faire-creer', axisFr: 'Faire créer', axisEn: 'Create', color: '#ffa248', typeFr: 'Faire réaliser une production originale',
  },
];

export const innovationBySlug = new Map(innovations.map(i => [i.slug, i]));

// normalise une valeur innovation_type pour la comparer au typeFr
export function normType(s: string): string {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}
