import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-scuro text-gray-400 pt-20 pb-10 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link to="/" className="block transition-transform hover:scale-105 active:scale-95">
              <img 
                src="logo-locanda.png" 
                alt="Locanda del Drago" 
                className="h-24 w-auto drop-shadow-lg opacity-90" 
                referrerPolicy="no-referrer" 
              />
            </Link>
            <p className="text-sm italic text-center md:text-left max-w-xs">
              {t("Un'esperienza culinaria sospesa tra cielo e terra, nel cuore di Monreale.", "A culinary experience suspended between heaven and earth, in the heart of Monreale.")}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/locandadeldragopizzeria/" target="_blank" className="hover:text-oro transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/locandadeldrago_/" target="_blank" className="hover:text-oro transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/393381428949" target="_blank" className="hover:text-oro transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-white font-cinzel font-bold uppercase tracking-widest text-sm border-b border-oro/30 inline-block pb-2">
              {t("NAVIGAZIONE", "NAVIGATION")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-oro transition-colors">{t("Home", "Home")}</Link></li>
              <li><Link to="/menu" className="hover:text-oro transition-colors">{t("Menù", "Menu")}</Link></li>
              <li><Link to="/galleria" className="hover:text-oro transition-colors">{t("Galleria", "Gallery")}</Link></li>
              <li><Link to="/giro-pizza" className="hover:text-oro transition-colors">{t("Giro Pizza", "Pizza Party")}</Link></li>
              <li><Link to="/eventi" className="hover:text-oro transition-colors">{t("Eventi", "Events")}</Link></li>
              <li><a href={isHome ? "#contatti" : "/#contatti"} className="hover:text-oro transition-colors">{t("Contatti", "Contacts")}</a></li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-white font-cinzel font-bold uppercase tracking-widest text-sm border-b border-oro/30 inline-block pb-2">
              {t("ORARI", "HOURS")}
            </h4>
            <div className="text-sm space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span>{t("Da Martedì a Domenica", "From Tuesday to Sunday")}:</span>
                <span className="text-white">19:00 - 00:00</span>
              </div>
              <p className="text-oro font-bold italic">
                {t("Lunedì chiusi", "Mondays closed")}
              </p>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-white font-cinzel font-bold uppercase tracking-widest text-sm border-b border-oro/30 inline-block pb-2">
              {t("CONTATTI", "CONTACTS")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-oro shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=La+Locanda+Del+Drago+Monreale+Via+Fontana+del+Drago+19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-oro transition-colors"
                >
                  Via Fontana del Drago, 19<br />90046 Monreale (PA)
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-oro shrink-0" />
                <a href="tel:+393381428949" className="hover:text-oro transition-colors">338 142 8949</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-oro shrink-0" />
                <a href="mailto:la.locanda.del.drago@gmail.com" className="hover:text-oro transition-colors">la.locanda.del.drago@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-60">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>{t("La Locanda del Drago di Affranchi Maurizio", "La Locanda del Drago by Affranchi Maurizio")}</p>
            <span className="hidden md:inline opacity-30">|</span>
            <span>{t("P.IVA 06388960822", "VAT 06388960822")}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <p>© {new Date().getFullYear()}</p>
            <span className="hidden md:inline opacity-30">|</span>
            <p>
              Created by{" "}
              <a 
                href="https://marcoaffranchi.it" 
                target="_blank" 
                className="text-white hover:text-oro transition-colors font-bold"
              >
                Marco Affranchi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
