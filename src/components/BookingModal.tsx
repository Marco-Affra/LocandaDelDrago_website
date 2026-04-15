import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, date, time, guests, notes } = formData;

    if (!name || !date || !guests) {
      alert(t("Per favore, compila i campi obbligatori.", "Please fill in the required fields."));
      return;
    }

    const formattedDate = date.split("-").reverse().join("/");
    
    let msg = t(
      `Salve! Sono *${name}*, vorrei prenotare per il *${formattedDate}* un tavolo per *${guests}* alle ore *${time}*;`,
      `Hello! I am *${name}*, I would like to book a table for *${formattedDate}* for *${guests}* people at *${time}*;`
    );
        
    if (notes) msg += ` *${notes}*`;
    
    msg += ", Grazie.";

    window.open(`https://wa.me/393381428949?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-modal p-8 rounded-xl border-t-8 border-bordeaux shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-bordeaux hover:rotate-90 transition-transform">
              <X size={32} />
            </button>

            <h2 className="text-3xl font-cinzel font-bold text-bordeaux text-center mb-4">
              {t('Prenota un Tavolo', 'Book a Table')}
            </h2>
            <p className="text-center text-gray-600 text-sm mb-8">
              {t(
                "La richiesta genera un messaggio precompilato su Whatsapp. L'invio del messaggio non garantisce la prenotazione, che sarà confermata dallo staff.",
                "The request generates a pre-filled message on Whatsapp. Sending the message does not guarantee the booking, which will be confirmed by the staff."
              )}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-cinzel font-bold text-xs text-bordeaux uppercase">
                  {t('Nome e Cognome', 'Full Name')}
                </label>
                <input 
                  type="text" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-oro outline-none bg-white min-h-[50px]"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block font-cinzel font-bold text-xs text-bordeaux uppercase">
                    {t('Data', 'Date')}
                  </label>
                  <input 
                    type="date" 
                    required 
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-oro outline-none appearance-none bg-white min-h-[50px]"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-cinzel font-bold text-xs text-bordeaux uppercase">
                    {t('Ora', 'Time')}
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-oro outline-none bg-white min-h-[50px] appearance-none"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  >
                    {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-cinzel font-bold text-xs text-bordeaux uppercase">
                  {t('Numero di Persone', 'Number of Guests')}
                </label>
                <input 
                  type="number" 
                  min="1" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-oro outline-none bg-white min-h-[50px]"
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-cinzel font-bold text-xs text-bordeaux uppercase">
                  {t('Note', 'Notes')}
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-oro outline-none bg-white min-h-[50px]"
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#25D366] text-white py-4 rounded-md font-cinzel font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg"
              >
                <MessageCircle size={20} />
                {t('INVIA PRENOTAZIONE', 'SEND BOOKING')}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
