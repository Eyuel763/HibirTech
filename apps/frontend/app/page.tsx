import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  GraduationCap, 
  Code2, 
  ArrowRight, 
  Radio, 
  ShieldCheck, 
  Fuel, 
  Wrench, 
  Cpu, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Zap,
  Clock,
  Rocket
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { PRODUCTS } from '@/lib/constants/products';

export default function HomePage() {
  const fleetProduct = PRODUCTS.find((p) => p.slug === 'fleet-management');
  const academyProduct = PRODUCTS.find((p) => p.slug === 'stem-academy');
  const softwareProduct = PRODUCTS.find((p) => p.slug === 'software-development');

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/60 to-background pt-12 sm:pt-20 pb-16 border-b border-subtle">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm gap-1.5">
                  <Rocket className="w-3 h-3" /> STEM Education & Technology Innovation in Ethiopia
                </Badge>
              </div>

              <h1 className="text-secondary leading-tight text-3xl sm:text-5xl font-extrabold tracking-tight">
                Inspiring the Next Generation of <span className="text-primary">African Innovators</span> Through STEM
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Hibir Technologies empowers young builders with hands-on robotics, coding, and hardware engineering — while delivering enterprise IoT fleet management solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link href="/academy" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" fullWidth className="gap-2">
                    Explore STEM Academy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/fleet-management" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" fullWidth>
                    Fleet Management System
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Dual Product Card */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl bg-secondary text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-slate-700">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between z-10 pb-4 border-b border-slate-700/80">
                  <Badge variant="accent">Hibir Tech Hub</Badge>
                  <span className="text-xs text-slate-400 font-mono">Addis Ababa, ET</span>
                </div>

                <div className="z-10 my-6 space-y-4">
                  <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">STEM Academy</p>
                        <p className="text-[11px] text-slate-400">Hardware Labs & Robotics</p>
                      </div>
                    </div>
                    <Badge variant="primary" className="text-[10px]">Flagship Program</Badge>
                  </div>

                  <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Fleet Telemetry</p>
                        <p className="text-[11px] text-slate-400">GPS, Fuel Sensors & Scorecards</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">Enterprise System</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. CORE PRODUCTS GRID */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-3">Product Portfolio</Badge>
            <h2 className="text-3xl font-extrabold text-secondary">Our Products & Solutions</h2>
            <p className="text-muted text-base mt-2">
              Hands-on STEM education, enterprise fleet telemetry, and custom software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Hibir STEM Academy */}
            <Card className="flex flex-col justify-between p-6 sm:p-8 border-l-4 border-l-primary hover:shadow-lg transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <Badge variant="primary">{academyProduct?.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold text-secondary">{academyProduct?.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {academyProduct?.shortDescription}
                </p>
                <ul className="space-y-2 pt-2 border-t border-subtle text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Scratch to C++ Progression
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Hardware-in-the-Loop Labs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> School Robotics Outreach
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <Link href="/academy">
                  <Button variant="primary" size="md" fullWidth className="gap-2">
                    Explore STEM Academy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Card 2: Fleet Management System */}
            <Card className="flex flex-col justify-between p-6 sm:p-8 border-l-4 border-l-secondary hover:shadow-lg transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 text-secondary flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">{fleetProduct?.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold text-secondary">{fleetProduct?.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {fleetProduct?.shortDescription}
                </p>
                <ul className="space-y-2 pt-2 border-t border-subtle text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Real-time GPS & Geofencing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Fuel Monitoring & Theft Alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Driver Safety & Behavior Monitoring
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <Link href="/fleet-management">
                  <Button variant="outline" size="md" fullWidth className="gap-2">
                    Explore Fleet System <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Card 3: Custom Software Development (Coming Soon) */}
            <Card className="flex flex-col justify-between p-6 sm:p-8 border-l-4 border-l-amber-500 hover:shadow-lg transition-all bg-gradient-to-b from-surface to-muted-bg/30">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <Badge variant="accent" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-secondary">{softwareProduct?.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {softwareProduct?.shortDescription}
                </p>
                <ul className="space-y-2 pt-2 border-t border-subtle text-xs text-secondary font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> Fast & Scalable Web Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> iOS & Android Mobile Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> Enterprise-Grade Security & Performance
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <Link href="/technology/software-development">
                  <Button variant="outline" size="md" fullWidth className="gap-2 border-amber-500/40 text-amber-700 hover:bg-amber-50">
                    Preview Software Hub <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. STEM ACADEMY SPOTLIGHT */}
      <Section className="bg-muted-bg/40 border-y border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <Badge variant="primary" className="w-fit">STEM Innovation Spotlight</Badge>
              <h2 className="text-3xl font-extrabold text-secondary">Empowering Future Hardware & Software Builders</h2>
              <p className="text-muted leading-relaxed">
                Hibir STEM Academy prepares students with problem-solving skills, computational logic, and team collaboration through hands-on bootcamps.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-secondary font-medium pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Microcontroller Hardware Kits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Progressive Age-Appropriate Pathways
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Direct Mentorship from Active Developers
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/academy">
                  <Button variant="primary" size="lg" className="gap-2">
                    Explore Academy Programs <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-subtle shadow-md flex flex-col gap-4">
              <h3 className="text-xl font-bold text-secondary">Hardware-in-the-Loop Education</h3>
              <p className="text-sm text-muted leading-relaxed">
                Our STEM programs introduce students to practical computing. Students write code that immediately controls physical sensors, motors, and displays.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-muted-bg/40 rounded-xl border border-subtle flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">Robotics & Arduino Assembly</p>
                    <p className="text-xs text-muted">Building functional microcontroller projects.</p>
                  </div>
                </div>

                <div className="p-4 bg-muted-bg/40 rounded-xl border border-subtle flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-secondary flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">Block to C++ Logic</p>
                    <p className="text-xs text-muted">Structured transition from Scratch to C++.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. FLEET MANAGEMENT SPOTLIGHT */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <Badge variant="secondary" className="w-fit">Telemetry & IoT Enterprise Spotlight</Badge>
              <h2 className="text-3xl font-extrabold text-secondary">
                Eliminate Fuel Loss & Maximize Fleet Uptime
              </h2>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Get real-time visibility into your vehicles, prevent fuel theft, and lower operating costs with our end-to-end telemetry platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-primary shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">Live GPS Tracking</h4>
                    <p className="text-xs text-muted">Geofencing & route history logging.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-primary shrink-0">
                    <Fuel className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">Fuel Anomaly Alerts</h4>
                    <p className="text-xs text-muted">Instant notifications on sudden fuel drops.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">Driver Scorecards</h4>
                    <p className="text-xs text-muted">Track harsh braking & idling habits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-primary shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">Automated Maintenance</h4>
                    <p className="text-xs text-muted">Mileage-based preventative alerts.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/fleet-management#demo">
                  <Button variant="outline" size="lg" className="gap-2">
                    Request Live Fleet Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-subtle shadow-md space-y-4">
              <h3 className="text-lg font-bold text-secondary flex items-center justify-between">
                <span>Fleet Telemetry Dashboard Preview</span>
                <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">CONNECTED</span>
              </h3>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl border border-subtle bg-muted-bg/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-bold text-secondary">Vehicle #08 (Heavy Cargo)</p>
                      <p className="text-muted text-[11px]">Addis Ababa ➔ Hawassa</p>
                    </div>
                  </div>
                  <span className="font-bold text-secondary">68 km/h</span>
                </div>

                <div className="p-3.5 rounded-xl border border-subtle bg-muted-bg/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <Fuel className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="font-bold text-secondary">Fuel Level</p>
                      <p className="text-muted text-[11px]">Tank Capacity: 350L</p>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-600">88% (Normal)</span>
                </div>

                <div className="p-3.5 rounded-xl border border-subtle bg-muted-bg/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-bold text-secondary">Safety Compliance</p>
                      <p className="text-muted text-[11px]">Monthly Driver Rating</p>
                    </div>
                  </div>
                  <span className="font-bold text-blue-600">96 / 100</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. BOTTOM ACTION CTA */}
      <Section className="bg-secondary text-white py-16 sm:py-20 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 relative z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Ready to Shape the Future of STEM in Ethiopia?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Whether you want to enroll students in hands-on STEM programs, partner with us as a school, or modernize your fleet operations — let's connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/academy" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth>
                  Explore STEM Academy
                </Button>
              </Link>
              <Link href="/fleet-management#demo" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="border-slate-600 text-white hover:bg-slate-800">
                  Request Fleet Demo
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}