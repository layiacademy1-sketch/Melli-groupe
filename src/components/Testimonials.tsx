import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  // Get active subset for desktop viewing (3 items) or laptop (2 items) or mobile (1 item)
  // But another way to make a gorgeous interactive carrousel is showing a prominent center review card with sliding left/right controls, and grid display below or interactive pagination dots!
  // center sliding layout has a really polished feel. Let's do it with great visual emphasis.

  return (
    <section id="temoignages" className="relative py-24 bg-bg-dark border-t border-gold/15">
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">ECHO DE NOS CLIENTS</span>
          <h2 className="font-display text-4xl font-extrabold text-gray-900">Avis Clients & Retours</h2>
          <p className="text-gray-600 font-light mt-3 text-sm">
            Ils nous font confiance au quotidien pour structurer leur entreprise et orchestrer leur présence en ligne. Découvrez leurs retours honnêtes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Display Testimonial with AnimatePresence */}
          <div className="min-h-[280px] p-8 md:p-12 rounded-3xl bg-bg-card border border-gold/15 shadow-sm relative text-center flex flex-col justify-between overflow-hidden">
            <Quote className="absolute top-8 left-8 text-gold/5 w-24 h-24 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Five Gold Stars */}
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-gray-700 italic font-light leading-relaxed max-w-2xl mx-auto">
                  "{TESTIMONIALS[activeIndex].text}"
                </p>

                {/* Client Profile */}
                <div>
                  <h4 className="font-display font-extrabold text-gray-900 text-base">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <span className="text-xs text-rose-gold font-bold tracking-wider uppercase block mt-1">
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons inside critical layout */}
            <div className="flex items-center justify-center space-x-4 mt-10">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-gold/20 hover:border-gold bg-white text-gray-800 hover:text-gold transition-all"
                aria-label="Avis Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-gold/20 hover:border-gold bg-white text-gray-800 hover:text-gold transition-all"
                aria-label="Avis Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-gold' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Small Trust Seal Banner */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 text-center border-t border-gray-100 pt-10">
          <div className="flex items-center space-x-1.5">
            <span className="text-gray-900 font-display font-bold text-lg">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gray-600 text-xs">sur de nombreux avis authentifiés</span>
          </div>
          <div className="h-4 w-px bg-gray-200 hidden sm:block" />
          <div className="text-xs text-gold font-bold tracking-wide uppercase">
            Rigueur de gestion • Créations performantes
          </div>
        </div>
      </div>
    </section>
  );
}
