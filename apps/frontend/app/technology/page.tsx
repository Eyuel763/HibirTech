import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Bot, 
  Radio, 
  ArrowRight, 
  Code2, 
  Layers, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

const SERVICES = [
  {
    slug: 'software-development',
    title: 'Custom Software Development',
    description: 'Modern, high-concurrency web and mobile applications engineered with Django, Next.js, and Flutter.',
    icon: Zap,
    features: ['Modular Monoliths & Microservices', 'REST & GraphQL APIs', 'Cross-Platform Mobile Apps'],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence & Data',
    description: 'Predictive modeling, automated workflows, and practical machine learning solutions tailored for business needs.',
    icon: Bot,
    features: ['Computer Vision Systems', 'Data Analytics Pipelines', 'Intelligent Process Automation'],
  },
  {
    slug: 'iot',
    title: 'IoT & Embedded Systems',
    description: 'Hardware-in-the-loop integration, ESP32 micro-controllers, real-time sensor dashboards, and edge computing.',
    icon: Radio,
    features: ['Real-Time Telemetry', 'Micro-controller Firmware', 'IoT Dashboard Architecture'],
  },
];

export default function TechnologyHubPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Layers className="w-3.5 h-3.5 mr-1 inline-block" /> Enterprise & Technical Capabilities
            </Badge>
            <h1 className="text-secondary leading-tight">
              Modern Technology Solutions for <span className="text-primary">Growing Ecosystems</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              From full-stack web platforms and cross-platform mobile apps to embedded IoT systems and AI integration, Hibir Tech delivers clean, maintainable engineering.
            </p>
          </div>
        </Container>
      </Section>

      {/* SERVICE CARDS */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <Card key={service.slug} className="flex flex-col justify-between p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                    <ul className="flex flex-col gap-2 pt-2 border-t border-subtle">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-secondary flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link href={`/technology/${service.slug}`}>
                      <Button variant="outline" size="sm" fullWidth className="justify-between">
                        Explore Capability <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}