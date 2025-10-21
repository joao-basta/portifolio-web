import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Placeholder projects - we'll connect to backend later
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of this amazing project and what it does.',
      tech: ['React', 'TypeScript', 'Node.js'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Another cool project showcasing different technologies.',
      tech: ['PostgreSQL', 'Express', 'Tailwind'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div ref={ref} className="max-w-6xl w-full">
        <h2
          className={`text-4xl font-bold text-slate-light mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-cyan">02.</span> Things I've Built
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-navy-light p-8 rounded-lg border border-navy-light 
                hover:border-cyan transition-all duration-300 transform hover:-translate-y-1
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-slate-light mb-3">
                {project.title}
              </h3>
              <p className="text-slate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-cyan text-sm bg-navy-dark px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

