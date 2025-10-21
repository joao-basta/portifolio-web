import { useState } from 'react';
import Sidebar from './components/SideBar';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import Admin from './sections/Admin';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

   const checkPassword = () => {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
      setShowAdmin(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (showAdmin) {
    return <Admin />;
  }

  return (
    <div className="flex">
      
      <CursorGlow />
      <Sidebar />
      
      {/* Main Content */}
      <main className="w-full md:ml-64 px-6 md:px-12 lg:px-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <button
        onClick={checkPassword}
        className="fixed bottom-4 right-4 w-4 h-4 bg-navy-dark opacity-10 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}

export default App;