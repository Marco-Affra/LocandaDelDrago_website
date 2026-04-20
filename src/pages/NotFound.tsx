import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Home, ChevronLeft } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-crema">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Large 404 Stylized */}
            <div className="relative inline-block">
              <h1 className="text-9xl md:text-[12rem] font-cinzel text-bordeaux/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-cinzel text-bordeaux tracking-tighter">
                  {t("Pagina non Trovata", "Page Not Found")}
                </h2>
              </div>
            </div>

            <div className="w-24 h-1 bg-oro mx-auto mb-6" />

            <p className="text-lg md:text-xl text-scuro/70 italic max-w-lg mx-auto leading-relaxed">
              {t(
                "Sembra che il sentiero si sia smarrito tra le nebbie del Drago. La pagina che cerchi non esiste o è stata spostata.",
                "It seems the path has been lost in the Dragon's mists. The page you are looking for does not exist or has been moved."
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                to="/"
                className="group flex items-center gap-2 bg-bordeaux text-white px-8 py-4 rounded-full font-cinzel font-bold tracking-widest hover:bg-scuro transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
              >
                <Home size={18} />
                {t("TORNA ALLA HOME", "BACK TO HOME")}
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-scuro/60 hover:text-bordeaux font-cinzel font-bold tracking-widest text-sm transition-colors"
              >
                <ChevronLeft size={18} />
                {t("PAGINA PRECEDENTE", "GO BACK")}
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
