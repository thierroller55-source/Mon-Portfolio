import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Journey = () => {
  const { language } = useLanguage();
  const t = translations[language].journey;

  const timeline = [
    {
      year: "2025 - 2026",
      title: "Formation Développement Web et Web Mobile",
      organization: "Bakeli School of Technology",
      description: language === 'fr'
        ? "Formation intensive en développement web et mobile, avec spécialisation JavaScript, React et écosystème PHP/Laravel."
        : "Intensive training in web and mobile development, with specialization in JavaScript, React and PHP/Laravel ecosystem."
    },
    {
      year: "07/04/2026 - 07/10/2026",
      title: "Alternance - Développeur Full Stack",
      organization: "Volkeno SARL (Service RED TEAM)",
      description: language === 'fr'
        ? "Développement Full Stack sur projet EasyHealth (plateforme média-santé). Correction de bugs en production, tests unitaires, déploiement continu."
        : "Full Stack development on EasyHealth project (health media platform). Production bug fixing, unit testing, continuous deployment."
    },
    {
      year: "16/10/2026",
      title: t.defense,
      organization: "Bakeli School of Technology",
      description: language === 'fr'
        ? "Soutenance de fin de formation présentant les projets réalisés et les compétences acquises durant l'alternance."
        : "End-of-training defense presenting completed projects and skills acquired during the internship."
    }
  ];

  return (
    <section id="journey" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
