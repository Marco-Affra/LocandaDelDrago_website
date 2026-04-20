import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { LazyImage } from './LazyImage';

interface SlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
  priority?: boolean;
}

export function Slideshow({ images, interval = 6500, className, priority = false }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isInView]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <LazyImage 
            src={images[index]} 
            alt={`Slide ${index}`} 
            priority={priority && index === 0}
            containerClassName="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ImageSlideshow({ images, interval = 7000, className, priority = false }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isInView]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <LazyImage 
            src={images[index]} 
            alt={`Slide ${index}`} 
            priority={priority && index === 0}
            containerClassName="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
