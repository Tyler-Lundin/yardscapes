import { PageContainerProps } from '@/types/layout';

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto pt-8">
        {children}
      </div>
    </main>
  );
} 