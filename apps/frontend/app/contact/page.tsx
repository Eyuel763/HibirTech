'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { FormBanner } from '@/components/ui/FormBanner';
import { FormField } from '@/components/ui/FormField';
import { FormSubmissionState } from '@/types/form';
import { submitLeadForm } from '@/lib/api/client';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormSubmissionState>({
    status: 'idle',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });

    const result = await submitLeadForm('contact/', formData);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 inline-block" /> Get In Touch
            </Badge>
            <h1 className="text-secondary leading-tight">
              Let&apos;s Build something <span className="text-primary">Impactful</span> Together
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Have questions about our software solutions or STEM Academy programs? Our team is ready to connect.
            </p>
          </div>
        </Container>
      </Section>

      {/* FORM & DIRECTORY GRID */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary">Contact Information</h2>
                <p className="text-xs text-muted mt-1">
                  Reach out directly through any of our official channels or visit our innovation center.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted">Email Us</span>
                    <a href="mailto:contact@hibirtech.com" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                      contact@hibirtech.com
                    </a>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted">Call Us</span>
                    <a href="tel:+251900000000" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                      +251 900 000 000
                    </a>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted">Office Location</span>
                    <span className="text-sm font-bold text-secondary">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted">Operating Hours</span>
                    <span className="text-sm font-bold text-secondary">
                      Monday – Friday: 8:30 AM – 5:30 PM (EAT)
                    </span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 border-2 border-subtle">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-secondary">Send Us a Message</h3>

                  <FormBanner
                    status={formState.status}
                    successMessage={formState.message}
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Full Name"
                      name="name"
                      required
                      error={formState.fieldErrors?.name}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

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
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Subject"
                    name="subject"
                    required
                    error={formState.fieldErrors?.subject}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <FormField
                    label="Message"
                    name="message"
                    required
                    error={formState.fieldErrors?.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
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
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
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