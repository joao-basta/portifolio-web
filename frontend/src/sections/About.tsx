import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'Languages' | 'frameworks' | 'tools'>('Languages');

   const skills = {
    Languages:[
      {name: 'Python', level: 85},
      {name: 'Java', level: 70},
      {name: 'JavaScript', level: 70},
      {name: 'TypeScript', level: 65},
      {name: 'C++', level: 50},
    ],
    frameworks:[
      {name: 'React', level: 85},
      {name: 'Node.js', level: 75},
      {name: 'Tailwind', level: 70},
      {name: 'Flask', level: 70},
      {name: 'Restful APIs', level: 65},
      {name: 'Django', level: 60}
    ],
    tools:[
      {name: 'Git', level: 90},
      {name: 'github', level: 85},
      {name: 'PostgreSQL', level: 70},
      {name: 'Azure', level: 65},
      {name: 'Docker', level: 65},
      {name: 'AWS', level: 60}

    ],
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div
        ref={ref}
        className={`max-w-4xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-slate-light mb-8">
          <span className="text-cyan">01.</span> About Me
        </h2>
        
        <div className="text-slate text-lg space-y-4 mb-12">
          <p>
            I'm Joao Basta, a Software Engineer specializing in transcending aesthetics. My background is in systems construction,
            meaning the value I deliver isn't just in what you see, but in the invisible foundation of your application.
            I apply engineering discipline to ensure the logic behind your project is robust, secure, and efficient.
            I don't just build websites; I design digital products built to be scalable and easily maintainable, 
            eliminating the risk of future failures. <br /> <br />

            My main technical passion lies in Automation and the integration of systems with Artificial Intelligence (AI). 
            This mindset drives me to optimize every line of code, transforming repetitive tasks into automatic processes. 
            If you are looking for a solution that needs to manage large volumes of data or learn to optimize internal processes, 
            my expertise in data architecture and intelligent systems is your key differentiator.
            <br /> <br />
            Currently, I focus my energy on Web Development and SaaS (Software as a Service) solutions, applying the discipline and 
            architecture I learned in Edge Computing and mission-critical systems contexts. My objective is simple: to deliver web 
            applications that run at maximum speed, ensuring stability and efficiency. If you are an entrepreneur or company looking to 
            create a superior, long-lasting digital tool, I am ready to build the architecture that will transform your vision into 
            a profitable reality.
            <br /> <br />
            Let's build a solution that works intelligently for you.
          </p>
          <br /><br />
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-slate-light mb-6">Technical Skills</h3>
          
          {/* Tab Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <button
              onClick={() => setActiveTab('Languages')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'Languages'
                  ? 'bg-cyan text-navy-dark scale-105'
                  : 'bg-navy-light text-slate hover:bg-navy-light/70'
              }`}
            >
              Coding Languages
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'frameworks'
                  ? 'bg-cyan text-navy-dark scale-105'
                  : 'bg-navy-light text-slate hover:bg-navy-light/70'
              }`}
            >
              Frameworks & Tech
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-cyan text-navy-dark scale-105'
                  : 'bg-navy-light text-slate hover:bg-navy-light/70'
              }`}
            >
              Development Tools
            </button>
          </div>

          {/* Skills List with Progress Bars */}
          <div className="space-y-4">
            {skills[activeTab].map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-slate-light font-medium">{skill.name}</span>
                  <span className="text-cyan">{skill.level}%</span>
                </div>
                <div className="w-full bg-navy-light rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




 