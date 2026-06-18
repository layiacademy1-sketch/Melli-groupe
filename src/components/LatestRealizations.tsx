import { motion } from 'motion/react';
import { Globe, ArrowUpRight, Sparkles } from 'lucide-react';

export default function LatestRealizations() {
  const websites = [
    {
      id: "site-1",
      title: "RED FIRST SERVICES",
      subtitle: "Plateforme de services professionnels et logistiques",
      sector: "Multiservices & Logistique",
      demoUrl: "redfirst-services.com",
      realUrl: "https://redfirst-services.com/",
      colorTheme: "from-red-950 via-neutral-900 to-amber-950/20",
      brandName: "RED FIRST",
      brandSub: "SERVICES",
      isPremium: true
    },
    {
      id: "site-2",
      title: "AC HABITAT 76",
      subtitle: "Site d'artisanat, rénovation et travaux du bâtiment",
      sector: "Rénovation & Habitat",
      demoUrl: "ac-habita76.fr",
      realUrl: "https://ac-habita76.fr",
      colorTheme: "from-sky-950 via-slate-900 to-neutral-950",
      brandName: "AC HABITAT",
      brandSub: "76 RENOVATION",
      isPremium: true
    }
  ];

  return (
    <section id="realisations" className="relative py-24 bg-bg-dark border-t border-gold/15 overflow-hidden">
      {/* Golden atmospheric glow lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold block mb-3">CONCEPTS & EXCELLENCE VISUELLE</span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 tracking-tight">Nos Dernières Réalisations</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-rose-gold mx-auto mt-4 mb-4" />
          <p className="text-gray-600 font-light text-sm leading-relaxed">
            Aperçu des plateformes digitales sur-mesure conçues et propulsées par notre pôle digital pour assurer l'image de marque et la visibilité d'exception de nos partenaires.
          </p>
        </div>

        {/* Websites Grid - centered for 2 elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {websites.map((site) => (
            <motion.a
              key={site.id}
              href={site.realUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl bg-bg-card border border-gold/15 hover:border-gold/50 hover:bg-white transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm gold-glow-hover cursor-pointer"
            >
              {/* Premium browser placeholder visualization */}
              <div className="p-6 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 flex items-center justify-center min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-50/50" />
                
                {/* Simulated luxury browser frame */}
                <div className="w-full max-w-[280px] bg-white rounded-lg border border-gray-150 shadow-md overflow-hidden z-10 transition-transform duration-500 group-hover:scale-[1.03]">
                  {/* Web window tool bar */}
                  <div className="flex items-center px-3 py-2 bg-gray-50 border-b border-gray-150/80 space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/75" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/75" />
                    <div className="w-full max-w-[140px] bg-white border border-gray-150 rounded h-4 mx-auto flex items-center px-2">
                      <span className="text-[7.5px] text-gray-400 truncate">{site.demoUrl}</span>
                    </div>
                  </div>
                  
                  {/* Simulated website landing component */}
                  <div className={`p-4 min-h-[120px] bg-gradient-to-b ${site.colorTheme} text-white flex flex-col justify-between relative`}>
                    {/* Subtle aesthetic grids */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                    
                    <div className="flex justify-between items-center border-b border-white/10 pb-1.5 z-10">
                      <span className="text-[9px] font-display font-extrabold tracking-widest text-gold text-white/90">
                        {site.brandName}
                      </span>
                      <span className="text-[5px] text-gold border border-gold/40 px-1 py-0.2 rounded font-semibold uppercase tracking-wider">
                        LIVE SITE
                      </span>
                    </div>
                    
                    <div className="space-y-1 z-10 my-2">
                      <h4 className="font-display font-bold text-[11px] text-white tracking-wide">
                        {site.brandName}
                      </h4>
                      <p className="text-[6.5px] text-gray-400 font-light leading-relaxed max-w-[90%] uppercase tracking-widest -mt-0.5">
                        {site.brandSub}
                      </p>
                      <div className="w-8 h-[1px] bg-gold mt-1" />
                    </div>

                    <div className="flex justify-between items-center z-10 pt-1 border-t border-white/5">
                      <span className="text-[5px] text-gray-400 tracking-wider">VISITEZ LE SITE EN DIRECT</span>
                      <span className="text-[6px] text-gold font-bold uppercase flex items-center gap-0.5">
                        PRESTIGE <Sparkles className="w-1.5 h-1.5 fill-gold animate-pulse text-gold" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card specs details */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-stone-100 border border-gray-200/60 text-[9px] font-bold text-gray-600 uppercase tracking-wider">
                      {site.sector}
                    </span>
                    {site.isPremium && (
                      <span className="px-2 py-0.5 rounded-md bg-gold/10 border border-gold/30 text-[9px] font-bold text-gold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-2 h-2 text-gold fill-gold" /> Projet Premium
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-gold transition-colors duration-200">
                    {site.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-light mt-1.5 leading-relaxed">
                    {site.subtitle} — Design responsive, architecture moderne & performance optimisée.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-gray-400 group-hover:text-gold transition-colors text-xs font-medium">
                    <Globe className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono tracking-tight">{site.demoUrl}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-gold group-hover:bg-gold/5 group-hover:border-gold/30 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
