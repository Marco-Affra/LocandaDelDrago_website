import React from 'react';
import { motion } from 'motion/react';
import { Users, ChefHat, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageSlideshow } from '../components/Slideshow';
import { CurrentEventSection } from '../components/CurrentEventSection';

export default function Events() {
  const { t } = useLanguage();

  const banquetImages = [
    `${import.meta.env.BASE_URL}images/eventi-1.webp`,
    `${import.meta.env.BASE_URL}images/eventi-2.webp`,
    `${import.meta.env.BASE_URL}images/eventi-3.webp`, 
    `${import.meta.env.BASE_URL}images/eventi-4.webp`,
    `${import.meta.env.BASE_URL}images/cucina-1.webp`,
    `${import.meta.env.BASE_URL}images/eventi-6.webp`
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="relative py-20 bg-scuro text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={`${import.meta.env.BASE_URL}images/tavolata-interna.webp`} 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-cinzel font-bold mb-4"
            >
              {t("Eventi & Banchetti", "Events & Banquets")}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-oro mx-auto mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl max-w-2xl mx-auto italic opacity-90"
            >
              {t(
                "Celebra i tuoi momenti più belli nella cornice incantevole di Monreale",
                "Celebrate your most beautiful moments in the enchanting setting of Monreale"
              )}
            </motion.p>
          </div>
        </section>

        {/* Current Event Section - Only shown if detailsFile is provided */}
        <CurrentEventSection />

        {/* Banquets & Private Events Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 text-oro font-bold tracking-widest text-sm uppercase">
                    <Star size={16} fill="currentColor" />
                    {t("Pranzi & Cene", "Lunches & Dinners")}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-cinzel text-scuro leading-tight">
                    {t("Rendi indimenticabile la tua giornata speciale", "Make your special day unforgettable")}
                  </h2>
                  <p className="text-scuro/70 text-lg leading-relaxed">
                    {t(
                      "La Locanda del Drago è la location perfetta per i vostri momenti più importanti. Offriamo la nostra disponibilità a organizzare eventi e banchetti concordando particolari menù e richieste direttamente con lo chef per garantirvi una giornata indimenticabile.",
                      "Locanda del Drago is the perfect location for your most important moments. We offer our availability to organize events and banquets by arranging special menus and requests directly with the chef to guarantee you an unforgettable day."
                    )}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-oro/10 p-3 rounded-full text-oro">
                        <ChefHat size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-scuro mb-1">{t("Menù Personalizzati", "Custom Menus")}</h4>
                        <p className="text-sm text-scuro/60">{t("Concorda ogni portata direttamente con il nostro chef.", "Arrange every course directly with our chef.")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-oro/10 p-3 rounded-full text-oro">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-scuro mb-1">{t("Grandi Gruppi", "Large Groups")}</h4>
                        <p className="text-sm text-scuro/60">{t("Sala interna e terrazza panoramica per ogni esigenza.", "Indoor room and panoramic terrace for every need.")}</p>
                      </div>
                    </div>
                  </div>

                   <Link to="/#contatti">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 inline-block bg-oro text-white px-10 py-4 font-cinzel font-bold text-lg shadow-xl hover:bg-scuro transition-all cursor-pointer"
                  >
                    {t("CONTATTACI E RICHIEDI UN PREVENTIVO", "CONTACT US AND REQUEST A QUOTE")}
                  </motion.button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <ImageSlideshow images={banquetImages} interval={5000} />
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-2xl"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
