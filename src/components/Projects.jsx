import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import { translations } from '../data/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => openProject(project)}
            >
              <div className="h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600">
                        <span class="text-white text-6xl font-bold opacity-30">${project.name[0]}</span>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedProject.name}
              </h3>
              <button
                onClick={closeProject}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {selectedProject.description[language]}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {selectedProject.context[language]}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    {t.role}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {selectedProject.role[language]}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    {t.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {selectedProject.company}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                  {t.stack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                  {t.features}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features[language].map((feature, index) => (
                    <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.challenges.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                    {t.challenges}
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.challenges.map((challenge, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                        <div className="mb-2">
                          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                            {t.problem}:
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 mt-1">
                            {challenge.problem[language]}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                            {t.solution}:
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 mt-1">
                            {challenge.solution[language]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                {selectedProject.demoUrl && !selectedProject.demoUrl.startsWith('[') && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.viewDemo}
                  </a>
                )}
                {selectedProject.repoUrl && !selectedProject.repoUrl.startsWith('[') && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
                  >
                    {t.viewRepo}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
