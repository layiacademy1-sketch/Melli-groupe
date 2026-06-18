import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MelliGestion from './components/MelliGestion';
import MelliGestionPage from './components/MelliGestionPage';
import MelliCreation from './components/MelliCreation';
import MelliCreationPage from './components/MelliCreationPage';
import Realizations from './components/Realizations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import WhatsappButton from './components/WhatsappButton';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState<'home' | 'gestion' | 'creation'>('home');

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h === '#/gestion' || h.startsWith('#/gestion')) {
        setView('gestion');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (h === '#/creation' || h.startsWith('#/creation')) {
        setView('creation');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('home');
        if (h && h !== '#/' && h !== '#') {
          setTimeout(() => {
            const id = h.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-dark text-gray-800 antialiased overflow-x-hidden selection:bg-gold selection:text-black">
      {/* Premium background radial highlights for cosmic slate depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-white/[0.012] rounded-full blur-[180px] pointer-events-none" />

      {/* Main layout header */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        {view === 'home' ? (
          <>
            {/* Banner with picture */}
            <Hero />

            {/* Integrated form */}
            <ContactForm />
          </>
        ) : view === 'gestion' ? (
          <>
            <MelliGestionPage 
              onBack={() => {
                window.location.hash = '#/';
              }}
              onContactClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
            {/* Contact form also shown on detail page for premium conversion */}
            <ContactForm />
          </>
        ) : (
          <>
            <MelliCreationPage 
              onBack={() => {
                window.location.hash = '#/';
              }}
              onContactClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
            {/* Contact form also shown on detail page for premium conversion */}
            <ContactForm />
          </>
        )}
      </main>

      {/* Floating conversational trigger */}
      <WhatsappButton />

      {/* Corporate copyright */}
      <Footer />
    </div>
  );
}

