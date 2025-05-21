import PageContainer from '@/components/layout/PageContainer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/Gallery';
import AboutOwner from '@/components/about/AboutOwner';

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
