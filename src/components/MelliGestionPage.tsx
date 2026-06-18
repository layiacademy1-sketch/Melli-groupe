import React, { useEffect } from 'react';
import { FileSpreadsheet, FileText, Users, TrendingUp, Phone, ClipboardCheck, Rocket, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import logoTransparent from '../assets/images/logo-transparent.png';

interface MelliGestionPageProps {
  onBack: () => void;
  onContactClick: (serviceTitle?: string) => void;
}

const services = [
  {
    title: "Comptabilité",
    icon: FileSpreadsheet,
    items: [
      "Suivi comptable précis",
      "Organisation et tri des justificatifs",
      "Accompagnement dans les démarches administratives",
      "Optimisation des outils de gestion"
    ]
  },
  {
    title: "Gestion Administrative",
    icon: FileText,
    items: [
      "Classement, numérisation et archivage",
      "Rédaction et traitement de courriers",
      "Constitution de dossiers complexes",
      "Suivi rigoureux de l'activité quotidienne"
    ]
  },
  {
    title: "Création d'Associations",
    icon: Users,
    items: [
      "Rédaction personnalisée des statuts",
      "Déclarations en préfecture",
      "Mise en place de l'organisation",
      "Accompagnement complet de A à Z"
    ]
  },
  {
    title: "Consulting & Stratégie",
    icon: TrendingUp,
    items: [
      "Développement structuré de projets",
      "Conseils stratégiques personnalisés",
      "Optimisation financière et opérationnelle",
      "Stratégie de croissance à long terme"
    ]
  }
];

const steps = [
  {
    id: "01",
    title: "Appel découverte",
    icon: Phone,
    description: "Nous échangeons au cours d'un appel téléphonique ou d'un visiocode afin de cerner précisément votre projet, vos besoins immédiats et vos objectifs futurs."
  },
  {
    id: "02",
    title: "Consulting & Audit",
    icon: ClipboardCheck,
    description: "Nous réalisons une analyse complète de votre situation ou de votre image actuelle, puis nous vous proposons un plan d'action concret et chiffré."
  },
  {
    id: "03",
    title: "Accompagnement",
    icon: Rocket,
    description: "Mise en place des solutions validées (gestion ou création digitale) et suivi personnalisé pour garantir la pérennité et la réussite de votre activité."
  }
];

export default function MelliGestionPage({ onBack, onContactClick }: MelliGestionPageProps) {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <article id="melli-gestion-page" className="relative pt-32 pb-24 bg-[#FFFFFF]">
      {/* Decorative premium radial backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={onBack}
            className="group inline-flex items-center space-x-2.5 text-xs text-rose-gold hover:text-gold font-bold uppercase tracking-widest transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 translate-x-0 group-hover:-translate-x-1.5 transition-transform" />
            <span>Retour à l'accueil</span>
          </button>
        </motion.div>

        {/* Centered Professional Logo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <img
            src={logoTransparent}
            alt="MELLI GROUPE Logo"
            className="h-28 md:h-36 w-auto object-contain mb-6"
            referrerPolicy="no-referrer"
          />
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Title and Intro Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3"
          >
            UNIVERS EXCLUSIF • MELLI GESTION
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            MELLI GESTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-gray-600 font-light leading-relaxed"
          >
            Nous accompagnons les particuliers, associations, entrepreneurs et entreprises dans leur organisation, leur gestion administrative et leur développement opérationnel. Notre objectif est de vous faire gagner du temps, de structurer vos activités et de vous apporter des solutions concrètes adaptées à vos besoins du quotidien.
          </motion.p>
        </div>

        {/* Services mapping (2x2 Grid) */}
        <div id="gestion-page-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {services.map((service, index) => {
            const IconComponent = service.icon;
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

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/33756888535?text=${encodeURIComponent("Bonjour MELLI GROUPE, je souhaite en savoir plus sur votre service de GESTION : " + service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-widest text-[#B88E4C] hover:text-[#D4AF37] transition-all cursor-pointer"
                  >
                    <span>En savoir plus</span>
                    <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chronology / Timeline section */}
        <div className="relative py-16 bg-bg-card border border-gold/15 rounded-3xl p-8 md:p-12 overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-2">MÉTHODOLOGIE INFAILLIBLE</span>
            <h3 className="font-display text-3xl font-extrabold text-gray-900">COMMENT ÇA FONCTIONNE ?</h3>
            <p className="text-sm text-gray-600 font-light mt-2">Votre réussite se prépare en 3 étapes claires, transparentes et structurées.</p>
          </div>

          {/* Timeline content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 z-10">
            {/* Timeline connectors - desktop only */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative text-center flex flex-col items-center bg-white p-6 rounded-xl border border-gold/15 hover:border-gold/50 transition-colors group shadow-sm"
                >
                  {/* Step bubble with Circular Badge corresponding to step-num */}
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-bg-card border border-gold/40 group-hover:border-gold transition-all duration-300 mb-6">
                    <div className="absolute top-1 right-1 w-7 h-7 rounded-full bg-gold text-black font-extrabold flex items-center justify-center text-xs">
                      {step.id}
                    </div>
                    <StepIcon className="w-5 h-5 text-gold" />
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
    </article>
  );
}
