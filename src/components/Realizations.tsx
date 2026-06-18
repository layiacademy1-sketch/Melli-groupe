import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Smartphone, MoveRight, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';

type CategoryFilter = 'all' | 'sites' | 'logos' | 'flyers' | 'social';

export default function Realizations() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filters: { label: string; value: CategoryFilter }[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Sites Internet', value: 'sites' },
    { label: 'Logos & Design', value: 'logos' },
    { label: 'Flyers & Affiches', value: 'flyers' },
    { label: 'Réseaux Sociaux', value: 'social' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="realisations" className="relative py-24 bg-bg-dark border-t border-gold/15">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">PORTFOLIO D'EXCELLENCE</span>
            <h2 className="font-display text-4xl font-extrabold text-gray-900">Nos Réalisations</h2>
            <p className="text-gray-600 font-light mt-2 max-w-xl text-sm justify-between">
              Découvrez un aperçu concret des projets et des designs que nous réalisons sur-mesure pour propulser l'image de marque de nos clients.
            </p>
          </div>

          {/* Luxury Categories Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200/50 self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                  activeFilter === filter.value
                    ? 'text-black z-10 font-bold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeFilter === filter.value && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-gold to-rose-gold rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative rounded-2xl bg-bg-card border border-gold/15 hover:border-gold/40 transition-all overflow-hidden flex flex-col justify-between shadow-sm gold-glow-hover"
              >
                {/* Visual Representation box depending on Category */}
                <div className="relative p-6 bg-bg-card border-b border-gray-100 overflow-hidden flex items-center justify-center min-h-[220px]">
                  
                  {/* Category Background ambient decor */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100/50 opacity-100" />

                  {/* 1. SITES INTERNET - rendered as a beautiful miniature browser mock */}
                  {item.category === 'sites' && (
                    <div className="w-full max-w-[280px] bg-white rounded-lg border border-gray-150 shadow-md overflow-hidden self-center transition-transform duration-500 group-hover:scale-105">
                      {/* Browser header bar */}
                      <div className="flex items-center px-3 py-2 bg-gray-50 border-b border-gray-100 space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/60" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60" />
                        <div className="w-full max-w-[140px] bg-white border border-gray-150 rounded-md h-3.5 mx-auto flex items-center px-2">
                           <span className="text-[7px] text-gray-400 truncate">melli-groupe.fr/projet</span>
                        </div>
                      </div>
                      {/* Browser webpage content render */}
                      <div className="p-4 space-y-3 relative bg-gradient-to-b from-white to-gray-50/70 min-h-[120px]">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="text-[10px] font-display font-bold text-gray-800 tracking-widest uppercase">MELLI</span>
                          <span className="text-[6px] text-gold border border-gold/40 px-1 py-0.2 rounded">CONTACT</span>
                        </div>
                        <div className="space-y-1">
                          <div className="h-2 w-3/4 bg-gradient-to-r from-gray-200 to-gray-100 rounded" />
                          <div className="h-1.5 w-1/2 bg-gray-150 rounded" />
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 pt-1">
                          <div className="h-8 bg-white border border-gold/25 rounded flex items-center justify-center">
                            <span className="text-[5px] text-gold font-bold">PRESTIGE</span>
                          </div>
                          <div className="h-8 bg-white border border-gray-100 rounded" />
                          <div className="h-8 bg-white border border-gray-100 rounded" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. LOGOS - rendered as a noble floating golden/rose brand mark */}
                  {item.category === 'logos' && (
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-gold/50 flex items-center justify-center shadow-md relative transition-transform duration-500 group-hover:scale-110">
                      <div className="absolute inset-2 border border-gray-100 rounded-full" />
                      <Sparkles className="absolute top-1 text-gold/80 w-3 h-3 animate-pulse" />
                      <span className="font-display font-black text-xl text-gray-800 tracking-widest uppercase">
                        {item.title.split(' ')[0][0]}
                        {item.title.split(' ')[1] ? item.title.split(' ')[1][0] : 'M'}
                      </span>
                    </div>
                  )}

                  {/* 3. FLYERS - elegant graphic poster mock */}
                  {item.category === 'flyers' && (
                    <div className="w-28 h-36 bg-white border border-gold/30 rounded shadow-md relative overflow-hidden transition-transform duration-500 group-hover:scale-105 p-3 flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-full blur-md" />
                      <div className="flex justify-between items-start">
                        <span className="text-[5px] font-bold text-gray-500 uppercase">Invitation</span>
                        <div className="w-4 h-4 rounded px-0.5 bg-gold flex items-center justify-center text-[5px] text-black font-extrabold">INV</div>
                      </div>
                      <div className="space-y-1 z-10">
                        <div className="h-1 bg-gold w-2/3" />
                        <div className="h-2.5 bg-gray-50 w-full rounded-sm" />
                        <div className="h-1 bg-gray-300 w-1/2" />
                      </div>
                      <div className="border-t border-gray-100 pt-1 flex justify-between items-center">
                        <span className="text-[4px] text-gray-500 tracking-wider">PREMIUM MEETING</span>
                        <span className="text-[4px] text-gold font-bold">2026</span>
                      </div>
                    </div>
                  )}

                  {/* 4. RÉSEAUX SOCIAUX - Avant / Après interactive representation */}
                  {item.category === 'social' && (
                    <div className="w-full max-w-[280px] space-y-3 p-2 bg-white rounded-xl border border-gray-150 text-left">
                      <div className="flex justify-between items-center text-gray-500 text-[9px] border-b border-gray-100 pb-1.5">
                        <span className="text-gold font-bold uppercase tracking-wider">Comparatif Impact</span>
                        <span className="px-1.5 py-0.2 rounded bg-green-500/10 text-green-600 font-semibold">+120% Visibilité</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xxs">
                        {/* Avant */}
                        <div className="p-2 border border-red-550/20 bg-red-50/50 rounded-lg">
                          <span className="block text-[8px] font-bold text-red-500 uppercase tracking-widest mb-1">AVANT :</span>
                          <p className="text-[9px] text-gray-500 line-clamp-3 leading-tight font-light">{item.beforeAfter?.before}</p>
                        </div>
                        {/* Après */}
                        <div className="p-2 border border-green-550/20 bg-green-50/50 rounded-lg shadow-sm">
                          <span className="block text-[8px] font-bold text-green-600 uppercase tracking-widest mb-1">APRÈS :</span>
                          <p className="text-[9px] text-gray-800 font-medium line-clamp-3 leading-tight">{item.beforeAfter?.after}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Actions Banner */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center duration-300">
                    <div className="p-3 bg-gold text-white rounded-full mb-3 shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest text-gray-800">Zoom Réalisation</span>
                    <span className="text-xxs text-rose-gold mt-1">Melli Création d'Excellence</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 rounded bg-gold/10 text-gold text-[9px] font-bold uppercase tracking-wider mb-2">
                    {item.category === 'sites' && 'Site internet'}
                    {item.category === 'logos' && 'Branding & Logo'}
                    {item.category === 'flyers' && 'Print & Support des ventes'}
                    {item.category === 'social' && 'Réseaux Sociaux'}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-gray-900 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light mt-1.5 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
