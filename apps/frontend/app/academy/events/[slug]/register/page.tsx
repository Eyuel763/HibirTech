'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, ArrowLeft, Send, Ticket, Users } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { FormBanner } from '@/components/ui/FormBanner';
import { FormField } from '@/components/ui/FormField';
import { FormSubmissionState } from '@/types/form';
import { submitLeadForm } from '@/lib/api/client';
import { ACADEMY_EVENTS } from '@/data/academyData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function EventRegisterPage({ params }: PageProps) {
  const { slug } = use(params);
  const event = ACADEMY_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const [formData, setFormData] = useState({
    event_slug: slug,
    full_name: '',
    email: '',
    phone: '',
    attendee_count: 1,
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === 'attendee_count'
          ? parseInt(e.target.value, 10)
          : e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });

    const result = await submitLeadForm('event-register/', formData);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({
        event_slug: slug,
        full_name: '',
        email: '',
        phone: '',
        attendee_count: 1,
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
              href="/academy/events"
              className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Events Schedule
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Ticket className="w-3.5 h-3.5 mr-1.5 inline-block" /> Event Registration
            </Badge>
            <h1 className="text-secondary leading-tight">
              Register for <span className="text-primary">{event.title}</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Reserve your seat for live hardware demonstrations, STEM interactive sessions, and student project exhibits.
            </p>
          </div>
        </Container>
      </Section>

      {/* FORM & EVENT OVERVIEW SECTION */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Event Summary Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Card className="p-6 border-2 border-subtle flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Calendar className="w-4 h-4" /> Event Details
                </div>
                <div>
                  <h2 className="text-lg font-bold text-secondary">{event.title}</h2>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{event.description}</p>
                </div>

                <div className="space-y-2 text-xs text-muted border-t border-subtle pt-3">
                  <div className="flex items-start gap-2 py-1">
                    <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-secondary block">Date & Time</span>
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 py-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-secondary block">Location</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 py-1">
                    <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-secondary block">Format</span>
                      <span>{event.type}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-8">
              <Card className="p-6 sm:p-8 border-2 border-subtle">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-secondary">Attendee Information</h3>

                  <FormBanner
                    status={formState.status}
                    successMessage={formState.message}
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  <FormField
                    label="Full Name"
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
                    label="Number of Seats / Attendees"
                    name="attendee_count"
                    required
                    error={formState.fieldErrors?.attendee_count}
                  >
                    <select
                      id="attendee_count"
                      name="attendee_count"
                      required
                      value={formData.attendee_count}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    >
                      <option value={1}>1 Attendee</option>
                      <option value={2}>2 Attendees</option>
                      <option value={3}>3 Attendees</option>
                      <option value={4}>4 Attendees</option>
                      <option value={5}>5+ Attendees</option>
                    </select>
                  </FormField>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState.status === 'submitting' || !event.registrationOpen}
                    className="mt-2 gap-2"
                  >
                    {formState.status === 'submitting' ? (
                      'Confirming Registration...'
                    ) : event.registrationOpen ? (
                      <>
                        Confirm Event Registration <Send className="w-4 h-4" />
                      </>
                    ) : (
                      'Registration Closed'
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