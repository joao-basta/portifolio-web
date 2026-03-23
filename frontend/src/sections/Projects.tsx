import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getProjects } from '../services/api';
import type { Project } from '../types';

// Static fallback — shown when backend is unavailable
const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'RAG Chatbot — Mental Health (DSM-5-TR)',
    description:
      'Chatbot built independently using Retrieval-Augmented Generation to answer questions based on DSM-5-TR content. Built with Python, LangChain, and ChromaDB.',
    tech_stack: ['Python', 'LangChain', 'ChromaDB', 'RAG'],
    github_url: 'https://github.com/joao-basta',
    created_at: '',
  },
  {
    id: 2,
    title: 'Winery IoT Dashboard',
    description:
      'Full backend for an IoT dashboard monitoring winery data in real time. Solely responsible for the backend architecture using Python, Flask, and PostgreSQL.',
    tech_stack: ['Python', 'Flask', 'PostgreSQL', 'IoT'],
    github_url: 'https://github.com/joao-basta',
    created_at: '',
  },
  {
    id: 3,
    title: 'QI Tech Hackathon — Backend MVP',
    description:
      'Backend MVP built under time pressure at USP\'s Polytechnic School during the QI Tech Hackathon. Focused on fast API design and integration.',
    tech_stack: ['Python', 'REST API', 'PostgreSQL'],
    github_url: 'https://github.com/joao-basta',
    created_at: '',
  },
  {
    id: 4,
    title: 'Full-Stack Web Portfolio',
    description:
      'This portfolio — built with a Node.js/Express/PostgreSQL backend and a React/TypeScript frontend, including a protected admin panel for content management.',
    tech_stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    github_url: 'https://github.com/joao-basta/portfolio',
    created_at: '',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      // If API returns nothing (backend down/not deployed), use static fallback
      setProjects(data.length > 0 ? data : STATIC_PROJECTS);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  let content;
  if (loading) {
    content = (
      <div className="text-center text-slate">
        <p className="text-xl">Loading projects...</p>
      </div>
    );
  } else {
    content = (
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
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-white transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
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
    );
  }

  return (
    <section id="projects" className="max-w-6xl w-full py-20" ref={ref}>
      <h2
        className={`text-4xl font-bold text-slate-light mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-cyan">02.</span> Things I've Built
      </h2>

      {content}
    </section>
  );
};

export default Projects;