import React from 'react';
import { motion } from 'motion/react';
import { Calendar, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getCurrentEvent } from '../data/eventData';

export function CurrentEventSection() {
  const { t } = useLanguage();
  const currentEvent = getCurrentEvent(t);

  if (!currentEvent.detailsFile) return null;

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <img 
              src={currentEvent.image} 
              alt={currentEvent.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-bordeaux text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              {t("EVENTO IN CORSO", "CURRENT EVENT")}
            </div>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-oro mb-4 font-bold">
              <Calendar size={18} />
              <span>{currentEvent.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-cinzel text-scuro mb-6">{currentEvent.title}</h2>
            <p className="text-scuro/70 leading-relaxed mb-8 text-lg">
              {currentEvent.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={currentEvent.detailsFile}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-bordeaux text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:bg-scuro"
              >
                <FileText size={18} />
                {t("VEDI DETTAGLI", "VIEW DETAILS")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-scuro text-scuro px-6 py-3 rounded-lg font-bold transition-all hover:bg-scuro hover:text-white cursor-pointer"
                href="/#contatti"
              >
                {t("PRENOTA ORA", "BOOK NOW")}
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
