
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  initials: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean-Baptiste Durand",
    role: "Exploitant céréalier, Beauce",
    initials: "JB",
    content:
      "Un service après-vente irréprochable. Ma moissonneuse est tombée en panne en pleine récolte, les techniciens d'Andrés étaient là en moins de 2 heures.",
  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Coopérative Viticole",
    initials: "ML",
    content:
      "La location de matériel chez Maquinaria Andrés nous a permis de moderniser notre parc sans impacter notre trésorerie. Une équipe très à l'écoute.",
  },
  {
    id: 3,
    name: "Pierre Roche",
    role: "Entrepreneur Travaux Agricoles",
    initials: "PR",
    content:
      "L'expertise technique est là. Ils connaissent leurs machines sur le bout des doigts et conseillent toujours l'outil le plus adapté.",
  },
  {
    id: 4,
    name: "Thomas Martin",
    role: "Agriculteur",
    initials: "TM",
    content:
      "Une équipe sérieuse et disponible. Le matériel correspond parfaitement à nos besoins.",
  },
  {
    id: 5,
    name: "Claire Bernard",
    role: "Exploitation agricole",
    initials: "CB",
    content:
      "Très bonne expérience avec l'équipe. Les conseils avant l'achat nous ont beaucoup aidés.",
  },
  {
    id: 6,
    name: "Nicolas Petit",
    role: "Entreprise agricole",
    initials: "NP",
    content:
      "Du matériel performant et un accompagnement professionnel du début à la fin.",
  },
  {
    id: 7,
    name: "Paul Robert",
    role: "Exploitant agricole",
    initials: "PR",
    content:
      "Service rapide, personnel compétent et matériel de très bonne qualité.",
  },
  {
    id: 8,
    name: "Sophie Leroy",
    role: "Coopérative agricole",
    initials: "SL",
    content:
      "Nous avons particulièrement apprécié la disponibilité de l'équipe technique.",
  },
  {
    id: 9,
    name: "Marc Dubois",
    role: "Agriculteur",
    initials: "MD",
    content:
      "Une excellente solution pour nos besoins saisonniers. Je recommande sans hésiter.",
  },
];