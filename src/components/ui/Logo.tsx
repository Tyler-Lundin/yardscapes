import React from 'react';
import Image from 'next/image';
interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  variant = 'full' 
}: LogoProps) {
  // Size mapping for the image
  const imageSizeClass = {
    sm: 'h-8 w-8',       // For a square logo image, adjust if rectangular
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-32 w-32'
  }[size];
  
  const textSize = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  }[size];

  return (
    <div className={`flex items-center gap-2 ${className} dark:grayscale dark:invert`}>
      <div className={`${imageSizeClass} flex items-center justify-center relative`}>
        <Image 
          src="/images/logo.png" 
          alt="YardScapes Logo"
          width={100}
          height={100}
          className="object-contain w-full h-full" // Ensures the logo fits well
        />
      </div>
      
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className={`font-bold leading-none ${textSize} text-neutral-800 dark:text-neutral-100`}>
            YARD<span className="text-green-600 dark:text-green-500">SCAPES</span>
          </span>
          <span className={`text-xs leading-none text-neutral-500 dark:text-neutral-400`}>
            LANDSCAPING SERVICES
          </span>
        </div>
      )}
    </div>
  );
} 