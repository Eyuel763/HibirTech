import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { MAIN_NAV_ITEMS, SITE_CONFIG } from '@/lib/constants/navigation';

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

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">Quick Navigation</h4>
            {MAIN_NAV_ITEMS.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Col 3: Programs & Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">Impact Areas</h4>
            <Link href="/programs" className="text-sm text-slate-300 hover:text-primary transition-colors">
              STEM Academy Programs
            </Link>
            <Link href="/schools" className="text-sm text-slate-300 hover:text-primary transition-colors">
              School Partnerships
            </Link>
            <Link href="/projects" className="text-sm text-slate-300 hover:text-primary transition-colors">
              Robotics & Student Showcase
            </Link>
            <Link href="/events" className="text-sm text-slate-300 hover:text-primary transition-colors">
              Workshops & Competitions
            </Link>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-base mb-1">Contact Us</h4>
            <p className="text-sm text-slate-300">📍 {SITE_CONFIG.location}</p>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="text-sm text-slate-300 hover:text-primary transition-colors"
            >
              ✉️ {SITE_CONFIG.contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};