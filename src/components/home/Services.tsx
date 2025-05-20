"use client"
import { SERVICES as APP_SERVICES, Service } from '@/types/services'; 
// Assuming Service interface is exported from '@/types/services'
// You might need to adjust icon imports based on your actual icon library
// import { IconType } from 'react-icons'; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface ServiceWithImageUrl extends Service { // Extends the existing Service type
  imageUrl: string;
  // If your icon prop in Service type is a React component, it might be typed like:
  // icon: IconType; 
}

const SERVICES: ServiceWithImageUrl[] = APP_SERVICES.map((service) => ({
  ...service,
  imageUrl: `https://picsum.photos/seed/${service.title.replace(/\s+/g, '-')}/600/400`,
}));

export default function Services() {
  const router = useRouter();
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">Our Expert Services</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming spaces with precision, creativity, and dedication to quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service) => (
            <div 
              key={service.title} // Assuming title is unique and a property of Service
              className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden group"
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
                  className="absolute aspect-square transition-all overflow-hidden duration-300 ease-in-out backdrop-blur-sm top-4 right-4 flex items-center justify-center gap-1 px-1.5 rounded-full bg-white/75 backdrop-blur-sm"
                >
                  <service.icon className={service.iconClassName} />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 gap-2">
                  {typeof service.icon === 'function' ? (
                    <service.icon className={service.iconClassName || 'w-7 h-7 text-green-600'} />
                  ) : (
                    <span className="text-3xl">{service.icon}</span> 
                  )}
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-5 flex-grow min-h-[60px]">
                  {service.description.length > 100 ? `${service.description.substring(0, 97)}...` : service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    {service.estimatedTime && (
                      <p className="text-xs sm:text-sm text-gray-500">
                        Est. Time: <span className="font-medium text-gray-700">{service.estimatedTime}</span>
                      </p>
                    )}
                    {!service.estimatedTime && <div />} 
                    <button 
                      className="text-xs sm:text-sm bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
                      onClick={() => router.push(`/services/${service.slug}`)} 
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