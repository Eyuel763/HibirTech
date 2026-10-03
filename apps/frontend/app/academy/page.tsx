import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Code, 
  Bot, 
  Radio, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Award, 
  Users 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

import ProjectCarousel from '@/components/academy/ProjectCarousel';
import TestimonialCarousel from '@/components/academy/TestimonialCarousel';

import { 
  STEM_DISCIPLINES, 
  ACADEMY_PROGRAMS, 
  ACADEMY_EVENTS, 
  IMPACT_STATS 
} from '@/data/academyData';

const DISCIPLINE_ICONS: Record<string, React.ElementType> = {
  Code,
  Bot,
  Radio,
  Cpu,
};

export default function AcademyLandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO / INTRODUCTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <GraduationCap className="w-4 h-4 mr-1.5 inline-block" /> Hibir STEM Academy
            </Badge>
            <h1 className="text-secondary leading-tight">
              Empowering the Next Generation of <span className="text-primary">African Innovators</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Hands-on STEM education bridging software development, hardware engineering, robotics, and artificial intelligence for young builders.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link href="/academy/programs">
                <Button variant="primary" size="lg" className="gap-2">
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#cta">
                <Button variant="outline" size="lg">
                  Partner / School Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. EDUCATIONAL PHILOSOPHY */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Mindset</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Hardware-in-the-Loop & Project-Based Learning</h2>
            <p className="text-muted mt-3 text-base sm:text-lg leading-relaxed">
              We believe coding isn't just learned on a screen—it comes alive when software interacts with physical circuits, sensors, and real-world models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-bold text-secondary">Block to Text Progression</h3>
              <p className="text-sm text-muted leading-relaxed">
                Students start with visual drag-and-drop tools like Scratch and PictoBlox before seamlessly transitioning to raw Python and C++.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-bold text-secondary">Physical Hardware Integration</h3>
              <p className="text-sm text-muted leading-relaxed">
                Connecting micro-controllers (ESP32/Arduino) with ultrasonic sensors, motors, and displays to make learning tangible.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-bold text-secondary">End-to-End Capstone Builds</h3>
              <p className="text-sm text-muted leading-relaxed">
                Every track culminates in a functional student project, from interactive maze games to real-time telemetry safety gear.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. STEM DISCIPLINES */}
      <Section className="bg-muted-bg/30 border-y border-subtle">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Core STEM Disciplines</h2>
            <p className="text-base text-muted mt-2">Comprehensive curriculum pathways tailored for different developmental milestones.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEM_DISCIPLINES.map((disc) => {
              const IconComp = DISCIPLINE_ICONS[disc.iconName] || Code;
              return (
                <Card key={disc.id} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{disc.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{disc.description}</p>
                  </div>
                  <div className="pt-4 border-t border-subtle mt-4 flex flex-wrap gap-1.5">
                    {disc.tools.map((t, i) => (
                      <span key={i} className="text-xs font-medium font-mono bg-muted-bg text-secondary px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. PROGRAMS */}
      <Section id="programs" className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-2">Structured Tracks</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Academy Programs</h2>
            <p className="text-base text-muted mt-2">Cohort-based learning environments tailored by age bracket and experience level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ACADEMY_PROGRAMS.map((prog) => (
              <Card key={prog.slug} className="p-6 sm:p-8 flex flex-col justify-between border-2 border-subtle hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs font-semibold">{prog.targetAudience}</Badge>
                    <span className="text-sm font-semibold text-primary">{prog.duration}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary">{prog.title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{prog.description}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-subtle">
                    <p className="text-sm font-bold text-secondary">Key Learning Outcomes:</p>
                    {prog.outcomes.map((out, idx) => (
                      <div key={idx} className="text-sm text-muted flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-subtle mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {prog.featuredTools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs px-2.5 py-1 font-medium">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/academy/programs/${prog.slug}`}>
                    <Button variant="primary" size="sm">Enroll</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. STUDENT SHOWCASE — IMAGE CAROUSEL */}
      <Section className="bg-muted-bg/30 border-y border-subtle">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="accent" className="mb-2">Student Showcase</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Built by STEM Academy Students</h2>
            <p className="text-base text-muted mt-2">Real projects designed, programmed, and assembled by our youth cohorts.</p>
          </div>

          <ProjectCarousel />
        </Container>
      </Section>

      {/* 5b. TESTIMONIALS — VIDEO CAROUSEL */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-2">Voices of Impact</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">What Parents &amp; Students Say</h2>
            <p className="text-base text-muted mt-2">Hear directly from the families and students whose lives have been changed by hands-on STEM education.</p>
          </div>

          <TestimonialCarousel />
        </Container>
      </Section>

      {/* 6. EVENTS */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Upcoming Events & Workshops</h2>
            <p className="text-base text-muted mt-2">Join our upcoming interactive hardware labs and robotics bootcamps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ACADEMY_EVENTS.map((event) => (
              <Card key={event.id} className="p-6 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{event.type}</Badge>
                    <span className="text-sm font-medium text-secondary flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{event.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{event.description}</p>
                  <p className="text-sm text-muted flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" /> {event.location}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-subtle">
                  <Link href={`/academy/events/${event.slug}/register`}>
                    <Button variant="outline" size="sm" fullWidth disabled={!event.registrationOpen}>
                      {event.registrationOpen ? 'Register For Event' : 'Registration Closed'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. IMPACT */}
      <Section className="bg-secondary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our STEM Impact</h2>
            <p className="text-base text-slate-300 mt-2">Quantifiable results from our educational outreach programs.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 flex flex-col items-center gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary">{stat.value}</span>
                <span className="text-base font-bold text-white">{stat.label}</span>
                <p className="text-sm text-slate-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. CTA */}
      <Section id="cta" className="bg-surface">
        <Container>
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-muted-bg to-background border-2 border-primary/20 text-center flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <Badge variant="primary">Partner With Us</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Bring STEM Academy to Your School or Community</h2>
            <p className="text-base text-muted max-w-xl leading-relaxed">
              We collaborate with schools, institutions, and community organizations to set up hardware labs, run weekend coding camps, and mentor student innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Contact STEM Academy</Button>
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}