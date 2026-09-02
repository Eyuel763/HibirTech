'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_ITEMS, SITE_CONFIG } from '@/lib/constants/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
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
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-muted'
                      : 'text-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/programs">
              <Button size="sm" variant="primary">
                Explore Programs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (Min 44px touch target) */}
          <button
            onClick={toggleMenu}
            className="md:hidden h-11 w-11 flex items-center justify-center rounded-lg text-secondary hover:bg-muted transition-colors focus:outline-none"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-subtle bg-surface px-4 pt-2 pb-6 flex flex-col gap-2 animate-fade-in">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-primary bg-muted font-semibold'
                    : 'text-foreground hover:bg-muted/60'
                }`}
              >
                {item.label}
                <span className="text-muted text-sm">→</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link href="/programs" onClick={closeMenu}>
              <Button fullWidth variant="primary" size="md">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};