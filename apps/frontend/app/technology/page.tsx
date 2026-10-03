import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  GraduationCap, 
  Code2, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { PRODUCTS } from '@/lib/constants/products';

export default function TechnologyHubPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Layers className="w-3.5 h-3.5 mr-1 inline-block" /> Product & Technical Capabilities
            </Badge>
            <h1 className="text-secondary leading-tight">
              Technology Solutions for <span className="text-primary">Fleet & Education</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Explore our core products and upcoming enterprise capabilities, engineered with ESP32 IoT hardware, Django REST Framework backends, Next.js web applications, and Flutter mobile apps.
            </p>
          </div>
        </Container>
      </Section>

      {/* PRODUCTS & CAPABILITIES GRID */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.slug} className="flex flex-col justify-between p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center font-bold">
                      {product.slug === 'fleet-management' && <Truck className="w-6 h-6" />}
                      {product.slug === 'stem-academy' && <GraduationCap className="w-6 h-6" />}
                      {product.slug === 'software-development' && <Code2 className="w-6 h-6 text-amber-600" />}
                    </div>
                    {product.status === 'coming_soon' ? (
                      <Badge variant="accent" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Coming Soon
                      </Badge>
                    ) : (
                      <Badge variant="primary">{product.badge}</Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-secondary">{product.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{product.shortDescription}</p>

                  <ul className="flex flex-col gap-2 pt-2 border-t border-subtle">
                    {product.highlights.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="text-xs text-secondary flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link href={product.href}>
                    <Button
                      variant={product.status === 'coming_soon' ? 'outline' : 'primary'}
                      size="sm"
                      fullWidth
                      className="justify-between"
                    >
                      {product.ctaText} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}