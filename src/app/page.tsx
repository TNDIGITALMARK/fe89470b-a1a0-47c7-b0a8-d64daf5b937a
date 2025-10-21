import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import AboutSection from '@/components/sections/AboutSection';
import SubscribeSection from '@/components/sections/SubscribeSection';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navigation />

      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <SubscribeSection />
      </main>

      <Footer />
    </div>
  );
}