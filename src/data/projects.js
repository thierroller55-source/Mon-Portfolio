export const projects = [
  {
    id: 1,
    name: "EasyHealth",
    description: {
      fr: "Plateforme média-santé pour le Sénégal : contenus santé fiables, annuaire des professionnels et établissements de santé, symptom checker, carte santé interactive, espace Questions/Réponses, profils vérifiés.",
      en: "Health media platform for Senegal: reliable health content, directory of health professionals and facilities, symptom checker, interactive health map, Q&A space, verified profiles."
    },
    role: {
      fr: "Développeur Full Stack (frontend et backend) et rédaction des tests unitaires",
      en: "Full Stack Developer (frontend and backend) and unit test writing"
    },
    company: "Volkeno SARL (service RED TEAM)",
    year: "2026",
    context: {
      fr: "Projet principal de fin d'alternance. Équipe de 4 personnes encadrée par la coach Sokhna.",
      en: "Main end-of-internship project. Team of 4 people supervised by coach Sokhna."
    },
    stack: ["React", "Vite", "Tailwind CSS", "React Router", "PWA", "Node.js", "Express", "MongoDB/Mongoose", "JWT", "Swagger", "Axios", "Node-cron", "Brevo API", "Jest", "Supertest", "Vercel", "Render/Heroku", "Git/GitHub"],
    features: {
      fr: [
        "Interfaces React.js/Vite/Tailwind CSS",
        "API REST Node.js/Express",
        "Authentification sécurisée (JWT, Bcrypt.js)",
        "Réinitialisation du mot de passe par e-mail",
        "Module des pharmacies de garde",
        "Tests Jest et Supertest"
      ],
      en: [
        "React.js/Vite/Tailwind CSS interfaces",
        "Node.js/Express REST API",
        "Secure authentication (JWT, Bcrypt.js)",
        "Password reset by email",
        "On-duty pharmacies module",
        "Jest and Supertest tests"
      ]
    },
    challenges: [
      {
        problem: {
          fr: "Les e-mails de réinitialisation n'arrivaient pas (service mailer configuré avec Resend alors que la clé du .env était Brevo, expéditeur non validé).",
          en: "Password reset emails were not arriving (mailer service configured with Resend while the .env key was Brevo, sender not validated)."
        },
        solution: {
          fr: "Réécriture du mailer pour appeler l'API Brevo via Axios avec la bonne variable d'environnement et un expéditeur valide.",
          en: "Rewriting the mailer to call the Brevo API via Axios with the correct environment variable and a valid sender."
        }
      },
      {
        problem: {
          fr: "La route de détail des pharmacies de garde renvoyait des erreurs 404/400 (la route dynamique /:id était déclarée avant les routes statiques comme /verifier).",
          en: "The on-duty pharmacies detail route returned 404/400 errors (the dynamic /:id route was declared before static routes like /verifier)."
        },
        solution: {
          fr: "Réorganisation des routes (routes statiques d'abord, /:id en dernier) et recherche croisée par ID du planning ou de la pharmacie.",
          en: "Reorganization of routes (static routes first, /:id last) and cross-search by planning or pharmacy ID."
        }
      }
    ],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/easyhealth.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  },
  {
    id: 2,
    name: "EasyBus",
    description: {
      fr: "Plateforme de transport professionnel et de covoiturage d'entreprise au Sénégal : application web d'administration, application mobile salarié (Android/iOS), application mobile chauffeur (Android).",
      en: "Professional transport and corporate carpooling platform in Senegal: admin web application, employee mobile app (Android/iOS), driver mobile app (Android)."
    },
    role: {
      fr: "Module d'authentification en Full Stack et partie mobile, puis diagnostic et correction de bugs critiques en production",
      en: "Full Stack authentication module and mobile part, then diagnosis and fixing of critical production bugs"
    },
    company: "Volkeno (Easy Suite) - Projet de validation finale Bakeli",
    year: "2026",
    context: {
      fr: "Projet mené pendant les 3 premiers mois de l'alternance. Deux volets de mission selon la période.",
      en: "Project carried out during the first 3 months of the internship. Two mission phases depending on the period."
    },
    stack: ["Django", "Django REST Framework", "React", "React Native", "PostgreSQL", "JWT", "HTTPS", "Node.js", "Express", "MongoDB (Mongoose)", "Axios"],
    features: {
      fr: [
        "Authentification e-mail/téléphone avec OTP par SMS",
        "Gestion des rôles Admin, RH, Salarié, Transporteur, Chauffeur",
        "Diagnostic et correction de bugs en production (erreurs 500, échecs upload 400)",
        "Correction du routage Express et middlewares dupliqués",
        "Collaboration GitLab (branches, Merge Requests, déploiement continu)"
      ],
      en: [
        "Email/phone authentication with SMS OTP",
        "Role management: Admin, HR, Employee, Transporter, Driver",
        "Production bug diagnosis and fixing (500 errors, 400 upload failures)",
        "Express routing correction and duplicate middlewares",
        "GitLab collaboration (branches, Merge Requests, continuous deployment)"
      ]
    },
    challenges: [],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/easybus.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  },
  {
    id: 3,
    name: "Red-Product",
    description: {
      fr: "Application de gestion d'un catalogue d'hôtels avec back-office.",
      en: "Hotel catalog management application with back-office."
    },
    role: {
      fr: "Conception et développement complet de bout en bout",
      en: "Complete design and development from end to end"
    },
    company: "Projet personnel",
    year: "2026",
    context: {
      fr: "Application développée seul.",
      en: "Application developed alone."
    },
    stack: ["React", "Tailwind CSS", "Context API"],
    features: {
      fr: [
        "Authentification complète (connexion, inscription, mot de passe oublié)",
        "Tableau de bord avec indicateurs clés",
        "Liste des hôtels en grille (photo, localisation, nom, tarif)",
        "Création d'un hôtel",
        "Composants réutilisables"
      ],
      en: [
        "Complete authentication (login, registration, forgot password)",
        "Dashboard with key indicators",
        "Hotel list in grid (photo, location, name, rate)",
        "Hotel creation",
        "Reusable components"
      ]
    },
    challenges: [],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/red-product.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  },
  {
    id: 4,
    name: "RedTeamCN",
    description: {
      fr: "Plateforme interne de design system et de distribution de composants, type shadcn/ui.",
      en: "Internal design system and component distribution platform, shadcn/ui type."
    },
    role: {
      fr: "Réalisation d'une suite de tests unitaires en équipe, dans une logique d'assurance qualité",
      en: "Implementation of a unit test suite as a team, in a quality assurance logic"
    },
    company: "Red-Team",
    year: "2026",
    context: {
      fr: "Catalogue de composants React, blocs de pages et feature packs.",
      en: "React component catalog, page blocks and feature packs."
    },
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Storybook", "Django 5/DRF"],
    features: {
      fr: [
        "Tests unitaires de composants",
        "Assurance qualité",
        "Design system interne"
      ],
      en: [
        "Component unit tests",
        "Quality assurance",
        "Internal design system"
      ]
    },
    challenges: [],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/redteamcn.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  },
  {
    id: 5,
    name: "Bakeli World",
    description: {
      fr: "Projet préexistant déjà finalisé.",
      en: "Pre-existing project already completed."
    },
    role: {
      fr: "Audit qualité par des tests unitaires, en équipe",
      en: "Quality audit via unit tests, as a team"
    },
    company: "Bakeli",
    year: "2026",
    context: {
      fr: "Aucun autre développement n'a été fait dessus : le dire honnêtement.",
      en: "No other development was done on it: stated honestly."
    },
    stack: ["Jest", "Supertest"],
    features: {
      fr: [
        "Tests unitaires pour vérifier le bon fonctionnement",
        "Repérage d'éventuelles anomalies"
      ],
      en: [
        "Unit tests to verify proper functioning",
        "Identification of potential anomalies"
      ]
    },
    challenges: [],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/bakeli-world.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  },
  {
    id: 6,
    name: "Tâche 21",
    description: {
      fr: "[DESCRIPTION À FOURNIR]",
      en: "[DESCRIPTION TO BE PROVIDED]"
    },
    role: {
      fr: "[RÔLE À FOURNIR]",
      en: "[ROLE TO BE PROVIDED]"
    },
    company: "[ENTREPRISE À FOURNIR]",
    year: "2026",
    context: {
      fr: "[CONTEXTE À FOURNIR]",
      en: "[CONTEXT TO BE PROVIDED]"
    },
    stack: ["[STACK À FOURNIR]"],
    features: {
      fr: ["[FONCTIONNALITÉS À FOURNIR]"],
      en: ["[FEATURES TO BE PROVIDED]"]
    },
    challenges: [],
    demoUrl: "[LIEN_DÉMO]",
    repoUrl: "[LIEN_DÉPÔT]",
    image: "/projects/tache21.png",
    screenshots: ["[CAPTURE_1]", "[CAPTURE_2]"]
  }
];
