import { ServiceItem, RoadmapStep, PortfolioItem, TestimonialItem, WhyChooseUsItem } from './types';

export const GESTION_SERVICES: ServiceItem[] = [
  {
    title: "Comptabilité",
    iconName: "FileSpreadsheet",
    items: [
      "Suivi comptable précis",
      "Organisation et tri des justificatifs",
      "Accompagnement dans les démarches administratives",
      "Optimisation des outils de gestion"
    ]
  },
  {
    title: "Gestion Administrative",
    iconName: "FileText",
    items: [
      "Classement, numérisation et archivage",
      "Rédaction et traitement de courriers",
      "Constitution de dossiers complexes",
      "Suivi rigoureux de l'activité quotidienne"
    ]
  },
  {
    title: "Création d'Associations",
    iconName: "Users",
    items: [
      "Rédaction personnalisée des statuts",
      "Déclarations en préfecture",
      "Mise en place de l'organisation",
      "Accompagnement complet de A à Z"
    ]
  },
  {
    title: "Consulting & Stratégie",
    iconName: "TrendingUp",
    items: [
      "Développement structuré de projets",
      "Conseils stratégiques personnalisés",
      "Optimisation financière et opérationnelle",
      "Stratégie de croissance à long terme"
    ]
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: "Étape 1",
    title: "Appel découverte",
    description: "Nous échangeons au cours d'un appel téléphonique ou d'un visiocode afin de cerner précisément votre projet, vos besoins immédiats et vos objectifs futurs."
  },
  {
    step: "Étape 2",
    title: "Consulting & Audit",
    description: "Nous réalisons une analyse complète de votre situation ou de votre image actuelle, puis nous vous proposons un plan d'action concret et chiffré."
  },
  {
    step: "Étape 3",
    title: "Accompagnement",
    description: "Mise en place des solutions validées (gestion ou création digitale) et suivi personnalisé pour garantir la pérennité et la réussite de votre activité."
  }
];

export const CREATION_SERVICES: ServiceItem[] = [
  {
    title: "Création de Sites Internet",
    iconName: "Globe",
    items: [
      "Site vitrine moderne & épuré",
      "Plateforme professionnelle sur-mesure",
      "Boutiques e-commerce performantes",
      "Optimisation mobile et responsive complète"
    ]
  },
  {
    title: "Création de Logos & Branding",
    iconName: "Palette",
    items: [
      "Logo professionnel vectorisé",
      "Identité visuelle unique & mémorable",
      "Charte graphique complète (palettes, typographies)",
      "Déclinaisons pour supports imprimés et web"
    ]
  },
  {
    title: "Création de Flyers & Supports",
    iconName: "Layers",
    items: [
      "Flyers publicitaires percutants",
      "Affiches et kakémonos événementiels",
      "Supports de communication corporate",
      "Création graphique prête pour l'impression"
    ]
  },
  {
    title: "Réseaux Sociaux",
    iconName: "Share2",
    items: [
      "Stratégie éditoriale et de contenu",
      "Création de gabarits visuels élégants",
      "Accompagnement pour l'animation de communauté",
      "Optimisation de profils (Instagram, LinkedIn)"
    ]
  },
  {
    title: "Google Business Profile",
    iconName: "Store",
    items: [
      "Création et revendication de fiche de marque",
      "Optimisation complète des mots-clés",
      "Stratégie de référencement local",
      "Valorisation des avis clients"
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Sites Internet
  {
    id: "site-1",
    category: "sites",
    title: "Cabinet d'Avocats Dumas",
    subtitle: "Site vitrine juridique haut de gamme - Secteur Droit",
  },
  {
    id: "site-2",
    category: "sites",
    title: "L'Atelier Culinaire",
    subtitle: "Site de réservation premium - Restaurant gastronomique",
  },
  {
    id: "site-3",
    category: "sites",
    title: "Horizon Immobilier",
    subtitle: "Portail d'annonces de biens de prestige - Immobilier",
  },
  // Logos
  {
    id: "logo-1",
    category: "logos",
    title: "Elysian Spa",
    subtitle: "Identité visuelle combinant pureté et luxe - Bien-être",
  },
  {
    id: "logo-2",
    category: "logos",
    title: "Apex Finance",
    subtitle: "Logo institutionnel géométrique minimaliste - Consulting",
  },
  {
    id: "logo-3",
    category: "logos",
    title: "Natura Cosmetiques",
    subtitle: "Branding éco-conçu en or brossé et blanc satiné",
  },
  // Flyers
  {
    id: "flyer-1",
    category: "flyers",
    title: "Gala de l'Entrepreneuriat",
    subtitle: "Affiche d'un événement caritatif et de networking",
  },
  {
    id: "flyer-2",
    category: "flyers",
    title: "Maison & Jardin Exposition",
    subtitle: "Flyer publicitaire élégant en triptyque papier mat",
  },
  // Réseaux Sociaux
  {
    id: "social-1",
    category: "social",
    title: "Coach Sportif - Elevate",
    subtitle: "Harmonisation visuelle et refonte complète du feed Instagram",
    beforeAfter: {
      before: "Feed incohérent, textes illisibles, absence d'identité visuelle claire.",
      after: "Gabarits noir & or , typographies affirmées, taux d'engagement en hausse de +120%."
    }
  },
  {
    id: "social-2",
    category: "social",
    title: "Cabinet d'Esthétique L'Éclat",
    subtitle: "Planification stratégique et direction artistique de stories et posts",
    beforeAfter: {
      before: "Publications sporadiques, photos floues sans retouches ni charte.",
      after: "Feed harmonieux beige rose gold, storyhighlights unifiés, visibilité multipliée par 3."
    }
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Rigueur",
    description: "Une précision chirurgicale dans la gestion de vos chiffres, de vos dossiers comptables et dans vos livrables de communication.",
    iconName: "ShieldCheck"
  },
  {
    title: "Organisation",
    description: "Mise en place de structures claires, d'archivages infaillibles et de méthodologies qui déchargent votre esprit au quotidien.",
    iconName: "FolderHeart"
  },
  {
    title: "Accompagnement personnalisé",
    description: "Pas de solution générique. Toutes nos propositions s'adaptent à la taille de votre structure et à la réalité de votre marché.",
    iconName: "UserCheck"
  },
  {
    title: "Réactivité",
    description: "Nous savons que le temps des entrepreneurs est précieux. Réponses rapides et interventions planifiées pour sécuriser vos urgences.",
    iconName: "Zap"
  },
  {
    title: "Solutions sur-mesure",
    description: "Que vous ayez besoin de 4 heures de secrétariat par semaine ou d'une refonte totale de votre branding, nous créons l'offre adaptée.",
    iconName: "Sliders"
  },
  {
    title: "Expertise terrain",
    description: "Nos collaborateurs sont des praticiens chevronnés, familiers avec la réalité administrative française et les dernières technologies web.",
    iconName: "Award"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Alexandre Mercier",
    role: "Fondateur de Mercier Immobilier",
    text: "Melli Groupe a transformé notre entreprise. Melli Gestion a structuré toute notre organisation administrative, tandis que Melli Création a conçu un site web moderne qui convertit nos prospects. La finition or et noir choisie reflète parfaitement notre positionnement haut de gamme !",
    rating: 5
  },
  {
    id: "t-2",
    name: "Sophie Laurent",
    role: "Présidente de l'Association 'Éco-Avenir'",
    text: "La création d'une association peut être un parcours du combattant. L'équipe de Melli Gestion nous a accompagnés dans la rédaction des statuts de manière fluide et professionnelle. Nous avons gagné un temps précieux.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Dr. Julien Vernet",
    role: "Médecin et Fondateur de Médical-Aesthetica",
    text: "La rigueur administrative et comptable est essentielle dans mon cabinet. L'externalisation administrative avec Melli Gestion a été un succès total. Je recommande chaudement leur réactivité et leur discrétion absolue.",
    rating: 5
  },
  {
    id: "t-4",
    name: "Clara Dubois",
    role: "Directrice de Création - L'Atelier d'Argile",
    text: "Nous avons confié la refonte intégrale de notre identité visuelle et de nos supports à Melli Création. Le travail graphique est d'une grande finesse, les flyers sont somptueux, et le feed Instagram est impeccable et professionnel.",
    rating: 5
  },
  {
    id: "t-5",
    name: "Thomas Giraud",
    role: "Artisan Ébéniste d'Art",
    text: "En tant qu'artisan, l'informatique et les papiers ne sont pas ma tasse de thé. Melli Groupe a tout pris en main. D'un côté, mon référencement local Google Business Profile a bondi exponentiellement, de l'autre, mes courriers administratifs sont à jour.",
    rating: 5
  },
  {
    id: "t-6",
    name: "Nadia Belkacem",
    role: "Gérante du Cabinet d'Expertise NB Consulting",
    text: "Un service premium de bout en bout. On sent l'expérience et le souci du détail dans chaque interaction. Le contact est agréable, le suivi de projet est transparent. Un véritable partenaire stratégique pour mon développement.",
    rating: 5
  }
];
