const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Full Stack Developer
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80">
          React · Node.js · TypeScript · PostgreSQL
        </p>
        <button 
          onClick={scrollToProjects}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;