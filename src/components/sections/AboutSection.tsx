'use client';

import { Zap, Shield, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] rounded-2xl p-8 md:p-12 shadow-card">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fadeIn">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              VISION & INNOVATION
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Story */}
            <div className="space-y-6 animate-slideUp">
              <p className="text-[hsl(var(--muted))] text-lg leading-relaxed">
                We curate cutting-edge technology that seamlessly integrates into modern life, focusing on products
                that combine innovative functionality with timeless design.
              </p>
              <p className="text-[hsl(var(--muted))] text-lg leading-relaxed">
                Our mission is to bridge the gap between futuristic technology and everyday usability, ensuring
                every device we offer enhances your digital lifestyle.
              </p>

              <div className="pt-4">
                <p className="text-white font-semibold text-lg mb-2">© 2025 TECHNOVA</p>
                <p className="text-[hsl(var(--muted))] text-sm">All rights reserved</p>
              </div>
            </div>

            {/* Right - Key Features */}
            <div className="space-y-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
              {/* Innovation */}
              <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--background))]/50 rounded-xl hover:bg-[hsl(var(--background))]/70 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Innovation First</h3>
                  <p className="text-[hsl(var(--muted))] text-sm">
                    Constantly pushing boundaries with next-generation technology and design.
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--background))]/50 rounded-xl hover:bg-[hsl(var(--background))]/70 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Premium Quality</h3>
                  <p className="text-[hsl(var(--muted))] text-sm">
                    Rigorous testing and quality control ensure excellence in every product.
                  </p>
                </div>
              </div>

              {/* Global */}
              <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--background))]/50 rounded-xl hover:bg-[hsl(var(--background))]/70 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Global Reach</h3>
                  <p className="text-[hsl(var(--muted))] text-sm">
                    Delivering innovative technology to customers worldwide with seamless service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
