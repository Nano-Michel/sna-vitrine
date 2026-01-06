export type Lang = 'fr' | 'en';

export type Service = { title: string; description: string; icon?: string };

export type Content = {
  org: { name: string; short: string; email: string; phone: string; address: string; rightsReserved: string };
  nav: { home: string; about: string; services: string; seedBank: string; partnerships: string; info: string; recruitment: string; contact: string; toggleLabel: string };
  hero: { 
    title: string; 
    subtitle: string; 
    ctaPrimary: string; 
    ctaSecondary: string;
    sustainableAgriculture: string;
    stats: {
      producers: string;
      partnerships: string;
      realTime: string;
      data: string;
    };
  };
  about: { title: string; intro: string; bullets: string[]; closing: string };
  servicesHeading: string;
  servicesIntro: string;
  servicesImageAlt: string;
  services: Service[];
  realtime: {
    title: string;
    text: string;
    locationTitle: string;
    locationDesc: string;
    organicTitle: string;
    organicDesc: string;
    alertsTitle: string;
    alertsDesc: string;
  };
  partnerships: { title: string; items: string[]; note: string };
  contact: { 
    title: string; 
    subtitle: string; 
    addressLabel: string; 
    phoneLabel: string; 
    emailLabel: string; 
    actorsHelped: string; 
    contactButton: string; 
    supportTeamAlt: string; 
    advisorAlt: string 
  };
  cta: { title: string; subtitle: string };
  recruitment: {
    title: string;
    description: string;
    submitCv: string;
    joinTeamTitle: string;
    joinTeamDesc: string;
    videoAlt: string;
    browserNotSupported: string;
  };
  video: {
    chip: string;
    title: string;
    subtitle: string;
    thumbnailAlt: string;
    playAriaLabel: string;
  };
  seedBank: {
    title: string;
    tagline: string;
    subtitle: string;
    mission: string;
    missionBullets: string[];
    stats: {
      samples: string;
      species: string;
      partners: string;
    };
    servicesHeading: string;
    servicesIntro: string;
    features: {
      conservation: { title: string; desc: string };
      distribution: { title: string; desc: string };
      research: { title: string; desc: string };
    };
    actionVideo: {
      chip: string;
      title: string;
      subtitle: string;
      posterAlt: string;
      playAriaLabel: string;
    };
    forFarmers: { title: string; desc: string };
    forPartners: { title: string; desc: string };
    cta: string;
    missionTitle: string;
    joinNetwork: string;
    joinNetworkDesc: string;
  };
};

export const content: Record<Lang, Content> = {
  fr: {
    org: {
      name: 'Société Nationale Agronome',
      short: 'SNA',
      email: 'contact@sna.agro',
      phone: '237 699999999',
      address: 'Yaoundé-Cameroun',
      rightsReserved: 'Tous droits réservés'
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      seedBank: 'Banque de Semences',
      partnerships: 'Partenariats',
      info: 'Infos',
      recruitment: 'Recrutement',
      contact: 'Contact',
      toggleLabel: 'Basculer la navigation'
    },
    hero: {
      title: 'Vers une agriculture durable et prospère',
      subtitle:
        "Bienvenue sur le site de la Société Nationale Agronome (SNA), une institution dédiée à l'avancement de l'agriculture durable et à la prospérité des acteurs du secteur agricole.",
      ctaPrimary: 'Découvrir nos services',
      ctaSecondary: 'À propos de la SNA',
      sustainableAgriculture: 'Agriculture durable',
      stats: {
        producers: 'Producteurs',
        partnerships: 'Partenariats',
        realTime: 'Temps réel',
        data: 'Données'
      }
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
    servicesImageAlt: 'Nos services',
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
      text: "Accédez à des données actualisées par localisation : conditions de culture biologique, volumes et alertes de pénurie pour une décision informée.",
      locationTitle: 'Localisation',
      locationDesc: 'Cartographie des ressources et indicateurs locaux.',
      organicTitle: 'Culture biologique',
      organicDesc: 'Documentation des pratiques et conditions de culture.',
      alertsTitle: 'Alertes',
      alertsDesc: 'Suivi des pénuries et notifications clés.'
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
      emailLabel: 'Email',
      actorsHelped: '5000+ acteurs accompagnés',
      contactButton: 'Prendre contact',
      supportTeamAlt: 'Équipe support SNA',
      advisorAlt: 'Conseiller SNA en échange avec un producteur'
    },
    cta: {
      title: 'Innovation Agricole pour un Avenir Durable',
      subtitle: 'Rejoignez-nous pour transformer l\'agriculture de demain avec des solutions durables et innovantes'
    },
    recruitment: {
      title: 'Recrutement & Banque de CV',
      description: 'Soumettez votre CV pour étude et stockage, puis bénéficiez de mises en relation avec des recruteurs.',
      submitCv: 'Soumettre un CV',
      joinTeamTitle: 'Rejoignez notre équipe',
      joinTeamDesc: "Envoyez-nous votre CV et nous vous contacterons dès qu'une opportunité correspondra à votre profil.",
      videoAlt: 'Vidéo de recrutement SNA',
      browserNotSupported: 'Votre navigateur ne supporte pas la vidéo HTML5.'
    },
    video: {
      chip: 'Découvrez',
      title: 'Notre Mission en Action',
      subtitle: 'Découvrez comment la SNA accompagne les acteurs agricoles au quotidien.',
      thumbnailAlt: 'Aperçu vidéo',
      playAriaLabel: 'Lire la vidéo'
    },
    seedBank: {
      title: 'Banque de Semences SNA',
      tagline: 'Préserver les semences pour l\'avenir',
      subtitle: 'Notre banque de semences offre un stockage sécurisé, gratuit et à long terme pour les variétés agricoles nationales.',
      mission: 'Nous collaborons avec les agriculteurs et institutions pour préserver la biodiversité agricole et assurer la sécurité alimentaire future.',
      missionBullets: [
        'Conservation à long terme',
        'Préservation de la biodiversité',
        'Sécurité alimentaire future'
      ],
      stats: {
        samples: 'Échantillons conservés',
        species: 'Espèces répertoriées',
        partners: 'Partenaires déposants'
      },
      servicesHeading: 'Nos Services',
      servicesIntro: 'Une infrastructure complète pour la conservation des semences',
      features: {
        conservation: {
          title: 'Conservation',
          desc: 'Stockage à long terme dans des conditions optimales pour préserver la viabilité des semences.'
        },
        distribution: {
          title: 'Distribution',
          desc: 'Accès facilité aux semences certifiées pour les agriculteurs et coopératives.'
        },
        research: {
          title: 'Recherche',
          desc: 'Collaboration avec les instituts de recherche pour améliorer les variétés locales.'
        }
      },
      actionVideo: {
        chip: 'Découvrez',
        title: 'La Banque de Semences en Action',
        subtitle: 'Découvrez comment nous préservons le patrimoine agricole',
        posterAlt: 'Aperçu vidéo',
        playAriaLabel: 'Lire la vidéo'
      },
      forFarmers: {
        title: 'Pour les Agriculteurs',
        desc: 'Accédez à des semences de qualité, adaptées à votre région et certifiées par la SNA.'
      },
      forPartners: {
        title: 'Pour les Partenaires',
        desc: 'Déposez vos échantillons gratuitement et contribuez à la préservation de notre patrimoine agricole.'
      },
      cta: 'Découvrir la Banque de Semences',
      missionTitle: 'Notre Mission',
      joinNetwork: 'Rejoignez notre réseau',
      joinNetworkDesc: 'Ensemble, préservons le patrimoine agricole pour les générations futures.'
    }
  },
  en: {
    org: {
      name: 'National Agronomy Agency',
      short: 'SNA',
      email: 'contact@sna.agro',
      phone: '237 699999999',
      address: 'Yaoundé-Cameroon',
      rightsReserved: 'All rights reserved'
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      seedBank: 'Seed Bank',
      partnerships: 'Partnerships',
      info: 'Updates',
      recruitment: 'Recruitment',
      contact: 'Contact',
      toggleLabel: 'Toggle navigation'
    },
    hero: {
      title: 'Toward sustainable and prosperous agriculture',
      subtitle:
        'Welcome to the National Agronomy Agency (SNA), dedicated to advancing sustainable agriculture and supporting stakeholders across the sector.',
      ctaPrimary: 'Explore our services',
      ctaSecondary: 'About SNA',
      sustainableAgriculture: 'Sustainable Agriculture',
      stats: {
        producers: 'Producers',
        partnerships: 'Partnerships',
        realTime: 'Real-time',
        data: 'Data'
      }
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
    servicesImageAlt: 'Our services',
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
      text: 'Access up-to-date agricultural data by location: organic conditions and shortage alerts.',
      locationTitle: 'Location',
      locationDesc: 'Mapping of resources and local indicators.',
      organicTitle: 'Organic farming',
      organicDesc: 'Documentation of practices and growing conditions.',
      alertsTitle: 'Alerts',
      alertsDesc: 'Shortage monitoring and key notifications.'
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
      emailLabel: 'Email',
      actorsHelped: '5000+ actors supported',
      contactButton: 'Get in touch',
      supportTeamAlt: 'SNA support team',
      advisorAlt: 'SNA advisor discussing with a producer'
    },
    cta: {
      title: 'Agricultural Innovation for a Sustainable Future',
      subtitle: 'Join us in shaping tomorrow\'s agriculture with sustainable and innovative solutions'
    },
    recruitment: {
      title: 'Recruitment & CV Bank',
      description: 'Submit your CV for review and storage, and benefit from connections with recruiters.',
      submitCv: 'Submit CV',
      joinTeamTitle: 'Join our team',
      joinTeamDesc: "Send us your CV and we will contact you as soon as an opportunity matches your profile.",
      videoAlt: 'SNA Recruitment Video',
      browserNotSupported: 'Your browser does not support HTML5 video.'
    },
    video: {
      chip: 'Discover',
      title: 'Our Mission in Action',
      subtitle: 'Discover how SNA supports agricultural stakeholders every day.',
      thumbnailAlt: 'Video thumbnail',
      playAriaLabel: 'Play video'
    },
    seedBank: {
      title: 'SNA Seed Bank',
      tagline: 'Safeguarding Seeds for the Future',
      subtitle: 'Our seed bank offers secure, free and long-term storage for national agricultural varieties.',
      mission: 'We collaborate with farmers and institutions to preserve agricultural biodiversity and ensure future food security.',
      missionBullets: [
        'Long-term conservation',
        'Biodiversity preservation',
        'Future food security'
      ],
      stats: {
        samples: 'Samples stored',
        species: 'Species catalogued',
        partners: 'Depositing partners'
      },
      servicesHeading: 'Our Services',
      servicesIntro: 'A complete infrastructure for seed conservation',
      features: {
        conservation: {
          title: 'Conservation',
          desc: 'Long-term storage under optimal conditions to preserve seed viability.'
        },
        distribution: {
          title: 'Distribution',
          desc: 'Easy access to certified seeds for farmers and cooperatives.'
        },
        research: {
          title: 'Research',
          desc: 'Collaboration with research institutes to improve local varieties.'
        }
      },
      actionVideo: {
        chip: 'Discover',
        title: 'The Seed Bank in Action',
        subtitle: 'Discover how we preserve agricultural heritage',
        posterAlt: 'Video thumbnail',
        playAriaLabel: 'Play video'
      },
      forFarmers: {
        title: 'For Farmers',
        desc: 'Access quality seeds, adapted to your region and certified by SNA.'
      },
      forPartners: {
        title: 'For Partners',
        desc: 'Deposit your samples for free and contribute to preserving our agricultural heritage.'
      },
      cta: 'Discover the Seed Bank',
      missionTitle: 'Our Mission',
      joinNetwork: 'Join our network',
      joinNetworkDesc: 'Together, let\'s preserve agricultural heritage for future generations.'
    }
  }
};
