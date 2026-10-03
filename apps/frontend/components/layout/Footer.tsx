import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { FOOTER_NAV_CONFIG, SITE_CONFIG } from '@/lib/constants/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-subtle bg-secondary text-white pt-12 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-black text-base">
                H
              </div>
              <span className="font-bold text-lg text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Col 2: Core Products */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">Products & Solutions</h4>
            {FOOTER_NAV_CONFIG.products.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Col 3: STEM Academy */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">STEM Academy</h4>
            {FOOTER_NAV_CONFIG.academy.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">Company & Contact</h4>
            {FOOTER_NAV_CONFIG.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-700/60 text-xs text-slate-400 space-y-1">
              <p>📍 {SITE_CONFIG.location}</p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="hover:text-primary transition-colors block"
              >
                ✉️ {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/academy" className="hover:text-white transition-colors">
              Explore STEM Academy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};