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
          title={t("Noi della Locanda", "From the Locanda")}
          description={t(
            "Siamo pronti ad accogliervi in un’atmosfera unica, per farvi gustare piatti della tradizione siciliana immersi nel panorama della Conca d’Oro di Palermo. Vi aspettiamo a cena per farvi trascorrere una serata piacevole, in un ambiente accogliente e familiare.",
            "We are ready to welcome you into a unique atmosphere, where you can enjoy traditional Sicilian dishes surrounded by the panorama of Palermo’s Conca d’Oro. We look forward to welcoming you for dinner and to offer you a pleasant evening in a warm and family-friendly setting."
          )}
          images={[
            `${import.meta.env.BASE_URL}images/home-1-.webp`,
            `${import.meta.env.BASE_URL}images/home-2.webp`,
            `${import.meta.env.BASE_URL}images/home-3.webp`
          ]} 
        />

        {/* Sezione 2: Cucina */}
        <InfoSection 
          bgWhite
          reverse
          title={t("La nostra Cucina", "Our Cuisine")}
          description={t(
            "La Locanda del Drago celebra la vera cucina siciliana, offrendo un’ampia scelta di piatti da gustare in compagnia. Che sia per una cena tra amici a base di pizza e antipasti tipici o per festeggiare insieme i vostri momenti più belli, ci prendiamo cura di ogni dettaglio. Creiamo menù su misura per le vostre occasioni speciali.",
            "Locanda del Drago celebrates true Sicilian cuisine, offering a wide selection of dishes to enjoy together. Whether it is a dinner with friends featuring pizza and typical appetizers or a celebration of your most beautiful moments, we take care of every detail. We create tailored menus for your special occasions."
          )}
          button={{
            label: t("SCOPRI GLI EVENTI", "DISCOVER EVENTS"),
            href: "/eventi"
          }}
          images={[
             `${import.meta.env.BASE_URL}images/cucina-1.webp`,
            `${import.meta.env.BASE_URL}images/cucina-2.webp`,
            `${import.meta.env.BASE_URL}images/cucina-3.webp`
          ]}
        />

        {/* Sezione 3: Pizza */}
        <InfoSection 
          title={t("Il Forno a Legna", "Wood-Fired Oven")}
          description={t(
            "Nella nostra pizzeria, il forno a legna dà vita a pizze dal gusto autentico, preparate con semplicità e attenzione. Per le vostre serate in compagnia, offriamo anche la possibilità di organizzare il giro pizza, una proposta che vi permette di assaggiare pizze per tutti i gusti.",
            "In our pizzeria, the wood-fired oven brings to life pizzas with an authentic flavor, prepared with simplicity and care. For your evenings together, we also offer the possibility of organizing a pizza party experience, a formula that allows you to enjoy pizzas for every taste."
          )}
          button={{
            label: t("SCOPRI IL GIRO PIZZA", "DISCOVER PIZZA PARTY"),
            href: "/giro-pizza"
          }}
          images={[
             `${import.meta.env.BASE_URL}images/forno-1.webp`,
             `${import.meta.env.BASE_URL}images/forno-2.webp`
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
        <section id="contatti" className="py-24 px-4 bg-crema border-t border-oro/10 overflow-hidden">
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
