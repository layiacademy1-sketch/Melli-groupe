import { MessageSquareCode } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsappButton() {
  const phoneNumber = '33756892411'; // Fictional whatsapp corporate number
  const message = encodeURIComponent("Bonjour MELLI GROUPE, je vous contacte depuis votre site internet. J'aimerais en savoir plus sur vos services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <motion.a
        id="whatsapp-floater"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center space-x-2.5 p-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs tracking-wide shadow-2xl relative group cursor-pointer"
        style={{ boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)' }}
      >
        <MessageSquareCode className="w-5 h-5 text-white" />
        <span className="hidden sm:inline-block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-350 ease-out whitespace-nowrap font-medium uppercase tracking-wider text-[10px]">
          Chat WhatsApp
        </span>
        
        {/* Subtle decorative glowing rings */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping group-hover:animate-none -z-10 pointer-events-none" />
      </motion.a>
    </div>
  );
}
