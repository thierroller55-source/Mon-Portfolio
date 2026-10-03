import { useLanguage } from '../contexts/LanguageContext';
import { identity } from '../data/identity';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              {t.available}: {identity.availability}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {identity.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              {identity.title[language]}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {identity.tagline[language]}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.viewProjects}
              </button>
              <a
                href={identity.cvFile}
                download
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.downloadCV}
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.contact}
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-delayed">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                <img
                  src={identity.profileImage}
                  alt={`${identity.name} - Profil professionnel`}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
