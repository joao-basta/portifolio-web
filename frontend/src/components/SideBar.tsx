const Sidebar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-navy-dark  border-navy-light flex flex-col justify-between p-8">
      {/* Top Section - Name/Logo */}
      <div>
        <h1 className="text-gray-400 text-2xl font-bold mb-12">Joao Paulo</h1>
        
        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href= {item.href}
                  className="text-slate hover:text-blue-500 transition-colors duration-300 text-lg"
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
        <a 
          href="https://github.com/joao-basta" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-cyan transition-colors duration-300"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/joao-paulo-santana-basta-47b849310"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-cyan transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;