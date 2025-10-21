'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`bg-[hsl(var(--nav-bg))] backdrop-blur-md bg-opacity-90 rounded-2xl shadow-nav transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}
        >
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">TECHNOVA</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 relative group"
              >
                <span>HOME</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#products"
                className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 relative group"
              >
                <span>PRODUCTS</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 relative group"
              >
                <span>ABOUT US</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 relative group"
              >
                <span>CONTACT</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Cart & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <button
                className="relative p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 bg-[hsl(var(--primary))] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 px-6 pb-4 animate-slideUp">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#products"
                  className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRODUCTS
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[hsl(var(--primary))] transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
