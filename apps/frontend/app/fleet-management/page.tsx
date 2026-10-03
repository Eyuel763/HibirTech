'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Radio, 
  ShieldCheck, 
  Fuel, 
  Wrench, 
  Smartphone, 
  MapPin, 
  Activity, 
  Truck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  ChevronRight,
  TrendingDown,
  Award
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { FormBanner } from '@/components/ui/FormBanner';
import { FormField } from '@/components/ui/FormField';
import { FormSubmissionState } from '@/types/form';
import { submitLeadForm } from '@/lib/api/client';

const CUSTOMER_BENEFITS = [
  {
    title: 'Real-Time GPS Tracking',
    description: 'Always know where your vehicles are. View live vehicle locations on a map, track speed, and receive instant alerts when vehicles enter or leave designated areas.',
    icon: MapPin,
  },
  {
    title: 'Fuel Theft & Loss Prevention',
    description: 'Protect your biggest operational expense. Monitor fuel levels in real time and receive immediate notifications whenever an unexpected fuel drop occurs.',
    icon: Fuel,
  },
  {
    title: 'Driver Safety & Performance Scorecards',
    description: 'Promote safe driving habits. Track harsh braking, rapid acceleration, speeding, and excessive idling to reduce wear and prevent road accidents.',
    icon: ShieldCheck,
  },
  {
    title: 'Smart Maintenance Reminders',
    description: 'Prevent expensive breakdowns before they happen. Receive automatic reminders for oil changes, tire rotations, and scheduled servicing based on actual vehicle mileage.',
    icon: Wrench,
  },
  {
    title: 'Easy Mobile & Web Access',
    description: 'Manage your fleet anytime, anywhere. Access live maps, driver reports, and instant alerts seamlessly from your smartphone, tablet, or desktop computer.',
    icon: Smartphone,
  },
];

const TARGET_SECTORS = [
  {
    title: 'Freight & Logistics',
    description: 'Track long-haul cargo trucks across regional routes, ensure on-time deliveries, and eliminate unauthorized fuel siphoning.',
    icon: Truck,
  },
  {
    title: 'Corporate & Commercial Fleets',
    description: 'Manage company cars, track daily vehicle usage, streamline driver assignments, and keep digital maintenance records.',
    icon: Building2,
  },
  {
    title: 'Passenger & Public Transit',
    description: 'Ensure passenger safety, monitor bus route adherence, enforce speed limits, and maintain schedule reliability.',
    icon: Activity,
  },
  {
    title: 'Vehicle Rental & Machinery',
    description: 'Protect valuable assets, track operating hours on heavy machinery, and prevent unauthorized vehicle use.',
    icon: Radio,
  },
];

export default function FleetManagementPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fleet_size: '10-50',
    message: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `Fleet Management Demo Request - ${formData.company} (${formData.fleet_size} vehicles)`,
      message: `Company: ${formData.company}\nFleet Size: ${formData.fleet_size}\n\nAdditional Details:\n${formData.message}`,
    };

    const result = await submitLeadForm('contact/', payload);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        fleet_size: '10-50',
        message: '',
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/60 to-background pt-12 sm:pt-20 pb-16 border-b border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm gap-1.5">
                  <Truck className="w-4 h-4" /> Smart Fleet Intelligence
                </Badge>
              </div>

              <h1 className="text-secondary leading-tight text-3xl sm:text-5xl font-extrabold tracking-tight">
                Complete Control Over Your Fleet — <span className="text-primary">Real-Time GPS, Fuel Security & Driver Safety</span>
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Get real-time visibility into your vehicles, prevent fuel theft, and lower daily operating costs with our easy-to-use fleet tracking software and smart vehicle sensors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#demo" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" fullWidth className="gap-2">
                    Request Live Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#benefits" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" fullWidth>
                    See How It Works
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-secondary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-Time GPS Tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant Fuel Theft Alerts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Easy Mobile & Web App
                </span>
              </div>
            </div>

            {/* Visual Hero Live Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="w-full rounded-2xl bg-secondary text-white p-6 sm:p-8 shadow-2xl border border-slate-700 relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Fleet Status Dashboard</span>
                  </div>
                  <Badge variant="accent" className="text-[10px]">Live Tracking</Badge>
                </div>

                <div className="my-6 space-y-4">
                  <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Truck #08 (Cargo Route)</p>
                        <p className="text-[11px] text-slate-400">Addis Ababa ➔ Hawassa • 68 km/h</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">ON ROUTE</span>
                  </div>

                  <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Fuel className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Fuel Level Sensor</p>
                        <p className="text-[11px] text-slate-400">Tank: 88% • No anomalies detected</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">SECURE</span>
                  </div>

                  <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Driver Safety Score</p>
                        <p className="text-[11px] text-slate-400">Zero speeding or harsh braking</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-bold">98 / 100</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Smart Vehicle Sensors</span>
                  <span>Mobile & Web App Sync</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. CORE CUSTOMER BENEFITS */}
      <Section id="benefits" className="bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-3">Built for Fleet Owners</Badge>
            <h2 className="text-3xl font-extrabold text-secondary">Everything You Need to Protect & Optimize Your Fleet</h2>
            <p className="text-muted text-base mt-2 leading-relaxed">
              Designed specifically to solve real challenges faced by vehicle operators and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUSTOMER_BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <Card key={idx} className="p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center font-bold">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{benefit.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </Card>
              );
            })}

            {/* Mobile App Highlight Card */}
            <Card className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-secondary to-slate-900 text-white border-none">
              <div className="flex flex-col gap-4">
                <Badge variant="accent" className="w-fit">Mobile Access</Badge>
                <h3 className="text-xl font-bold text-white">Manage Operations Right From Your Phone</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Receive instant push notifications on your Android or iPhone whenever a vehicle leaves a route, exceeds speed limits, or experiences a sudden fuel drop.
                </p>
              </div>
              <div className="pt-6">
                <a href="#demo" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                  Request Mobile App Demo <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. HOW IT WORKS (SIMPLE 3-STEP PROCESS) */}
      <Section className="bg-muted-bg/30 border-y border-subtle">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="primary" className="mb-3">Simple 3-Step Setup</Badge>
            <h2 className="text-3xl font-extrabold text-secondary">How Hibir Fleet Works</h2>
            <p className="text-sm text-muted mt-2">Getting your fleet monitored and protected takes just 3 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            <Card className="p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-base flex items-center justify-center">1</div>
              <h3 className="text-lg font-bold text-secondary">Quick Sensor Installation</h3>
              <p className="text-xs text-muted leading-relaxed">
                Our technicians install compact, non-intrusive smart tracking sensors and fuel monitors in your vehicles.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-base flex items-center justify-center">2</div>
              <h3 className="text-lg font-bold text-secondary">Automatic Live Sync</h3>
              <p className="text-xs text-muted leading-relaxed">
                Your vehicles automatically send live GPS location, speed, and fuel levels to your secure cloud account.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-base flex items-center justify-center">3</div>
              <h3 className="text-lg font-bold text-secondary">Log In & Save Money</h3>
              <p className="text-xs text-muted leading-relaxed">
                Open your phone or laptop to view live maps, receive alerts, and cut daily vehicle operating costs.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. TARGET INDUSTRIES */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Tailored Solutions for Your Industry</h2>
            <p className="text-sm text-muted mt-2">Built for transport operators and business fleets across Ethiopia.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_SECTORS.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <Card key={idx} className="p-6 flex flex-col gap-3">
                  <IconComp className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-bold text-secondary">{sector.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{sector.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. DEMO REQUEST FORM */}
      <Section id="demo" className="bg-gradient-to-b from-muted-bg/50 to-background border-t border-subtle">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <Badge variant="primary" className="w-fit">Get Started</Badge>
              <h2 className="text-3xl font-extrabold text-secondary leading-tight">
                Request a Free Live Fleet Demo
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Discover how much fuel and maintenance money your business can save with Hibir Fleet Management.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-secondary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free on-site hardware demonstration
                </div>
                <div className="flex items-center gap-2.5 text-xs text-secondary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Custom fuel savings & ROI calculation
                </div>
                <div className="flex items-center gap-2.5 text-xs text-secondary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> On-site or virtual setup across Ethiopia
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 border-2 border-subtle">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-secondary">Request Your Fleet Demo</h3>

                  <FormBanner
                    status={formState.status}
                    successMessage={formState.message || 'Thank you! Our fleet specialist will contact you shortly.'}
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Full Name" name="name" required error={formState.fieldErrors?.name}>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Abebe Bikila"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

                    <FormField label="Company / Fleet Name" name="company" required error={formState.fieldErrors?.company}>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Logistics Ethiopia PLC"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Email Address" name="email" required error={formState.fieldErrors?.email}>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="abebe@logistics.et"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

                    <FormField label="Phone Number" name="phone" required error={formState.fieldErrors?.phone}>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251 900 000 000"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  <FormField label="Number of Vehicles" name="fleet_size" required>
                    <select
                      name="fleet_size"
                      value={formData.fleet_size}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    >
                      <option value="1-10">1 - 10 vehicles</option>
                      <option value="10-50">10 - 50 vehicles</option>
                      <option value="50-100">50 - 100 vehicles</option>
                      <option value="100+">100+ vehicles</option>
                    </select>
                  </FormField>

                  <FormField label="Specific Needs / Questions" name="message">
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your main tracking priorities (e.g. fuel security, location tracking)..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary resize-none"
                    />
                  </FormField>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState.status === 'submitting'}
                    className="mt-2 gap-2"
                  >
                    {formState.status === 'submitting' ? (
                      'Submitting Request...'
                    ) : (
                      <>
                        Request Live Demo <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
