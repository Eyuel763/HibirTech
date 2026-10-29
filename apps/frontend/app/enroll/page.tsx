'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  GraduationCap,
  Send,
  BookOpen,
  CheckCircle2,
  Cpu,
  Clock,
  Users,
  Award,
  Layers,
  ArrowRight,
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
import { ACADEMY_PROGRAMS } from '@/data/academyData';

function EnrollForm() {
  const searchParams = useSearchParams();
  const initialProgramSlug = searchParams.get('program') || '';

  const [formData, setFormData] = useState({
    program_slug: initialProgramSlug,
    full_name: '',
    email: '',
    phone: '',
    participant_age: '',
    notes: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  // Sync program_slug if URL query param changes
  useEffect(() => {
    if (initialProgramSlug) {
      setFormData((prev) => ({
        ...prev,
        program_slug: initialProgramSlug,
      }));
    }
  }, [initialProgramSlug]);

  const selectedProgram = ACADEMY_PROGRAMS.find(
    (p) => p.slug === formData.program_slug
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        program_slug: '',
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
      {/* HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-10 pb-14 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5 inline-block" /> STEM Academy Enrollment
            </Badge>
            <h1 className="text-secondary leading-tight text-3xl sm:text-4xl lg:text-5xl font-black">
              Start Your <span className="text-primary">STEM Journey</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              Apply or inquire for upcoming cohorts, hands-on robotics labs, and practical software engineering tracks at HibirTech STEM Academy.
            </p>
          </div>
        </Container>
      </Section>

      {/* MAIN ENROLLMENT FORM & DETAILS SECTION */}
      <Section className="bg-surface py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 border-2 border-subtle shadow-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">
                      Enrollment Inquiry Form
                    </h2>
                    <p className="text-xs sm:text-sm text-muted mt-1">
                      Complete the details below and our academy admissions team will contact you with cohort schedules and placement details.
                    </p>
                  </div>

                  <FormBanner
                    status={formState.status}
                    successMessage={
                      formState.message ||
                      'Inquiry recorded! Our academy team will reach out shortly.'
                    }
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  {/* Program Selection */}
                  <FormField
                    label="Choose Program Track"
                    name="program_slug"
                    required
                    error={formState.fieldErrors?.program_slug}
                    helpText="Select which track you or your student want to join."
                  >
                    <select
                      id="program_slug"
                      name="program_slug"
                      required
                      value={formData.program_slug}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    >
                      <option value="">-- Select a Program Track --</option>
                      {ACADEMY_PROGRAMS.map((prog) => (
                        <option key={prog.slug} value={prog.slug}>
                          {prog.title} ({prog.targetAudience})
                        </option>
                      ))}
                      <option value="general-inquiry">
                        General STEM Inquiry (Not sure yet)
                      </option>
                    </select>
                  </FormField>

                  {/* Full Name */}
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
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  {/* Email & Phone */}
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
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
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
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  {/* Participant Age */}
                  <FormField
                    label="Participant Age (Optional)"
                    name="participant_age"
                    error={formState.fieldErrors?.participant_age}
                    helpText="Assists us in placing the student into the right cohort and kit level."
                  >
                    <input
                      type="number"
                      id="participant_age"
                      name="participant_age"
                      min={6}
                      max={30}
                      value={formData.participant_age}
                      onChange={handleChange}
                      placeholder="e.g. 13"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  {/* Notes & Questions */}
                  <FormField
                    label="Additional Questions or Prior Experience (Optional)"
                    name="notes"
                    error={formState.fieldErrors?.notes}
                  >
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Let us know about previous programming knowledge, preferred timing (weekends/after school), or questions..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary resize-none"
                    />
                  </FormField>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState.status === 'submitting'}
                    className="mt-3 gap-2 w-full sm:w-auto self-start shadow-md shadow-primary/20"
                  >
                    {formState.status === 'submitting' ? (
                      'Submitting Enrollment Inquiry...'
                    ) : (
                      <>
                        Submit Enrollment Inquiry <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar Column: Program Details & Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {selectedProgram ? (
                <Card className="p-6 border-2 border-primary/30 bg-primary/5 flex flex-col gap-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary" className="text-xs">
                      Selected Program
                    </Badge>
                    <Link
                      href={`/academy/programs/${selectedProgram.slug}`}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Syllabus <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary">
                      {selectedProgram.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                      {selectedProgram.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-muted border-t border-subtle pt-3">
                    <div className="flex justify-between items-center py-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-primary" /> Target Audience:
                      </span>
                      <span className="font-semibold text-secondary">
                        {selectedProgram.targetAudience}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Layers className="w-3.5 h-3.5 text-primary" /> Level:
                      </span>
                      <span className="font-semibold text-secondary">
                        {selectedProgram.level}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-primary" /> Duration:
                      </span>
                      <span className="font-semibold text-secondary">
                        {selectedProgram.duration}
                      </span>
                    </div>
                  </div>

                  {selectedProgram.featuredTools && (
                    <div className="pt-2 border-t border-subtle">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-2">
                        Tools & Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProgram.featuredTools.map((tool, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs px-2.5 py-0.5"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ) : (
                <Card className="p-6 border-2 border-subtle bg-muted-bg/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <BookOpen className="w-4 h-4" /> Pick a Program Track
                  </div>
                  <h3 className="text-lg font-bold text-secondary">
                    Not sure which track fits?
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Select a track from the dropdown on the left or submit with general inquiry. Our mentors will evaluate your background and recommend the optimal cohort.
                  </p>
                </Card>
              )}

              {/* Academy Value Props */}
              <Card className="p-6 border border-subtle flex flex-col gap-4">
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
                  What Every Enrollment Includes
                </h4>
                <div className="space-y-3.5 text-xs text-secondary">
                  <div className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Hands-on Hardware Kits</span>
                      <span className="text-muted text-[11px]">
                        Physical microcontrollers, sensors, and components for live lab building.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Industry Mentorship</span>
                      <span className="text-muted text-[11px]">
                        Guided by experienced software and embedded system engineers.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Portfolio Project & Certificate</span>
                      <span className="text-muted text-[11px]">
                        Demonstrable projects showcased at our community demo day upon graduation.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-subtle pt-3">
                  <Link
                    href="/academy/programs"
                    className="text-xs font-semibold text-primary hover:underline flex items-center justify-between"
                  >
                    <span>Explore all academy curriculum tracks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense
      fallback={
        <Section className="py-20 text-center">
          <Container>
            <div className="text-muted text-sm">Loading enrollment form...</div>
          </Container>
        </Section>
      }
    >
      <EnrollForm />
    </Suspense>
  );
}
