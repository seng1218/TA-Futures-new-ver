import ThreeCanvas from "@/components/ThreeScene/ThreeCanvas";
import HomeClient from "@/components/HomeClient";
import HeroSection from '@/components/HeroSection';
import BentoGrid from '@/components/BentoGrid';
import MarketIntelligence from '@/components/MarketIntelligence';
import WhyTAF from '@/components/WhyTAF';
import ProductsSection from '@/components/ProductsSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background - Stays constant */}
      <ThreeCanvas />

      {/* Client-side wrapper for animations and loading state */}
      <HomeClient>
        {/* ===== HERO SECTION ===== */}
        <div id="hero" className="hero-content-reveal">
          <HeroSection />
        </div>

        {/* ===== WHY TAF SECTION ===== */}
        <div id="why-taf">
          <WhyTAF />
        </div>

        {/* ===== PRODUCTS SECTION ===== */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* ===== TRADER UTILITIES SECTION ===== */}
        <div id="utilities">
          <BentoGrid />
        </div>

        {/* ===== MARKET INTELLIGENCE SECTION ===== */}
        <div id="market-intel">
          <MarketIntelligence />
        </div>
      </HomeClient>
    </main>
  );
}
