import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';
import { submitContactForm } from '../utils/firebase';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    prenom: '',
    phone: '',
    email: '',
    projectType: 'Melli Gestion',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [saveSource, setSaveSource] = useState<'firebase' | 'local' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.message) {
      alert("Veuillez remplir au moins les champs requis (Nom, Email, Message).");
      return;
    }

    setStatus('loading');
    
    // Construct beautifully formatted message text for WhatsApp
    const messageText = `*Nouvelle Demande de Contact MELLI GROUPE*\n\n` +
      `✍️ *Nom* : ${formData.nom}\n` +
      `👤 *Prénom* : ${formData.prenom || 'Non renseigné'}\n` +
      `📞 *Téléphone* : ${formData.phone || 'Non renseigné'}\n` +
      `✉️ *Email* : ${formData.email}\n` +
      `📁 *Projet / Univers* : ${formData.projectType}\n\n` +
      `💬 *Message* :\n${formData.message}`;

    const whatsappUrl = `https://wa.me/33756888535?text=${encodeURIComponent(messageText)}`;

    try {
      const response = await submitContactForm(formData);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      if (response && response.success) {
        setStatus('success');
        setSaveSource(response.source);
      } else {
        setStatus('success');
        setSaveSource('local');
      }
      
      // Clear form
      setFormData({
        nom: '',
        prenom: '',
        phone: '',
        email: '',
        projectType: 'Melli Gestion',
        message: ''
      });
    } catch (err) {
      console.error("Submission error:", err);
      
      // Open WhatsApp anyway even if database save returns error
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      setSaveSource('local');
      
      // Clear form
      setFormData({
        nom: '',
        prenom: '',
        phone: '',
        email: '',
        projectType: 'Melli Gestion',
        message: ''
      });
    }
  };

  const projectOptions = [
    'Melli Gestion (Comptabilité, Secrétariat)',
    'Melli Création (Site Internet, Logo, Flyers)',
    'Melli Groupe (Les deux / Univers complet)',
    'Autre Demande Spécifique'
  ];

  return (
    <section id="contact" className="relative py-24 bg-bg-dark border-t border-gold/15">
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Corporate details & coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">INITIER UNE COLLABORATION</span>
              <h2 className="font-display text-4xl font-extrabold text-gray-900">Créons de la valeur ensemble</h2>
              <p className="text-gray-600 font-light mt-4 leading-relaxed text-sm">
                Une question administrative ? Un projet de refonte visuelle ? Remplissez ce formulaire et un de nos experts prendra contact avec vous sous 24h ouvrées. Un accompagnement d'excellence commence par un premier contact de qualité.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-bg-card border border-gold/15 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">Téléphone direct</span>
                  <a href="tel:+33756888535" className="text-gray-800 hover:text-gold transition-colors leading-relaxed font-semibold">
                    +33 7 56 88 85 35
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-bg-card border border-gold/15 flex items-center justify-center text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">Messagerie mail</span>
                  <a href="mailto:contact@melli-pro.fr" className="text-gray-800 hover:text-gold transition-colors leading-relaxed font-semibold">
                    contact@melli-pro.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-bg-card border border-gold/15 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">Localisation</span>
                  <span className="text-gray-700 leading-relaxed font-semibold">
                    Île-de-France
                  </span>
                </div>
              </div>
            </div>

            {/* Business hours indicator card */}
            <div className="p-5 rounded-2xl bg-bg-card border border-gold/15 shadow-sm">
              <span className="text-[11px] uppercase tracking-wider text-green-600 font-semibold flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span>Horaires de bureau</span>
              </span>
              <p className="text-xs text-gray-650 font-light mt-1.5 leading-relaxed">
                Notre secrétariat et notre studio créatif sont ouverts du lundi au vendredi de 8h30 à 18h30 sans interruption.
              </p>
            </div>
          </div>

          {/* Right Block: Professional Form */}
          <div className="lg:col-span-7 bg-bg-card border border-gold/15 rounded-3xl p-8 md:p-10 shadow-sm relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                   <h3 className="font-display font-extrabold text-2xl text-gray-900">Demande reçue avec succès !</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Merci pour l'intérêt que vous portez à MELLI GROUPE. Un conseiller de l'univers demandé étudiera votre dossier et vous recontactera sous 24 heures heures ouvrées.
                  </p>
                  {saveSource === 'local' && (
                    <span className="inline-block text-[10px] text-gray-600 font-mono tracking-wider mt-2 px-2.5 py-1 rounded bg-white border border-gold/15">
                      Séquencé en local (Mock de démonstration)
                    </span>
                  )}
                  {saveSource === 'firebase' && (
                    <span className="inline-block text-[10px] text-green-700 font-mono tracking-wider mt-2 px-2.5 py-1 rounded bg-green-500/5 border border-green-500/20 animate-pulse">
                      Connecté & Sauvegardé dans Firebase Cloud Firestore
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-gold hover:bg-rose-gold text-white font-semibold text-xs tracking-wider rounded-lg uppercase transition-all duration-300"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div className="space-y-2">
                    <label htmlFor="nom" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Nom <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Dupont"
                      className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-800 text-sm transition-colors"
                    />
                  </div>

                  {/* Prénom */}
                  <div className="space-y-2">
                    <label htmlFor="prenom" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      placeholder="Jean"
                      className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-800 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Téléphone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-800 text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-800 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Type de Projet */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Type de projet / Univers recherché
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-700 text-sm transition-colors appearance-none cursor-pointer"
                  >
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-gray-800">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Votre message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement les contours de votre besoin..."
                    className="w-full px-4 py-3 bg-white border border-gray-205 focus:border-gold focus:outline-none rounded-xl text-gray-800 text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit Feedback if Error */}
                {status === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-xs">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Une erreur est survenue lors de l'envoi de votre demande. Nos techniciens étudient ce problème. Veuillez essayer à nouveau.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-gold to-rose-gold text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:scale-[1.01] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Traitement de l'envoi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Envoyer ma demande</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
