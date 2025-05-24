import PageContainer from '@/components/layout/PageContainer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/Gallery';
import AboutOwner from '@/components/about/AboutOwner';
import type { Metadata } from 'next';

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Services />
      <AboutOwner />
      <Testimonials />
      <Gallery isHome />
      <Contact />
      
    </PageContainer>
  );
}

export const metadata: Metadata = {
  title: 'YardScapes | Professional Landscaping & Outdoor Living',
  description: 'YardScapes provides professional landscaping, hardscaping, and outdoor living solutions. Explore our services, customer testimonials, and gallery to see how we can transform your yard.',
};
