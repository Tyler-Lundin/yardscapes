# YardScapes NextJS 15 Application - Foundation

## Project Overview
This document outlines the foundation for the YardScapes application built with NextJS 15. The application will initially focus on the public-facing website, with plans to add additional functionality later.

## Tech Stack
- NextJS 15
- Tailwind CSS
- React
- TypeScript

## Project Structure
```
yardscapes/
├── app/                   # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home/landing page
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
├── components/            # React components
│   ├── ui/                # UI components
│   ├── layout/            # Layout components
│   │   └── PageContainer.tsx
│   ├── home/              # Home page components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── docs/                  # Documentation
```

## Component Philosophy
- Each component should be extracted into its own file
- Functions should be separated into their own modules when appropriate
- Reusable UI components should be placed in the components/ui directory
- Page-specific components should be organized by page/feature

## Landing Page Structure
The landing page (app/page.tsx) will have a clean, modular structure:

```tsx
import PageContainer from '@/components/layout/PageContainer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Services />
      <Testimonials />
    </PageContainer>
  );
}
```

## Future Plans
- Admin dashboard
- Customer account management
- Service booking system
- Payment processing
- Content management system

## Development Approach
1. Set up the NextJS 15 project with Tailwind CSS
2. Create base layout and UI components
3. Implement landing page components
4. Add additional pages and functionality
5. Connect to backend services as needed 