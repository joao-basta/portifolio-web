import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendContactMessage } from '../services/api';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const success = await sendContactMessage(formData);

    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div
        ref={ref}
        className={`max-w-2xl w-full transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl font-bold text-slate-light mb-8 text-center">
          <span className="text-cyan">03.</span> Get In Touch
        </h2>

        <p className="text-slate text-lg mb-8 text-center">
          I'm currently available for freelance work and open to discussing new projects.
          Feel free to reach out!
        </p>

        {/* Contact Options */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          
           <a href="mailto:bpjoao00a@gmail.com"
            className="px-6 py-3 border-2 border-cyan text-cyan rounded hover:bg-cyan hover:text-navy-dark transition-all duration-300"
          >
            📧 Email Me
          </a>
          
           <a href="https://wa.me/5511958436058"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-cyan text-cyan rounded hover:bg-cyan hover:text-navy-dark transition-all duration-300"
          >
            💬 WhatsApp
          </a>
          
           <a href="/public/Curriculo_Joao_basta.pdf"
            download
            className="px-6 py-3 bg-cyan text-navy-dark rounded hover:bg-cyan/80 transition-all duration-300 font-semibold"
          >
            📄 Download CV
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-light mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-light border border-navy-light rounded-lg text-slate-light focus:border-cyan focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-light mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-navy-light border border-navy-light rounded-lg text-slate-light focus:border-cyan focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-light mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-navy-light border border-navy-light rounded-lg text-slate-light focus:border-cyan focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-cyan text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan/80 disabled:opacity-50 transition-all duration-300"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-cyan text-center font-medium">✓ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center font-medium">✗ Failed to send. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;