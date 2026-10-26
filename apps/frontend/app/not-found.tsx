import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Compass, 
  GraduationCap, 
  Truck, 
  Newspaper, 
  LifeBuoy, 
  ArrowRight 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 w-full justify-center">
      <Section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Top Badge */}
            <Badge variant="primary" className="gap-1.5 mb-6 py-1 px-3.5 text-xs sm:text-sm font-semibold">
              <Compass className="w-3.5 h-3.5 text-primary" /> Error 404
            </Badge>

            {/* Large 404 Number */}
            <h1 className="text-7xl sm:text-9xl font-black text-secondary tracking-tight select-none leading-none">
              4<span className="text-primary">0</span>4
            </h1>

            {/* Title & Description */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mt-4 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-muted text-base sm:text-lg mt-3 max-w-lg leading-relaxed">
              The page you are looking for doesn't exist, has been relocated, or is temporarily unavailable.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="primary" size="md" fullWidth className="gap-2">
                  <Home className="w-4 h-4" /> Back to Homepage
                </Button>
              </Link>
              <Link href="/academy" className="w-full sm:w-auto">
                <Button variant="outline" size="md" fullWidth className="gap-2">
                  <GraduationCap className="w-4 h-4" /> Explore STEM Academy
                </Button>
              </Link>
            </div>

            {/* Helpful Quick Links Card */}
            <div className="w-full mt-14 pt-10 border-t border-subtle">
              <p className="text-xs font-bold text-muted uppercase tracking-wider mb-4">
                Popular Destinations
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
                <Link href="/academy" className="group">
                  <Card className="p-4 hover:border-primary/40 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">STEM Academy</p>
                        <p className="text-xs text-muted truncate">Robotics & Labs</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Card>
                </Link>

                <Link href="/fleet-management" className="group">
                  <Card className="p-4 hover:border-primary/40 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">Fleet IoT</p>
                        <p className="text-xs text-muted truncate">Telemetry Systems</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Card>
                </Link>

                <Link href="/contact" className="group">
                  <Card className="p-4 hover:border-primary/40 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-secondary flex items-center justify-center shrink-0">
                        <LifeBuoy className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">Contact Support</p>
                        <p className="text-xs text-muted truncate">Inquiries & Help</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
