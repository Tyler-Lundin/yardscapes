import { IconType } from "react-icons";
import { FcLandscape } from "react-icons/fc";
import { GiConcreteBag, GiWoodBeam } from "react-icons/gi";
import { LuFence } from "react-icons/lu";
import { IoHammerOutline } from "react-icons/io5";

export interface Service {
  title: string;
  description: string;
  icon: IconType;
  iconClassName?: string;
  category: 'construction' | 'landscaping' | 'renovation';
  features: string[];
  estimatedTime?: string;
  slug: string;
  longDescription?: string;
  imageUrl: string;
  benefits?: string[];
  process?: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Concrete Work",
    description: "Professional concrete installation and repair services for driveways, patios, and foundations",
    icon: GiConcreteBag,
    iconClassName: "text-red-800",
    category: "construction",
    features: ["Driveway Installation", "Patio Construction", "Foundation Work", "Concrete Repair"],
    estimatedTime: "2-5 days",
    slug: "concrete-work",
    imageUrl: "/images/gallery/IMG_0309.jpeg",
    longDescription: "Our concrete work services combine technical expertise with artistic vision to create durable, beautiful surfaces that enhance your property's value and functionality. From driveways to patios, we ensure every project meets the highest standards of quality and craftsmanship.",
    benefits: [
      "Increased property value",
      "Durable and long-lasting surfaces",
      "Custom design options",
      "Professional installation"
    ],
    process: [
      "Initial consultation and site assessment",
      "Detailed design and material selection",
      "Professional installation by experienced crew",
      "Quality inspection and final walkthrough"
    ]
  },
  {
    title: "Fencing Solutions",
    description: "Custom fencing installation and repair for residential and commercial properties",
    icon: LuFence,
    iconClassName: "text-yellow-700",
    category: "construction",
    features: ["Wood Fencing", "Metal Fencing", "Privacy Fencing", "Garden Fencing"],
    estimatedTime: "1-3 days",
    slug: "fencing-solutions",
    imageUrl: "/images/gallery/IMG_6340.jpeg",
    longDescription: "Transform your property with our custom fencing solutions. We offer a wide range of materials and styles to create the perfect balance of security, privacy, and aesthetic appeal for your space.",
    benefits: [
      "Enhanced privacy and security",
      "Custom design options",
      "Quality materials and craftsmanship",
      "Professional installation"
    ],
    process: [
      "Property assessment and design consultation",
      "Material selection and quote",
      "Professional installation",
      "Final inspection and warranty review"
    ]
  },
  {
    title: "House Renovations",
    description: "Complete home renovation and remodeling services to transform your living space",
    icon: IoHammerOutline,
    iconClassName: "text-blue-600",
    category: "renovation",
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Room Additions", "Interior Updates", "Exterior Renovation"],
    estimatedTime: "Varies by project",
    slug: "house-renovations",
    imageUrl: "/images/gallery/IMG_1550.jpeg",
    longDescription: "Our comprehensive renovation services transform your house into the home of your dreams. We handle everything from kitchen remodels to full home renovations with meticulous attention to detail.",
    benefits: [
      "Increased home value",
      "Modern functionality",
      "Custom design solutions",
      "Professional project management"
    ],
    process: [
      "Initial consultation and design planning",
      "Detailed project proposal",
      "Professional renovation execution",
      "Quality assurance and final walkthrough"
    ]
  },
  {
    title: "Landscaping",
    description: "Professional landscape design and maintenance services for beautiful outdoor spaces",
    icon: FcLandscape,
    iconClassName: "",
    category: "landscaping",
    features: ["Garden Design", "Lawn Maintenance", "Irrigation Systems", "Outdoor Lighting"],
    estimatedTime: "1-2 weeks",
    slug: "landscaping",
    imageUrl: "/images/gallery/IMG_0217.jpeg",
    longDescription: "Create your perfect outdoor oasis with our comprehensive landscaping services. We combine artistic vision with horticultural expertise to design and maintain beautiful, functional outdoor spaces.",
    benefits: [
      "Enhanced curb appeal",
      "Increased property value",
      "Sustainable design options",
      "Professional maintenance"
    ],
    process: [
      "Site analysis and design consultation",
      "Custom landscape design",
      "Professional installation",
      "Ongoing maintenance plans"
    ]
  },
  {
    title: "Deck & Patio",
    description: "Custom deck and patio construction to enhance your outdoor living space",
    icon: GiWoodBeam,
    iconClassName: "text-yellow-700",
    category: "construction",
    features: ["Wood Decks", "Composite Decks", "Patio Design", "Outdoor Kitchens"],
    estimatedTime: "1-2 weeks",
    slug: "deck-patio",
    imageUrl: "/images/gallery/IMG_9897.jpeg",
    longDescription: "Extend your living space outdoors with our custom deck and patio solutions. We create beautiful, functional outdoor areas that perfectly complement your home's architecture and your lifestyle.",
    benefits: [
      "Expanded living space",
      "Increased property value",
      "Custom design options",
      "Professional craftsmanship"
    ],
    process: [
      "Design consultation",
      "Material selection",
      "Professional construction",
      "Final inspection and warranty"
    ]
  },
]


