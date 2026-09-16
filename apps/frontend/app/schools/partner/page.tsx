'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Cpu, 
  Users, 
  BookOpen, 
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

export default function SchoolPartnershipPage() {
  const [formData, setFormData] = useState({
    school_name: '',
    contact_person: '',
    email: '',
    phone: '',
    estimated_students: '',
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

    const result = await submitLeadForm('school-partner/', formData);
    setFormState(result);

    if (result.status === 'success') {
      setFormData({
        school_name: '',
        contact_person: '',
        email: '',
        phone: '',
        estimated_students: '',
        message: '',
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-10 pb-14 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link
              href="/academy"
              className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to STEM Academy
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Building2 className="w-3.5 h-3.5 mr-1.5 inline-block" /> Educational Institutional Partnerships
            </Badge>
            <h1 className="text-secondary leading-tight">
              Bring Next-Gen <span className="text-primary">STEM Labs & Robotics</span> to Your School
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Partner with HibirTech to integrate turnkey block-coding, hardware kits, and hands-on engineering programs into your curriculum.
            </p>
          </div>
        </Container>
      </Section>

      {/* FORM & VALUE PROP SECTION */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            {/* Partnership Benefits Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary">Why Partner With HibirTech?</h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  We empower educational institutions with practical learning infrastructure, mentor training, and specialized hardware.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-secondary">Hardware & Lab Equipment</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Custom microcontroller kits, sensor modules, and IoT apparatus configured specifically for primary and secondary students.
                    </p>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-secondary">Structured Curriculum</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Progressive syllabus spanning Scratch block-coding, Tinkercad circuit designs, and physical hardware deployment.
                    </p>
                  </div>
                </Card>

                <Card className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-secondary">Trainer-of-Trainers Support</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      We train school faculty or provide expert HibirTech instructors to run extracurricular robotics clubs and workshops.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* School Partnership Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 border-2 border-subtle">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-secondary">Institutional Inquiry Form</h3>

                  <FormBanner
                    status={formState.status}
                    successMessage={formState.message}
                    errorMessage={formState.serverError}
                    onReset={() => setFormState({ status: 'idle' })}
                  />

                  <FormField
                    label="School / Organization Name"
                    name="school_name"
                    required
                    error={formState.fieldErrors?.school_name}
                  >
                    <input
                      type="text"
                      id="school_name"
                      name="school_name"
                      required
                      value={formData.school_name}
                      onChange={handleChange}
                      placeholder="e.g. Hope Academy"
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Contact Person Name"
                      name="contact_person"
                      required
                      error={formState.fieldErrors?.contact_person}
                    >
                      <input
                        type="text"
                        id="contact_person"
                        name="contact_person"
                        required
                        value={formData.contact_person}
                        onChange={handleChange}
                        placeholder="Dr. Samuel Tassew"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

                    <FormField
                      label="Official Email Address"
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
                        placeholder="admin@school.edu.et"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone Number"
                      name="phone"
                      required
                      error={formState.fieldErrors?.phone}
                    >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251 900 000 000"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      />
                    </FormField>

                    <FormField
                      label="Estimated Student Reach"
                      name="estimated_students"
                      required
                      error={formState.fieldErrors?.estimated_students}
                    >
                      <select
                        id="estimated_students"
                        name="estimated_students"
                        required
                        value={formData.estimated_students}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
                      >
                        <option value="">Select range...</option>
                        <option value="Under 50">Under 50 students</option>
                        <option value="50 - 200">50 - 200 students</option>
                        <option value="200 - 500">200 - 500 students</option>
                        <option value="500+">500+ students</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField
                    label="Partnership Goals / Message"
                    name="message"
                    error={formState.fieldErrors?.message}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your school's interest (e.g., weekend coding club, full lab hardware setup, or teacher training)..."
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
                        Submit Partnership Request <Send className="w-4 h-4" />
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