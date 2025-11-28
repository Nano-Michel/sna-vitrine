export const org = {
  name: 'Société Nationale Agronome',
  short: 'SNA',
  email: 'contact@sna.agro',
  phone: '[Numéro fictif]',
  address: '[Adresse fictive pour le site vitrine]'
};

export const hero = {
  title: 'Vers une agriculture durable et prospère',
  subtitle:
    "Bienvenue sur le site de la Société Nationale Agronome (SNA), une institution dédiée à l'avancement de l'agriculture durable et à la prospérité des acteurs du secteur agricole.",
  ctaPrimary: 'Découvrir nos services',
  ctaSecondary: 'À propos de la SNA'
};

export const about = {
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
};

export type Service = { title: string; description: string; icon?: string };

export const services: Service[] = [
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
];

export const realtime = {
  title: 'Informations en temps réel',
  text:
    "Accédez à des données actualisées par localisation : conditions de culture biologique, volumes et alertes de pénurie pour une décision informée."
};

export const partnerships = {
  title: 'Partenariats',
  items: [
    "Écoles d'ingénieurs agronomes",
    "Ministères de l'agriculture",
    "Organisations internationales (échanges de connaissances et ressources)"
  ],
  note:
    'Ces partenariats soutiennent l’innovation face aux défis globaux comme le changement climatique.'
};

export const contact = {
  title: 'Contact',
  subtitle:
    "Pour toute demande d'information, de partenariat ou d'assistance, contactez-nous via le formulaire ou par les coordonnées suivantes.",
  addressLabel: 'Adresse',
  phoneLabel: 'Téléphone',
  emailLabel: 'Email'
};
