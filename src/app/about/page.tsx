import AboutCompany from '@/components/about/AboutCompany';
import AboutOwner from '@/components/about/AboutOwner';
import type { Metadata } from 'next';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutCompany />
      <AboutOwner />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'About YardScapes | Professional Landscaping Company',
  description: 'Learn about YardScapes, our passion for landscaping, and our commitment to providing exceptional outdoor transformations and customer satisfaction.',
}; 