import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function LazyImage({ 
  src, 
  alt, 
  className, 
  containerClassName, 
  priority = false,
  ...props 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-oro/5 text-transparent", containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        className={cn(
          "w-full h-full object-cover",
          !isLoaded && "scale-105 blur-sm",
          "transition-all duration-700",
          className
        )}
        {...props}
      />
      
      {/* Subtle loader shimmer effect */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      )}
    </div>
  );
}
