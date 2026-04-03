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

export const menuData: MenuCategory[] = [
  {
    id: "antipasti-rustici",
    title: "Antipasti Rustici",
    items: [
      { name: "Bruschette al Pomodoro (4 pz)", price: "4,00" },
      { name: "Focaccine con Milza (4 pz)", price: "4,00" },
      { name: "Focaccine con Ricotta (4 pz)", price: "4,00" },
      { name: "Focaccine con Porchetta (4 pz)", price: "5,00" },
      { name: "Quadrifoglio di focaccine (4 pz)", description: "4 Focaccine: 1 milza, 1 ricotta, 1 porchetta e 1 panelle e crocchè", price: "4,50" },
      { name: "Involtini Speck e Bufala (4 pz)", price: "6,00" },
      { name: "Caponata di Melanzane", description: "Melanzane, capperi, sedano e concentrato di pomodoro", price: "6,00" },
    ]
  },
  {
    id: "antipasti-pesce",
    title: "Antipasti di Pesce",
    items: [
      { name: "Salmone, stracciatella di bufala e pistacchio", description: "Salmone affumicato su letto di rucola con stracciatella di bufala e crema al pistacchio", price: "12,00" },
      { name: "Caponata di Pesce spada", price: "10,00" },
      { name: "Cocktail di Gamberi*", price: "10,00" },
      { name: "Tris affumicati di pesce", description: "Pesce spada, salmone e tonno affumicati", price: "12,00" },
    ]
  },
  {
    id: "fritti",
    title: "Fritti",
    items: [
      { name: "Patatine fritte*", price: "3,00" },
      // ESEMPIO DI IMMAGINE:
      // Per aggiungere un'immagine a qualsiasi altro piatto, copia la sintassi qui sotto
      // aggiungendo `, image: "URL_DELL_IMMAGINE"` alla fine dell'oggetto del piatto.
      { name: "Misto fritto x2", description: "Patatine*, panelle, crocchè, anelli di cipolla* e verdure pastellate", price: "4,00", image: "https://picsum.photos/seed/mistofritto/800/600" },
      { name: "Anelli di cipolla*", price: "4,00" },
      { name: "Verdure pastellate", price: "4,00" },
      { name: "Mozzarelline stick*", price: "5,00" },
      { name: "Olive Ascolane*", price: "5,00" }
    ]
  },
  {
    id: "primi-rustici",
    title: "Primi Rustici",
    items: [
      { name: "Busiate al pistacchio", description: "Olio d'aglio, radicchio, pomodorini, speck, pesto di pistacchio, panna e prezzemolo", price: "12,00" },
      { name: "Maccheroni con salsiccia, zucchina fritta alla palermitana e scaglie di ricotta salata", description: "Olio d'aglio, salsiccia, zucchine, ricotta salata, prezzemolo", price: "12,00" },
      { name: "Tagliatelle con Ragù di cinghiale", description: "Pasta all'uovo, ragù di cinghiale e prezzemolo", price: "14,00" },
      { name: "Trofie Pugliesi \"a modo mio\"", description: "Olio d'aglio, melanzane, zucchine, datterino giallo e rosso, e pesto di basilico", price: "12,00" },
    ]
  },
  {
    id: "primi-pesce",
    title: "Primi di Pesce",
    items: [
      { name: "Busiate Gamberi e Pistacchio", description: "Olio d'aglio, gamberi*, pesto di pistacchio, granella di pistacchio e prezzemolo", price: "13,00" },
      { name: "Bavette alle Vongole", description: "Olio d'aglio, Vongole, prezzemolo", price: "18,00" },
      { name: "Tagliatelle con Spada, datterino giallo, melanzana fritta e mentuccia", description: "Olio d'aglio, pasta all'uovo, pescespada*, datterino giallo, melanzane, menta", price: "14,00" },
      { name: "Ravioli di Cernia in Salsa ai Crostacei e Bottarga", description: "Olio d'aglio, salsa di pomodoro, gamberi*, scampi*, bottarga e prezzemolo", price: "18,00" }
    ]
  },
  {
    id: "secondi-carne",
    title: "Secondi di Carne",
    items: [
      { name: "Straccetti di Vitello con fonduta", description: "Trinca di vitello a listarelle su rucola con fonduta al parmigiano", price: "13,00" },
      { name: "Bistecca di Vitello", description: "Trinca di vitello", price: "10,00" },
      { name: "Tagliata di Vitello", description: "Trinca di vitello su rucola con scaglie di Grana", price: "14,00" },
      { name: "Tagliata di Black Angus con rucola, pomodorini e pinoli tostati", price: "18,00" },
    ]
  },
  {
    id: "secondi-pesce",
    title: "Secondi di Pesce",
    items: [
      { name: "Filetto di Orata e Gamberone grigliati", description: "Orata* e gamberone* alla griglia", price: "18,00" },
      { name: "Pescespada* alla griglia", price: "12,00" },
      { name: "Gamberone* alla griglia", price: "13,00" },
      { name: "Calamaro* alla griglia", price: "13,00" }
    ]
  },
  {
    id: "contorni",
    title: "Contorni",
    items: [
      { name: "Insalata Verde e Pomodoro", description: "Lattuga, pomodoro", price: "3,50" },
      { name: "Verdure grigliate", description: "Melanzane, zucchine e radicchio", price: "4,00" },
      { name: "Insalata mista", description: "Lattuga, pomodoro, radicchio, rucola e funghi", price: "4,50" },
      { name: "Funghi trifolati", description: "Olio d'aglio, funghi freschi", price: "3,00" },
      { name: "Spinaci all'agro", description: "Olio d'aglio, spinaci*", price: "3,00" }
    ]
  },
  {
    id: "pizze-classiche",
    title: "Pizze Classiche",
    items: [
      { name: "Marinara", description: "Salsa, acciughe, olio d'aglio, origano", price: "5,50" },
      { name: "Margherita", description: "Salsa, fiordilatte, origano", price: "6,00" },
      { name: "Calzone", description: "Salsa, fiordilatte, prosciutto cotto, origano", price: "6,50" },
      { name: "Diavola", description: "Salsa, fiordilatte, salame piccante, origano", price: "6,50" },
      { name: "Napoli", description: "Salsa, fiordilatte, acciughe, origano", price: "6,50" },
      { name: "Romana", description: "Salsa, fiordilatte, prosciutto cotto, origano", price: "6,50" },
      { name: "Quattro Gusti", description: "Salsa, fiordilatte, prosciutto cotto, carciofi, origano", price: "7,00" },
      { name: "Patatosa", description: "Salsa, fiordilatte, patatine fritte*, wurstel, origano", price: "7,00" },
      { name: "Tonnara", description: "Salsa, fiordilatte, tonno, origano", price: "7,00" },
      { name: "Campagnola", description: "Salsa, pomodoro a fette, cacio a pezzi, acciughe, cipolla, mollica, origano", price: "7,50" },
      { name: "Quattro Formaggi", description: "Fiordilatte, cacio a pezzi, gorgonzola, emmenthal, origano", price: "7,50" },
      { name: "Capricciosa", description: "Salsa, fiordilatte, prosciutto cotto, carciofi, funghi, olive, wurstel, origano", price: "8,00" },
      { name: "Parmigiana", description: "Salsa, fiordilatte, melanzane fritte, scaglie di grana, origano", price: "8,00" },
      { name: "San Daniele", description: "Salsa, fiordilatte, prosciutto crudo, origano", price: "8,00" },
    ]
  },
  {
    id: "pizze-locanda",
    title: "Pizze Locanda",
    items: [
      { name: "Calabrese", description: "Salsa, fiordilatte, cacio a pezzi, peperoni, mollica, origano", price: "7,50" },
      { name: "Siciliana", description: "Salsa, fiordilatte, melanzane fritte, ricotta fresca, origano", price: "7,50" },
      { name: "Garofalo", description: "Salsa, fiordilatte, pom. bruschetta (con aglio), scaglie di grana, origano", price: "8,00" },
      { name: "Friarielli", description: "Salsa, fiordilatte, friarielli, salsiccia, gorgonzola, origano", price: "8,50" },
      { name: "Pugliese", description: "Salsa, fiordilatte, prosciutto cotto, funghi, cipolla, salsiccia, gorgonzola, origano", price: "8,50" },
      { name: "Rosita", description: "Salsa, fiordilatte, prosciutto crudo, mascarpone, origano", price: "8,50" },
      { name: "Trevisana", description: "Salsa, fiordilatte, radicchio, gorgonzola, speck, origano", price: "8,50" },
      { name: "San Martino", description: "Salsa, fiordilatte, mascarpone, funghi trifolati, bacon, origano", price: "9,00" },
      { name: "Golosa", description: "Salsa, fiordilatte, salame piccante, prosciutto cotto, carciofi, funghi, salsiccia, cacio a pezzi, bufala, origano", price: "9,50" },
      { name: "Pizza del drago", description: "Salsa, fiordilatte, bacon, salame piccante, cipolla, mascarpone, peperoncino, origano", price: "9,50" },
      { name: "Bresaola", description: "Salsa, fiordilatte, bresaola, rucola, scaglie di grana, origano", price: "10,50" },
      { name: "Favara", description: "Salsa, fiordilatte, bufala, funghi, speck, scaglie di grana, origano", price: "12,00" },
    ]
  },
  {
    id: "pizze-bordo-ripieno",
    title: "Pizze con Bordo Ripieno",
    items: [
      { name: "Margherita con Bordo", description: "Salsa, fiordilatte, origano, bordo ripieno di fiordilatte", price: "7,50" },
      { name: "Ricottosa", description: "Salsa, fiordilatte, pomodorini, origano, bordo ripieno di ricotta", price: "8,50" },
      { name: "Lussuriosa", description: "Salsa, fiordilatte, salsiccia, origano, bordo ripieno di ricotta e spinaci*", price: "8,50" },
      { name: "Provenzale", description: "Salsa, fiordilatte, funghi, melanzane fritte, origano, bordo ripieno di fiordilatte e prosiutto cotto", price: "9,00" },
      { name: "Delizia", description: "Salsa, fiordilatte, melanzane fritte, scaglie di grana, origano, bordo ripieno di ricotta e salsiccia", price: "10,00" },
    ]
  },
  {
    id: "pizze-pistacchio",
    title: "Pizze al Pistacchio",
    items: [
      { name: "Etna", description: "Bufala, pesto di pistacchio, bacon, scamorza affumicata, origano", price: "11,00" },
      { name: "Pistacchiosa", description: "Fiordilatte, bufala, pesto di pistacchio, mortadella, granella di pistacchio, origano", price: "12,00" },
      { name: "Norvegese", description: "Fiordilatte, bufala, salmone affumicato in uscita, granella di pistacchio, origano", price: "12,00" },
    ]
  },
  {
    id: "pizze-bianche",
    title: "Pizze Bianche",
    items: [
      { name: "Biancaneve", description: "Fiordilatte, origano", price: "5,50" },
      { name: "Fontana", description: "Fiordilatte, mascarpone, salsiccia, spinaci*, origano", price: "7,50" },
      { name: "Tirolese", description: "Bufala, pomodorini, speck, origano", price: "9,00" },
      { name: "Contadina", description: "Bufala, zucchine alla griglia, melanzane alla griglia, funghi, friarielli, origano", price: "9,50" },
      { name: "Brisa", description: "Bufala, funghi porcini, scaglie di grana, origano", price: "9,50" },
      { name: "Bufalina", description: "Bufala, prosciutto crudo, scaglie di grana, origano", price: "9,50" },
    ]
  },
  {
    id: "pizze-rosse",
    title: "Pizze Rosse",
    items: [
      { name: "Boscaiola", description: "Salsa, salsiccia, funghi, pomodorini, rucola, origano", price: "7,50" },
      { name: "Ortolana", description: "Salsa, pomodoro a fette, funghi, carciofi, melanzane fritte, peperoni, rucola, origano", price: "8,00" },
    ]
  },
  {
    id: "schiacciate",
    title: "Schiacciate",
    items: [
      { name: "Schiacciata Siciliana", description: "Pomodoro a fette, cipolla, acciughe, cacio a pezzi, mollica, origano", price: "7,50" },
      { name: "Panino Greco", description: "salsa, fiordilatte, prosciutto cotto, melanzane fritte, gorgonzola, cacio grattugiato, origano", price: "8,00" },
      { name: "Schiacciata Classica", description: "Fiordilatte, prosciutto cotto, funghi, melanzane fritte, pomodoro a fette, salame piccante, cacio grattugiato, origano", price: "8,50" },
    ]
  },
  {
    id: "aggiunzioni-pizze",
    title: "Aggiunzioni per Pizze",
    items: [
      { name: "Caciocavallo a pezzi o grattuggiato", price: "0,50" },
      { name: "Capperi", price: "0,50" },
      { name: "Carciofi", price: "0,50" },
      { name: "Emmenthal", price: "0,50" },
      { name: "Funghi freschi", price: "0,50" },
      { name: "Melanzane fritte", price: "0,50" },
      { name: "Olive", price: "0,50" },
      { name: "Peperoni", price: "0,50" },
      { name: "Pomodoro a fette", price: "0,50" },
      { name: "Prosciutto cotto", price: "0,50" },
      { name: "Radicchio", price: "0,50" },
      { name: "Rucola", price: "0,50" },
      { name: "Salsa", price: "0,50" },
      { name: "Wurstel", price: "0,50" },
      { name: "Fiordilatte", price: "1,00" },
      { name: "Salame dolce o piccante", price: "1,00" },
      { name: "Patatine", price: "1,00" },
      { name: "Pomodorini", price: "1,00" },
      { name: "Tonno", price: "1,00" },
      { name: "Scaglie di Grana", price: "1,50" },
      { name: "Bresaola", price: "2,00" },
      { name: "Bufala", price: "2,00" },
      { name: "Funghi porcini", price: "2,00" },
      { name: "Gamberi*", price: "2,00" },
      { name: "Mortadella", price: "2,00" },
      { name: "Prosciutto crudo", price: "2,00" },
      { name: "Speck", price: "2,00" },
      { name: "Salmone", price: "3,00" },
      { name: "Supplemento Pizza senza Glutine*", price: "2,50" },
      { name: "Supplemento Farina di Tumminia", price: "2,00" }
    ]
  },
  {
    id: "vini",
    title: "Vini",
    items: [
      { name: "Ilare Nero d'Avola", description: "Sicilia Occidentale - Valle del Belice - Gibellina 13,00 % Vol. Vino fine e persistente, dallo spiccato profumo di frutta rossa matura. Secco ed equilibrato, ideale con carni grigliate", price: "9,00" },
      { name: "Ilare Catarratto Chardonnay", description: "Sicilia Occidentale - Valle del Belice - Gibellina 12,00 % Vol. Vino fine e persistente con profumo di frutta matura, pera e mela verde. Secco ed equilibrato, è raccomandato con pesce e formaggi freschi", price: "9,00" },
      { name: "Barone di Montalto Cabernet Sauvignon-Nero d'Avola", description: "Sicilia Occidentale - Valle del Belice 13,50 % Vol. Vino rosso intenso con un bouqet di spezie, frutta scura, e tocchi di caramello. Si abbina con formaggi stagionati e carni grigliate", price: "13,00" },
      { name: "Barone di Montalto Syrah", description: "Sicilia Occidentale - Valle del Belice 14,00 % Vol. Vino rosso violaceo intenso con aromi di violetta e ribes arricchiti da liquirizia e pepe nero. Si sposa bene con formaggi, funghi e carni", price: "16,00" },
      { name: "Barone di Montalto Grillo", description: "Sicilia Occidentale - Valle del Belice 12,50 % Vol. Vino bianco dalle intriganti note di cedro, frutti tropicali ed un palato armonico e vellutato. Si abbina bene a pesce, carni bianche, crostacei, verdure grigliate", price: "14,00" },
      { name: "Barone di Montalto Cucunci Chardonnay Frizzante", description: "Sicilia Occidentale - Valle del Belice 11,50 % Vol. Cucunci, la pianta del cappero, è nota per crescere in luoghi con poca acqua. Vino frizzante aromatico con un'acidità fresca e aromi di frutti gialli e mela verde. Ideale come aperitivo, perfetto con antipasti di mare o verdure.", price: "15,00" },
      { name: "Spumante Millesimato", price: "15,00" },
      { name: "Calice Ilare Nero d'Avola", price: "4,00" },
      { name: "Calice Ilare Catarratto Chardonnay", price: "4,00" },
      { name: "Calice Barone di Montalto Grillo", price: "5,00" },
      { name: "Calice Vino locale", price: "3,00" },
      { name: "Vino locale ½ L", price: "6,00" },
      { name: "Vino locale 1 L", price: "10,00" }
    ]
  },
  {
    id: "birre",
    title: "Birre",
    items: [
      { name: "Moretti 33 cL", price: "2,00" },
      { name: "Beck's 33 cL", price: "2,50" },
      { name: "Ceres 33 cL", price: "3,50" },
      { name: "Birra analcolica 33 cL", price: "3,50" },
      { name: "Birra senza glutine 33 cL", price: "3,50" },
      { name: "Seme Dorato rossa 33 cL", price: "4,00" },
      { name: "Moretti 66 cL", price: "3,00" },
      { name: "Beck's 60 cL", price: "3,50" },
      { name: "Moretti Baffo d'Oro 66 cL", price: "4,00" },
      { name: "Birra dello Stretto Premium 66 cL", price: "4,50" },
      { name: "Bionda alla spina 0,20 L", price: "3,50" },
      { name: "Bionda alla spina 0,40 L", price: "4,50" },
      { name: "Artigianale Epica 33 cL", description: "(Tifeo, Polifemo, Hermes, Cerere)", price: "5,50" }
    ]
  },
  {
    id: "bibite",
    title: "Bibite",
    items: [
      { name: "Acqua Naturale ½ L", price: "1,00" },
      { name: "Acqua Gasata ½ L", price: "1,00" },
      { name: "Acqua Naturale 1 L", price: "2,00" },
      { name: "Acqua Gasata 1 L", price: "2,00" },
      { name: "Coca Cola lattina 33 cL", price: "2,00" },
      { name: "Coca Cola zero lattina 33 cL", price: "2,00" },
      { name: "Fanta lattina 33 cL", price: "2,00" },
      { name: "Sprite lattina 33 cL", price: "2,00" },
      { name: "Chinotto lattina 33 cL", price: "2,00" },
      { name: "Coca Cola in vetro 1 L", price: "4,00" }
    ]
  }
];
