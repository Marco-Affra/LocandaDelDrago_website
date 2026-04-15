export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  // COME AGGIUNGERE UN'IMMAGINE:
  // Per aggiungere un'immagine a un piatto, basta inserire la proprietà 'image'
  // con l'URL dell'immagine (es. image: "/assets/piatti/nome-piatto.jpg" oppure un link web)
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const getMenuData = (t: (it: string, en: string) => string): MenuCategory[] => [
  {
    id: "antipasti-rustici",
    title: t("Antipasti Rustici", "Rustic Appetizers"),
    items: [
      { name: t("Bruschette al Pomodoro (4 pz)", "Tomato Bruschette (4 pcs)"), price: "4,00" , image: "foto-menu/bruschpom.webp"},
      { name: t("Focaccine con Milza (4 pz)", "Small Focaccia with Spleen (4 pcs)"), price: "4,00", image: "foto-menu/focamilz.webp" },
      { name: t("Focaccine con Ricotta (4 pz)", "Small Focaccia with Ricotta (4 pcs)"), price: "4,00", image: "foto-menu/focaric.webp" },
      { name: t("Focaccine con Porchetta (4 pz)", "Small Focaccia with Porchetta (4 pcs)"), price: "5,00" },
      { name: t("Quadrifoglio di focaccine (4 pz)", "Four-leaf clover of small focaccias (4 pcs)"), description: t("4 Focaccine: 1 milza, 1 ricotta, 1 porchetta e 1 panelle e crocchè", "4 Small Focaccias: 1 spleen, 1 ricotta, 1 porchetta and 1 chickpea fritters & potato croquettes"), price: "4,50", image: "foto-menu/quadrifoglio.webp"  },
      { name: t("Involtini Speck e Bufala (4 pz)", "Speck and Buffalo Mozzarella Rolls (4 pcs)"), price: "6,00" },
      { name: t("Caponata di Melanzane", "Eggplant Caponata"), description: t("Melanzane, capperi, sedano e concentrato di pomodoro", "Eggplants, capers, celery and tomato paste"), price: "6,00" },
    ]
  },
  {
    id: "antipasti-pesce",
    title: t("Antipasti di Pesce", "Seafood Appetizers"),
    items: [
      { name: t("Salmone, stracciatella di bufala e pistacchio", "Salmon, buffalo stracciatella and pistachio"), description: t("Salmone affumicato su letto di rucola con stracciatella di bufala e crema al pistacchio", "Smoked salmon on a bed of arugula with buffalo stracciatella and pistachio cream"), price: "12,00" },
      { name: t("Caponata di Pesce spada", "Swordfish Caponata"), price: "10,00" },
      { name: t("Cocktail di Gamberi*", "Shrimp Cocktail*"), price: "10,00" },
      { name: t("Tris affumicati di pesce", "Smoked Fish Trio"), description: t("Pesce spada, salmone e tonno affumicati", "Smoked swordfish, salmon and tuna"), price: "12,00" },
    ]
  },
  {
    id: "fritti",
    title: t("Fritti", "Fried Food"),
    items: [
      { name: t("Patatine fritte*", "French fries*"), price: "3,00" },
      // ESEMPIO DI IMMAGINE:
      // Per aggiungere un'immagine a qualsiasi altro piatto, copia la sintassi qui sotto
      // aggiungendo `, image: "URL_DELL_IMMAGINE"` alla fine dell'oggetto del piatto. esempio: aggiungi alla fine -> " , image: "https://picsum.photos/seed/mistofritto/800/600" "
      { name: t("Misto fritto x2", "Mixed fried food x2"), description: t("Patatine*, panelle, crocchè, anelli di cipolla* e verdure pastellate", "Fries*, chickpea fritters, potato croquettes, onion rings* and battered vegetables"), price: "4,00"},
      { name: t("Anelli di cipolla*", "Onion rings*"), price: "4,00" },
      { name: t("Verdure pastellate", "Battered vegetables"), price: "4,00" },
      { name: t("Mozzarelline stick*", "Mozzarella sticks*"), price: "5,00" },
      { name: t("Olive Ascolane*", "Ascolana Olives*"), price: "5,00" }
    ]
  },
  {
    id: "primi-rustici",
    title: t("Primi Rustici", "Rustic First Courses"),
    items: [
      { name: t("Busiate al pistacchio", "Busiate with pistachio"), description: t("Olio d'aglio, radicchio, pomodorini, speck, pesto di pistacchio, panna e prezzemolo", "Garlic oil, radicchio, cherry tomatoes, speck, pistachio pesto, cream and parsley"), price: "12,00" },
      { name: t("Maccheroni con salsiccia, zucchina fritta alla palermitana e scaglie di ricotta salata", "Macaroni with sausage, Palermo-style fried zucchini and salted ricotta flakes"), description: t("Olio d'aglio, salsiccia, zucchine, ricotta salata, prezzemolo", "Garlic oil, sausage, zucchini, salted ricotta, parsley"), price: "12,00" },
      { name: t("Tagliatelle con Ragù di cinghiale", "Tagliatelle with Wild Boar Ragù"), description: t("Pasta all'uovo, ragù di cinghiale e prezzemolo", "Egg pasta, wild boar ragù and parsley"), price: "14,00" },
      { name: t("Trofie Pugliesi \"a modo mio\"", "Apulian Trofie \"my way\""), description: t("Olio d'aglio, melanzane, zucchine, datterino giallo e rosso, e pesto di basilico", "Garlic oil, eggplants, zucchini, yellow and red datterino tomatoes, and basil pesto"), price: "12,00" },
    ]
  },
  {
    id: "primi-pesce",
    title: t("Primi di Pesce", "Seafood First Courses"),
    items: [
      { name: t("Busiate Gamberi e Pistacchio", "Busiate with Shrimp and Pistachio"), description: t("Olio d'aglio, gamberi*, pesto di pistacchio, granella di pistacchio e prezzemolo", "Garlic oil, shrimp*, pistachio pesto, chopped pistachios and parsley"), price: "13,00" },
      { name: t("Bavette alle Vongole", "Bavette with Clams"), description: t("Olio d'aglio, Vongole, prezzemolo", "Garlic oil, clams, parsley"), price: "18,00" },
      { name: t("Tagliatelle con Spada, datterino giallo, melanzana fritta e mentuccia", "Tagliatelle with Swordfish, yellow datterino, fried eggplant and mint"), description: t("Olio d'aglio, pasta all'uovo, pescespada*, datterino giallo, melanzane, menta", "Garlic oil, egg pasta, swordfish*, yellow datterino, eggplants, mint"), price: "14,00" },
      { name: t("Ravioli di Cernia in Salsa ai Crostacei e Bottarga", "Grouper Ravioli in Crustacean and Bottarga Sauce"), description: t("Olio d'aglio, salsa di pomodoro, gamberi*, scampi*, bottarga e prezzemolo", "Garlic oil, tomato sauce, shrimp*, scampi*, bottarga and parsley"), price: "18,00" }
    ]
  },
  {
    id: "secondi-carne",
    title: t("Secondi di Carne", "Meat Main Courses"),
    items: [
      { name: t("Straccetti di Vitello con fonduta", "Veal Strips with fondue"), description: t("Trinca di vitello a listarelle su rucola con fonduta al parmigiano", "Veal strips on arugula with parmesan fondue"), price: "13,00" },
      { name: t("Bistecca di Vitello", "Veal Steak"), description: t("Trinca di vitello", "Veal cut"), price: "10,00" },
      { name: t("Tagliata di Vitello", "Sliced Veal"), description: t("Trinca di vitello su rucola con scaglie di Grana", "Veal cut on arugula with Grana flakes"), price: "14,00" },
      { name: t("Tagliata di Black Angus con rucola, pomodorini e pinoli tostati", "Sliced Black Angus with arugula, cherry tomatoes and toasted pine nuts"), price: "18,00" },
    ]
  },
  {
    id: "secondi-pesce",
    title: t("Secondi di Pesce", "Seafood Main Courses"),
    items: [
      { name: t("Filetto di Orata e Gamberone grigliati", "Grilled Sea Bream Fillet and King Prawn"), description: t("Orata* e gamberone* alla griglia", "Grilled sea bream* and king prawn*"), price: "18,00" },
      { name: t("Pescespada* alla griglia", "Grilled Swordfish*"), price: "12,00", image: "foto-menu/spadagrill.webp" },
      { name: t("Gamberone* alla griglia", "Grilled King Prawn*"), price: "13,00" },
      { name: t("Calamaro* alla griglia", "Grilled Squid*"), price: "13,00" }
    ]
  },
  {
    id: "contorni",
    title: t("Contorni", "Side Dishes"),
    items: [
      { name: t("Insalata Verde e Pomodoro", "Green Salad and Tomato"), description: t("Lattuga, pomodoro", "Lettuce, tomato"), price: "3,50" },
      { name: t("Verdure grigliate", "Grilled Vegetables"), description: t("Melanzane, zucchine e radicchio", "Eggplants, zucchini and radicchio"), price: "4,00" },
      { name: t("Insalata mista", "Mixed Salad"), description: t("Lattuga, pomodoro, radicchio, rucola e funghi", "Lettuce, tomato, radicchio, arugula and mushrooms"), price: "4,50" },
      { name: t("Funghi trifolati", "Sautéed Mushrooms"), description: t("Olio d'aglio, funghi freschi", "Garlic oil, fresh mushrooms"), price: "3,00" },
      { name: t("Spinaci all'agro", "Spinach with Lemon"), description: t("Olio d'aglio, spinaci*", "Garlic oil, spinach*"), price: "3,00" }
    ]
  },
  {
    id: "pizze-classiche",
    title: t("Pizze Classiche", "Classic Pizzas"),
    items: [
      { name: t("Marinara", "Marinara"), description: t("Salsa, acciughe, olio d'aglio, origano", "Tomato sauce, anchovies, garlic oil, oregano"), price: "5,50" },
      { name: t("Margherita", "Margherita"), description: t("Salsa, fiordilatte, origano", "Tomato sauce, fiordilatte mozzarella, oregano"), price: "6,00" },
      { name: t("Calzone", "Calzone"), description: t("Salsa, fiordilatte, prosciutto cotto, origano", "Tomato sauce, fiordilatte mozzarella, cooked ham, oregano"), price: "6,50" },
      { name: t("Diavola", "Diavola"), description: t("Salsa, fiordilatte, salame piccante, origano", "Tomato sauce, fiordilatte mozzarella, spicy salami, oregano"), price: "6,50" },
      { name: t("Napoli", "Napoli"), description: t("Salsa, fiordilatte, acciughe, origano", "Tomato sauce, fiordilatte mozzarella, anchovies, oregano"), price: "6,50" },
      { name: t("Romana", "Romana"), description: t("Salsa, fiordilatte, prosciutto cotto, origano", "Tomato sauce, fiordilatte mozzarella, cooked ham, oregano"), price: "6,50" },
      { name: t("Quattro Gusti", "Four Tastes"), description: t("Salsa, fiordilatte, prosciutto cotto, carciofi, origano", "Tomato sauce, fiordilatte mozzarella, cooked ham, artichokes, oregano"), price: "7,00" },
      { name: t("Patatosa", "Patatosa"), description: t("Salsa, fiordilatte, patatine fritte*, wurstel, origano", "Tomato sauce, fiordilatte mozzarella, french fries*, wurstel, oregano"), price: "7,00" },
      { name: t("Tonnara", "Tonnara"), description: t("Salsa, fiordilatte, tonno, origano", "Tomato sauce, fiordilatte mozzarella, tuna, oregano"), price: "7,00" },
      { name: t("Campagnola", "Campagnola"), description: t("Salsa, pomodoro a fette, cacio a pezzi, acciughe, cipolla, mollica, origano", "Tomato sauce, sliced tomato, cheese pieces, anchovies, onion, breadcrumbs, oregano"), price: "7,50" },
      { name: t("Quattro Formaggi", "Four Cheeses"), description: t("Fiordilatte, cacio a pezzi, gorgonzola, emmenthal, origano", "Fiordilatte mozzarella, cheese pieces, gorgonzola, emmenthal, oregano"), price: "7,50" },
      { name: t("Capricciosa", "Capricciosa"), description: t("Salsa, fiordilatte, prosciutto cotto, carciofi, funghi, olive, wurstel, origano", "Tomato sauce, fiordilatte mozzarella, cooked ham, artichokes, mushrooms, olives, wurstel, oregano"), price: "8,00" },
      { name: t("Parmigiana", "Parmigiana"), description: t("Salsa, fiordilatte, melanzane fritte, scaglie di grana, origano", "Tomato sauce, fiordilatte mozzarella, fried eggplants, grana flakes, oregano"), price: "8,00" },
      { name: t("San Daniele", "San Daniele"), description: t("Salsa, fiordilatte, prosciutto crudo, origano", "Tomato sauce, fiordilatte mozzarella, parma ham, oregano"), price: "8,00" },
    ]
  },
  {
    id: "pizze-locanda",
    title: t("Pizze Locanda", "Locanda Pizzas"),
    items: [
      { name: t("Calabrese", "Calabrese"), description: t("Salsa, fiordilatte, cacio a pezzi, peperoni, mollica, origano", "Tomato sauce, fiordilatte mozzarella, cheese pieces, peppers, breadcrumbs, oregano"), price: "7,50" },
      { name: t("Siciliana", "Siciliana"), description: t("Salsa, fiordilatte, melanzane fritte, ricotta fresca, origano", "Tomato sauce, fiordilatte mozzarella, fried eggplants, fresh ricotta, oregano"), price: "7,50" },
      { name: t("Garofalo", "Garofalo"), description: t("Salsa, fiordilatte, pom. bruschetta (con aglio), scaglie di grana, origano", "Tomato sauce, fiordilatte mozzarella, bruschetta tomatoes (with garlic), grana flakes, oregano"), price: "8,00" },
      { name: t("Friarielli", "Friarielli"), description: t("Salsa, fiordilatte, friarielli, salsiccia, gorgonzola, origano", "Tomato sauce, fiordilatte mozzarella, friarielli (broccoli rabe), sausage, gorgonzola, oregano"), price: "8,50" },
      { name: t("Pugliese", "Pugliese"), description: t("Salsa, fiordilatte, prosciutto cotto, funghi, cipolla, salsiccia, gorgonzola, origano", "Tomato sauce, fiordilatte mozzarella, cooked ham, mushrooms, onion, sausage, gorgonzola, oregano"), price: "8,50" },
      { name: t("Rosita", "Rosita"), description: t("Salsa, fiordilatte, prosciutto crudo, mascarpone, origano", "Tomato sauce, fiordilatte mozzarella, parma ham, mascarpone, oregano"), price: "8,50" },
      { name: t("Trevisana", "Trevisana"), description: t("Salsa, fiordilatte, radicchio, gorgonzola, speck, origano", "Tomato sauce, fiordilatte mozzarella, radicchio, gorgonzola, speck, oregano"), price: "8,50" },
      { name: t("San Martino", "San Martino"), description: t("Salsa, fiordilatte, mascarpone, funghi trifolati, bacon, origano", "Tomato sauce, fiordilatte mozzarella, mascarpone, sautéed mushrooms, bacon, oregano"), price: "9,00" },
      { name: t("Golosa", "Golosa"), description: t("Salsa, fiordilatte, salame piccante, prosciutto cotto, carciofi, funghi, salsiccia, cacio a pezzi, bufala, origano", "Tomato sauce, fiordilatte mozzarella, spicy salami, cooked ham, artichokes, mushrooms, sausage, cheese pieces, buffalo mozzarella, oregano"), price: "9,50" },
      { name: t("Pizza del drago", "Dragon's Pizza"), description: t("Salsa, fiordilatte, bacon, salame piccante, cipolla, mascarpone, peperoncino, origano", "Tomato sauce, fiordilatte mozzarella, bacon, spicy salami, onion, mascarpone, chili pepper, oregano"), price: "9,50" },
      { name: t("Bresaola", "Bresaola"), description: t("Salsa, fiordilatte, bresaola, rucola, scaglie di grana, origano", "Tomato sauce, fiordilatte mozzarella, bresaola, arugula, grana flakes, oregano"), price: "10,50" },
      { name: t("Favara", "Favara"), description: t("Salsa, fiordilatte, bufala, funghi, speck, scaglie di grana, origano", "Tomato sauce, fiordilatte mozzarella, buffalo mozzarella, mushrooms, speck, grana flakes, oregano"), price: "12,00" },
    ]
  },
  {
    id: "pizze-bordo-ripieno",
    title: t("Pizze con Bordo Ripieno", "Stuffed Crust Pizzas"),
    items: [
      { name: t("Margherita con Bordo", "Margherita with Stuffed Crust"), description: t("Salsa, fiordilatte, origano, bordo ripieno di fiordilatte", "Tomato sauce, fiordilatte mozzarella, oregano, crust stuffed with fiordilatte"), price: "7,50" },
      { name: t("Ricottosa", "Ricottosa"), description: t("Salsa, fiordilatte, pomodorini, origano, bordo ripieno di ricotta", "Tomato sauce, fiordilatte mozzarella, cherry tomatoes, oregano, crust stuffed with ricotta"), price: "8,50" },
      { name: t("Lussuriosa", "Lussuriosa"), description: t("Salsa, fiordilatte, salsiccia, origano, bordo ripieno di ricotta e spinaci*", "Tomato sauce, fiordilatte mozzarella, sausage, oregano, crust stuffed with ricotta and spinach*"), price: "8,50" },
      { name: t("Provenzale", "Provenzale"), description: t("Salsa, fiordilatte, funghi, melanzane fritte, origano, bordo ripieno di fiordilatte e prosiutto cotto", "Tomato sauce, fiordilatte mozzarella, mushrooms, fried eggplants, oregano, crust stuffed with fiordilatte and cooked ham"), price: "9,00" },
      { name: t("Delizia", "Delizia"), description: t("Salsa, fiordilatte, melanzane fritte, scaglie di grana, origano, bordo ripieno di ricotta e salsiccia", "Tomato sauce, fiordilatte mozzarella, fried eggplants, grana flakes, oregano, crust stuffed with ricotta and sausage"), price: "10,00" },
    ]
  },
  {
    id: "pizze-pistacchio",
    title: t("Pizze al Pistacchio", "Pistachio Pizzas"),
    items: [
      { name: t("Etna", "Etna"), description: t("Bufala, pesto di pistacchio, bacon, scamorza affumicata, origano", "Buffalo mozzarella, pistachio pesto, bacon, smoked scamorza, oregano"), price: "11,00" },
      { name: t("Pistacchiosa", "Pistacchiosa"), description: t("Fiordilatte, bufala, pesto di pistacchio, mortadella, granella di pistacchio, origano", "Fiordilatte mozzarella, buffalo mozzarella, pistachio pesto, mortadella, chopped pistachios, oregano"), price: "12,00" },
      { name: t("Norvegese", "Norwegian"), description: t("Fiordilatte, bufala, salmone affumicato in uscita, granella di pistacchio, origano", "Fiordilatte mozzarella, buffalo mozzarella, smoked salmon added after baking, chopped pistachios, oregano"), price: "12,00" },
    ]
  },
  {
    id: "pizze-bianche",
    title: t("Pizze Bianche", "White Pizzas"),
    items: [
      { name: t("Biancaneve", "Biancaneve"), description: t("Fiordilatte, origano", "Fiordilatte mozzarella, oregano"), price: "5,50" },
      { name: t("Fontana", "Fontana"), description: t("Fiordilatte, mascarpone, salsiccia, spinaci*, origano", "Fiordilatte mozzarella, mascarpone, sausage, spinach*, oregano"), price: "7,50" },
      { name: t("Tirolese", "Tirolese"), description: t("Bufala, pomodorini, speck, origano", "Buffalo mozzarella, cherry tomatoes, speck, oregano"), price: "9,00" },
      { name: t("Contadina", "Contadina"), description: t("Bufala, zucchine alla griglia, melanzane alla griglia, funghi, friarielli, origano", "Buffalo mozzarella, grilled zucchini, grilled eggplants, mushrooms, friarielli (broccoli rabe), oregano"), price: "9,50" },
      { name: t("Brisa", "Brisa"), description: t("Bufala, funghi porcini, scaglie di grana, origano", "Buffalo mozzarella, porcini mushrooms, grana flakes, oregano"), price: "9,50" },
      { name: t("Bufalina", "Bufalina"), description: t("Bufala, prosciutto crudo, scaglie di grana, origano", "Buffalo mozzarella, parma ham, grana flakes, oregano"), price: "9,50" },
    ]
  },
  {
    id: "pizze-rosse",
    title: t("Pizze Rosse", "Red Pizzas"),
    items: [
      { name: t("Boscaiola", "Boscaiola"), description: t("Salsa, salsiccia, funghi, pomodorini, rucola, origano", "Tomato sauce, sausage, mushrooms, cherry tomatoes, arugula, oregano"), price: "7,50" },
      { name: t("Ortolana", "Ortolana"), description: t("Salsa, pomodoro a fette, funghi, carciofi, melanzane fritte, peperoni, rucola, origano", "Tomato sauce, sliced tomato, mushrooms, artichokes, fried eggplants, peppers, arugula, oregano"), price: "8,00" },
    ]
  },
  {
    id: "schiacciate",
    title: t("Schiacciate", "Schiacciate (Stuffed Flatbreads)"),
    items: [
      { name: t("Schiacciata Siciliana", "Sicilian Schiacciata"), description: t("Pomodoro a fette, cipolla, acciughe, cacio a pezzi, mollica, origano", "Sliced tomato, onion, anchovies, cheese pieces, breadcrumbs, oregano"), price: "7,50" },
      { name: t("Panino Greco", "Greek Sandwich"), description: t("salsa, fiordilatte, prosciutto cotto, melanzane fritte, gorgonzola, cacio grattugiato, origano", "tomato sauce, fiordilatte mozzarella, cooked ham, fried eggplants, gorgonzola, grated cheese, oregano"), price: "8,00" },
      { name: t("Schiacciata Classica", "Classic Schiacciata"), description: t("Fiordilatte, prosciutto cotto, funghi, melanzane fritte, pomodoro a fette, salame piccante, cacio grattugiato, origano", "Fiordilatte mozzarella, cooked ham, mushrooms, fried eggplants, sliced tomato, spicy salami, grated cheese, oregano"), price: "8,50" },
    ]
  },
  {
    id: "aggiunzioni-pizze",
    title: t("Aggiunzioni per Pizze", "Pizza Additions"),
    items: [
      { name: t("Caciocavallo a pezzi o grattuggiato", "Caciocavallo cheese pieces or grated"), price: "0,50" },
      { name: t("Capperi", "Capers"), price: "0,50" },
      { name: t("Carciofi", "Artichokes"), price: "0,50" },
      { name: t("Emmenthal", "Emmenthal cheese"), price: "0,50" },
      { name: t("Funghi freschi", "Fresh mushrooms"), price: "0,50" },
      { name: t("Melanzane fritte", "Fried eggplants"), price: "0,50" },
      { name: t("Olive", "Olives"), price: "0,50" },
      { name: t("Peperoni", "Peppers"), price: "0,50" },
      { name: t("Pomodoro a fette", "Sliced tomato"), price: "0,50" },
      { name: t("Prosciutto cotto", "Cooked ham"), price: "0,50" },
      { name: t("Radicchio", "Radicchio"), price: "0,50" },
      { name: t("Rucola", "Arugula"), price: "0,50" },
      { name: t("Salsa", "Tomato sauce"), price: "0,50" },
      { name: t("Wurstel", "Wurstel"), price: "0,50" },
      { name: t("Fiordilatte", "Fiordilatte mozzarella"), price: "1,00" },
      { name: t("Salame dolce o piccante", "Sweet or spicy salami"), price: "1,00" },
      { name: t("Patatine", "French fries"), price: "1,00" },
      { name: t("Pomodorini", "Cherry tomatoes"), price: "1,00" },
      { name: t("Tonno", "Tuna"), price: "1,00" },
      { name: t("Scaglie di Grana", "Grana flakes"), price: "1,50" },
      { name: t("Bresaola", "Bresaola"), price: "2,00" },
      { name: t("Bufala", "Buffalo mozzarella"), price: "2,00" },
      { name: t("Funghi porcini", "Porcini mushrooms"), price: "2,00" },
      { name: t("Gamberi*", "Shrimp*"), price: "2,00" },
      { name: t("Mortadella", "Mortadella"), price: "2,00" },
      { name: t("Prosciutto crudo", "Parma ham"), price: "2,00" },
      { name: t("Speck", "Speck"), price: "2,00" },
      { name: t("Salmone", "Salmon"), price: "3,00" },
      { name: t("Supplemento Pizza senza Glutine*", "Gluten-Free Pizza Supplement*"), price: "2,50" },
      { name: t("Supplemento Farina di Tumminia", "Tumminia Flour Supplement"), price: "2,00" }
    ]
  },
  {
    id: "vini",
    title: t("Vini", "Wines"),
    items: [
      { name: t("Ilare Nero d'Avola", "Ilare Nero d'Avola"), description: t("Sicilia Occidentale - Valle del Belice - Gibellina 13,00 % Vol. Vino fine e persistente, dallo spiccato profumo di frutta rossa matura. Secco ed equilibrato, ideale con carni grigliate", "Western Sicily - Belice Valley - Gibellina 13.00% Vol. Fine and persistent wine, with a distinct aroma of ripe red fruit. Dry and balanced, ideal with grilled meats"), price: "9,00" },
      { name: t("Ilare Catarratto Chardonnay", "Ilare Catarratto Chardonnay"), description: t("Sicilia Occidentale - Valle del Belice - Gibellina 12,00 % Vol. Vino fine e persistente con profumo di frutta matura, pera e mela verde. Secco ed equilibrato, è raccomandato con pesce e formaggi freschi", "Western Sicily - Belice Valley - Gibellina 12.00% Vol. Fine and persistent wine with aromas of ripe fruit, pear and green apple. Dry and balanced, recommended with fish and fresh cheeses"), price: "9,00" },
      { name: t("Barone di Montalto Cabernet Sauvignon-Nero d'Avola", "Barone di Montalto Cabernet Sauvignon-Nero d'Avola"), description: t("Sicilia Occidentale - Valle del Belice 13,50 % Vol. Vino rosso intenso con un bouqet di spezie, frutta scura, e tocchi di caramello. Si abbina con formaggi stagionati e carni grigliate", "Western Sicily - Belice Valley 13.50% Vol. Intense red wine with a bouquet of spices, dark fruit, and touches of caramel. Pairs well with aged cheeses and grilled meats"), price: "13,00" },
      { name: t("Barone di Montalto Syrah", "Barone di Montalto Syrah"), description: t("Sicilia Occidentale - Valle del Belice 14,00 % Vol. Vino rosso violaceo intenso con aromi di violetta e ribes arricchiti da liquirizia e pepe nero. Si sposa bene con formaggi, funghi e carni", "Western Sicily - Belice Valley 14.00% Vol. Intense purplish red wine with aromas of violet and currant enriched by licorice and black pepper. Pairs well with cheeses, mushrooms and meats"), price: "16,00" },
      { name: t("Barone di Montalto Grillo", "Barone di Montalto Grillo"), description: t("Sicilia Occidentale - Valle del Belice 12,50 % Vol. Vino bianco dalle intriganti note di cedro, frutti tropicali ed un palato armonico e vellutato. Si abbina bene a pesce, carni bianche, crostacei, verdure grigliate", "Western Sicily - Belice Valley 12.50% Vol. White wine with intriguing notes of cedar, tropical fruits and a harmonious and velvety palate. Pairs well with fish, white meats, crustaceans, grilled vegetables"), price: "14,00" },
      { name: t("Barone di Montalto Cucunci Chardonnay Frizzante", "Barone di Montalto Cucunci Sparkling Chardonnay"), description: t("Sicilia Occidentale - Valle del Belice 11,50 % Vol. Cucunci, la pianta del cappero, è nota per crescere in luoghi con poca acqua. Vino frizzante aromatico con un'acidità fresca e aromi di frutti gialli e mela verde. Ideale come aperitivo, perfetto con antipasti di mare o verdure.", "Western Sicily - Belice Valley 11.50% Vol. Cucunci, the caper plant, is known to grow in places with little water. Aromatic sparkling wine with fresh acidity and aromas of yellow fruits and green apple. Ideal as an aperitif, perfect with seafood appetizers or vegetables."), price: "15,00" },
      { name: t("Spumante Millesimato", "Millesimato Sparkling Wine"), price: "15,00" },
      { name: t("Calice Ilare Nero d'Avola", "Glass of Ilare Nero d'Avola"), price: "4,00" },
      { name: t("Calice Ilare Catarratto Chardonnay", "Glass of Ilare Catarratto Chardonnay"), price: "4,00" },
      { name: t("Calice Barone di Montalto Grillo", "Glass of Barone di Montalto Grillo"), price: "5,00" },
      { name: t("Calice Vino locale", "Glass of Local Wine"), price: "3,00" },
      { name: t("Vino locale ½ L", "Local Wine ½ L"), price: "6,00" },
      { name: t("Vino locale 1 L", "Local Wine 1 L"), price: "10,00" }
    ]
  },
  {
    id: "birre",
    title: t("Birre", "Beers"),
    items: [
      { name: t("Moretti 33 cL", "Moretti 33 cL"), price: "2,00" },
      { name: t("Beck's 33 cL", "Beck's 33 cL"), price: "2,50" },
      { name: t("Ceres 33 cL", "Ceres 33 cL"), price: "3,50" },
      { name: t("Birra analcolica 33 cL", "Non-alcoholic beer 33 cL"), price: "3,50" },
      { name: t("Birra senza glutine 33 cL", "Gluten-free beer 33 cL"), price: "3,50" },
      { name: t("Seme Dorato rossa 33 cL", "Seme Dorato red beer 33 cL"), price: "4,00" },
      { name: t("Moretti 66 cL", "Moretti 66 cL"), price: "3,00" },
      { name: t("Beck's 60 cL", "Beck's 60 cL"), price: "3,50" },
      { name: t("Moretti Baffo d'Oro 66 cL", "Moretti Baffo d'Oro 66 cL"), price: "4,00" },
      { name: t("Birra dello Stretto Premium 66 cL", "Birra dello Stretto Premium 66 cL"), price: "4,50" },
      { name: t("Bionda alla spina 0,20 L", "Draft blonde beer 0.20 L"), price: "3,50" },
      { name: t("Bionda alla spina 0,40 L", "Draft blonde beer 0.40 L"), price: "4,50" },
      { name: t("Artigianale Epica 33 cL", "Epica Craft Beer 33 cL"), description: t("(Tifeo, Polifemo, Hermes, Cerere)", "(Tifeo, Polifemo, Hermes, Cerere)"), price: "5,50" }
    ]
  },
  {
    id: "bibite",
    title: t("Bibite", "Drinks"),
    items: [
      { name: t("Acqua Naturale ½ L", "Still Water ½ L"), price: "1,00" },
      { name: t("Acqua Gasata ½ L", "Sparkling Water ½ L"), price: "1,00" },
      { name: t("Acqua Naturale 1 L", "Still Water 1 L"), price: "2,00" },
      { name: t("Acqua Gasata 1 L", "Sparkling Water 1 L"), price: "2,00" },
      { name: t("Coca Cola lattina 33 cL", "Coca Cola can 33 cL"), price: "2,00" },
      { name: t("Coca Cola zero lattina 33 cL", "Coca Cola Zero can 33 cL"), price: "2,00" },
      { name: t("Fanta lattina 33 cL", "Fanta can 33 cL"), price: "2,00" },
      { name: t("Sprite lattina 33 cL", "Sprite can 33 cL"), price: "2,00" },
      { name: t("Chinotto lattina 33 cL", "Chinotto can 33 cL"), price: "2,00" },
      { name: t("Coca Cola in vetro 1 L", "Coca Cola glass bottle 1 L"), price: "4,00" }
    ]
  }
];
