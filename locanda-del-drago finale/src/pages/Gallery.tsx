import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { cn } from '../lib/utils';

export default function Gallery() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - in production these would be real assets
  const images = [
    { url: 'https://picsum.photos/seed/locanda1/1200/800', title: t('La nostra sala', 'Our dining room') },
    { url: 'https://picsum.photos/seed/locanda2/1200/800', title: t('Dettagli di stile', 'Style details') },
    { url: 'https://picsum.photos/seed/locanda3/1200/800', title: t('La Terrazza', 'The Terrace') },
    { url: 'https://picsum.photos/seed/locanda4/1200/800', title: t('I nostri piatti', 'Our dishes') },
    { url: 'https://picsum.photos/seed/locanda5/1200/800', title: t('Atmosfera serale', 'Evening atmosphere') },
    { url: 'https://picsum.photos/seed/locanda6/1200/800', title: t('Pizza gourmet', 'Gourmet pizza') },
    { url: 'https://picsum.photos/seed/locanda7/1200/800', title: t('Selezione vini', 'Wine selection') },
    { url: 'https://picsum.photos/seed/locanda8/1200/800', title: t('Ingresso', 'Entrance') },
    { url: 'https://picsum.photos/seed/locanda9/1200/800', title: t('Vista su Monreale', 'View of Monreale') },
    { url: 'https://picsum.photos/seed/locanda10/1200/800', title: t('Specialità siciliane', 'Sicilian specialties') },
    { url: 'https://picsum.photos/seed/locanda11/1200/800', title: t('Il nostro staff', 'Our staff') },
    { url: 'https://picsum.photos/seed/locanda12/1200/800', title: t('Eventi speciali', 'Special events') },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-crema">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-cinzel text-bordeaux mb-4">
              {t("Galleria", "Gallery")}
            </h1>
            <div className="w-24 h-1 bg-oro mx-auto mb-8" />
            <p className="text-2xl font-cinzel text-scuro italic">
              {t("Guarda qui tutte le nostre foto...", "Take a look at all our photos here...")}
            </p>
          </motion.div>

          {/* Carousel Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white p-2 md:p-4 rounded-xl shadow-2xl border-2 border-oro/20 overflow-hidden group"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-scuro/50 hover:bg-bordeaux text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-scuro/50 hover:bg-bordeaux text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              {/* Counter Overlay */}
              <div className="absolute bottom-4 right-4 bg-scuro/70 text-oro px-4 py-1 rounded-full text-sm font-bold backdrop-blur-md">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center pb-2">
              <h3 className="text-bordeaux font-cinzel text-xl md:text-2xl tracking-widest uppercase">
                {images[currentIndex].title}
              </h3>
            </div>
          </motion.div>

          {/* Thumbnails (Optional, for better UX) */}
          <div className="mt-8 flex justify-center gap-2 overflow-x-auto py-4 px-2 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all duration-300 shrink-0",
                  currentIndex === idx ? "border-oro scale-110 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                )}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
