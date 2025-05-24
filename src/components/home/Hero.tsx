"use client"
import { OWNER } from '@/types/owner';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <section id="home" className="relative min-h-[85vh]  flex items-center justify-center overflow-hidden lg:rounded-lg">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/25 to-white dark:from-black dark:via-black/25 dark:to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:to-transparent" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 lg:py-20 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white tracking-tight">
            <span className="block">Transform Your</span>
            <span className="block text-green-400">Outdoor Space</span>
            <span className="block">with YardScapes</span>
          </h1>
          
          <motion.p 
            className="text-sm max-w-sm md:text-2xl text-gray-900 dark:text-neutral-300 mb-12 md:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Crafting exceptional landscapes that elevate your property&apos;s beauty and value
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center z-25"
          >
            <button onClick={() => router.push('/contact')} className="group w-full sm:w-auto relative bg-green-400 text-white hover:bg-green-500 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button onClick={() => router.push('/gallery')} className="group backdrop-blur-sm w-full sm:w-auto relative bg-transparent border-2 border-black  dark:border-white/30 hover:border-black dark:hover:border-white text-black dark:text-white dark:hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">View Our Work</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 bg-white dark:bg-black px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{OWNER.yearsExperience} Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-black px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-black px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 