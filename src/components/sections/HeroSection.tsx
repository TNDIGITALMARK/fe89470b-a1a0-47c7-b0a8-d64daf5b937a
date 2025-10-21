'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--card))]"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div
          className={`bg-[hsl(var(--card))] rounded-3xl shadow-card overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Content */}
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-block px-4 py-1.5 bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 rounded-full">
                <span className="text-[hsl(var(--primary))] text-sm font-semibold tracking-wide">
                  NEXT GENERATION TECH
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                FUTURE UNLEASHED.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                  EXPLORE IMMERSIVE TECH.
                </span>
              </h1>

              <p className="text-lg text-[hsl(var(--muted))] leading-relaxed">
                Experience the next generation of electronics. Discover innovative devices that seamlessly integrate into modern life.
              </p>

              <button className="group bg-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-card-hover flex items-center space-x-2">
                <span>SHOP NOW</span>
                <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right - Hero Image */}
            <div className="relative animate-slideUp">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src="/generated/hero-vr-headset.png"
                  alt="VR Headset with blue neon glow"
                  className="w-full h-auto object-cover"
                />
                {/* Blue glow overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--secondary))]/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--primary))]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[hsl(var(--secondary))]/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[hsl(var(--muted))]" />
      </div>
    </section>
  );
}
