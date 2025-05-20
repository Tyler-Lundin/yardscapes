import PageContainer from '@/components/layout/PageContainer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/Gallery';
import AboutOwner from '@/components/about/AboutOwner';
import AboutCompany from '@/components/about/AboutCompany';

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Services />
      <AboutCompany />
      <AboutOwner />
      <Testimonials />
      <Gallery />
      <Contact />
      
    </PageContainer>
  );
}
