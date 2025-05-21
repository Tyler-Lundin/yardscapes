import { SERVICES } from '@/types/services';
import Link from 'next/link';
import { IconType } from 'react-icons';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Discover our comprehensive range of landscaping and construction services, 
              designed to transform your outdoor space into something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon as IconType;
              return (
                <Link
                  key={service.slug}
                  href={`/service/${service.slug}`}
                  className="group bg-white dark:bg-neutral-800 rounded-lg shadow-lg h-fit overflow-hidden hover:shadow-xl transition-shadow"
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
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 