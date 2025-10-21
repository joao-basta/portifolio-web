import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Stagger the animation
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-start">
      <div className="max-w-2xl">
        <p
          className={`text-cyan text-lg mb-4 transition-all duration-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Hi, my name is
        </p>
        <h1
          className={`text-6xl font-bold text-slate-light mb-4 transition-all duration-700 delay-100 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ReactTyped
            strings={[
              "Joao Basta"
            ]}
            typeSpeed={50}
            backSpeed={30}
          />
        </h1>

        <h3
          className={`text-3xl font-bold text-slate mb-8 transition-all duration-700 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Full-Stack Software Engineer
        </h3>
        <p
          className={`text-xl font-bold text-slate mb-8 transition-all duration-700 delay-200 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          I build scalable, fast and safe web applications, ensuring a good user experience and execellence also guaranting future
          intelligent automation, delivering high-quality solutions meeting the efficiency and stability that you need.
        </p>
      </div>
    </section>
  );
};

export default Hero;

