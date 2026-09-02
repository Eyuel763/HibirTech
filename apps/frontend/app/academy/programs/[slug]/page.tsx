import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  HelpCircle 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ACADEMY_PROGRAMS } from '@/data/academyData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = ACADEMY_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* HEADER SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-8 pb-12 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link href="/academy/programs" className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Programs Directory
            </Link>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">{program.level}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> {program.targetAudience}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {program.duration}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-secondary">{program.title}</h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {program.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* DETAILED CONTENT */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Curriculum Details */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <Card className="p-6 sm:p-8 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" /> Key Learning Outcomes
                </h2>
                <div className="space-y-3 pt-2">
                  {program.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-secondary leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 sm:p-8 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Technologies & Tools Mastered
                </h2>
                <p className="text-xs text-muted">
                  Students will gain practical, hands-on experience using industry-standard platforms and hardware kits.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {program.featuredTools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3.5 py-1.5 text-xs font-mono">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar Enrollment Action */}
            <div className="flex flex-col gap-6">
              <Card className="p-6 flex flex-col gap-5 border-2 border-primary/20">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Enrollment Open</span>
                  <h3 className="text-lg font-bold text-secondary">Join Next Cohort</h3>
                </div>

                <div className="space-y-2 text-xs text-muted border-t border-b border-subtle py-3">
                  <div className="flex justify-between py-1">
                    <span>Format:</span>
                    <span className="font-semibold text-secondary">In-Person & Lab Sessions</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Duration:</span>
                    <span className="font-semibold text-secondary">{program.duration}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Audience:</span>
                    <span className="font-semibold text-secondary">{program.targetAudience}</span>
                  </div>
                </div>

                <Link href="/contact" className="w-full">
                  <Button variant="primary" size="md" fullWidth>
                    Submit Enrollment Inquiry
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 bg-muted-bg/50 flex flex-col gap-3 border-none">
                <h4 className="text-sm font-bold text-secondary flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-primary" /> Have Questions?
                </h4>
                <p className="text-xs text-muted">
                  Reach out to our STEM mentors to learn about cohort schedules, lab equipment, or school partnerships.
                </p>
                <Link href="/contact" className="pt-1">
                  <Button variant="outline" size="sm" fullWidth>
                    Contact Academy Mentors
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}