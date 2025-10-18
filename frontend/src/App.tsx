import { useEffect, useState } from 'react';
import Hero from './sections/hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import type { Project } from './types';
import { getProjects } from './services/api';

function App() {
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
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Projects projects={projects} loading={loading} />
      <Contact />
    </div>
  );
}

export default App;