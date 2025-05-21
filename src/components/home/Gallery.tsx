'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES, GALLERY_CATEGORIES, GalleryCategory } from '@/types/gallery';
import { useRouter } from 'next/navigation';

export default function Gallery({ isHome = false }: { isHome?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const router = useRouter();

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(image => image.category === selectedCategory);

  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Portfolio
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.slice(0, isHome ? 5 : undefined).sort((a, b) => a.order - b.order).map((image) => (
            <Link
              key={image.id}
              href={`/service/${image.serviceSlug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg dark:shadow-neutral-900/50"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm text-gray-200">{image.description}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
          <button onClick={() => router.push('/gallery')} className="group cursor-pointer hover:scale-105 transition-transform duration-300 relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg dark:shadow-neutral-900/50 border-2 border-gray-300 dark:border-neutral-700">
            <div className="absolute inset-0 grid place-items-center transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">View All</h3>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
} 