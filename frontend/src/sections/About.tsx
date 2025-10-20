const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-slate-light mb-8">
          <span className="ml-8">01.</span> About Me
        </h2>
        <div className="text-slate text-lg space-y-4 ml-8">
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

          <p>
            Here are some technologies I've been working with:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-4">
            <li className="flex items-center">
              <span className=" mr-2">▹</span> React
            </li>
            <li className="flex items-center">
              <span className=" mr-2">▹</span> TypeScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> Node.js
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> PostgreSQL
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> Python
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> Java
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> JavaScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> API's like: REST, Flask,  Django
            </li>
            <li className="flex items-center">
              <span className="mr-2">▹</span> IOT and Edge Computing
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;