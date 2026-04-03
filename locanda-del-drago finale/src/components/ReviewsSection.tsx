import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import reviewsData from '../data/reviews.json';

export function ReviewsSection() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentReviews = reviewsData.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section id="recensioni" className="py-24 bg-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-cinzel text-bordeaux mb-4"
          >
            {t("Dicono di noi", "What they say about us")}
          </motion.h2>
          <div className="w-24 h-1 bg-oro mx-auto mb-6" />
          <p className="text-scuro/70 font-lato uppercase tracking-widest text-sm">
            {t("Le esperienze dei nostri ospiti", "Our guests' experiences")}
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-8 rounded-xl shadow-xl relative group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                >
                  <Quote className="absolute top-4 right-4 text-oro/20 group-hover:text-oro/40 transition-colors" size={40} />
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={cn(
                          "transition-colors",
                          i < review.voto_globale ? "text-oro fill-oro" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-6 leading-relaxed flex-grow">
                    "{review.testo}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="font-cinzel font-bold text-bordeaux">{review.autore}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-400 uppercase tracking-tighter">Google Review • {review.periodo}</p>
                      <a 
                        href={review.fonte} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-oro hover:text-bordeaux transition-colors"
                        title={t("Vedi su Google", "View on Google")}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentPage === i ? "bg-bordeaux w-8" : "bg-gray-300 hover:bg-bordeaux/50"
                )}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows for Desktop */}
          <button 
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 p-2 text-bordeaux/50 hover:text-bordeaux transition-colors hidden md:block"
          >
            <ChevronLeft size={40} />
          </button>
          <button 
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 p-2 text-bordeaux/50 hover:text-bordeaux transition-colors hidden md:block"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          <a 
            href="https://www.google.com/maps/search/Locanda+del+Drago+Monreale+recensioni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-bordeaux text-bordeaux px-6 md:px-8 py-3 font-cinzel font-bold text-[11px] md:text-sm whitespace-nowrap hover:bg-bordeaux hover:text-white transition-all duration-300 group min-w-[240px]"
          >
            {t("SCOPRI DI PIÙ SU GOOGLE", "DISCOVER MORE ON GOOGLE")}
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJkSXlxk_uGRMR8CizJKruDyg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-bordeaux border-2 border-bordeaux text-white px-6 md:px-8 py-3 font-cinzel font-bold text-[11px] md:text-sm whitespace-nowrap hover:bg-transparent hover:text-bordeaux transition-all duration-300 group min-w-[240px]"
          >
            {t("LASCIA UNA RECENSIONE QUI", "LEAVE A REVIEW HERE")}
            <Quote size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
