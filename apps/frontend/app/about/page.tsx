import React from 'react';
import Link from 'next/link';
import { 
  Rocket, 
  Target, 
  Eye, 
  HeartHandshake, 
  Lightbulb, 
  ShieldCheck, 
  Users, 
  Code2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

const VALUES = [
  {
    title: 'Hands-On First',
    description: 'We believe real technical capability comes from building, failing, and iterating on real code and physical hardware.',
    icon: Lightbulb,
  },
  {
    title: 'Startup Agility',
    description: 'We move fast, adapt to evolving tech ecosystems, and build solutions with modern stacks and efficient architecture.',
    icon: Rocket,
  },
  {
    title: 'Community Impact',
    description: 'Democratizing access to high-quality STEM education for students across Ethiopia, regardless of background.',
    icon: HeartHandshake,
  },
  {
    title: 'Engineering Integrity',
    description: 'Delivering clean, secure, and maintainable software and hardware systems that scale reliably.',
    icon: ShieldCheck,
  },
];

const LEADERSHIP = [
  {
    name: 'Eyuel Gebreselassie',
    role: 'Co-Founder & Lead Software Engineer',
    bio: 'Software engineering researcher specializing in full-stack web architectures, IoT systems, and STEM curriculum engineering.',
    badge: 'Co-Founder',
  },
  {
    name: 'Hibir Tech Team',
    role: 'Engineering & Educator Core',
    bio: 'A passionate collective of young developers, hardware enthusiasts, and STEM mentors driving technical education in Addis Ababa.',
    badge: 'Core Team',
  },
];

const STARTUP_MILESTONES = [
  { year: '2025', title: 'The Spark', desc: 'Started as an initiative to bring modern hands-on coding and robotics labs to local students.' },
  { year: '2025', title: 'First Deployments', desc: 'Engineered custom full-stack solutions and IoT hardware prototypes while training early student cohorts.' },
  { year: '2026', title: 'Startup Scaling', desc: 'Expanding school partnerships, expanding hardware lab programs, and engineering enterprise software products.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO / STORY */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1 inline-block" /> Our Journey as an EdTech Startup
            </Badge>
            <h1 className="text-secondary leading-tight">
              Building the Future of Ethiopian Tech from the <span className="text-primary">Ground Up</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Hibir Tech is a fast-moving technology startup based in Addis Ababa. We combine practical, project-based STEM education for young minds with modern, enterprise-grade software development.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. COMPANY STORY */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <Badge variant="secondary" className="w-fit">Our Story</Badge>
              <h2>Born Out of Passion for Practical Innovation</h2>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                We saw a critical gap: traditional technology education often focuses purely on theory, leaving students unprepared for real-world software and hardware challenges.
              </p>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                As a young startup, Hibir Tech was founded to change that. We started by building hands-on robotics kits, interactive block-coding exercises, and full-stack software applications. Today, we empower both young learners building their first micro-controllers and organizations seeking robust digital solutions.
              </p>
            </div>

            {/* Milestone Timeline Card */}
            <div className="bg-muted-bg/40 p-6 sm:p-8 rounded-2xl border border-subtle flex flex-col gap-6">
              <h3 className="text-lg font-bold text-secondary flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" /> Startup Growth Journey
              </h3>
              <div className="flex flex-col gap-6 relative border-l-2 border-primary/30 pl-6 ml-2">
                {STARTUP_MILESTONES.map((m, idx) => (
                  <div key={idx} className="relative flex flex-col gap-1">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-surface" />
                    <span className="text-xs font-bold text-primary">{m.year}</span>
                    <h4 className="text-base font-bold text-secondary">{m.title}</h4>
                    <p className="text-xs sm:text-sm text-muted">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. MISSION & VISION */}
      <Section className="bg-muted-bg/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 sm:p-8 border-t-4 border-t-primary flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3>Our Mission</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                To equip young innovators and organizations with practical, high-impact STEM education and scalable technology tools—fostering problem-solving mindsets and engineering excellence across Ethiopia.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-t-4 border-t-secondary flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-secondary flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3>Our Vision</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                To become East Africa's leading youth innovation hub and digital transformation partner, bridging local talent with global software and hardware standards.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. CORE VALUES */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-2">Operating DNA</Badge>
            <h2>Our Core Values</h2>
            <p className="text-muted text-base mt-2">
              The principles driving our technology development and classroom instruction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <Card key={idx} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold">{val.title}</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{val.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. LEADERSHIP & TEAM */}
      <Section className="bg-muted-bg/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-2">The Minds Behind Hibir</Badge>
            <h2>Leadership & Core Team</h2>
            <p className="text-muted text-base mt-2">
              Engineers, builders, and educators passionate about technical empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {LEADERSHIP.map((member, idx) => (
              <Card key={idx} className="flex flex-col justify-between p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg flex items-center justify-center">
                      {member.name.charAt(0)}
                    </div>
                    <Badge variant="outline">{member.badge}</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-xs font-semibold text-primary">{member.role}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-secondary text-white py-14">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Want to Join Our Journey?</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Partner with us for school programs, co-develop software products, or join our growing startup community.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button variant="primary" size="md">
                Get in Touch <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}