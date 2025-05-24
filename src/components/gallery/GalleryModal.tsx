import Image from 'next/image';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GalleryImage } from '@/types/gallery';

interface GalleryModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export default function GalleryModal({ image, onClose }: GalleryModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-7xl mx-4">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Image Info */}
        <div className="mt-4 text-white">
          <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <FaTimes className="text-2xl" />
        </button>
      </div>
    </div>
  );
} 