import React from 'react';
import Link from 'next/link';
import { Zap, Code2, Database, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function SoftwareDevPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary">Technology Capability</Badge>
            <h1>Custom Software Development</h1>
            <p className="text-muted text-base sm:text-lg">
              Designing modular, high-concurrency enterprise solutions, scalable REST APIs, and cross-platform mobile apps.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col gap-3">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold">Frontend & Mobile</h3>
              <p className="text-sm text-muted">Responsive Next.js interfaces with Tailwind CSS and cross-platform mobile applications using Flutter.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <Database className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold">Backend & APIs</h3>
              <p className="text-sm text-muted">Scalable Django REST Framework services, Spring Boot systems, and relational database design with MySQL & PostgreSQL.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold">Architecture & DevOps</h3>
              <p className="text-sm text-muted">Modular monoliths, containerized deployments with Docker, and CI/CD automation pipelines.</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">Discuss Your Project</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}