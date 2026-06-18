import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import logoTransparent from '../assets/images/logo-transparent.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Melli Gestion', href: '#/gestion' },
    { name: 'Melli Création', href: '#/creation' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-bg-dark/95 backdrop-blur-md border-b border-gold/20 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with elegant Playfair Display Serif style */}
        <a href="#/" id="navbar-logo" className="flex items-center space-x-2 group">
          <img
            src={logoTransparent}
            alt="MELLI GROUPE"
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-gray-600 hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300 py-1"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center space-x-1.5 px-5 py-2.5 border border-gold rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800 bg-gold/10 hover:bg-gold hover:text-white transition-all duration-300"
          >
            <span>Consulter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-menu-btn"
          className="lg:hidden text-gray-800 hover:text-gold transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-dark border-b border-gold/20 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium tracking-wide text-gray-800 hover:text-gold transition-colors py-2 border-b border-gray-100"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-1.5 px-5 py-3 bg-gold hover:bg-gold/90 rounded-lg text-xs font-semibold uppercase tracking-wider text-black transition-colors"
              >
                <span>Consulter</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
