import { Tractor, CalendarDays, Wrench,
  Mountain, Sprout, Hammer
} from "lucide-react";
import image from "@/public/ImageHero.png";


export const services = [
  {
    id: 1,
    slug: "vente",
    title: "Vente de tracteurs et de matériel agricole",
    shortDescription:
      "Découvrez une large gamme de tracteurs, machines et équipements agricoles neufs ou d'occasion.",
    description:
      "Nous proposons des équipements agricoles performants adaptés aussi bien aux petites exploitations qu'aux grandes entreprises agricoles. Chaque machine est sélectionnée pour sa robustesse, sa fiabilité et son rendement.",
    action: "En savoir plus",
    icon: Tractor,
    featured: true,
    items: [
      "Tracteurs agricoles",
      "Mini-tracteurs",
      "Tracteurs à chenilles",
      "Motoculteurs",
      "Remorques agricoles",
      "Outils de travail du sol",
      "Machines agricoles professionnelles",
    ],
    advantages: [
      "Matériel neuf et d'occasion récente",
      "Conseils personnalisés",
      "Garantie constructeur",
      "Accompagnement avant l'achat",
    ],
  },

  {
    id: 2,
    slug: "reparation-entretien",
    title: "Réparation et entretien professionnels",
    shortDescription:
      "Maintenance préventive, réparations mécaniques et assistance technique multimarque.",
    description:
      "Nos techniciens assurent le diagnostic, la réparation et l'entretien de vos équipements agricoles afin de limiter les temps d'arrêt et garantir leur performance.",
    action: "Catalogue location",
    icon: CalendarDays,
    featured: true,
    items: [
      "Diagnostic professionnel",
      "Réparation mécanique",
      "Réparation hydraulique",
      "Réparation électronique",
      "Entretien préventif",
      "Remplacement de pièces",
      "Intervention sur site",
    ],
    advantages: [
      "Techniciens qualifiés",
      "Intervention rapide",
      "Pièces d'origine",
      "Toutes marques agricoles",
    ],
  },

  {
    id: 3,
    slug: "location",
    title: "Location de tracteurs et de matériel agricole",
    shortDescription:
      "Des solutions flexibles pour vos besoins saisonniers ou ponctuels.",
    description:
      "Nous proposons la location de tracteurs et d'équipements agricoles afin de répondre aux besoins temporaires des exploitants agricoles et entreprises.",
    action: "Prendre RDV",
    products: [
      {
        id: 1,
        title: "John Deere 8R 410",
        slug: "john-deere-8r-410",
        badge: "Premium",
        image: image,
        description:
          "Puissance de 410 ch, technologie JDLink intégrée, cabine haut de gamme pour un confort optimal.",
        dayPrice: "450€",
        totalPrice: "2 025€",
        features: ["410 CV", "GPS intégré"],
      },
      {
        id: 2,
        title: "Case IH Axial-Flow",
        slug: "case-ih-axial-flow",
        badge: "Haute Performance",
        image: image,
        description:
          "Système de battage rotatif pour une qualité de grain exceptionnelle.",
        dayPrice: "890€",
        totalPrice: "4 005€",
        features: ["Axial-Flow", "Faible consommation"],
      },
      {
        id: 3,
        title: "JCB Loadall 542-70",
        slug: "jcb-loadall",
        badge: "",
        image: image,
        description:
          "Chariot télescopique idéal pour les exploitations agricoles et les chantiers.",
        dayPrice: "320€",
        totalPrice: "1 440€",
        features: ["17 m", "3.7 tonnes"],
      },
      {
        id: 4,
        title: "New Holland T7",
        slug: "new-holland-t7",
        badge: "Disponible",
        image: image,
        description:
          "Tracteur polyvalent de 260 ch équipé d'un système de guidage GPS.",
        dayPrice: "580€",
        totalPrice: "2 610€",
        features: ["260 CV", "GPS RTK"],
      },
    ],
    icon: Wrench,
    featured: true,
    items: [
      "Tracteurs agricoles",
      "Mini-tracteurs",
      "Équipements de préparation des sols",
      "Matériel de semis",
      "Matériel de transport",
    ],
    advantages: [
      "Tarifs flexibles",
      "Location courte ou longue durée",
      "Machines récentes",
      "Maintenance incluse",
    ],
  },
  {
    id: 4,
    slug: "preparation-sols",
    title: "Préparation des sols et travaux agricoles",
    shortDescription:
      "Des prestations agricoles professionnelles pour préparer vos terres.",
    description:
      "Nous réalisons différents travaux agricoles grâce à notre parc de machines modernes et à une équipe expérimentée.",
    action: "Expertise sols",
    icon: Mountain,
    featured: false,
    prestations: [
      {
        title: "Préparation des terrains",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Labour traditionnel",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Labour réversible",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Travail du sol",
        image: image,
        description: "Semis de précision",
      }
    ],

    items: [],

    advantages: [
      "Équipements performants",
      "Travaux rapides",
      "Intervention sur grandes surfaces",
      "Personnel expérimenté",
    ],
  },

  {
    id: 5,
    slug: "semences",
    title: "Vente de semences et d'engrais",
    shortDescription:
      "Des produits agricoles sélectionnés pour améliorer vos rendements.",
    description:
      "Nous distribuons des semences certifiées et différents fertilisants adaptés à chaque type de culture.",
    action: "Notre catalogue",
    icon: Sprout,
    image: "/images/services/semences.jpg",
    featured: false,
    items: [
      "Semences de céréales",
      "Semences fourragères",
      "Semences de légumes",
      "Engrais NPK",
      "Fertilisants organiques",
      "Biostimulants",
    ],
    products: [
      {
        id: 1,
        title: "Semence de maïs hybride",
        slug: "semence-mais-hybride",
        badge: "Premium",
        image: image,
        category: "Semences agricoles",
        cropType: "Céréales",
        description:
          "Semence de maïs à haut rendement adaptée aux sols agricoles.",
        price: 42.5,
        unit: "/ sac de 25 kg",
        rating: 4.8,
        reviews: 48,
        stock: true,
      },

      {
        id: 2,
        title: "Semence de soja",
        slug: "semence-soja",
        badge: "Nouveau",
        image: image,
        category: "Semences agricoles",
        cropType: "Oléagineux",
        description:
          "Semence de soja sélectionnée pour améliorer le rendement.",
        price: 38.9,
        unit: "/ sac de 25 kg",
        rating: 4.6,
        reviews: 32,
        stock: false,
      },

      {
        id: 3,
        title: "Engrais NPK 15-15-15",
        slug: "engrais-npk-15-15-15",
        image: image,
        category: "Engrais NPK",
        cropType: "Céréales",
        description:
          "Fertilisant complet adapté aux besoins des cultures.",
        price: 29.5,
        unit: "/ sac de 25 kg",
        rating: 4.5,
        reviews: 21,
        stock: false,
      },

      {
        id: 4,
        title: "Fertilisant organique",
        slug: "fertilisant-organique",
        image: image,
        category: "Fertilisants organiques",
        cropType: "Fourragères",
        description:
          "Solution organique pour améliorer la fertilité des sols.",
        price: 25,
        unit: "/ sac de 25 kg",
        rating: 4.7,
        reviews: 17,
        stock: true,
      },
    ],
    prestations: [
      {
        title: "Préparation des terrains",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Labour traditionnel",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Labour réversible",
        image: image,
        description: "Semis de précision",
      },
      {
        title: "Travail du sol",
        image: image,
        description: "Semis de précision",
      }
    ],
    advantages: [
      "Produits certifiés",
      "Conseils techniques",
      "Grand choix de références",
      "Solutions adaptées à chaque culture",
    ],
  },

  {
    id: 6,
    slug: "outils-agricoles",
    title: "Outils et équipements agricoles",
    shortDescription:
      "Une gamme complète d'outils et d'accessoires pour les travaux agricoles.",
    description:
      "Retrouvez tout le matériel nécessaire pour entretenir vos exploitations agricoles et compléter vos équipements.",
    action: "Voir la gamme",
    icon: Hammer,
    image: "/images/services/outils.jpg",
    featured: false,
    items: [
      "Houes",
      "Fourches",
      "Sécateurs",
      "Équipements professionnels",
      "Attelages",
      "Chaînes",
      "Roues",
      "Éclairages",
      "Équipements de sécurité",
    ],
    advantages: [
      "Produits de qualité",
      "Matériel durable",
      "Large disponibilité",
      "Prix compétitifs",
    ],
  },
];


