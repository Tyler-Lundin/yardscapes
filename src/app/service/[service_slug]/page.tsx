import { SERVICES } from '@/types/services';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    service_slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service_slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const service = SERVICES.find(async (s) => s.slug === (await params).service_slug);

  if (!service) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2>Overview</h2>
              <p>{service.description}</p>
              
              <h2>What We Offer</h2>
              <ul>
                {service.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h2>Process</h2>
              <ol>
                {service.process?.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              <h2>Why Choose Us</h2>
              <ul>
                {service.benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {service.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-lg text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-lg text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process?.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg text-gray-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards transforming your space.
          </p>
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
} 