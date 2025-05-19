export interface GalleryImage {
  id: string;
  src: string;
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
  | 'all';

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'all',
  'concrete-work',
  'fencing-solutions',
  'house-renovations',
  'landscaping',
  'deck-patio'
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/concrete-1.jpg',
    alt: 'Modern concrete driveway installation',
    category: 'concrete-work',
    title: 'Modern Driveway',
    description: 'Custom concrete driveway with decorative finish',
    featured: true,
    serviceSlug: 'concrete-work'
  },
  {
    id: '2',
    src: '/images/gallery/fence-1.jpg',
    alt: 'Custom privacy fence installation',
    category: 'fencing-solutions',
    title: 'Privacy Fence',
    description: 'Premium wood privacy fence with custom design',
    featured: true,
    serviceSlug: 'fencing-solutions'
  },
  {
    id: '3',
    src: '/images/gallery/renovation-1.jpg',
    alt: 'Kitchen renovation project',
    category: 'house-renovations',
    title: 'Modern Kitchen',
    description: 'Complete kitchen renovation with custom cabinetry',
    featured: true,
    serviceSlug: 'house-renovations'
  },
  {
    id: '4',
    src: '/images/gallery/landscape-1.jpg',
    alt: 'Landscaped backyard oasis',
    category: 'landscaping',
    title: 'Backyard Oasis',
    description: 'Complete landscape design with water features',
    featured: true,
    serviceSlug: 'landscaping'
  },
  {
    id: '5',
    src: '/images/gallery/deck-1.jpg',
    alt: 'Custom deck installation',
    category: 'deck-patio',
    title: 'Custom Deck',
    description: 'Premium wood deck with built-in seating',
    featured: true,
    serviceSlug: 'deck-patio'
  }
]; 