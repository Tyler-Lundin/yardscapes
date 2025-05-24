import PageContainer from '@/components/layout/PageContainer';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export default function ContactPage() {
  return (
    <PageContainer>
      <Contact />
    </PageContainer>
  );
}

export const metadata: Metadata = {
  title: 'Contact YardScapes | Get a Free Landscaping Quote',
  description: 'Contact YardScapes today for a free landscaping consultation or quote. Our team is ready to help transform your outdoor space.',
}; 