import Image from 'next/image';
import { FaLeaf, FaHandshake, FaStar } from 'react-icons/fa';

export default function AboutCompany() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600">
              Transforming landscapes and creating outdoor spaces that inspire since 2010
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/company.jpg"
                alt="Yardscapes Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Yardscapes, we believe that every outdoor space has the potential to become a masterpiece. 
                Our mission is to transform ordinary landscapes into extraordinary living spaces that enhance 
                the quality of life for our clients while respecting and preserving the natural environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine artistic vision with technical expertise to create sustainable, beautiful, 
                and functional outdoor environments that stand the test of time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-2xl text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h4>
              <p className="text-gray-600">
                We prioritize eco-friendly practices and sustainable materials in every project.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-600">
                We build lasting relationships through honest communication and reliable service.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-2xl text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for perfection in every detail, delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 