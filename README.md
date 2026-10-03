# Portfolio de Mame Thierno DIOUF

Portfolio professionnel développé avec React + Vite + Tailwind CSS.

## 🚀 Installation

```bash
npm install
```

## 📦 Lancer en local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build pour production

```bash
npm run build
```

## 📤 Déploiement sur Vercel

1. Installer Vercel CLI:
```bash
npm install -g vercel
```

2. Déployer:
```bash
vercel
```

Ou connectez votre dépôt GitHub à Vercel pour un déploiement automatique.

## 📁 Structure du projet

```
Mon-Portfolio/
├── public/
│   ├── images/
│   │   └── profil.jpg (à ajouter)
│   ├── certificats/
│   │   └── (images à ajouter)
│   └── cv-mame-thierno-diouf.pdf (à ajouter)
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── contexts/
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── certificates.js
│   │   ├── identity.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## ✏️ Ce que vous devez remplacer

### 1. Fichiers à ajouter dans `public/`

- **Photo de profil**: `public/images/profil.jpg`
  - Portrait vertical, costume bleu marine sur fond noir
  - Format recommandé: 400x400px ou plus

- **CV**: `public/cv-mame-thierno-diouf.pdf`
  - Votre CV au format PDF

- **Certificats** dans `public/certificats/`:
  - `wordpress.jpg`
  - `tailwind.jpg`
  - `react-state.jpg`
  - `javascript.jpg`
  - `html-css.jpg`
  - `2fa-react-native.jpg`
  - `filamentphp.jpg`
  - `airtable.jpg`

### 2. Données à modifier dans `src/data/`

#### `identity.js`
- `availability`: Remplacez `[À PRÉCISER : stage / alternance / emploi, date, télétravail]` par votre disponibilité réelle

#### `projects.js`
- **Projet 1 (EasyHealth)**:
  - `demoUrl`: Remplacez `[LIEN_DÉMO]` par le lien de démo si disponible
  - `repoUrl`: Remplacez `[LIEN_DÉPÔT]` par le lien du dépôt GitHub
  - `screenshots`: Remplacez `[CAPTURE_1]`, `[CAPTURE_2]` par les chemins des captures d'écran

- **Projet 2 (EasyBus)**:
  - Vérifiez quelle description est correcte (Django ou Node.js/Express)
  - Conservez uniquement la description exacte ou présentez les deux périodes distinctement
  - `demoUrl`, `repoUrl`, `screenshots`: Remplacez les placeholders

- **Projet 3 (Red-Product)**:
  - `demoUrl`, `repoUrl`, `screenshots`: Remplacez les placeholders

- **Projet 4 (RedTeamCN)**:
  - `demoUrl`, `repoUrl`, `screenshots`: Remplacez les placeholders

- **Projet 5 (Bakeli World)**:
  - `demoUrl`, `repoUrl`, `screenshots`: Remplacez les placeholders

- **Projet 6 (Tâche 21)**:
  - Complétez toutes les informations entre crochets
  - `description`, `role`, `company`, `context`, `stack`, `features`
  - `demoUrl`, `repoUrl`, `screenshots`

#### `skills.js`
- Remplacez `[NIVEAU À PRÉCISER]` pour:
  - Français: "Français [NIVEAU À PRÉCISER]"
  - Anglais: "Anglais [NIVEAU À PRÉCISER]"

### 3. Métadonnées dans `index.html`

- Remplacez `https://yourdomain.com/` par votre domaine réel après déploiement

### 4. Configuration Brevo pour le formulaire de contact

Pour activer l'envoi d'emails via le formulaire de contact:

1. **Créez un compte Brevo** (anciennement Sendinblue): https://www.brevo.com/
2. **Obtenez votre clé API**:
   - Allez dans: https://app.brevo.com/settings/keys/api
   - Cliquez sur "Generate a new API key"
   - Copiez la clé générée

3. **Configurez le fichier `.env`**:
   - Copiez `.env.example` en `.env`
   - Remplacez les valeurs:
     ```bash
     VITE_BREVO_API_KEY=votre_clé_api_ici
     VITE_BREVO_SENDER_EMAIL=votre_email_vérifié_brevo@example.com
     VITE_BREVO_SENDER_NAME=Votre Nom
     ```

4. **Vérifiez votre email expéditeur**:
   - L'email configuré dans `VITE_BREVO_SENDER_EMAIL` doit être vérifié dans votre compte Brevo
   - Allez dans: https://app.brevo.com/settings/senders
   - Ajoutez et vérifiez votre email expéditeur

**Note**: Le fichier `.env` est déjà ajouté au `.gitignore` pour protéger vos clés API.

## 🎨 Fonctionnalités

- ✅ Mode clair / mode sombre avec persistance
- ✅ Bilingue Français / Anglais avec persistance
- ✅ Navigation fluide avec scroll vers les sections
- ✅ Défilement automatique des sections (toutes les 3 secondes)
- ✅ Arrêt du défilement automatique lors de l'interaction utilisateur
- ✅ Arrêt du défilement automatique pendant 5 minutes après un clic
- ✅ Design responsive (mobile-first)
- ✅ Animations sobres et performantes
- ✅ Accessibilité (contrastes, navigation clavier, focus visible)
- ✅ SEO de base (meta tags, Open Graph)
- ✅ Performances optimisées
- ✅ Formulaire de contact avec envoi d'email via Brevo API

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- Context API (pour langue et thème)
