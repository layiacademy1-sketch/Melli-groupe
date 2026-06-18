import React from 'react';
import { Globe, Palette, Layers, Share2, Store, Check, Target, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CREATION_SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Globe: Globe,
  Palette: Palette,
  Layers: Layers,
  Share2: Share2,
  Store: Store,
};

export default function MelliCreation() {
  return (
    <section id="creation" className="relative py-24 bg-bg-dark border-t border-gold/15">
      {/* Decorative luxury spots */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3"
          >
            UNIVERS 02 • VISIBILITÉ & IDENTITÉ DIGITALE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            MELLI CRÉATION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-600 font-light leading-relaxed"
          >
            Nous accompagnons nos clients dans la création de leur image professionnelle et leur développement digital. Nous réalisons des outils modernes, percutants et sur-mesure permettant d'augmenter significativement la visibilité et la crédibilité de votre activité auprès de vos clients et partenaires.
          </motion.p>
        </div>

        {/* Prestatios mapping */}
        <div id="creation-prestations-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATION_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-bg-card border border-gold/15 hover:border-gold/45 transition-all duration-300 shadow-sm flex flex-col justify-between gold-glow-hover"
              >
                <div>
                  {/* Icon section design with subtle rose gold feel */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold group-hover:from-gold group-hover:to-rose-gold group-hover:text-white transition-all duration-350 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-gray-900 mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 font-light text-sm text-gray-600">
                    {service.items.map((bullet) => (
                      <li key={bullet} className="flex items-start">
                        <Check className="w-4 h-4 text-gold mt-0.5 mr-3 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-gold transition-all">
                  <span>Prestation Premium</span>
                  <Target className="w-4 h-4 text-rose-gold opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global call to action */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#/creation"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group px-8 py-4 rounded-full bg-black text-white border border-gold/30 hover:border-gold hover:bg-gold hover:text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-3 shadow-md cursor-pointer"
          >
            <span>Découvrir l'univers Melli Création</span>
            <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
