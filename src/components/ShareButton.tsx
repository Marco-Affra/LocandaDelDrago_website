import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

interface ShareButtonProps {
  url?: string;
  title?: string;
  text?: string;
  className?: string;
  variant?: 'hero' | 'page';
}

export function ShareButton({ 
  url, 
  title, 
  text, 
  className,
  variant = 'page'
}: ShareButtonProps) {
  const { t } = useLanguage();
  
  const shareUrl = url || window.location.href;
  const shareTitle = title || "Locanda del Drago";
  const shareText = text || t(
    "Scopri la Locanda del Drago a Monreale! Pizzeria e ristorante con vista panoramica su Palermo.",
    "Discover Locanda del Drago in Monreale! Pizzeria and restaurant with a breathtaking view on Palermo."
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to WhatsApp if navigator.share is not available
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (variant === 'hero') {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className={cn(
          "flex items-center gap-2 text-white/80 hover:text-white font-cinzel font-bold text-sm tracking-widest transition-all duration-300 mt-4 group cursor-pointer",
          className
        )}
      >
        <Share2 size={18} className="group-hover:scale-110 transition-transform" />
        {t('CONDIVIDI', 'SHARE')}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleShare}
      className={cn(
        "flex items-center justify-center gap-2 bg-white border border-oro/30 text-scuro hover:text-bordeaux px-6 py-3 rounded-lg font-cinzel font-bold tracking-wider text-xs transition-all shadow-sm hover:shadow-md mb-8 group cursor-pointer",
        className
      )}
    >
      <Share2 size={16} className="text-oro group-hover:scale-110 transition-transform" />
      {t('CONDIVIDI', 'SHARE')}
    </motion.button>
  );
}
