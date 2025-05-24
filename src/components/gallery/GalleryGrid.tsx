import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from './GalleryModal';
import { GalleryImage } from '@/types/gallery';


interface GalleryGridProps {
  images: GalleryImage[];
  selectedCategory: string;
}

export default function GalleryGrid({ images, selectedCategory }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.sort((a, b) => a.order - b.order).map((image) => (
        <div
          key={image.id}
          className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setSelectedImage(image)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-sm text-gray-200">{image.description}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
} 