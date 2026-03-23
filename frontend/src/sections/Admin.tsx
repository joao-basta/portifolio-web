import { useState, useEffect } from 'react';
import { getProjects, createProject } from '../services/api';
import type { Project } from '../types';

interface AdminProps {
  token: string;
  onLogout: () => void;
}

const Admin = ({ token, onLogout }: AdminProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tech_stack: '',
    github_url: '',
    live_url: '',
    image_url: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const projectData = {
      ...formData,
      tech_stack: formData.tech_stack.split(',').map((t) => t.trim()).filter(Boolean),
    };

    const newProject = await createProject(projectData, token);

    if (newProject) {
      setFormData({
        title: '',
        description: '',
        tech_stack: '',
        github_url: '',
        live_url: '',
        image_url: '',
      });
      setShowForm(false);
      fetchProjects();
    } else {
      setSubmitError('Falha ao adicionar projeto. Verifique os dados e tente novamente.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-navy-darkest p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-cyan">Admin Panel</h1>
          <button
            onClick={onLogout}
            className="px-4 py-2 border border-navy-light text-slate rounded-lg hover:border-slate hover:text-slate-light transition-colors text-sm"
          >
            Sair
          </button>
        </div>

        {/* Add project button */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setSubmitError('');
          }}
          className="mb-8 px-6 py-3 bg-cyan text-navy-dark rounded-lg font-semibold hover:bg-cyan/80 transition-colors"
        >
          {showForm ? 'Cancelar' : '+ Novo Projeto'}
        </button>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-navy-dark border border-navy-light p-6 rounded-lg mb-8 space-y-4">
            <div>
              <label className="block text-slate-light mb-2 text-sm font-medium">Título</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-light mb-2 text-sm font-medium">Descrição</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none resize-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-light mb-2 text-sm font-medium">
                Tech Stack <span className="text-slate font-normal">(separado por vírgula)</span>
              </label>
              <input
                type="text"
                name="tech_stack"
                value={formData.tech_stack}
                onChange={handleChange}
                placeholder="Python, FastAPI, PostgreSQL"
                required
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-light mb-2 text-sm font-medium">GitHub URL</label>
                <input
                  type="url"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-light mb-2 text-sm font-medium">Live URL</label>
                <input
                  type="url"
                  name="live_url"
                  value={formData.live_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-light mb-2 text-sm font-medium">Image URL</label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none transition-colors"
              />
            </div>

            {submitError && (
              <p className="text-red-400 text-sm">{submitError}</p>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan text-navy-dark rounded-lg font-semibold hover:bg-cyan/80 transition-colors"
            >
              Adicionar Projeto
            </button>
          </form>
        )}

        {/* Project list */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-light">
            Projetos <span className="text-slate font-normal text-base">({projects.length})</span>
          </h2>

          {projects.length === 0 ? (
            <p className="text-slate">Nenhum projeto cadastrado ainda.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="bg-navy-dark border border-navy-light p-4 rounded-lg">
                <h3 className="text-lg font-bold text-cyan mb-1">{project.title}</h3>
                <p className="text-slate text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-navy-light px-2 py-1 rounded text-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;