'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  AlertTriangle, 
  RotateCcw, 
  Home, 
  LifeBuoy, 
  ChevronDown 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error for observability
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col flex-1 w-full justify-center">
      <Section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Decorative Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="max-w-xl mx-auto text-center flex flex-col items-center">
            {/* Top Warning Badge */}
            <Badge variant="primary" className="gap-1.5 mb-6 py-1 px-3.5 text-xs sm:text-sm font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-primary" /> Application Error
            </Badge>

            {/* Error Icon Graphic */}
            <div className="w-20 h-20 rounded-2xl bg-red-50 border border-red-200/80 text-primary flex items-center justify-center shadow-md mb-6">
              <AlertTriangle className="w-10 h-10" />
            </div>

            {/* Title & Explanatory Text */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              Something Went Wrong
            </h1>
            <p className="text-muted text-base sm:text-lg mt-3 max-w-md leading-relaxed">
              We encountered an unexpected issue while rendering this page. You can attempt to reload the component or navigate back to safety.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                onClick={() => reset()}
                className="gap-2 w-full sm:w-auto shadow-md"
              >
                <RotateCcw className="w-4 h-4" /> Try Again
              </Button>
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="outline" size="md" fullWidth className="gap-2">
                  <Home className="w-4 h-4" /> Return to Homepage
                </Button>
              </Link>
            </div>

            {/* Support Information */}
            <div className="mt-10 pt-6 border-t border-subtle w-full flex flex-col items-center gap-3">
              <p className="text-xs text-muted">
                Persistent problem? Let us know so we can resolve it immediately.
              </p>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="gap-1.5 text-xs font-semibold text-primary hover:text-primary">
                  <LifeBuoy className="w-3.5 h-3.5" /> Contact Support Team
                </Button>
              </Link>

              {/* Technical Error Digest (shown if present) */}
              {error?.digest && (
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    Error ID: {error.digest}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
