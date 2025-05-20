export interface Owner {
    name: string;
    title: string;
    bio: string;
    quote: string;
    yearsExperience: number;
    achievements: string[];
    specialties: string[];
    certifications: string[];
    image: string;
}

export const OWNER: Owner = {
    name: "Dean Milton Martin",
    title: "Founder & Master Craftsman",
    bio: "With over 10 years of experience in landscape architecture and construction, Dean has established himself as a visionary in creating exceptional outdoor spaces. His journey began with a passion for transforming ordinary spaces into extraordinary environments, combining artistic vision with technical expertise.",
    quote: "Every project is a canvas where nature meets craftsmanship. We don't just build spaces; we create experiences that enrich lives and stand the test of time.",
    yearsExperience: 10,
    achievements: [
        "Master Craftsman Certification",
        "Award-Winning Landscape Designer",
        "Featured in Architectural Digest",
        "Certified Arborist"
    ],
    specialties: [
        "Custom Landscape Design",
        "Luxury Outdoor Living Spaces",
        "Sustainable Landscaping",
        "Historical Restoration"
    ],
    certifications: [
        "International Society of Arboriculture",
        "American Society of Landscape Architects",
        "National Association of Landscape Professionals",
        "Sustainable Landscape Management"
    ],
    image: "/images/dean.png"
}