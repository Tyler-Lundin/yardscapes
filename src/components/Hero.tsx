'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  bgClass?: string;
  // textClass is now handled internally for the animation
  bgImageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  description, 
  bgClass = 'bg-gray-100 dark:bg-neutral-900',
  bgImageSrc
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Reset imageLoaded state if bgImageSrc changes (e.g., removed)
    if (!bgImageSrc) {
      setImageLoaded(false);
    }
  }, [bgImageSrc]);

  const hasImage = Boolean(bgImageSrc);

  let titleColorClass = 'text-black dark:text-white';
  let descriptionColorClass = 'text-neutral-700 dark:text-neutral-300'; // Default if no image
  let overlayOpacityClass = 'opacity-0';

  if (hasImage) {
    if (imageLoaded) {
      // Colors for when image and overlay are visible
      titleColorClass = 'text-white'; // User's last h1 style for loaded image
      descriptionColorClass = 'text-neutral-100'; // User's last p style for loaded image
      overlayOpacityClass = 'opacity-100';
    } else {
      // Initial colors when image is set but not yet loaded (fade from these)
      titleColorClass = 'text-black dark:text-white';
      descriptionColorClass = 'text-neutral-800 dark:text-neutral-200'; // Dark text on light bg, light on dark
      overlayOpacityClass = 'opacity-0';
    }
  }

  return (
    <section 
      className={`relative py-20 mt-8 overflow-hidden ${bgClass}`} // overflow-hidden from user's change
    >
      {hasImage && (
        <>
          <Image
            src={bgImageSrc!} // Assert non-null as hasImage is true
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'} z-10`}
            onLoadingComplete={() => {
              setImageLoaded(true);
            }}
            priority // Consider adding priority if this is an LCP element
          />
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ease-in-out ${overlayOpacityClass} z-20`}
          />
        </>
      )}
      <div className="relative z-30 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-5xl font-serif font-bold mb-6 transition-colors duration-700 ease-in-out ${titleColorClass}`}>
            {title}
          </h1>
          <p className={`text-xl transition-colors duration-700 ease-in-out ${descriptionColorClass}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 