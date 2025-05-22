'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

interface NavProps {
  isScrolled: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}


function MobileMenuButton({ onClick, minimal }: { onClick: () => void; minimal?: boolean }) {
  const baseClasses = "lg:hidden text-gray-900 hover:blur-[2px] blur-[0px] transition-all duration-300 cursor-pointer dark:invert";
  const positionClasses = minimal 
    ? "absolute top-1/2 -translate-y-1/2  z-50 right-4 lg:right-8"
    : "absolute top-4 right-4 lg:right-8 z-50 text-black";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${positionClasses}`}
      aria-label="Open menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}

function LogoContainer({ children, isScrolled }: { children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link href="/" className={`flex flex-col items-center justify-center transition-all duration-300 h-full relative ${
      isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'
    }`}>
      {children}
    </Link>
  );
}

function DesktopNav({ isScrolled, minimal }: { isScrolled?: boolean; minimal?: boolean }) {
    const baseClasses = "hidden lg:flex w-full justify-center space-x-8";
  const fullNavClasses = `${baseClasses} bg-white/75 dark:bg-black/75 backdrop-blur-sm py-1 transition-all duration-300 ${
    isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'
  }`;


  return (
    <div className={minimal ? baseClasses : fullNavClasses}>
      <Link href="/" className="text-black dark:text-white hover:text-green-600">Home</Link>
      <Link href="/services" className="text-black dark:text-white hover:text-green-600">Services</Link>
      <Link href="/about" className="text-black dark:text-white hover:text-green-600">About</Link>
      <Link href="/gallery" className="text-black dark:text-white hover:text-green-600">Gallery</Link>
      <Link href="/contact" className="text-black dark:text-white hover:text-green-600">Contact</Link>
    </div>
  );
}

function MainNav({ isScrolled, setIsMenuOpen }: NavProps) {
  return (
    <nav className="relative z-[200] transition-all duration-500 bg-gradient-to-r from-blue-300/50 dark:from-blue-950/75 via-yellow-400/50 dark:via-yellow-950/75 to-purple-400/50 dark:to-purple-950/75 backdrop-blur-sm h-32">
      <div className="h-full">
        <MobileMenuButton onClick={() => setIsMenuOpen(true)} minimal/>
        
        <LogoContainer isScrolled={isScrolled}>
          <Logo size="xl" variant="icon"/>
        </LogoContainer>

        <DesktopNav isScrolled={isScrolled} />
      </div>
    </nav>
  );
}

function MiniNav({ isScrolled, setIsMenuOpen }: NavProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-[200] bg-gradient-to-r from-blue-300/50 dark:from-blue-950/75 via-yellow-400/50 dark:via-yellow-950/75 to-purple-400/50 dark:to-purple-950/75 backdrop-blur-md shadow-md transition-all duration-300 ${
      isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="container mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="absolute z-[200] top-1/2 -translate-y-1/2 left-4">
          <Logo size="md" variant="icon"/>
        </Link>
        <DesktopNav minimal />
        <MobileMenuButton onClick={() => setIsMenuOpen(true)} minimal />
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MainNav isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
      <MiniNav isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[200] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/95 dark:invert backdrop-blur-sm shadow-lg z-[300] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="mb-8 dark:invert">
            <Logo size="xl" variant="icon"/>
          </Link>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-6">
              <li>
                <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-green-600">Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-700 hover:text-green-600">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
} 