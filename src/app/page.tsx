import PageContainer from '@/components/layout/PageContainer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Gallery from '@/components/home/Gallery';

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
      
    </PageContainer>
  );
}
