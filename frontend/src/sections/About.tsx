const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I'm a software engineering student passionate about building modern web applications
            and SaaS products. I specialize in full-stack development with a focus on creating
            scalable, user-friendly solutions.
          </p>
          <p>
            Currently, I'm expanding my skills in React, Node.js, TypeScript, and PostgreSQL
            to deliver high-quality freelance work and eventually launch my own SaaS products.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Frontend</h3>
              <ul className="space-y-2">
                <li>• React & TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
                <li>• Modern UI/UX</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Backend</h3>
              <ul className="space-y-2">
                <li>• Node.js & Express</li>
                <li>• PostgreSQL</li>
                <li>• RESTful APIs</li>
                <li>• Database Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;