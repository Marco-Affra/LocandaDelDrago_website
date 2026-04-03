import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Facebook, Instagram, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { InfoSection } from '../components/InfoSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { BookingModal } from '../components/BookingModal';
import { Footer } from '../components/Footer';
import { CurrentEventSection } from '../components/CurrentEventSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => setIsModalOpen(true)} />

        {/* Current Event Section - Only shown if detailsFile is provided */}
        <CurrentEventSection />

        {/* Sezione 1: Terrazza */}
        <InfoSection 
          title={t("La Terrazza", "The Terrace")}
          description={t(
            "Ammira l'intera città di Palermo mentre gusti i nostri piatti. La nostra terrazza panoramica a Monreale è il luogo ideale per serate magiche.",
            "Admire the city of Palermo while tasting our dishes. Our panoramic terrace in Monreale is the ideal place for magical evenings."
          )}
          images={[
            'https://picsum.photos/seed/sala1/800/600',
            'https://picsum.photos/seed/sala2/800/600',
            'https://picsum.photos/seed/sala3/800/600'
          ]}
        />

        {/* Sezione 2: Cucina */}
        <InfoSection 
          bgWhite
          reverse
          title={t("Sapori Autentici", "Authentic Flavors")}
          description={t(
            "La Locanda del Drago celebra la vera cucina siciliana, dove ogni piatto è un viaggio sensoriale tra i sapori autentici della nostra terra. Oltre alla nostra proposta quotidiana, siamo specializzati nell'organizzazione di eventi esclusivi, curando ogni dettaglio con menù personalizzati e fatti su misura per soddisfare ogni vostra esigenza e rendere indimenticabile ogni occasione speciale.",
            "Locanda del Drago celebrates true Sicilian cuisine, where every dish is a sensory journey through the authentic flavors of our land. In addition to our daily offerings, we specialize in organizing exclusive events, taking care of every detail with personalized menus tailored to meet your every need and make every special occasion unforgettable."
          )}
          button={{
            label: t("SCOPRI GLI EVENTI", "DISCOVER EVENTS"),
            href: "/eventi"
          }}
          images={[
            'https://picsum.photos/seed/cucina1/800/600',
            'https://picsum.photos/seed/cucina2/800/600',
            'https://picsum.photos/seed/cucina3/800/600'
          ]}
        />

        {/* Sezione 3: Pizza */}
        <InfoSection 
          title={t("Il Forno a Legna", "Wood-Fired Oven")}
          description={t(
            "Il cuore pulsante della nostra pizzeria è il forno a legna tradizionale, dove la maestria artigianale incontra ingredienti di prima scelta. Per chi ama la condivisione e la varietà, offriamo esclusive proposte di Giro Pizza: un'opzione pensata per permettervi di assaggiare tante tipologie diverse di pizza servite calde a centro tavola, ideale per vivere un'esperienza conviviale e scoprire ogni sfumatura del nostro impasto a lenta lievitazione.",
            "The beating heart of our pizzeria is the traditional wood-fired oven, where artisanal mastery meets top-quality ingredients. For those who love sharing and variety, we offer exclusive 'Giro Pizza' options: a choice designed to allow you to taste many different types of pizza served hot at the center of the table, ideal for a convivial experience and discovering every nuance of our slow-leavened dough."
          )}
          button={{
            label: t("SCOPRI IL GIRO PIZZA", "DISCOVER PIZZA PARTY"),
            href: "/giro-pizza"
          }}
          images={[
            'https://picsum.photos/seed/pizza1/800/600',
            'https://picsum.photos/seed/pizza2/800/600',
            'https://picsum.photos/seed/pizza3/800/600'
          ]}
        />

        {/* Sezione CTA Menu */}
        <section className="py-16 bg-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-cinzel text-scuro mb-6">
              {t("Scopri le nostre specialità e tutto ciò che offriamo dal nostro menù", "Discover our specialties and everything we offer from our menu")}
            </h3>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-oro text-white px-12 py-4 font-cinzel font-bold text-lg shadow-xl hover:bg-scuro transition-all duration-300"
              >
                {t("VEDI IL MENÙ", "VIEW MENU")}
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Sezione Recensioni */}
        <ReviewsSection />

        {/* Sezione Contatti - Redesigned */}
        <section id="contatti" className="py-24 px-4 bg-crema border-t border-oro/10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-cinzel text-bordeaux mb-4">
                {t("Contatti & Orari", "Contacts & Hours")}
              </h2>
              <div className="w-24 h-1 bg-oro mx-auto mb-6" />
              <p className="text-scuro/70 italic max-w-2xl mx-auto">
                {t("Siamo pronti ad accoglierti per una serata indimenticabile tra i sapori di Monreale.", "We are ready to welcome you for an unforgettable evening among the flavors of Monreale.")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Dove Siamo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-oro flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-crema rounded-full flex items-center justify-center text-bordeaux mb-6 group-hover:bg-bordeaux group-hover:text-white transition-colors duration-300">
                  <MapPin size={32} />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-scuro mb-4 uppercase tracking-wider">{t("Dove Siamo", "Location")}</h3>
                <p className="text-scuro/70 mb-6 leading-relaxed">
                  Via Fontana del Drago, 19<br />
                  90046 Monreale (PA)
                </p>
                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=La+Locanda+Del+Drago+Monreale+Via+Fontana+del+Drago+19"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto text-oro font-bold text-sm uppercase tracking-widest hover:text-bordeaux transition-colors flex items-center gap-2"
                >
                  {t("Ottieni Indicazioni", "Get Directions")}
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>

              {/* Card 2: Contatti Rapidi */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-oro flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <a 
                  href="tel:+393381428949"
                  className="w-16 h-16 bg-crema rounded-full flex items-center justify-center text-bordeaux mb-6 group-hover:bg-bordeaux group-hover:text-white transition-colors duration-300"
                  aria-label="Call us"
                >
                  <Phone size={32} />
                </a>
                <h3 className="font-cinzel font-bold text-xl text-scuro mb-4 uppercase tracking-wider">{t("Contatti", "Contacts")}</h3>
                <div className="space-y-2 mb-6">
                  <a href="tel:+393381428949" className="block text-scuro font-bold text-lg hover:text-oro transition-colors">338 142 8949</a>
                  <a href="mailto:la.locanda.del.drago@gmail.com" className="block text-scuro/70 hover:text-oro transition-colors">la.locanda.del.drago@gmail.com</a>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href="https://www.facebook.com/locandadeldragopizzeria/" target="_blank" className="text-scuro/40 hover:text-bordeaux transition-all hover:scale-110">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/locandadeldrago_/" target="_blank" className="text-scuro/40 hover:text-bordeaux transition-all hover:scale-110">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/393381428949" target="_blank" className="text-scuro/40 hover:text-bordeaux transition-all hover:scale-110">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Orari */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-oro flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-crema rounded-full flex items-center justify-center text-bordeaux mb-6 group-hover:bg-bordeaux group-hover:text-white transition-colors duration-300">
                  <Clock size={32} />
                </div>
                <h3 className="font-cinzel font-bold text-xl text-scuro mb-4 uppercase tracking-wider">{t("Orari", "Hours")}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-scuro font-bold">{t("Da Martedì a Domenica", "From Tuesday to Sunday")}</p>
                  <p className="text-scuro/70">19:00 — 00:00</p>
                </div>
                <div className="mt-auto py-2 px-4 bg-crema rounded-full">
                  <p className="text-bordeaux font-bold italic text-sm">{t("Lunedì chiusi", "Mondays closed")}</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bordeaux text-white px-12 py-4 font-cinzel font-bold text-lg shadow-xl hover:bg-scuro transition-all"
              >
                {t("PRENOTA UN TAVOLO", "BOOK A TABLE")}
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
