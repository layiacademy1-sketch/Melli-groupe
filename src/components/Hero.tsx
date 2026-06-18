import React from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import heroImg from '../assets/images/hero_entrepreneur_new.jpg';
// @ts-ignore
import logoTransparent from '../assets/images/logo-transparent.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center bg-bg-dark overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Visual luxury gold grid overlay lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, var(--color-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--color-gold) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center mb-6 w-full"
          >
            <img
              src={logoTransparent}
              alt="MELLI GROUPE Logo"
              className="h-28 md:h-36 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Votre partenaire pour <span className="gold-text-gradient">développer</span> et <span className="border-b-2 border-gold/35 pb-1">structurer</span> vos projets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-xl mb-10"
          >
            MELLI GROUPE accompagne particuliers, entrepreneurs, associations et entreprises dans leur gestion opérationnelle, leur développement et leur communication de marque.
          </motion.p>

          {/* Interactive universes direct shortcut cards as defined in the mockup */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {/* Melli Gestion Universe Card */}
            <a
              id="hero-btn-gestion"
              href="#/gestion"
              className="group p-6 rounded-xl bg-bg-card border border-gold/15 hover:border-gold hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer text-left"
            >
              <div>
                <h2 className="font-display text-lg font-bold text-gold tracking-wide uppercase mb-3">Melli Gestion</h2>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Suivi comptable & Administratif</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Organisation & Classement</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Création d'Associations</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Conseils & Stratégie</li>
                </ul>
              </div>
              <div className="mt-4 text-[10px] text-rose-gold font-bold uppercase tracking-wider group-hover:text-gold transition-colors flex items-center">
                <span>DÉCOUVRIR L'UNIVERS →</span>
              </div>
            </a>

            {/* Melli Création Universe Card */}
            <a
              id="hero-btn-creation"
              href="#/creation"
              className="group p-6 rounded-xl bg-bg-card border border-gold/15 hover:border-gold hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer text-left"
            >
              <div>
                <h2 className="font-display text-lg font-bold text-gold tracking-wide uppercase mb-3">Melli Création</h2>
                <ul className="space-y-1.5 text-xs text-gray-600 font-light">
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Sites Web Professionnels</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Logos & Identité Visuelle</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Supports de Communication</li>
                  <li className="flex items-center"><span className="text-rose-gold mr-2">•</span>Réseaux Sociaux & SEO</li>
                </ul>
              </div>
              <div className="mt-4 text-[10px] text-rose-gold font-bold uppercase tracking-wider group-hover:text-gold transition-colors flex items-center">
                <span>DÉCOUVRIR L'UNIVERS →</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Graphic/Portrait Block with Sleek visual frames & float testimonial overlay */}
        <div className="lg:col-span-5 relative w-full flex justify-center z-10 select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-[4/5]"
          >
            {/* Elegant outer frames */}
            <div className="absolute -inset-2 border border-gold/10 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-4 border border-gold/5 rounded-3xl pointer-events-none" />
            <div className="absolute top-4 -left-4 w-12 h-12 border-t border-l border-gold pointer-events-none" />
            <div className="absolute bottom-4 -right-4 w-12 h-12 border-b border-r border-gold pointer-events-none" />

            {/* Main picture holder */}
            <div className="w-full h-full rounded-2xl overflow-hidden border border-gold/30 bg-bg-dark relative gold-glow flex flex-col justify-end p-6">
              <img
                id="hero-entrepreneur-img"
                src={heroImg}
                alt="MELLI GROUPE - Femme entrepreneure accomplissant des dossiers administratifs et comptables dans un bureau haut de gamme"
                className="absolute inset-0 w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gold gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />
              
              {/* Testimonial Box inside right visual, from mockup */}
              <div className="relative z-10 p-4 rounded-lg bg-white/5 backdrop-blur-[10px] border-l-2 border-gold text-left">
                <div className="flex text-gold space-x-0.5 mb-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <Star className="w-3 h-3 fill-gold text-gold" />
                </div>
                <p className="text-[11px] text-gray-200 italic font-light leading-relaxed">
                  "Un accompagnement d'une rigueur exceptionnelle. Melli Groupe a totalement restructuré ma gestion administrative et ma présence en ligne."
                </p>
                <div className="text-[9px] uppercase tracking-wider text-rose-gold font-bold mt-2">
                  — Sarah L., Gérante de Cabinet
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <a href="#gestion" className="flex flex-col items-center space-y-1.5 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[9px] uppercase tracking-widest text-gold font-semibold">Découvrir l'univers</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white hover:text-gold"
          >
            <ArrowDown className="w-4 h-4 text-gold" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
