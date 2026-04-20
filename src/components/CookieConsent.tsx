import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-oro/30 p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="bg-crema p-3 rounded-xl border border-oro/20">
                <Cookie className="text-bordeaux" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-cinzel text-lg text-bordeaux font-bold">
                  {t("Informativa sui Cookie", "Cookie Information")}
                </h3>
                <p className="text-sm text-scuro/80 mt-1">
                  {t(
                    "Utilizziamo i cookie per migliorare la tua esperienza e ricordare le tue preferenze, come la lingua scelta. Navigando accetti la nostra policy.",
                    "We use cookies to improve your experience and remember your preferences, such as your chosen language. By browsing, you accept our policy."
                  )}
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-scuro/40 hover:text-bordeaux transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-bordeaux text-white px-6 py-2.5 rounded-lg font-cinzel font-bold text-sm tracking-widest hover:bg-scuro transition-all duration-300 shadow-md"
              >
                {t("ACCETTA", "ACCEPT")}
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 bg-crema text-scuro border border-scuro/20 px-6 py-2.5 rounded-lg font-cinzel font-bold text-sm tracking-widest hover:border-oro transition-all duration-300"
              >
                {t("SOLO NECESSARI", "ONLY NECESSARY")}
              </button>
            </div>
            
            <div className="text-center">
              <Link 
                to="/legal" 
                className="text-xs text-bordeaux/60 hover:text-bordeaux underline underline-offset-4"
                onClick={() => setIsVisible(false)}
              >
                {t("Leggi la nostra Cookie Policy", "Read our Cookie Policy")}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
