"use client"
import { SERVICES } from '@/types/services'; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Services() {
  const router = useRouter();
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-white dark:from-black dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">Our Expert Services</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming spaces with precision, creativity, and dedication to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service) => (
            <div 
              key={service.title} 
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden group"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image 
                  src={service.imageUrl} 
                  alt={`Image for ${service.title}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <span 
                  className="absolute aspect-square transition-all overflow-hidden duration-300 ease-in-out backdrop-blur-sm top-4 right-4 flex items-center justify-center gap-1 px-1.5 rounded-full bg-white/75 dark:bg-neutral-700/75 backdrop-blur-sm"
                >
                  <service.icon className={`${service.iconClassName} dark:text-green-400`} />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 gap-2">
                  {typeof service.icon === 'function' ? (
                    <service.icon className={`${service.iconClassName || 'w-7 h-7 text-green-600'} dark:text-green-400`} />
                  ) : (
                    <span className="text-3xl dark:text-white">{service.icon}</span> 
                  )}
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 flex-grow min-h-[60px]">
                  {service.description.length > 100 ? `${service.description.substring(0, 97)}...` : service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-2.5 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    {service.estimatedTime && (
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Est. Time: <span className="font-medium text-gray-700 dark:text-gray-200">{service.estimatedTime}</span>
                      </p>
                    )}
                    {!service.estimatedTime && <div />} 
                    <button 
                      className="text-xs sm:text-sm bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
                      onClick={() => router.push(`/service/${service.slug}`)} 
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 