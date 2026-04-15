import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { cn } from '../lib/utils';

export default function Gallery() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Placeholder images - in production these would be real assets
  const images = [
    { url: `${import.meta.env.BASE_URL}images/hero-1-.webp`, title: t('Il Drago della Locanda', 'The Legend of the Inn') },
    { url: `${import.meta.env.BASE_URL}images/hero-2.webp`, title: t('Una cena su Palermo', 'Dining Overlooking Palermo') },
    { url: `${import.meta.env.BASE_URL}images/hero-3-.webp`, title: t('"Chista si chiama Maravigghia"', '"Chista si chiama Maravigghia"') },
    { url: `${import.meta.env.BASE_URL}images/home-1-.webp`, title: t('La Locanda', 'The Inn') },
    { url: `${import.meta.env.BASE_URL}images/home-2.webp`, title: t('Atmosfera serale', 'Evening Ambiance') },
    { url: `${import.meta.env.BASE_URL}images/home-3.webp`, title: t('La nostra sala incastonata nella Roccia', 'Our Dining Room Carved in Rock') },
    { url: `${import.meta.env.BASE_URL}images/cucina-1.webp`, title: t('Specialità dello chef', "Chef's Culinary Creations") },
    { url: `${import.meta.env.BASE_URL}images/cucina-2.webp`, title: t('Il Quadrifoglio di focaccine', 'The "Quadrifoglio di focaccine"') },
    { url: `${import.meta.env.BASE_URL}images/cucina-3.webp`, title: t('La cura nei dettagli', 'Attention to Every Detail') },
    { url: `${import.meta.env.BASE_URL}images/forno-1.webp`, title: t('Il forno a legna', 'Traditional Wood-Fired Oven') },
    { url: `${import.meta.env.BASE_URL}images/forno-2.webp`, title: t('Le pizze in preparazione', 'Pizza Crafting') },
    { url: `${import.meta.env.BASE_URL}images/eventi-1.webp`, title: t('Eventi speciali', 'Special Occasions')},
    { url: `${import.meta.env.BASE_URL}images/eventi-2.webp`, title: t('Eventi speciali', 'Special Occasions')},
    { url: `${import.meta.env.BASE_URL}images/eventi-3.webp`, title: t('Eventi speciali', 'Special Occasions')},
    { url: `${import.meta.env.BASE_URL}images/eventi-4.webp`, title: t('Specialità dello chef', "Chef's Culinary Creations")},
    { url: `${import.meta.env.BASE_URL}images/eventi-6.webp`, title: t('Specialità dello chef', "Chef's Culinary Creations")}
  ]; 

   useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        const container = thumbnailsRef.current;
        const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

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
           <div 
            ref={thumbnailsRef}
            className="mt-8 flex justify-start gap-2 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth">
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
