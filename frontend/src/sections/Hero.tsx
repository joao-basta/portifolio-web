const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-start ml-10 bg-navy-dark leading-relaxed text-slate-400 antialiased
     selection:bg-teal-900 selection:text-teal-1200">
      <div className="text-left text-slate-400 px-4 max-w-4xl">
        <h1 className="text-5x1 md:text-5xl font-bold mb-6 animate-fade-in">
          Joao Paulo
        </h1>
        <h3 className="text-xl md:text-2xl mb-4 opacity-90">
          Full Stack Software Engineer
        </h3>
        <p className="text-slate text-xl max-w-2xl mb-8">
          I build scalable, fast and safe web applications, ensuring a good user experience and execellence also guaranting future
          intelligent automation, delivering high-quality solutions meeting the efficiency and stability that you need.
        </p>
        <button 
          onClick={scrollToProjects}
          className="bg-blue-800 text{} px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          View My  Previous Works
        </button>
      </div>

      <div className="ml-64">
        <img src="" alt="logo"/>
      </div>
    </section>
  );
};

export default Hero;