'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Database, 
  ShieldCheck, 
  Smartphone, 
  Layers, 
  Zap, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowLeft 
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
import { getProductBySlug } from '@/lib/constants/products';

export default function SoftwareDevPage() {
  const product = getProductBySlug('software-development');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    project_type: 'Full-Stack Web & Mobile',
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
      subject: `Software Engineering Inquiry - ${formData.organization} (${formData.project_type})`,
      message: `Organization: ${formData.organization}\nProject Type: ${formData.project_type}\n\nProject Scope / Notes:\n${formData.message}`,
    };

    const result = await submitLeadForm('contact/', payload);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        project_type: 'Full-Stack Web & Mobile',
        message: '',
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/60 to-background pt-10 pb-16 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link href="/" className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <div className="flex items-center gap-2">
              <Badge variant="accent" className="py-1 px-3.5 text-xs sm:text-sm flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Coming Soon & Early Access
              </Badge>
            </div>

            <h1 className="text-secondary leading-tight text-3xl sm:text-5xl font-extrabold tracking-tight">
              Custom <span className="text-primary">Software Engineering</span> & Architecture
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Tailored web, mobile, and backend systems built to scale with your business and solve your unique operational challenges.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-secondary">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Web Portals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Flutter Mobile
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Django REST APIs
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* CORE CAPABILITIES GRID */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-2">Capability Overview</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Engineering Stack & Services</h2>
            <p className="text-sm text-muted mt-2">Enterprise software tailored for business automation and digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Fast & Scalable Web Systems</h3>
              <p className="text-sm text-muted leading-relaxed">
                Responsive Next.js web applications with server-side rendering, speed optimization, and clean UI components.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary">iOS & Android Mobile Apps</h3>
              <p className="text-sm text-muted leading-relaxed">
                Unified cross-platform mobile applications built with Flutter for seamless business operations.
              </p>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-100 text-secondary flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Enterprise-Grade Security & Performance</h3>
              <p className="text-sm text-muted leading-relaxed">
                Robust Django REST Framework backends designed for high throughput, data security, and long-term scalability.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* EARLY ACCESS / INQUIRY FORM */}
      <Section id="inquire" className="bg-muted-bg/40 border-t border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 sm:p-10 border-2 border-subtle">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="text-center space-y-2 mb-2">
                  <Badge variant="primary">Early Access Consultation</Badge>
                  <h3 className="text-2xl font-bold text-secondary">Inquire About Software Development</h3>
                  <p className="text-xs sm:text-sm text-muted">
                    Preparing a custom web portal, mobile app, or backend architecture? Get in touch for early consultations.
                  </p>
                </div>

                <FormBanner
                  status={formState.status}
                  successMessage={formState.message || 'Inquiry received! Our software architecture team will contact you.'}
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
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <FormField label="Organization / Business" name="organization" required error={formState.fieldErrors?.organization}>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Hibir Innovations"
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
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <FormField label="Phone Number" name="phone">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 900 000 000"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>
                </div>

                <FormField label="Primary Software Interest" name="project_type">
                  <select
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                  >
                    <option value="Full-Stack Web & Mobile">Full-Stack Web & Mobile System</option>
                    <option value="Django REST API Backend">Django REST API Backend</option>
                    <option value="Next.js Web Portal">Next.js Web Portal</option>
                    <option value="Flutter Mobile Application">Flutter Mobile Application</option>
                    <option value="IoT & Custom Software Integration">IoT & Custom Software Integration</option>
                  </select>
                </FormField>

                <FormField label="Project Summary / Notes" name="message">
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your software requirements or timeline..."
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
                    'Submitting Inquiry...'
                  ) : (
                    <>
                      Submit Software Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}