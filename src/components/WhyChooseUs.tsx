import React from 'react';
import { ShieldCheck, FolderHeart, UserCheck, Zap, Sliders, Award, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck: ShieldCheck,
  FolderHeart: FolderHeart,
  UserCheck: UserCheck,
  Zap: Zap,
  Sliders: Sliders,
  Award: Award,
};

export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="relative py-24 bg-bg-dark border-t border-gold/15">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">VALEURS COEUR & GARANTIES</span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900">Pourquoi nous choisir ?</h2>
          <p className="text-gray-600 font-light mt-3 leading-relaxed text-sm">
            Nous combinons la rigueur organisationnelle et l'exigence digitale pour offer un service haut de gamme, tourné vers la tranquillité d'esprit de nos clients.
          </p>
        </div>

        {/* Bento Grid layout representing values */}
        <div id="values-field" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || BadgeCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-bg-card border border-gold/15 hover:border-gold/25 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-white rounded-xl border border-gold/15 text-gold group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-gray-900 mb-2 tracking-wide group-hover:text-gold transition-colors flex items-center">
                      <span>{item.title}</span>
                      <span className="ml-1.5 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
