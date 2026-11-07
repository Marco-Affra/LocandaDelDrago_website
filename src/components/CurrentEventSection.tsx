import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Download, ArrowRight, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyImage } from './LazyImage';
import { getEventsData } from '../data/eventData';

export function CurrentEventSection() {
  const { t } = useLanguage();
  const events = getEventsData(t);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  if (events.length === 0) return null;

  return (
    <section className="py-20 container mx-auto px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cinzel text-bordeaux mb-4">
            {t("Prossimi Eventi & Menù Speciali", "Upcoming Events & Special Menus")}
          </h2>
          <div className="w-24 h-1 bg-oro mx-auto" />
        </div>

        {events.map((event, index) => (
          <motion.div 
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-oro/10"
          >
            <div 
              className="lg:w-1/2 relative h-80 lg:h-auto cursor-pointer group"
              onClick={() => setSelectedImage({ url: event.image, title: event.title })}
            >
              <LazyImage 
                src={event.image} 
                alt={event.title}
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-scuro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={40} className="text-white" />
              </div>
              <div className="absolute top-4 left-4 bg-bordeaux text-white px-4 py-2 rounded-full font-bold text-[10px] md:text-xs shadow-lg uppercase tracking-wider">
                {t("Clicca per vedere il menù completo", "Click to see the full menu")}
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-oro mb-4 font-bold">
                <Calendar size={18} />
                <span>{event.date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-cinzel text-scuro mb-6">{event.title}</h3>
              <p className="text-scuro/70 leading-relaxed mb-8 text-lg">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={`${import.meta.env.BASE_URL}${event.detailsFile.replace(/^\//, '')}`}
                  download={event.downloadName}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-bordeaux text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:bg-scuro"
                >
                  <Download size={18} />
                  {t("SCARICA MENÙ", "DOWNLOAD MENU")}
                </motion.a>
                <Link to="/#contatti">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-scuro text-scuro px-6 py-3 rounded-lg font-bold transition-all hover:bg-scuro hover:text-white cursor-pointer"
                  >
                    {t("PRENOTA ORA", "BOOK NOW")}
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-scuro/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-oro transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`${import.meta.env.BASE_URL}${selectedImage.url.replace(/^\//, '')}`} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl border-4 border-white/10 rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-cinzel text-xl md:text-2xl tracking-widest uppercase">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
