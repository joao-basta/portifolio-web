import Sidebar from './components/sideBar';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-64 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;