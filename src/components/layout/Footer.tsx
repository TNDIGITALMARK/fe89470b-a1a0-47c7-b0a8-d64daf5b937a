'use client';

import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--primary))]/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">TECHNOVA</span>
            </div>
            <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
              Redefining technology for tomorrow. Experience innovation that seamlessly integrates into modern life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-300 text-sm"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[hsl(var(--primary))]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-[hsl(var(--muted))] text-sm">
              © {currentYear} TECHNOVA. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[hsl(var(--muted))] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[hsl(var(--muted))] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--muted))] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[hsl(var(--muted))] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[hsl(var(--muted))] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
