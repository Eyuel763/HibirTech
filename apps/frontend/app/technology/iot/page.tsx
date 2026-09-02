import React from 'react';
import Link from 'next/link';
import { Radio, Wifi, Activity, ArrowRight } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function IoTPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="secondary">Technology Capability</Badge>
            <h1>IoT & Embedded Systems</h1>
            <p className="text-muted text-base sm:text-lg">
              Connecting physical micro-controllers, sensors, and hardware directly to cloud backends and real-time dashboards.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col gap-3">
              <Radio className="w-8 h-8 text-secondary" />
              <h3 className="text-lg font-bold">ESP32 & Micro-controllers</h3>
              <p className="text-sm text-muted">Firmware programming, sensor calibration, and embedded C++ logic for hardware hardware systems.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <Wifi className="w-8 h-8 text-secondary" />
              <h3 className="text-lg font-bold">WebSocket & Telemetry</h3>
              <p className="text-sm text-muted">Low-latency bi-directional communication channels for live sensor stream transmission.</p>
            </Card>
            <Card className="p-6 flex flex-col gap-3">
              <Activity className="w-8 h-8 text-secondary" />
              <h3 className="text-lg font-bold">Real-Time Dashboards</h3>
              <p className="text-sm text-muted">Cross-platform mobile and web monitoring applications built with Flutter and Next.js.</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">Build Hardware Solutions</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}