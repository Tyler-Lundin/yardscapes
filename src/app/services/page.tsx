import Link from "next/link";
import { SERVICES, Service } from "@/types/services";
import { Metadata } from "next";
import Hero from '@/components/Hero';
import { IconType } from "react-icons";

export const metadata: Metadata = {
  title: "Our Services | YardScapes",
  description: "Explore the wide range of landscaping and construction services offered by YardScapes. From concrete work to full yard transformations, we do it all.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero 
        title="Our Services"
        description="Discover our comprehensive range of landscaping and construction services, designed to transform your outdoor space into something extraordinary."
        bgImageSrc="/images/textures/brick-texture.webp"
      />

      <section className="py-12 md:py-20 bg-white dark:bg-black ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const Icon = service.icon as IconType;
  return (
    <Link
      href={`/service/${service.slug}`}
      className={`group bg-white dark:bg-neutral-800 rounded-lg shadow-lg h-fit overflow-hidden hover:shadow-xl transition-shadow ${className || ''}`}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Icon className={`text-4xl ${service.iconClassName}`} />
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
            {service.title}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-white/80 mb-6">
          {service.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            {service.estimatedTime}
          </span>
          <span className="px-4 py-2 bg-neutral-100 text-gray-700 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>
      </div>
      <div className="px-8 py-4 bg-neutral-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-emerald-600 font-medium">
          <span>Learn More</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}; 