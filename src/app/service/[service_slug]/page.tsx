'use client';

import { SERVICES } from '@/types/services';
import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';
import Hero from '@/components/Hero';

interface PageProps {
  params: Promise<{
    service_slug: string;
  }>;
}

export default function ServicePage({ params: paramsPromise }: PageProps) {
  const params = use(paramsPromise);
  const service = SERVICES.find((s) => s.slug === params.service_slug);
  const router = useRouter();

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Hero 
        bgImageSrc={service.imageUrl}
        title={service.title} 
        description={service.description} 
      />

      {/* Back Button */}
      <section className="py-4 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push('/services')}
            className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </button>
        </div>
      </section>

      {/* Main Content Area - Two Column Layout on Desktop */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Column: Service Details (Prose) */}
            <div className="lg:col-span-3">
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 md:p-10 rounded-xl shadow-lg dark:shadow-neutral-900/50">
                <div className="prose prose-lg dark:prose-invert max-w-none 
                              prose-headings:font-serif prose-headings:text-black dark:prose-headings:text-white
                              prose-p:text-neutral-700 dark:prose-p:text-neutral-300
                              prose-li:text-neutral-700 dark:prose-li:text-neutral-300
                              prose-strong:text-black dark:prose-strong:text-white">
                  <h2 className="text-4xl mb-8 !mt-0">Overview</h2> {/* Added !mt-0 to override prose margin */}
                  <p className="mb-8">{service.description}</p>
                  
                  <h2 className="text-3xl mt-12 mb-6">What We Offer</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-8">
                    {service.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <h2 className="text-3xl mt-12 mb-6">Why Choose Us</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-8">
                    {service.benefits?.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Key Advantages (Features, Benefits, Process) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Our Process Card */}
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-neutral-900/50">
                <h3 className="text-3xl font-serif font-bold text-black dark:text-white mb-8 text-center">Our Process</h3>
                <div className="space-y-6">
                  {service.process?.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-neutral-700 dark:text-neutral-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Benefits Combined (Optional - can be separate cards too) */}
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-neutral-900/50">
                 <h3 className="text-3xl font-serif font-bold text-black dark:text-white mb-8 text-center">Highlights</h3>
                <div>
                  <h4 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Key Features</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-2.5 h-2.5 mt-1.5 bg-emerald-600 dark:bg-emerald-500 rounded-full mr-3"></span>
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {service.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-2.5 h-2.5 mt-1.5 bg-emerald-600 dark:bg-emerald-500 rounded-full mr-3"></span>
                        <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-black dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards transforming your space.
          </p>
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg text-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-500 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
} 