import { useState, useEffect } from 'react';
import { getProjects, createProject } from '../services/api';
import type { Project } from '../types';

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
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

    const projectData = {
      ...formData,
      tech_stack: formData.tech_stack.split(',').map(t => t.trim()),
    };

    const newProject = await createProject(projectData);

    if (newProject) {
      alert('Project added successfully!');
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
      alert('Failed to add project');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-navy-darkest p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan mb-8">Admin Panel</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 px-6 py-3 bg-cyan text-navy-dark rounded-lg font-semibold hover:bg-cyan/80 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add New Project'}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-navy-dark p-6 rounded-lg mb-8 space-y-4">
            <div>
              <label className="block text-slate-light mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-light mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-slate-light mb-2">Tech Stack (comma-separated)</label>
              <input
                type="text"
                name="tech_stack"
                value={formData.tech_stack}
                onChange={handleChange}
                placeholder="React, TypeScript, Node.js"
                required
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-light mb-2">GitHub URL</label>
                <input
                  type="url"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-light mb-2">Live URL</label>
                <input
                  type="url"
                  name="live_url"
                  value={formData.live_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-light mb-2">Image URL</label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-navy-light border border-navy-light rounded text-slate-light focus:border-cyan outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan text-navy-dark rounded-lg font-semibold hover:bg-cyan/80 transition-colors"
            >
              Add Project
            </button>
          </form>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-light">Existing Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="bg-navy-dark p-4 rounded-lg">
              <h3 className="text-xl font-bold text-cyan">{project.title}</h3>
              <p className="text-slate">{project.description}</p>
              <div className="flex gap-2 mt-2">
                {project.tech_stack.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-navy-light px-2 py-1 rounded text-cyan">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;