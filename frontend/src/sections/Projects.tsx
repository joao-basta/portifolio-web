import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

const Projects = ({ projects, loading }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        
        {loading ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {project.image_url && (
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github_url && (
                      <a 
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.live_url && (
                      <a 
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
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