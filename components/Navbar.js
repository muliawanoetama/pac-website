'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Statement of Faith', href: '/statement-of-faith' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-church-red via-church-navy to-church-red backdrop-blur-md shadow-lg py-2 border-b-4 border-church-navy'
          : 'bg-transparent py-4 border-b-4 border-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
<img src="/logo.jpg" alt="Providence Anglican Church Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-white hover:text-church-red hover:bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-white text-church-red hover:bg-gray-100 font-semibold'
                  : 'bg-church-red text-white hover:bg-red-700 font-semibold'
              }`}
            >
              Join Us Sunday
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled
                ? 'text-white hover:bg-white/10'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-white shadow-xl transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-gray-700 hover:text-church-red hover:bg-church-red/10 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-5 py-3 rounded-md text-center bg-church-red text-white hover:bg-red-700 transition-colors duration-300 font-semibold"
            >
              Join Us Sunday
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
