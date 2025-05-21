import { TESTIMONIALS } from '@/types/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-t from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with YardScapes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-neutral-900/50 dark:hover:shadow-neutral-900/70 transition-all duration-300 ease-in-out p-6 flex flex-col"
            >
              <div className="text-emerald-600 dark:text-emerald-400 mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  className="w-8 h-8 opacity-75" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391C14.017 10.091 16.606 7.5 20 7.5v2c-1.657 0-3 1.343-3 3v1h3v7h-5.983zM4.017 21v-7.391C4.017 10.091 6.606 7.5 10 7.5v2c-1.657 0-3 1.343-3 3v1h3v7H4.017z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-neutral-200 mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-neutral-700">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 