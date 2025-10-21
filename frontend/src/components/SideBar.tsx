import { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden bg-navy-light p-3 rounded-lg text-cyan"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-navy-dark border-r border-navy-light 
          flex flex-col justify-between p-8 z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div>
          <h1 className="text-cyan text-2xl font-bold mb-12">Joao Basta</h1>

          <nav>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  
                   <a href={item.href}
                    onClick={handleNavClick}
                    className={`
                      text-lg block transition-all duration-300
                      ${activeSection === item.id 
                        ? 'text-cyan font-bold scale-110 translate-x-2' 
                        : 'text-slate hover:text-white hover:translate-x-1'
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section - Social Links */}
        <div className="flex gap-4">
          
          <a  href="https://github.com/joao-basta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-cyan transition-colors duration-300"
          >
            GitHub
          </a>
          
          <a  href="https://linkedin.com/in/joao-paulo-santana-basta-47b849310"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-cyan transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
      )}
    </>
  );
};

export default SideBar;