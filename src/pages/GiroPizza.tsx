import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ShareButton } from '../components/ShareButton';
import { Check, Info, Pizza, Coffee, Utensils, Droplets, Soup, Apple } from 'lucide-react';

export default function GiroPizza() {
  const { t } = useLanguage();

  const menuLeggero = {
    name: t("Giro Pizza Leggero", "Light Pizza Party"),
    price: t("15 euro a persona", "15 euro per person"),
    antipasti: [
      t("Focaccina con milza", "Small focaccia with spleen"),
      t("Focaccina con ricotta", "Small focaccia with ricotta cheese"),
      t("Bruschetta al pomodoro", "Tomato bruschetta"),
      t("Misto fritto (patatine, verdure in pastella, anelli di cipolla, panelle e crocchè)", "Mixed fried food (french fries, battered vegetables, onion rings, chickpea fritters and potato croquettes)"),
      t("Sfincionello", "Small sfincione (Sicilian thick crust pizza)")
    ],
    drinks: [
      t("Acqua", "Water"),
      t("Coca cola (1 ogni 4 persone)", "Coca cola (1 every 4 people)"),
      t("Birra (1 ogni 3 persone)", "Beer (1 every 3 people)")
    ]
  };

  const menuCompleto = {
    name: t("Giro Pizza Completo", "Complete Pizza Party"),
    price: t("18 euro a persona", "18 euro per person"),
    antipasti: [
      t("Focaccina con milza", "Small focaccia with spleen"),
      t("Focaccina con ricotta", "Small focaccia with ricotta cheese"),
      t("Bruschetta al pomodoro", "Tomato bruschetta"),
      t("Misto fritto (patatine, verdure in pastella, anelli di cipolla, panelle e crocchè)", "Mixed fried food (french fries, battered vegetables, onion rings, chickpea fritters and potato croquettes)"),
      t("Sfincionello", "Small sfincione (Sicilian thick crust pizza)"),
      t("Caponata", "Caponata (Sicilian eggplant stew)"),
      t("Insalata di musso e carcagnolo", "Muso and carcagnolo salad (traditional Sicilian meat salad)")
    ],
    drinks: [
      t("Acqua", "Water"),
      t("Coca cola (1 ogni 4 persone)", "Coca cola (1 every 4 people)"),
      t("Birra (1 ogni 3 persone)", "Beer (1 every 3 people)")
    ],
    note: t("Per poter scegliere questo menù occorre un preavviso", "Advance notice is required to choose this menu")
  };

  const menuPasta = {
    name: t("Giro Pizza con Pasta", "Pizza Party with Pasta"),
    price: t("22 euro a persona", "22 euro per person"),
    antipasti: [
      t("Focaccina con milza", "Small focaccia with spleen"),
      t("Focaccina con ricotta", "Small focaccia with ricotta cheese"),
      t("Bruschetta al pomodoro", "Tomato bruschetta"),
      t("Misto fritto (patatine, verdure in pastella, anelli di cipolla, panelle e crocchè)", "Mixed fried food (french fries, battered vegetables, onion rings, chickpea fritters and potato croquettes)"),
      t("Sfincionello", "Small sfincione (Sicilian thick crust pizza)"),
      t("Caponata", "Caponata (Sicilian eggplant stew)"),
      t("Insalata di musso e carcagnolo", "Muso and carcagnolo salad (traditional Sicilian meat salad)")
    ],
    primi: [
      t("Busiate al pistacchio", "Busiate pasta with pistachio"),
      t("Trofie al ragù di cinghiale", "Trofie with wild boar ragù")
    ],
    drinks: [
      t("Acqua", "Water"),
      t("Coca cola (1 ogni 4 persone)", "Coca cola (1 every 4 people)"),
      t("Birra (1 ogni 3 persone)", "Beer (1 every 3 people)")
    ],
    note: t("Per poter scegliere questo menù occorre un preavviso", "Advance notice is required to choose this menu")
  };

  const pizzas = [
    "Biancaneve", "Ortolana", "Boscaiola", "Parmigiana", "Calabrese", "Patatosa",
    "Campagnola", "Pugliese", "Capricciosa", "Quattro formaggi", "Diavola", "Quattro gusti",
    "Fontana", "Romana", "Friarielli", "Rosita", "Garofalo", "San Daniele",
    "Margherita", "Siciliana", "Marinara", "Tonnara", "Napoli", "Trevisana"
  ];

  const rules = [
    t("Il numero minimo di coperti è 10", "The minimum number of guests is 10"),
    t("Per il primo giro di pizze si considera mezza pizza ciascuno", "For the first round of pizzas, half a pizza per person is considered"),
    t("Saranno portate altre pizze se i piatti sono vuoti", "More pizzas will be brought if the plates are empty"),
    t("Il numero massimo di pizze incluso nel prezzo coincide con il numero dei coperti (se i piatti sono vuoti)", "The maximum number of pizzas included in the price coincides with the number of guests (if the plates are empty)"),
    t("Sono escluse pizze con bufala, con impasti particolari, pesto e granella di pistacchio (possono comunque essere acquistate a parte come le bibite extra)", "Pizzas with buffalo mozzarella, special doughs, pesto, and chopped pistachios are excluded (they can still be purchased separately like extra drinks)")
  ];

  return (
    <div className="min-h-screen flex flex-col bg-crema">
      <SEO 
        title={t("Giro Pizza", "Pizza Party")}
        description={t(
          "Un'esperienza conviviale di gruppo con la nostra formula Giro Pizza. Assaggia tutte le nostre pizze cotte nel forno a legna in un'atmosfera unica.",
          "A convivial group experience with our Pizza Party formula. Taste all our wood-fired pizzas in a unique atmosphere."
        )}
        image="/images/forno-1.webp"
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-cinzel text-bordeaux mb-4">
              {t("Giro Pizza", "Pizza Party")}
            </h1>
            <div className="w-24 h-1 bg-oro mx-auto mb-6" />
            <p className="text-lg text-scuro/80 max-w-2xl mx-auto italic">
              {t("Un'esperienza conviviale di gruppo dove la pizza è la vera protagonista.", "A convivial experience for groups, where pizza is the true protagonist.")}
            </p>
          </motion.div>

          <div className="flex justify-center">
            <ShareButton />
          </div>

          {/* Menus Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Menu Leggero */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-bordeaux flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-xl font-cinzel text-bordeaux font-bold leading-tight">{menuLeggero.name}</h2>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Utensils size={14} className="text-oro" />
                    {t("Antipasti (centrotavola)", "Appetizers (family-style dining)")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuLeggero.antipasti.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-3 border-y border-oro/10 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-1">
                    <Pizza size={14} className="text-oro" />
                    {t("Le Pizze (CentroTavola)", "The Pizzas (family-style dining)")}
                  </h3>
                  <p className="text-sm text-scuro mb-1 italic">{t("Pizze a scelta", "Pizzas of your choice")}</p>
                  <a 
                    href="#pizze-incluse" 
                    className="text-[10px] text-oro hover:text-bordeaux transition-colors underline underline-offset-2"
                  >
                    {t("Vedi pizze incluse", "See included pizzas")}
                  </a>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Droplets size={14} className="text-oro" />
                    {t("Bevande", "Drinks")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuLeggero.drinks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-oro/20 text-center">
                <span className="text-2xl font-cinzel text-oro font-bold">{menuLeggero.price}</span>
              </div>
            </motion.div>

            {/* Menu Completo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-oro flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-xl font-cinzel text-bordeaux font-bold leading-tight">{menuCompleto.name}</h2>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Utensils size={14} className="text-oro" />
                    {t("Antipasti (centrotavola)", "Appetizers (family-style dining)")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuCompleto.antipasti.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-3 border-y border-oro/10 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-1">
                    <Pizza size={14} className="text-oro" />
                    {t("Le Pizze (CentroTavola)", "The Pizzas (family-style dining)")}
                  </h3>
                  <p className="text-sm text-scuro mb-1 italic">{t("Pizze a scelta", "Pizzas of your choice")}</p>
                  <a 
                    href="#pizze-incluse" 
                    className="text-[10px] text-oro hover:text-bordeaux transition-colors underline underline-offset-2"
                  >
                    {t("Vedi pizze incluse", "See included pizzas")}
                  </a>
                </div>

                <div className="py-3 border-b border-oro/10 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-1">
                    <Apple size={14} className="text-oro" />
                    {t("Frutta di stagione (centrotavola)", "Seasonal Fruit (family-style dining)")}
                  </h3>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Droplets size={14} className="text-oro" />
                    {t("Bevande", "Drinks")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuCompleto.drinks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[10px] text-bordeaux font-bold italic mt-4">
                  * {menuCompleto.note}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-oro/20 text-center">
                <span className="text-2xl font-cinzel text-oro font-bold">{menuCompleto.price}</span>
              </div>
            </motion.div>

            {/* Menu Pasta */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-bordeaux flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-xl font-cinzel text-bordeaux font-bold leading-tight">{menuPasta.name}</h2>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Utensils size={14} className="text-oro" />
                    {t("Antipasti (centrotavola)", "Appetizers (family-style dining)")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuPasta.antipasti.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-3 border-y border-oro/10">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Soup size={14} className="text-oro" />
                    {t("I Primi (CentroTavola)", "First Courses (family-style dining)")}
                  </h3>
                  <ul className="space-y-1 text-center italic text-sm text-scuro">
                    {menuPasta.primi.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="py-3 border-b border-oro/10 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-1">
                    <Pizza size={14} className="text-oro" />
                    {t("Le Pizze (CentroTavola)", "The Pizzas (family-style dining)")}
                  </h3>
                  <p className="text-sm text-scuro mb-1 italic">{t("Pizze a scelta", "Pizzas of your choice")}</p>
                  <a 
                    href="#pizze-incluse" 
                    className="text-[10px] text-oro hover:text-bordeaux transition-colors underline underline-offset-2"
                  >
                    {t("Vedi pizze incluse", "See included pizzas")}
                  </a>
                </div>

                <div className="py-3 border-b border-oro/10 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-bordeaux font-bold uppercase tracking-wider text-[10px] mb-1">
                    <Apple size={14} className="text-oro" />
                    {t("Frutta di stagione (centrotavola)", "Seasonal Fruit (family-style dining)")}
                  </h3>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-scuro font-bold uppercase tracking-wider text-[10px] mb-3">
                    <Droplets size={14} className="text-oro" />
                    {t("Bevande", "Drinks")}
                  </h3>
                  <ul className="space-y-2 text-sm text-scuro/70">
                    {menuPasta.drinks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-oro mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[10px] text-bordeaux font-bold italic mt-4">
                  * {menuPasta.note}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-oro/20 text-center">
                <span className="text-2xl font-cinzel text-oro font-bold">{menuPasta.price}</span>
              </div>
            </motion.div>
          </div>

          {/* Menu Baby */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-bordeaux text-white p-8 rounded-xl shadow-xl mb-16 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-cinzel font-bold mb-2">{t("Menù Baby", "Baby Menu")}</h2>
              <p className="opacity-80 italic">
                {t("(patatine + mini pizza a scelta tra margherita, romana, patatosa o simili)", "(fries + mini pizza choice of margherita, romana, patatosa or similar)")}
              </p>
            </div>
            <div className="mt-4 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-white/20 w-full md:w-auto text-center">
              <span className="text-4xl font-cinzel font-bold">{t("10 euro", "10 euro")}</span>
            </div>
          </motion.div>

          {/* Pizzas List */}
          <motion.div 
            id="pizze-incluse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-xl shadow-xl mb-16 scroll-mt-32"
          >
            <h2 className="text-3xl font-cinzel text-bordeaux mb-8 text-center flex items-center justify-center gap-3">
              <Pizza className="text-oro" />
              {t("Pizze incluse nel menù", "Pizzas included in the menu")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pizzas.map((pizza, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-scuro/80 hover:text-bordeaux transition-colors">
                  <div className="w-1.5 h-1.5 bg-oro rounded-full" />
                  {pizza}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rules & Extras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-scuro text-white p-8 rounded-xl shadow-xl"
            >
              <h2 className="text-2xl font-cinzel text-oro mb-6 flex items-center gap-2">
                <Info size={20} />
                {t("Regole Giro Pizza", "Pizza Party Rules")}
              </h2>
              <ul className="space-y-4 text-sm opacity-80">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-oro font-bold">{i + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-oro"
            >
              <h2 className="text-2xl font-cinzel text-bordeaux mb-6">{t("Supplementi e Note", "Supplements and Notes")}</h2>
              <div className="space-y-4 text-sm text-scuro/80">
                <div className="flex justify-between items-center border-b border-oro/10 pb-2">
                  <span>{t("Supplemento senza glutine", "Gluten-free supplement")}</span>
                  <span className="font-bold text-bordeaux">{t("+3 euro", "+3 euro")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-oro/10 pb-2">
                  <span>{t("Servizio torta (20+ persone)", "Cake service (20+ people)")}</span>
                  <span className="font-bold text-bordeaux">{t("0,50 euro / pers.", "0.50 euro / pers.")}</span>
                </div>
                <div className="flex items-center gap-2 text-bordeaux font-bold pt-2">
                  <Coffee size={16} />
                  <span>{t("Caffè e amari NON sono inclusi", "Coffee and bitters are NOT included")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
