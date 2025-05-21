import Logo from '../ui/Logo';
import { COMPANY } from '@/types/company';
import { CONTACT_INFO } from '@/types/contact';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between gap-8 flex-wrap">
          <div>
            <div className="mb-4">
              <Logo size="sm" variant="full" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {COMPANY.description}
            </p>
          </div>
          <span className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Services</Link></li>
                <li><Link href="/#about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">About Us</Link></li>
                <li><Link href="/#gallery" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Gallery</Link></li>
                <li><Link href="/#contact" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {COMPANY.serviceArea.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Dean</h3>
              <address className="text-gray-600 dark:text-gray-400 not-italic">
                <p>Willows, CA</p>
                <p>Glenn County</p>
                <p className="mt-2">Phone: {CONTACT_INFO.phone}</p>
                <p>Email: {CONTACT_INFO.email} </p>
              </address>
            </div>
          </span>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="text-sm mt-2">Founded {COMPANY.founded}</p>
        </div>
      </div>
    </footer>
  );
} 