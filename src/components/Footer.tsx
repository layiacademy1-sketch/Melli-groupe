import { ArrowUp } from 'lucide-react';
// @ts-ignore
import logoTransparent from '../assets/images/logo-transparent.png';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-gold/15 pt-16 pb-12 relative overflow-hidden">
      {/* Visual background noise lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Foot top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-100">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logoTransparent}
                alt="MELLI GROUPE Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-gray-600 font-light leading-relaxed max-w-sm">
              L'excellence au service de la gestion, de l'organisation opérationnelle et du rayonnement digital de vos projets.
            </p>
            <div className="flex space-x-3 text-xs text-gold font-semibold items-center">
              <span>MELLI GESTION</span>
              <span className="text-gray-300">|</span>
              <span>MELLI CRÉATION</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Nos Univers</h4>
            <ul className="space-y-2 text-xs text-gray-600 font-light">
              <li>• Secrétariat & Administrative</li>
              <li>• Suivi de comptable & Reporting</li>
              <li>• Création de Sites internet ultra-rapides</li>
              <li>• Logos professionels & Branding de marque</li>
              <li>• Réseaux sociaux & Fiches Business local</li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end col-span-1">
            <button
              onClick={scrollUp}
              className="p-3.5 rounded-full border border-gray-200 hover:border-gold bg-white text-gray-800 hover:text-gold transition-all cursor-pointer self-start md:self-auto"
              aria-label="Remonter en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <div className="text-left md:text-right mt-6 md:mt-0">
              <span className="text-[10px] text-gray-500 block uppercase tracking-wider">Expertise reconnue</span>
              <span className="text-xs font-medium text-gold tracking-widest">RIGUEUR • ORGANISATION • RÉSULTATS</span>
            </div>
          </div>
        </div>

        {/* Foot bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="text-xxs text-gray-600 leading-relaxed font-light">
            © 2026 MELLI GROUPE - Tous droits réservés. Élaboré selon les plus hauts standards de communication.
          </span>
          
          <div className="flex space-x-6 text-[10px] text-gray-500 font-medium">
            <a href="#/gestion" className="hover:text-gray-900 transition-colors">Mentions Légales</a>
            <span>•</span>
            <a href="#/creation" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            <span>•</span>
            <a href="#contact" className="hover:text-gray-900 transition-colors font-semibold text-gold">Collaborer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
