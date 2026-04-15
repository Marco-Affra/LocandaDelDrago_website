export const getCurrentEvent = (t: (it: string, en: string) => string) => ({
  // ISTRUZIONI PER CAMBIARE EVENTO:
  // 1. Carica la locandina o il menù (in formato .jpg, .png o .pdf) nella cartella /public/eventi/
  // 2. Cambia il 'title' con il nome del nuovo evento
  // 3. Cambia la 'date' con la data dell'evento
  // 4. Cambia la 'description' con una breve descrizione
  // 5. In 'image' metti l'immagine di copertina (puoi usare un link o un file in /public/eventi/)
  // 6. In 'detailsFile' metti il percorso del file che l'utente aprirà cliccando il bottone (es. "/eventi/menùpasqua.jpg")
  //
  // Se 'detailsFile' è vuoto (""), la sezione dell'evento non verrà mostrata né in Home né nella pagina Eventi.
  title: t("Menù di Pasqua", "Easter Menu"),
  date: "Pasqua 2026",
  description: t(
    "Festeggia la Pasqua con noi! Abbiamo preparato un menù speciale per l'occasione, ricco di sapori tradizionali e ingredienti di prima scelta.",
    "Celebrate Easter with us! We have prepared a special menu for the occasion, full of traditional flavors and top quality ingredients."
  ),
  image: "https://picsum.photos/seed/pasqua/1200/600", // Sostituisci con l'immagine di copertina dell'evento
  detailsFile: "" // Questo è il file che si aprirà cliccando su "VEDI DETTAGLI" 
});
