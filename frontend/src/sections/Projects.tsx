import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getProjects } from '../services/api';
import type { Project } from '../types';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

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

        {loading ? (
          <div className="text-center text-slate">
            <p className="text-xl">Loading projects...</p>
          </div>
        ) :
        
        
        projects.length === 0 ? (
          <div className="text-center text-slate">
            <p className="text-xl">No projects yet. Coming soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-navy-light p-6 rounded-lg border border-navy-light 
                  hover:border-cyan transition-all duration-300 transform hover:-translate-y-1
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-2xl font-bold text-slate-light mb-3">
                  {project.title}
                </h3>
                <p className="text-slate mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-cyan text-sm bg-navy-dark px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github_url && (
                    
                     <a href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-white transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live_url && (
                    
                     <a href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-white transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;