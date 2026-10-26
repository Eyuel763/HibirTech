'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';
import { MAIN_NAV_ITEMS, SITE_CONFIG, PRODUCT_NAV_ITEMS } from '@/lib/constants/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-subtle bg-surface/95 backdrop-blur-md transition-all">
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight text-secondary tracking-tight">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Ethiopia
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'text-primary bg-primary/10 font-bold'
                        : 'text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <Badge variant="outline" className="text-[10px] py-0 px-1.5">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden xl:flex items-center gap-2.5 whitespace-nowrap">
              <Link href="/academy/programs">
                <Button size="sm" variant="primary" className="whitespace-nowrap">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/fleet-management#demo">
                <Button size="sm" variant="outline" className="border-secondary/20 text-secondary hover:bg-muted whitespace-nowrap">
                  Fleet Demo
                </Button>
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden h-11 w-11 flex items-center justify-center rounded-xl text-secondary hover:bg-muted/80 transition-colors focus:outline-none"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isOpen}
            >
              <Menu className="w-6 h-6 text-secondary" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile & Tablet Navigation Full-Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-surface flex flex-col xl:hidden animate-fade-in">
          {/* Mobile Header Bar */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-subtle bg-surface">
            <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-sm">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight text-secondary">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Ethiopia
                </span>
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="h-11 w-11 flex items-center justify-center rounded-xl text-secondary hover:bg-muted/80 transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-secondary" />
            </button>
          </div>

          {/* Scrollable Nav Links & CTAs */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted px-3 mb-1">Menu</span>
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3.5 rounded-xl text-lg font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-primary bg-red-50/90 font-bold border-l-4 border-primary pl-3.5'
                        : 'text-secondary hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="outline" className="text-[10px] py-0 px-2">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-subtle flex flex-col gap-3 mt-6">
              <Link href="/academy/programs" onClick={closeMenu} className="w-full">
                <Button fullWidth variant="primary" size="lg" className="h-12 text-base font-bold shadow-md shadow-red-600/20">
                  Enroll in STEM Academy
                </Button>
              </Link>
              <Link href="/fleet-management#demo" onClick={closeMenu} className="w-full">
                <Button fullWidth variant="outline" size="lg" className="h-12 text-base font-semibold border-secondary/20 text-secondary">
                  Request Fleet Demo
                </Button>
              </Link>

              <div className="pt-3 text-center text-xs text-muted flex items-center justify-center gap-3">
                <span>📍 {SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};