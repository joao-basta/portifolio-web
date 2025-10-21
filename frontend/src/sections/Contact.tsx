import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div
        ref={ref}
        className={`max-w-2xl text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-slate-light mb-8">
          <span className="text-cyan">03.</span> What's Next?
        </h2>
        <h3 className="text-5xl font-bold text-slate-light mb-8">Get In Touch</h3>
        <p className="text-slate text-lg mb-12">
          I'm currently looking for freelance opportunities and always open to
          discussing new projects. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>
        
         <a href="mailto:your.email@example.com"
          className="inline-block px-8 py-4 border-2 border-cyan text-cyan rounded 
            hover:bg-cyan hover:bg-opacity-10 transition-all duration-300 text-lg
            transform hover:scale-105"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;