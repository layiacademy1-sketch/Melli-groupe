import React from 'react';
import { FileSpreadsheet, FileText, Users, TrendingUp, Phone, ClipboardCheck, Rocket, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { GESTION_SERVICES, ROADMAP_STEPS } from '../data';

// Helper to render lucide icons based on string names
const iconMap: Record<string, React.ComponentType<any>> = {
  FileSpreadsheet: FileSpreadsheet,
  FileText: FileText,
  Users: Users,
  TrendingUp: TrendingUp,
};

export default function MelliGestion() {
  return (
    <section id="gestion" className="relative py-24 bg-bg-dark border-t border-gold/15">
      {/* Decorative gradient spot */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section title header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3"
          >
            UNIVERS 01 • ORGANISATION & OPTIMISATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            MELLI GESTION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-600 font-light leading-relaxed"
          >
            Nous accompagnons les particuliers, associations, entrepreneurs et entreprises dans leur organisation, leur gestion administrative et leur développement opérationnel. Notre objectif est de vous faire gagner du temps, de structurer vos activités et de vous apporter des solutions concrètes adaptées à vos besoins du quotidien.
          </motion.p>
        </div>

        {/* Services mapping */}
        <div id="gestion-services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {GESTION_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || FileText;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-bg-card border border-gold/15 hover:border-gold/50 transition-all duration-300 shadow-sm flex flex-col justify-between gold-glow-hover"
              >
                <div>
                   <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-3.5 text-gray-600 text-sm font-light">
                    {service.items.map((bullet) => (
                      <li key={bullet} className="flex items-start space-x-3">
                        <span className="text-rose-gold font-semibold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/33756888535?text=${encodeURIComponent("Bonjour MELLI GROUPE, je souhaite en savoir plus sur votre service de GESTION : " + service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gold group-hover:text-gold transition-all"
                >
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Global call to action */}
        <div className="mb-24 flex justify-center">
          <motion.a
            href="#/gestion"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group px-8 py-4 rounded-full bg-black text-white border border-gold/30 hover:border-gold hover:bg-gold hover:text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-3 shadow-md cursor-pointer"
          >
            <span>Découvrir l'univers Melli Gestion</span>
            <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Chronology / Timeline section */}
        <div className="relative py-16 bg-bg-card border border-gold/15 rounded-3xl p-8 md:p-12 overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-2">MÉTHODOLOGIE INFAILLIBLE</span>
            <h3 className="font-display text-3xl font-extrabold text-gray-900">COMMENT ÇA FONCTIONNE ?</h3>
            <p className="text-sm text-gray-600 font-light mt-2">Votre réussite se prépare en 3 étapes claires, transparentes et structurées.</p>
          </div>

          {/* Timeline */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 z-10">
            {/* Timeline connectors - desktop only */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

            {ROADMAP_STEPS.map((step, index) => {
              // Icon mapping for steps
              const getStepIcon = (idx: number) => {
                if (idx === 0) return <Phone className="w-5 h-5 text-gold" />;
                if (idx === 1) return <ClipboardCheck className="w-5 h-5 text-gold" />;
                return <Rocket className="w-5 h-5 text-gold" />;
              };

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative text-center flex flex-col items-center bg-white p-6 rounded-xl border border-gold/15 hover:border-gold/50 transition-colors group shadow-sm"
                >
                  {/* Step bubble with Circular Badge corresponding to step-num */}
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-bg-card border border-gold/40 group-hover:border-gold transition-all duration-300 md:gold-glow mb-6">
                    <div className="absolute top-1 right-1 w-7 h-7 rounded-full bg-gold text-black font-extrabold flex items-center justify-center text-xs">
                      0{index + 1}
                    </div>
                    {getStepIcon(index)}
                  </div>

                  <h4 className="font-display font-extrabold text-lg text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
