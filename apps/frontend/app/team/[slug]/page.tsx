import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { TEAM_MEMBERS } from '../page';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeamMemberProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-8 pb-12 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link href="/team" className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Team Directory
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary text-white font-bold text-3xl sm:text-4xl flex items-center justify-center shrink-0 shadow-md">
              {member.avatarInitial}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="primary">{member.department}</Badge>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-secondary">{member.name}</h1>
              <p className="text-base font-semibold text-primary">{member.role}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <Card className="p-6 sm:p-8 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" /> Biography & Overview
                </h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {member.bio}
                </p>
              </Card>

              <Card className="p-6 sm:p-8 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" /> Core Technical Competencies
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {member.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1 text-xs font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="p-6 flex flex-col gap-4">
                <h4 className="text-base font-bold text-secondary">Connect & Links</h4>
                <div className="flex flex-col gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-subtle text-sm text-secondary hover:bg-muted transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-primary" /> GitHub Profile
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-subtle text-sm text-secondary hover:bg-muted transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 text-primary" /> LinkedIn Profile
                    </a>
                  )}
                </div>
              </Card>

              <Card className="p-6 bg-muted-bg/50 flex flex-col gap-3 border-none">
                <h4 className="text-sm font-bold text-secondary">Need technical consultation?</h4>
                <p className="text-xs text-muted">Get in touch with the team for custom software builds or educational partnerships.</p>
                <Link href="/contact" className="pt-1">
                  <Button variant="primary" size="sm" fullWidth>
                    Contact Team
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}