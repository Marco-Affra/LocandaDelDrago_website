export interface EventInfo {
  title: string;
  date: string;
  description: string;
  image: string;
  detailsFile: string;
  downloadName: string;
}

export const getEventsData = (t: (it: string, en: string) => string): EventInfo[] => [
  // ISTRUZIONI PER CAMBIARE EVENTO:
  // 1. Carica la locandina o il menù (in formato .jpg, .png o .pdf) nella cartella /public/eventi/
  // 2. Cambia il 'title' con il nome del nuovo evento
  // 3. Cambia la 'date' con la data dell'evento
  // 4. Cambia la 'description' con una breve descrizione
  // 5. In 'image' metti l'immagine di copertina (puoi usare un link o un file in /public/eventi/)
  // 6. In 'detailsFile' metti il percorso del file che l'utente aprirà cliccando il bottone (es. "/eventi/menùpasqua.jpg")
  //
  // Se 'detailsFile' è vuoto (""), la sezione dell'evento non verrà mostrata né in Home né nella pagina Eventi.
  // Abbiamo aggiunto inoltre la possibilità di aggiungere più eventi con tutti i relativi campi di interesse
  
  {
    title: t("Pranzo dell'Immacolata", "Immacolata Lunch"),
    date: t("8 Dicembre 2026", "December 8th 2026"),
    description: t(
      "Unisciti a noi per festeggiare l'Immacolata con un menù che esalta i sapori autentici della tradizione siciliana. 38€ a persona.",
      "Join us to celebrate Immacolata with a menu that enhances the authentic flavors of Sicilian tradition. 38€ per person."
    ),
    image: "/imageEvents/Immacolata_Post_4x5.webp",
    detailsFile: "/imageEvents/Immacolata_Post_4x5.webp",
    downloadName: "Immacolata_Post_4x5.webp"
  },
  {
    title: t("Pranzo di Natale", "Christmas Lunch"),
    date: t("25 Dicembre 2026", "December 25th 2026"),
    description: t(
      "La magia del Natale in tavola: scopri il nostro speciale menù a base di pesce per un pranzo indimenticabile. 45€ a persona.",
      "The magic of Christmas on the table: discover our special seafood menu for an unforgettable lunch. 45€ per person."
    ),
    image: "/imageEvents/Natale_Post_4x5.webp",
    detailsFile: "/imageEvents/Natale_Post_4x5.webp",
    downloadName: "Natale_Post_4x5.webp"
  },
  {
    title: t("Pranzo di Capodanno", "New Year's Eve Lunch"),
    date: t("1 Gennaio 2027", "January 1st 2027"),
    description: t(
      "Festeggia l'arrivo del nuovo anno con il nostro pranzo di Capodanno. Sapori ricercati e atmosfera festosa. 50€ a persona.",
      "Celebrate the arrival of the new year with our grand New Year's Eve lunch. Refined flavors and festive atmosphere. 50€ per person."
    ),
    image: "/imageEvents/Capodanno_Post_4x5.webp",
    detailsFile: "/imageEvents/Capodanno_Post_4x5.webp",
    downloadName: "Capodanno_Post_4x5.webp"
  }
];
