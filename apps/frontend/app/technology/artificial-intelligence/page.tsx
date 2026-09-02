import React from 'react';
import Link from 'next/link';
import { Bot, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function AIPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="accent">Technology Capability</Badge>
            <h1>Artificial Intelligence & Data Solutions</h1>
            <p className="text-muted text-base sm:text-lg">
              Integrating intelligent ML models, computer vision pipelines, and predictive analytics into operational systems.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col gap-3">
              <Bot className="w-8 h-8 text-amber-600" />
              <h3 className="text-lg font-bold">Machine Learning Models</h3>
              <p className="text-sm text-muted">Custom classification and regression models trained on real-world datasets for targeted problem solving.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <Cpu className="w-8 h-8 text-amber-600" />
              <h3 className="text-lg font-bold">Computer Vision & Hardware</h3>
              <p className="text-sm text-muted">Edge-based visual processing connected to IoT devices for automated inspection and safety.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <TrendingUp className="w-8 h-8 text-amber-600" />
              <h3 className="text-lg font-bold">Data Engineering</h3>
              <p className="text-sm text-muted">Structured data aggregation, ETL pipelines, and interactive analytics dashboards.</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">Explore AI Integrations</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}