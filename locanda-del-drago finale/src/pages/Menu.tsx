import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { menuData } from '../data/menuData';
import { cn } from '../lib/utils';
import { Info, X, Maximize2 } from 'lucide-react';

export default function Menu() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const navGroups = [
    { id: "group-antipasti", title: t("Antipasti", "Appetizers"), ids: ["antipasti-rustici", "antipasti-pesce", "fritti"] },
    { id: "group-primi", title: t("Primi", "First Courses"), ids: ["primi-rustici", "primi-pesce"] },
    { id: "group-secondi", title: t("Secondi", "Main Courses"), ids: ["secondi-carne", "secondi-pesce"] },
    { id: "group-contorni", title: t("Contorni", "Side Dishes"), ids: ["contorni"] },
    { 
      id: "group-pizze",
      title: t("Pizze", "Pizzas"), 
      ids: ["pizze-classiche", "pizze-locanda", "pizze-bordo-ripieno", "pizze-pistacchio", "pizze-bianche", "pizze-rosse", "schiacciate", "aggiunzioni-pizze"] 
    },
    { id: "group-vini", title: t("Vini", "Wines"), ids: ["vini"] },
    { id: "group-birre", title: t("Birre", "Beers"), ids: ["birre"] },
    { id: "group-bibite", title: t("Bibite", "Drinks"), ids: ["bibite"] }
  ];

  // Handle scroll to update active category
  useEffect(() => {
    const handleScroll = () => {
      // Increased offset so the category changes while the next section is starting to appear
      const scrollPosition = window.scrollY + 350; 

      for (const category of menuData) {
        const element = categoryRefs.current[category.id];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeCategory !== category.id) {
              setActiveCategory(category.id);
              
              // Scroll mobile nav to active group
              if (mobileNavRef.current) {
                const activeGroup = navGroups.find(g => g.ids.includes(category.id));
                if (activeGroup) {
                  const activeBtn = mobileNavRef.current.querySelector(`[data-group="${activeGroup.id}"]`) as HTMLElement;
                  if (activeBtn) {
                    const containerWidth = mobileNavRef.current.clientWidth;
                    const btnLeft = activeBtn.offsetLeft;
                    const btnWidth = activeBtn.clientWidth;
                    
                    mobileNavRef.current.scrollTo({
                      left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
                      behavior: 'smooth'
                    });
                  }
                }
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  const scrollToCategory = (id: string) => {
    const element = categoryRefs.current[id];
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 180 : 120; // Larger offset for mobile to account for the sticky category bar
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const openLightbox = (url: string, title: string) => {
    setSelectedImage({ url, title });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-crema">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-cinzel text-bordeaux mb-4">
              {t("Il Nostro Menù", "Our Menu")}
            </h1>
            <div className="w-24 h-1 bg-oro mx-auto mb-6" />
            <p className="text-lg text-scuro/80 max-w-2xl mx-auto italic">
              {t("Scopri le nostre specialità, preparate con ingredienti freschi e passione.", "Discover our specialties, prepared with fresh ingredients and passion.")}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Mobile Category Navigation (Sticky Top) */}
            <div className="lg:hidden sticky top-[80px] z-40 bg-crema/95 backdrop-blur-md py-4 -mx-4 px-4 border-b border-oro/20 shadow-sm">
              <div ref={mobileNavRef} className="flex overflow-x-auto gap-3 no-scrollbar pb-2 scroll-smooth">
                {navGroups.map((group) => (
                  <button
                    key={`mobile-${group.id}`}
                    data-group={group.id}
                    onClick={() => scrollToCategory(group.ids[0])}
                    className={cn(
                      "whitespace-nowrap px-6 py-3 rounded-full font-cinzel text-base font-bold transition-all duration-300 border-2",
                      group.ids.includes(activeCategory)
                        ? "bg-bordeaux text-white border-bordeaux"
                        : "bg-transparent text-scuro border-scuro/20 hover:border-oro"
                    )}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Sidebar Navigation (Sticky Left) */}
            <div className="hidden lg:block w-1/4 shrink-0">
              <div className="sticky top-32 bg-white rounded-xl shadow-lg border border-oro/20 p-4">
                <h3 className="font-cinzel text-xl text-bordeaux mb-4 border-b border-oro/30 pb-2">
                  {t("Categorie", "Categories")}
                </h3>
                <ul className="space-y-1">
                  {navGroups.map((group) => (
                    <li key={`desktop-${group.id}`}>
                      <button
                        onClick={() => scrollToCategory(group.ids[0])}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-lg font-cinzel transition-all duration-300 uppercase tracking-wider text-sm",
                          group.ids.includes(activeCategory)
                            ? "bg-bordeaux text-white font-bold shadow-md transform scale-105"
                            : "text-scuro/70 hover:bg-crema hover:text-bordeaux"
                        )}
                      >
                        {group.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Content */}
            <div className="w-full lg:w-3/4 space-y-16">
              {menuData.map((category) => (
                <motion.div
                  key={category.id}
                  ref={(el) => (categoryRefs.current[category.id] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="scroll-mt-48 lg:scroll-mt-32"
                >
                  <h2 className="text-3xl md:text-4xl font-cinzel text-bordeaux mb-8 pb-2 border-b-2 border-oro/30 inline-block">
                    {category.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col border-b border-scuro/10 pb-4">
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-lg font-bold text-scuro pr-4">{item.name}</h3>
                          <span className="font-cinzel text-lg text-bordeaux font-bold whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-scuro/70 italic leading-relaxed mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.image && (
                          <div 
                            className="mt-2 relative w-24 h-16 rounded-md overflow-hidden cursor-pointer group border border-oro/30 shadow-sm"
                            onClick={() => openLightbox(item.image!, item.name)}
                          >
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-scuro/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Maximize2 size={16} className="text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Allergens Info Box */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 bg-white p-6 md:p-8 rounded-xl border border-oro/30 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <Info className="text-oro shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-cinzel text-xl text-bordeaux font-bold mb-2">
                      {t("Informazioni sulle Allergie", "Allergy Information")}
                    </h3>
                    <p className="text-scuro/80 text-sm md:text-base">
                      {t(
                        "Se si ha un'allergia si prega di comunicarlo al personale di sala al momento dell'ordine. Cereali contenenti glutine, crostacei, molluschi, pesce, uova, arachidi, soia, latte e lattosio, frutta a guscio, sedano, semi di sesamo, anidride solforosa, aglio, cipolla, prezzemolo, basilico.",
                        "If you have an allergy, please inform the dining room staff when ordering. Cereals containing gluten, crustaceans, molluscs, fish, eggs, peanuts, soy, milk and lactose, nuts, celery, sesame seeds, sulfur dioxide, garlic, onion, parsley, basil."
                      )}
                    </p>
                    <p className="text-scuro/60 text-xs mt-4 italic">
                      * Indica prodotto surgelato / * Indicates frozen product
                    </p>
                    <p className="text-scuro/60 text-xs mt-1 italic">
                      Coperto / Cover charge: € 1,50
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-scuro/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-oro transition-colors z-[110]"
              onClick={closeLightbox}
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
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border-4 border-white/10 rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-cinzel text-2xl tracking-widest uppercase">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
