import { OWNER } from '@/types/owner';
import Image from 'next/image';
import { FaAward, FaLeaf } from 'react-icons/fa';

export default function AboutOwner() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[700px] rounded-2xl overflow-hidden">
              <Image
                src={'/images/dean.webp'}
                alt={OWNER.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-xl scale-50 md:scale-100">
              <div className="text-4xl font-serif font-bold text-emerald-600 dark:text-emerald-400">{OWNER.yearsExperience}+</div>
              <div className="text-gray-600 dark:text-neutral-300">Years of Excellence</div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {OWNER.name}
              </h2>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 font-medium">
                {OWNER.title}
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
              {OWNER.bio}
            </p>
            
            <blockquote className="border-l-4 border-emerald-600 dark:border-emerald-400 pl-6 py-2">
              <p className="text-xl text-gray-700 dark:text-neutral-200 italic">
                &quot;{OWNER.quote}&quot;
              </p>
            </blockquote>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <FaAward className="text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
                </div>
                <ul className="space-y-2">
                  {OWNER.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                  <FaLeaf className="text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Specialties</h3>
                </div>
                <ul className="space-y-2">
                  {OWNER.specialties.map((specialty, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 