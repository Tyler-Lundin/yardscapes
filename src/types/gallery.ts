export interface GalleryImage {
  id: string;
  src: string;
  order: number;
  alt: string;
  category: GalleryCategory;
  title: string;
  description?: string;
  featured?: boolean;
  serviceSlug?: string;
}

export type GalleryCategory = 
  | 'concrete-work'
  | 'fencing-solutions'
  | 'house-renovations'
  | 'landscaping'
  | 'deck-patio'
  | 'equipment'
  | 'fences'
  | 'paving'
  | 'all';

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'all',
  'concrete-work',
  'fencing-solutions',
  'house-renovations',
  'landscaping',
  'deck-patio',
  'equipment',
  'fences',
  'paving'
];

// Sample gallery data - replace with your actual data
export const GALLERY_IMAGES = [
  {
    id: '1',
    order: 6,
    src: '/images/gallery/IMG_0114.jpeg',
    alt: 'Backhoe performing excavation work for a landscaping project',
    category: 'equipment',
    title: 'Heavy Duty Foundation Work',
    description: 'Our powerful backhoe tackling tough excavation, ensuring a solid foundation for your project.',
  },
  {
    id: '2',
    order: 2,
    src: '/images/gallery/IMG_1445.jpeg',
    alt: 'Newly installed fence securing a residential property',
    category: 'fences',
    title: 'Secure Wooden Fencing',
    serviceSlug: 'fences',
    description: 'Expertly installed wooden fencing providing both security and a classic aesthetic to enhance your property lines.',
  },
  {
    id: '3',
    order: 3,
    src: '/images/gallery/IMG_1549.jpeg',
    alt: 'Artistically laid paver patio creating an elegant outdoor space',
    category: 'paving',
    title: 'Elegant Paver Patio',
    serviceSlug: 'pavers',
    description: 'Transform your outdoor living with beautifully laid pavers, creating durable and stylish patios and walkways.',
  },
  {
    id: '4',
    order: 4,
    src: '/images/gallery/IMG_1550.jpeg',
    alt: 'Modern house with new siding installation in a neutral tone',
    category: 'house-renovations',
    title: 'Modern Siding Installation',
    serviceSlug: 'house-renovations',
    description: "Upgrade your home's curb appeal and protection with our professional siding installation services.",
  },
  {
    id: '5',
    order: 0,
    src: '/images/gallery/IMG_6340.jpeg',
    alt: 'Tall wooden privacy fence providing seclusion for a backyard',
    category: 'fences',
    title: 'Enhanced Backyard Privacy',
    description: 'Achieve ultimate seclusion and peace with our custom-built privacy fences, tailored to your needs.',
  },
  {
    id: '6',
    order: 1,
    src: '/images/gallery/IMG_6343.jpeg',
    alt: 'Close-up of a sturdy wooden privacy fence panel and post',
    category: 'fences',
    title: 'Durable Privacy Fencing Detail',
    serviceSlug: 'fences',
    description: 'A closer look at the robust construction and quality materials used in our privacy fence installations.',
  },
  {
    id: '7',
    order: 5,
    src: '/images/gallery/IMG_9897.jpeg',
    alt: 'Wooden deck undergoing professional repair and restoration',
    category: 'deck-patio',
    title: 'Professional Deck Restoration',
    serviceSlug: 'deck-patio',
    description: 'Revitalize your outdoor deck with our expert repair and restoration services, ensuring safety and beauty.',
  },
] satisfies GalleryImage[];