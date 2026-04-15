import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/', label: t('HOME', 'HOME') },
    { to: '/menu', label: t('MENÙ', 'MENU') },
    { to: '/galleria', label: t('GALLERIA', 'GALLERY') },
    { to: '/giro-pizza', label: t('GIRO PIZZA', 'PIZZA PARTY') },
    { to: '/eventi', label: t('EVENTI', 'EVENTS') },
    { to: isHome ? '#recensioni' : '/#recensioni', label: t('RECENSIONI', 'REVIEWS') },
    { to: isHome ? '#contatti' : '/#contatti', label: t('CONTATTI', 'CONTACTS') },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      (scrolled || !isHome) ? "bg-scuro/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block transition-transform hover:scale-105 active:scale-95">
            <img src={`${import.meta.env.BASE_URL}logo-locanda.png`} alt="Locanda del Drago" className="h-20 md:h-24 w-auto drop-shadow-md" referrerPolicy="no-referrer" />
          </Link>
        </div>

        {/* Desktop Navigation Links - Visible when there is enough space */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 mx-4">
          {navLinks.map((link) => (
           
              <Link
                key={link.label}
                to={link.to}
                className="font-cinzel font-bold text-sm xl:text-lg text-white hover:text-oro transition-all duration-400 hover:-translate-y-[2px] uppercase tracking-wider whitespace-nowrap"
              >
                {link.label}
              </Link>
           
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          <div className="flex items-center gap-3 xl:gap-4 border-r border-white/30 pr-4 xl:pr-6 transition-colors duration-300">
            <a 
              href="tel:+393381428949" 
              className="flex items-center gap-2 text-sm xl:text-lg font-bold text-white hover:text-oro transition-all duration-400 hover:-translate-y-[3px] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] whitespace-nowrap"
              aria-label="Call us"
            >
              <Phone size={18} className="xl:w-5 xl:h-5" />
            </a>
            <div className="flex gap-2 xl:gap-3">
              <a 
                href="https://www.facebook.com/locandadeldragopizzeria/" 
                target="_blank" 
                className="text-white hover:text-oro transition-all duration-400 hover:-translate-y-[3px] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
              >
                <Facebook size={16} className="xl:w-[18px] xl:h-[18px]" />
              </a>
              <a 
                href="https://www.instagram.com/locandadeldrago_/" 
                target="_blank" 
                className="text-white hover:text-oro transition-all duration-400 hover:-translate-y-[3px] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
              >
                <Instagram size={16} className="xl:w-[18px] xl:h-[18px]" />
              </a>
              <a 
                href="https://wa.me/393381428949" 
                target="_blank" 
                className="text-white hover:text-oro transition-all duration-400 hover:-translate-y-[3px] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
              >
                <MessageCircle size={16} className="xl:w-[18px] xl:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center gap-2 font-cinzel font-bold text-base xl:text-lg text-white hover:text-oro transition-all duration-400 hover:-translate-y-[3px] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
              <Globe size={14} className="xl:w-4 xl:h-4" /> <span>{lang.toUpperCase()}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <button onClick={() => setLang('it')} className="block w-full px-4 py-2 text-left text-xs font-bold text-scuro hover:bg-gray-50 hover:text-bordeaux transition-colors">IT</button>
              <button onClick={() => setLang('en')} className="block w-full px-4 py-2 text-left text-xs font-bold text-scuro hover:bg-gray-50 hover:text-bordeaux transition-colors">EN</button>
            </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-5">
          <a 
            href="tel:+393381428949" 
            className="text-white hover:text-oro transition-all duration-300 active:scale-90"
            aria-label="Call us"
          >
            <Phone size={22} />
          </a>

          <a 
            href="https://wa.me/393381428949" 
            target="_blank"
            className="text-white hover:text-oro transition-all duration-300 active:scale-90"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          
          <button 
            onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
            className="font-cinzel font-bold text-sm text-white hover:text-oro transition-all w-8"
          >
            {lang.toUpperCase()}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-oro transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full border-t shadow-2xl backdrop-blur-xl transition-colors duration-300 bg-scuro/95 border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center pt-12 pb-24 lg:py-4 gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.label} className="w-full lg:w-auto text-center">
                 
                    <Link
                      to={link.to}
                      className="block py-3 lg:py-0 font-cinzel font-bold text-xl lg:text-base text-white hover:text-oro transition-all duration-300 hover:scale-110"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  
                </li>
              ))}
              {/* Mobile Social & Info */}
              <li className="lg:hidden flex flex-col items-center gap-8 mt-4 pt-8 border-t border-white/10 w-3/4">
                <div className="flex flex-col items-center gap-2">
                  <a 
                    href="tel:+393381428949" 
                    className="flex items-center gap-2 text-white font-bold text-lg hover:text-oro transition-colors"
                  >
                    <Phone size={18} className="text-oro" />
                    338 142 8949
                  </a>
                </div>

                <div className="flex gap-8">
                  <a 
                    href="https://www.facebook.com/locandadeldragopizzeria/" 
                    target="_blank" 
                    className="text-white hover:text-oro transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={28} />
                  </a>
                  <a 
                    href="https://www.instagram.com/locandadeldrago_/" 
                    target="_blank" 
                    className="text-white hover:text-oro transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={28} />
                  </a>
                  <a 
                    href="https://wa.me/393381428949" 
                    target="_blank" 
                    className="text-white hover:text-oro transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle size={28} />
                  </a>
                </div>

                {/* Mobile Language Switcher */}
                <div className="flex gap-8 justify-center">
                  <button 
                    onClick={() => setLang('it')} 
                    className={cn(
                      "px-4 py-2 font-bold text-xl transition-all duration-400", 
                      lang === 'it' ? "text-oro underline underline-offset-8" : "text-white/50 hover:text-white"
                    )}
                  >
                    IT
                  </button>
                  <button 
                    onClick={() => setLang('en')} 
                    className={cn(
                      "px-4 py-2 font-bold text-xl transition-all duration-400", 
                      lang === 'en' ? "text-oro underline underline-offset-8" : "text-white/50 hover:text-white"
                    )}
                  >
                    EN
                  </button>
                </div>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
