'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryFilter from '@/components/gallery/GalleryFilter';

// Sample gallery data - replace with your actual data
const GALLERY_IMAGES = [
  {
    id: '1',
    src: '/images/gallery/project1.jpg',
    alt: 'Modern Landscape Design',
    category: 'Landscaping',
    title: 'Modern Landscape Design',
    description: 'A contemporary landscape design featuring clean lines and native plants.',
  },
  {
    id: '2',
    src: '/images/gallery/project2.jpg',
    alt: 'Outdoor Living Space',
    category: 'Outdoor Living',
    title: 'Outdoor Living Space',
    description: 'Complete outdoor living area with custom patio and fire pit.',
  },
  {
    id: '3',
    src: '/images/gallery/project3.jpg',
    alt: 'Garden Transformation',
    category: 'Gardens',
    title: 'Garden Transformation',
    description: 'Before and after of a complete garden transformation.',
  },
  // Add more images as needed
];

// Extract unique categories from images
const CATEGORIES = Array.from(new Set(GALLERY_IMAGES.map(img => img.category)));

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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