import Sidebar from './components/SideBar';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';
import CursorGlow from './components/CursorGlow';
function App() {
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
    </div>
  );
}

export default App;