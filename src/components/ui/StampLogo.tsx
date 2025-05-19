import React from 'react';

interface StampLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function StampLogo({
  className = '',
  size = 'md',
  variant = 'full'
}: StampLogoProps) {
  // Size mapping
  const sizeClass = {
    sm: 'h-10 w-10',
    md: 'h-16 w-16',
    lg: 'h-24 w-24'
  }[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizeClass} relative`}>
        {/* Circular stamp logo */}
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill="white" stroke="#16a34a" strokeWidth="2" />
          
          {/* Inner circle with text */}
          <circle cx="50" cy="50" r="42" fill="white" stroke="#16a34a" strokeWidth="1" />
          
          {/* Circular text */}
          <path id="circlePath" 
            d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" 
            fill="none" 
          />
          
          {/* Top text */}
          <text 
            fontSize="8"
            fill="#333333"
            fontWeight="bold"
            letterSpacing="1"
          >
            <textPath href="#circlePath" startOffset="0%">LANDSCAPING • SERVICES • WILLOWS •</textPath>
          </text>
          
          {/* Central icon */}
          <g transform="translate(22, 20) scale(0.3)">
            {/* Tree with leaf details */}
            <path d="M120 20L150 70H90L120 20Z" fill="#16a34a" />
            <path d="M120 50L145 90H95L120 50Z" fill="#16a34a" />
            <path d="M120 80L140 110H100L120 80Z" fill="#16a34a" />
            <rect x="115" y="110" width="10" height="40" fill="#854d0e" />
            
            {/* Ground/horizon line */}
            <path d="M65 150C65 150 85 130 120 130C155 130 175 150 175 150H65Z" fill="#16a34a" opacity="0.7" />
            
            {/* Sun rays */}
            <circle cx="180" cy="60" r="15" fill="#eab308" />
            <path d="M180 35L180 25M202 48L210 40M205 70L215 70M192 92L200 100M158 70L148 70M168 92L160 100M168 48L160 40" 
                  stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
          </g>
                    {/* Company name in center */}
                    {variant === 'full' && (
            <text 
              x="50" 
              y="80" 
              textAnchor="middle" 
              fontSize="10"
              fontWeight="bold"
              letterSpacing="0.5"
              fill="#16a34a"
            >YARDSCAPES</text>
          )}
        </svg>
      </div>
    </div>
  );
} 