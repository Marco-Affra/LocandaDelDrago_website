import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageSlideshow } from './Slideshow';
import { cn } from '../lib/utils';

interface InfoSectionProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
  bgWhite?: boolean;
  button?: {
    label: string;
    href: string;
  };
}

export function InfoSection({ title, description, images, reverse, bgWhite, button }: InfoSectionProps) {
  const isInternal = button?.href.startsWith('/');

  return (
    <section className={cn(
      "py-20 px-4 md:px-[10%]",
      bgWhite ? "bg-white" : "bg-crema"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center",
        reverse && "md:flex-row-reverse"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={cn("text-box", reverse && "md:order-2")}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel text-bordeaux mb-6 border-b-2 border-oro inline-block pb-2">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {description}
          </p>
          {button && (
            isInternal ? (
              <Link
                to={button.href}
                className="inline-block bg-bordeaux text-white px-8 py-3 font-cinzel font-bold text-sm border-2 border-bordeaux hover:bg-transparent hover:text-bordeaux transition-all duration-300 shadow-lg"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  {button.label}
                </motion.span>
              </Link>
            ) : (
              <motion.a
                href={button.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-bordeaux text-white px-8 py-3 font-cinzel font-bold text-sm border-2 border-bordeaux hover:bg-transparent hover:text-bordeaux transition-all duration-300 shadow-lg"
              >
                {button.label}
              </motion.a>
            )
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500",
            reverse && "md:order-1"
          )}
        >
          <ImageSlideshow images={images} />
        </motion.div>
      </div>
    </section>
  );
}
