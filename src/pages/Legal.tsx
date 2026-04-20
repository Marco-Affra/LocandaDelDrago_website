import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Legal() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-crema">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-oro/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-slate max-w-none"
          >
            <h1 className="text-4xl font-cinzel text-bordeaux mb-8 border-b-2 border-oro/30 pb-4">
              {t("Privacy & Cookie Policy", "Privacy & Cookie Policy")}
            </h1>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("1. Titolare del Trattamento", "1. Data Controller")}
              </h2>
              <p>
                {t(
                  "Il titolare del trattamento dei dati è la Locanda del Drago, con sede a Monreale (PA). Per qualsiasi domanda relativa alla presente policy, puoi contattarci ai recapiti indicati nella sezione contatti del sito.",
                  "The data controller is Locanda del Drago, based in Monreale (PA). For any questions regarding this policy, you can contact us at the details provided in the contact section of the site."
                )}
              </p>
            </section>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("2. Base Giuridica e Tipologia di Dati Trattati", "2. Legal Basis and Type of Data Processed")}
              </h2>
              <p>
                {t(
                  "Il presente sito è una 'vetrina' informativa e non richiede la creazione di un account. Trattiamo i dati basandoci sul legittimo interesse del titolare a fornire un servizio web sicuro e funzionale.",
                  "This site is an informative 'showcase' and does not require account creation. We process data based on the controller's legitimate interest in providing a safe and functional web service."
                )}
              </p>
              <p>
                <strong>{t("Dati di navigazione:", "Navigation data:")}</strong>
                {" "}{t(
                  "Il sito è ospitato sulla piattaforma Netlify. I server di Netlify raccolgono automaticamente dati tecnici (come l'indirizzo IP, il tipo di browser, i log di accesso) necessari per garantire la sicurezza e il corretto funzionamento del sito. Tali dati sono gestiti in conformità con la ",
                  "The site is hosted on the Netlify platform. Netlify servers automatically collect technical data (such as IP address, browser type, access logs) necessary to ensure security and proper site functioning. Such data is managed in compliance with "
                )}
                <a 
                  href="https://www.netlify.com/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-bordeaux font-bold"
                >
                  {t("privacy policy di Netlify", "Netlify's privacy policy")}
                </a>
                .
              </p>
              <p>
                <strong>{t("Dati forniti volontariamente:", "Voluntarily provided data:")}</strong>
                {" "}{t(
                  "Se ci contatti via telefono o tramite link esterni (es. WhatsApp), i tuoi dati saranno usati solo per gestire la tua prenotazione o richiesta.",
                  "If you contact us via telephone or through external links (e.g., WhatsApp), your data will only be used to manage your reservation or request."
                )}
              </p>
            </section>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("3. Utilizzo dei Cookie", "3. Use of Cookies")}
              </h2>
              <p>
                {t(
                  "Il sito utilizza esclusivamente Cookie Tecnici, per i quali non è richiesto il preventivo consenso dell'utente (ai sensi del Provvedimento del Garante Privacy dell'8 maggio 2014):",
                  "The site uses exclusively Technical Cookies, for which prior user consent is not required (pursuant to the Privacy Guarantor's Provision of May 8, 2014):"
                )}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-scuro/80">
                <li>
                  <strong>{t("Preferenze di Lingua:", "Language Preferences:")}</strong>
                  {" "}{t(
                    "Un cookie necessario per ricordare se preferisci consultare il sito in Italiano o in Inglese.",
                    "A cookie necessary to remember if you prefer to consult the site in Italian or English."
                  )}
                </li>
                <li>
                  <strong>{t("Consenso Cookie:", "Cookie Consent:")}</strong>
                  {" "}{t(
                    "Un cookie tecnico per memorizzare la tua presa visione di questa informativa.",
                    "A technical cookie to store your reading of this policy."
                  )}
                </li>
              </ul>
              <p className="italic font-bold">
                {t(
                  "Nessun cookie di profilazione o di marketing viene utilizzato da questo sito.",
                  "No profiling or marketing cookies are used by this site."
                )}
              </p>
            </section>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("4. Servizi di Terze Parti", "4. Third-Party Services")}
              </h2>
              <p>
                {t(
                  "Per offrirti una grafica curata e icone intuitive, il sito potrebbe richiamare risorse esterne (come Google Fonts o Lucide Icons). Tali servizi potrebbero rilevare l'indirizzo IP dell'utente per il solo tempo tecnico necessario all'erogazione della risorsa, ma non abbiamo accesso a tali dati.",
                  "To offer you refined graphics and intuitive icons, the site may call upon external resources (such as Google Fonts or Lucide Icons). These services may detect the user's IP address for the technical time strictly necessary for resource provision, but we do not have access to such data."
                )}
              </p>
            </section>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("5. I tuoi Diritti", "5. Your Rights")}
              </h2>
              <p>
                {t(
                  "In conformità con il GDPR, hai il diritto di richiedere l'accesso ai tuoi dati, la rettifica, la cancellazione o la limitazione del trattamento. Data la natura statica del sito e l'assenza di database utenti, non conserviamo dati personali identificativi (nomi o email) nei nostri sistemi web.",
                  "In accordance with the GDPR, you have the right to request access to your data, rectification, deletion, or restriction of processing. Given the static nature of the site and the absence of a user database, we do not store identifying personal data (names or emails) in our web systems."
                )}
              </p>
            </section>

            <section className="mb-10 text-scuro/80 space-y-4">
              <h2 className="text-2xl font-cinzel text-bordeaux mt-8">
                {t("6. Modalità di Disabilitazione", "6. How to Disable")}
              </h2>
              <p>
                {t(
                  "Puoi decidere di bloccare i cookie tramite le impostazioni del tuo browser. Ti ricordiamo che disabilitando i cookie tecnici, la scelta della lingua potrebbe non essere salvata e dovrai impostarla manualmente a ogni visita.",
                  "You can decide to block cookies through your browser settings. We remind you that by disabling technical cookies, language selection may not be saved and you will have to set it manually at each visit."
                )}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    localStorage.removeItem('cookie-consent');
                    window.location.reload();
                  }}
                  className="text-sm bg-bordeaux/10 text-bordeaux border border-bordeaux/30 px-4 py-2 rounded-lg hover:bg-bordeaux hover:text-white transition-all duration-300 font-bold"
                >
                  {t("Resetta preferenze cookie", "Reset cookie preferences")}
                </button>
              </div>
            </section>

            <section className="pt-8 border-t border-oro/20 text-scuro/60 text-sm italic">
              <p>
                {t("Ultimo aggiornamento: Aprile 2026", "Last updated: April 2026")}
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
