import React from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ACADEMY_EVENTS } from '@/data/academyData';

export default function EventsDirectoryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-10 pb-14 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link href="/academy" className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Academy Overview
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5 mr-1.5 inline-block" /> Academy Schedule
            </Badge>
            <h1 className="text-secondary leading-tight">
              Upcoming <span className="text-primary">STEM Events & Hardware Labs</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Participate in live hardware demonstrations, block-coding workshops, and community STEM expos.
            </p>
          </div>
        </Container>
      </Section>

      {/* EVENTS LISTING */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {ACADEMY_EVENTS.map((event) => (
              <Card key={event.id} className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {event.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-secondary">{event.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">{event.description}</p>

                  <div className="flex items-center gap-1.5 text-xs text-muted pt-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-subtle">
                  <Link href="/contact">
                    <Button variant="primary" size="sm" fullWidth disabled={!event.registrationOpen}>
                      {event.registrationOpen ? 'Register Now' : 'Seats Filled'}
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