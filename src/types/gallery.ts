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
  | 'pavers'
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
  'pavers'
];

// Sample gallery data - replace with your actual data
export const GALLERY_IMAGES = [
  {
    id: '2',
    order: 0,
    src: '/images/gallery/IMG_1445.webp',
    alt: 'Newly installed fence securing a residential property',
    category: 'fences',
    title: 'Secure Wooden Fencing',
    serviceSlug: 'fences',
    description: 'Expertly installed wooden fencing providing both security and a classic aesthetic to enhance your property lines.',
  },
  {
    id: '7',
    order: 1,
    src: '/images/gallery/IMG_9897.webp',
    alt: 'Wooden deck undergoing professional repair and restoration',
    category: 'deck-patio',
    title: 'Professional Deck Restoration',
    serviceSlug: 'deck-patio',
    description: 'Revitalize your outdoor deck with our expert repair and restoration services, ensuring safety and beauty.',
  },
  {
    id: '5',
    order: 2,
    src: '/images/gallery/IMG_6340.webp',
    alt: 'Tall wooden privacy fence providing seclusion for a backyard',
    category: 'fences',
    title: 'Enhanced Backyard Privacy',
    description: 'Achieve ultimate seclusion and peace with our custom-built privacy fences, tailored to your needs.',
  },
  {
    id: '6',
    order: 3,
    src: '/images/gallery/IMG_6343.webp',
    alt: 'Close-up of a sturdy wooden privacy fence panel and post',
    category: 'fences',
    title: 'Durable Privacy Fencing Detail',
    serviceSlug: 'fences',
    description: 'A closer look at the robust construction and quality materials used in our privacy fence installations.',
  },
  {
    id: '11',
    order: 4,
    src: '/images/gallery/IMG_0309.webp',
    alt: 'Concrete Patio With Surrounding Brick Walls',
    category: 'concrete-work',
    title: 'Concrete Patio with Brick Walls',
    serviceSlug: 'concrete-work',
    description: 'A beautiful concrete patio with brick walls, providing a modern and durable surface for your outdoor space.',
  },

  {
    id: '4',
    order: 5,
    src: '/images/gallery/IMG_1550.webp',
    alt: 'Modern house with new siding installation in a neutral tone',
    category: 'house-renovations',
    title: 'Modern Siding Installation',
    serviceSlug: 'house-renovations',
    description: "Upgrade your home\'s curb appeal and protection with our professional siding installation services.",
  },

  {
    id: '1',
    order: 6,
    src: '/images/gallery/IMG_0114.webp',
    alt: 'Backhoe performing excavation work for a landscaping project',
    category: 'equipment',
    title: 'Heavy Duty Foundation Work',
    description: 'Our powerful backhoe tackling tough excavation, ensuring a solid foundation for your project.',
  },
  {
    id: '8',
    order: 7,
    src: '/images/gallery/IMG_0310.webp',
    alt: 'Metal Fence Installation',
    category: 'fences',
    title: 'Metal Fence Installation',
    serviceSlug: 'fences',
    description: 'Metal fences provide a modern and durable solution for your property, offering both security and a sleek appearance.',
  },
  {
    id: '9',
    order: 8,
    src: '/images/gallery/IMG_0396.webp',
    alt: 'Pickleball Court Installation',
    category: 'concrete-work',
    title: 'Concrete Work for Pickleball Court',
    serviceSlug: 'concrete-work',
    description: 'Creating a durable and safe surface for pickleball, ensuring optimal gameplay and durability.',
  },
  {
    id: '10',
    order: 9,
    src: '/images/gallery/IMG_0308.webp',
    alt: 'Concrete Patio With Surrounding Brick Walls',
    category: 'concrete-work',
    title: 'Concrete Patio with Brick Walls',
    serviceSlug: 'concrete-work',
    description: 'A beautiful concrete patio with brick walls, providing a modern and durable surface for your outdoor space.',
  },
  // {
  //   id: '3',
  //   order: 10,
  //   src: '/images/gallery/IMG_1549.webp',
  //   alt: 'Artistically laid paver patio creating an elegant outdoor space',
  //   category: 'pavers',
  //   title: 'Elegant Paver Patio',
  //   serviceSlug: 'pavers',
  //   description: 'Transform your outdoor living with beautifully laid pavers, creating durable and stylish patios and walkways.',
  // },
  {
    id: '12',
    order: 11,
    src: '/images/gallery/IMG_0307.webp',
    alt: 'Concrete Patio With Surrounding Brick Walls',
    category: 'concrete-work',
    title: 'Concrete Patio with Brick Walls',
    serviceSlug: 'concrete-work',
    description: 'A beautiful concrete patio with brick walls, providing a modern and durable surface for your outdoor space.',
  },
  {
    id: '13',
    order: 12,
    src: '/images/gallery/IMG_0217.webp',
    alt: 'Pool Pavers',
    category: 'pavers',
    title: 'Pool Pavers',
    serviceSlug: 'pavers',
    description: 'A beautiful concrete patio with brick walls, providing a modern and durable surface for your outdoor space.',
  },
] satisfies GalleryImage[];