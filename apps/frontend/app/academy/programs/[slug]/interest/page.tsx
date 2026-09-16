'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, GraduationCap, Send, BookOpen } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { FormBanner } from '@/components/ui/FormBanner';
import { FormField } from '@/components/ui/FormField';
import { FormSubmissionState } from '@/types/form';
import { submitLeadForm } from '@/lib/api/client';
import { ACADEMY_PROGRAMS } from '@/data/academyData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProgramInterestPage({ params }: PageProps) {
  const { slug } = use(params);
  const program = ACADEMY_PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const [formData, setFormData] = useState({
    program_slug: slug,
    full_name: '',
    email: '',
    phone: '',
    participant_age: '',
    notes: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      ...formData,
      participant_age: formData.participant_age
        ? parseInt(formData.participant_age, 10)
        : null,
    };

    const result = await submitLeadForm('program-interest/', payload);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({
        program_slug: slug,
        full_name: '',
        email: '',
        phone: '',
        participant_age: '',
        notes: '',
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HEADER SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-8 pb-12 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link
              href={`/academy/programs/${slug}`}
              className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Program Details
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5 inline-block" /> Express Interest
            </Badge>
            <h1 className="text-secondary leading-tight">
              Enrollment Inquiry: <span className="text-primary">{program.title}</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Fill out the form below to register your interest for upcoming cohorts, schedules, or lab openings.
            </p>
          </div>
        </Container>
      </Section>

      {/* FORM & PROGRAM OVERVIEW SECTION */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Program Summary Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Card className="p-6 border-2 border-subtle flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <BookOpen className="w-4 h-4" /> Track Summary
                </div>
                <div>
                  <h2 className="text-lg font-bold text-secondary">{program.title}</h2>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{program.description}</p>
                </div>

                <div className="space-y-2 text-xs text-muted border-t border-subtle pt-3">
                  <div className="flex justify-between py-1">
                    <span>Target Level:</span>
                    <span className="font-semibold text-secondary">{program.level}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Audience:</span>
                    <span className="font-semibold text-secondary">{program.targetAudience}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Duration:</span>
                    <span className="font-semibold text-secondary">{program.duration}</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Interest Form */}
            <div className="lg:col-span-8">
              <Card className="p-6 sm:p-8 border-2 border-subtle">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-secondary">Student & Contact Details</h3>

                  <FormBanner
                    status={formState.status}
                    successMessage={formState.message}
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  <FormField
                    label="Full Name (Parent or Student)"
                    name="full_name"
                    required
                    error={formState.fieldErrors?.full_name}
                  >
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Email Address"
                      name="email"
                      required
                      error={formState.fieldErrors?.email}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

                    <FormField
                      label="Phone Number"
                      name="phone"
                      error={formState.fieldErrors?.phone}
                    >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251 900 000 000"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Participant Age (Optional)"
                    name="participant_age"
                    error={formState.fieldErrors?.participant_age}
                    helpText="Help us tailor hardware kits for the student's age group."
                  >
                    <input
                      type="number"
                      id="participant_age"
                      name="participant_age"
                      min={6}
                      max={25}
                      value={formData.participant_age}
                      onChange={handleChange}
                      placeholder="e.g. 14"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <FormField
                    label="Additional Notes / Questions"
                    name="notes"
                    error={formState.fieldErrors?.notes}
                  >
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about previous programming background, preferred weekend times, or questions..."
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
                        Submit Program Inquiry <Send className="w-4 h-4" />
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