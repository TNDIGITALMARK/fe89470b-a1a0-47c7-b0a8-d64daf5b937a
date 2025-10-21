'use client';

import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'NEO SMARTWATCH',
    price: '$349',
    image: '/generated/product-smartwatch.png',
    description: 'Premium fitness tracking',
  },
  {
    id: 2,
    name: 'AERO DRONE 4K',
    price: '$899',
    image: '/generated/product-drone.png',
    description: 'Professional aerial photography',
  },
  {
    id: 3,
    name: 'PULSAR EARBUDS',
    price: '$199',
    image: '/generated/product-earbuds.png',
    description: 'Wireless audio excellence',
  },
];

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <span className="text-[hsl(var(--primary))] text-sm font-semibold tracking-widest uppercase">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Premium Collection
          </h2>
          <p className="text-[hsl(var(--muted))] text-lg max-w-2xl mx-auto">
            Discover our curated selection of cutting-edge technology designed for the modern lifestyle.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-slideUp`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Hover Overlay with Blue Border */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 border-2 border-[hsl(var(--secondary))] rounded-xl pointer-events-none transition-all duration-300"></div>
                )}

                {/* Wishlist Heart Icon */}
                <button
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-[hsl(var(--primary))] transition-all duration-300 group/heart"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5 text-white group-hover/heart:fill-white transition-all duration-300" />
                </button>

                {/* Blue Glow Effect on Hover */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--secondary))]/20 to-transparent pointer-events-none"></div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[hsl(var(--muted))] text-sm">{product.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[hsl(var(--accent))]">{product.price}</span>

                  <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group/cart">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
