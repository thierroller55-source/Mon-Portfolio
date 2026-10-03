import { useLanguage } from '../contexts/LanguageContext';
import { identity } from '../data/identity';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            {identity.about[language]}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t.education}
              </h3>
              <div className="space-y-2">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Bakeli School of Technology</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Développement Web et Web Mobile
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  2025 – 2026
                </p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t.internship}
              </h3>
              <div className="space-y-2">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Volkeno SARL</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Service RED TEAM
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  07/04/2026 – 07/10/2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
