import React from 'react';
import { motion } from 'motion/react';
import { Slideshow } from './Slideshow';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}images/hero-1-.webp`,
  `${import.meta.env.BASE_URL}images/hero-2.webp`,
  `${import.meta.env.BASE_URL}images/hero-3-.webp`,
]; 

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <Slideshow images={HERO_IMAGES} />
      </div>
      
      {/* Overlay per leggibilità */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content - Assicuriamo che sia SOPRA (z-20) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 text-center text-white px-4 flex flex-col items-center mt-12 md:mt-20"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl lg:text-7xl font-engravers font-bold text-shadow-lg uppercase leading-tight tracking-[2px] md:tracking-[6px]"
        >
          Locanda del Drago
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl font-lato font-light tracking-[4px] md:tracking-[10px] text-shadow-lg max-w-5xl uppercase opacity-90"
        >
          {t('Ristorante Pizzeria', 'Restaurant Pizzeria')}
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, translateY: -5 }}
          onClick={onOpenBooking}
          className="mt-6 md:mt-10 bg-bordeaux text-white border-2 border-white px-12 md:px-16 py-4 md:py-5 font-cinzel font-bold text-lg md:text-xl shadow-2xl cursor-pointer hover:bg-white hover:text-bordeaux transition-all duration-300"
        >
          {t('PRENOTA ORA', 'BOOK NOW')}
        </motion.button>
      </motion.div>
    </section>
  );
}
