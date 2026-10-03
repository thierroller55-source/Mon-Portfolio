import { useLanguage } from '../contexts/LanguageContext';
import { skills } from '../data/skills';
import { translations } from '../data/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillsArray = [
    'frontend',
    'mobile',
    'backend',
    'databases',
    'cms',
    'tools',
    'quality',
    'nocode',
    'languages'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsArray.map((category) => (
            <div
              key={category}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {skills[category].title[language]}
              </h3>
              <ul className="space-y-2">
                {skills[category].items.map((item, index) => (
                  <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
