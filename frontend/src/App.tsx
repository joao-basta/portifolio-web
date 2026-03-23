import { useState } from 'react';
import Sidebar from './components/SideBar';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import Admin from './sections/Admin';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

function App() {
  // Token lives only in memory — desaparece ao fechar/recarregar a aba
  // Nunca vai parar no bundle JS nem no localStorage
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loginError, setLoginError] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setLoginError('Senha incorreta.');
        return;
      }

      const { token } = await res.json();
      setAuthToken(token);
      setShowLoginModal(false);
      setPassword('');
    } catch {
      setLoginError('Erro ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
  };

  if (authToken) {
    return <Admin token={authToken} onLogout={handleLogout} />;
  }

  return (
    <div className="flex">
      <CursorGlow />
      <Sidebar />

      <main className="w-full md:ml-64 px-6 md:px-12 lg:px-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Botão admin invisível no canto — só visível no hover */}
      <button
        onClick={() => setShowLoginModal(true)}
        className="fixed bottom-4 right-4 w-4 h-4 opacity-10 hover:opacity-40 transition-opacity bg-transparent"
        aria-label="Admin access"
      />

      {/* Modal de login */}
      {showLoginModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowLoginModal(false);
              setPassword('');
              setLoginError('');
            }
          }}
        >
          <div className="bg-navy-dark border border-navy-light rounded-lg p-8 w-full max-w-sm mx-4">
            <h2 className="text-slate-light text-xl font-bold mb-6">Admin</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-password" className="block text-slate text-sm mb-2">
                  Senha
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-navy-light rounded-lg text-slate-light focus:border-cyan focus:outline-none transition-colors"
                />
              </div>

              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-cyan text-navy-dark px-4 py-2 rounded-lg font-semibold hover:bg-cyan/80 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginModal(false);
                    setPassword('');
                    setLoginError('');
                  }}
                  className="px-4 py-2 border border-navy-light text-slate rounded-lg hover:border-slate transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;