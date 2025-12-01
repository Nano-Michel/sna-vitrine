export type Lang = 'fr' | 'en';

export type Service = { title: string; description: string; icon?: string };

export type Content = {
  org: { name: string; short: string; email: string; phone: string; address: string };
  nav: { home: string; about: string; services: string; partnerships: string; info: string; recruitment: string; contact: string };
  hero: { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  about: { title: string; intro: string; bullets: string[]; closing: string };
  servicesHeading: string;
  servicesIntro: string;
  services: Service[];
  realtime: { title: string; text: string };
  partnerships: { title: string; items: string[]; note: string };
  contact: { title: string; subtitle: string; addressLabel: string; phoneLabel: string; emailLabel: string };
};

export const content: Record<Lang, Content> = {
  fr: {
    org: {
      name: 'Société Nationale Agronome',
      short: 'SNA',
      email: 'contact@sna.agro',
      phone: '237 699999999',
      address: 'Yaoundé-Cameroun'
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      partnerships: 'Partenariats',
      info: 'Infos',
      recruitment: 'Recrutement',
      contact: 'Contact'
    },
    hero: {
      title: 'Vers une agriculture durable et prospère',
      subtitle:
        "Bienvenue sur le site de la Société Nationale Agronome (SNA), une institution dédiée à l'avancement de l'agriculture durable et à la prospérité des acteurs du secteur agricole.",
      ctaPrimary: 'Découvrir nos services',
      ctaSecondary: 'À propos de la SNA'
    },
    about: {
      title: 'À propos de la SNA',
      intro:
        "La SNA est une organisation publique engagée dans le recensement, le soutien et la valorisation du secteur agricole national.",
      bullets: [
        'Recenser les agriculteurs, éleveurs et domaines agricoles',
        "Fournir des informations en temps réel sur les productions, terres et conditions locales",
        "Agir comme intermédiaire neutre entre producteurs et distributeurs",
        "Promouvoir l'agriculture biologique et les meilleures pratiques environnementales",
        'Documenter les pénuries en temps réel et renforcer la sécurité alimentaire'
      ],
      closing:
        "Grâce à une approche holistique et des partenariats académiques et institutionnels, la SNA vise à soutenir une agriculture résiliente et inclusive."
    },
    servicesHeading: 'Nos Services',
    servicesIntro:
      "La SNA offre une gamme complète de services pour accompagner les acteurs du secteur agricole, des petits producteurs aux entreprises internationales.",
    services: [
      {
        title: 'Recensement & Cartographie',
        description:
          "Recensement des agriculteurs, éleveurs, productions et terres disponibles, avec cartographie et possibilité d'achat en ligne de terrains via une plateforme sécurisée.",
        icon: 'bi-geo-alt'
      },
      {
        title: 'Soutien Financier & Formation',
        description:
          "Demandes de prêts et financements pour semences, machines et projets; formations spécialisées et accompagnement bancaire basés sur une analyse rigoureuse.",
        icon: 'bi-mortarboard'
      },
      {
        title: 'Banques de Ressources',
        description:
          "Banque de Semences, Banque Alimentaire et Banque de Matières Premières, avec une bourse dédiée aux ressources agricoles.",
        icon: 'bi-box-seam'
      },
      {
        title: 'Négoce & Commercialisation',
        description:
          "Achat direct auprès des producteurs, labellisation SNA pour une traçabilité optimale, stockage sectoriel et vente locale/internationale.",
        icon: 'bi-bag-check'
      },
      {
        title: 'Export & Partenariats',
        description:
          "Gestion des exports, négociation d'accords et partenariats avec écoles d'ingénieurs, ministères et institutions internationales.",
        icon: 'bi-globe2'
      },
      {
        title: 'Recrutement & Banque de CV',
        description:
          "Soumission de CV, étude et stockage après frais d'analyse, et mise en relation avec des recruteurs pour une intégration fluide.",
        icon: 'bi-people'
      },
      {
        title: 'Informations en Temps Réel',
        description:
          "Données actualisées par localisation: conditions de culture biologique, volumes et alertes de pénurie pour une prise de décision informée.",
        icon: 'bi-bar-chart-line'
      }
    ],
    realtime: {
      title: 'Informations en temps réel',
      text:
        "Accédez à des données actualisées par localisation : conditions de culture biologique, volumes et alertes de pénurie pour une décision informée."
    },
    partnerships: {
      title: 'Partenariats',
      items: [
        "Écoles d'ingénieurs agronomes",
        "Ministères de l'agriculture",
        "Organisations internationales (échanges de connaissances et ressources)"
      ],
      note:
        'Ces partenariats soutiennent l’innovation face aux défis globaux comme le changement climatique.'
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Pour toute demande d'information, de partenariat ou d'assistance, contactez-nous via le formulaire ou par les coordonnées suivantes.",
      addressLabel: 'Adresse',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email'
    }
  },
  en: {
    org: {
      name: 'National Agronomy Agency',
      short: 'SNA',
      email: 'contact@sna.agro',
      phone: '237 699999999',
      address: 'Yaoundé-Cameroon'
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      partnerships: 'Partnerships',
      info: 'Updates',
      recruitment: 'Recruitment',
      contact: 'Contact'
    },
    hero: {
      title: 'Toward sustainable and prosperous agriculture',
      subtitle:
        'Welcome to the National Agronomy Agency (SNA), dedicated to advancing sustainable agriculture and supporting stakeholders across the sector.',
      ctaPrimary: 'Explore our services',
      ctaSecondary: 'About SNA'
    },
    about: {
      title: 'About SNA',
      intro:
        'SNA is a public organization committed to surveying, supporting, and enhancing the national agricultural sector.',
      bullets: [
        'Survey farmers, breeders and farmlands',
        'Provide real-time information on production, land and local conditions',
        'Act as a neutral intermediary between producers and distributors',
        'Promote organic farming and best environmental practices',
        'Document shortages in real time to strengthen food security'
      ],
      closing:
        'With a holistic approach and academic/institutional partnerships, SNA aims to support a resilient and inclusive agriculture.'
    },
    servicesHeading: 'Our Services',
    servicesIntro:
      'SNA offers a comprehensive suite of services to support agricultural stakeholders, from small producers to global enterprises.',
    services: [
      { title: 'Survey & Mapping', description: 'Comprehensive survey of producers, outputs and available lands, with secure online land purchases.', icon: 'bi-geo-alt' },
      { title: 'Financial Support & Training', description: 'Loan requests, financing and specialized training with rigorous proposal analysis.', icon: 'bi-mortarboard' },
      { title: 'Resource Banks', description: 'Seed Bank, Food Bank and Raw Materials Bank with a dedicated trading board.', icon: 'bi-box-seam' },
      { title: 'Trade & Marketing', description: 'Direct purchasing, SNA labeling for traceability, sector warehousing and domestic/international sales.', icon: 'bi-bag-check' },
      { title: 'Export & Partnerships', description: 'Manage exports and build partnerships with engineering schools, ministries and international bodies.', icon: 'bi-globe2' },
      { title: 'Recruitment & CV Bank', description: 'Submit CVs for review and storage, with pre-negotiated placements with recruiters.', icon: 'bi-people' },
      { title: 'Real-time Information', description: 'Location-based data: organic farming conditions, volumes and shortage alerts for informed decisions.', icon: 'bi-bar-chart-line' }
    ],
    realtime: {
      title: 'Real-time information',
      text: 'Access up-to-date agricultural data by location: organic conditions and shortage alerts.'
    },
    partnerships: {
      title: 'Partnerships',
      items: [
        'Agronomy engineering schools',
        'Ministries of agriculture',
        'International organizations (knowledge and resource exchange)'
      ],
      note: 'These partnerships drive innovation to face global challenges such as climate change.'
    },
    contact: {
      title: 'Contact',
      subtitle:
        'For information, partnerships or support, reach us via the online form or the following details.',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email'
    }
  }
};
