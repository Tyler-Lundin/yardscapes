'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import { GALLERY_IMAGES } from '@/types/gallery';

// Extract unique categories from images
const CATEGORIES = Array.from(new Set(GALLERY_IMAGES.map(img => img.category)));

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Explore our portfolio of stunning landscape transformations and outdoor living spaces.
          </p>
        </div>

        {/* Filters */}
        <GalleryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <GalleryGrid
          images={GALLERY_IMAGES}
          selectedCategory={selectedCategory}
        />
      </div>
    </main>
  );
} 