import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Code2, 
  Mail, 
  ArrowRight,
  Globe
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

// Brand SVG Components
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const TEAM_MEMBERS = [
  {
    slug: 'eyuel-gebreselassie',
    name: 'Eyuel Gebreselassie',
    role: 'Co-Founder & Lead Software Engineer',
    department: 'Engineering',
    bio: 'Software engineering student and researcher specializing in high-concurrency microservice architectures, Django REST API backends, and Flutter mobile applications.',
    github: 'https://github.com/Eyuel763',
    linkedin: 'https://linkedin.com',
    skills: ['Django', 'Next.js', 'Flutter', 'Spring Boot', 'IoT'],
    avatarInitial: 'E',
  },
  {
    slug: 'hibir-core-team',
    name: 'Hibir Tech Core Team',
    role: 'STEM Instructors & Hardware Developers',
    department: 'Education & Hardware',
    bio: 'A passionate group of developers and robotics mentors leading block-coding workshops, hardware lab builds, and secondary school STEM outreach across Ethiopia.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    skills: ['Scratch', 'Tinkercad', 'Python', 'ESP32', 'Robotics'],
    avatarInitial: 'H',
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <Users className="w-3.5 h-3.5 mr-1 inline-block" /> Our Team
            </Badge>
            <h1 className="text-secondary leading-tight">
              Meet the Builders Behind <span className="text-primary">Hibir Tech</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Engineers, educators, and innovators dedicated to elevating software standards and STEM education.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.slug} className="flex flex-col justify-between p-6 sm:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center shadow-sm">
                      {member.avatarInitial}
                    </div>
                    <Badge variant="outline">{member.department}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{member.role}</p>
                  </div>

                  <p className="text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-[11px] font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-subtle mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-muted">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <Link href={`/team/${member.slug}`}>
                    <Button variant="outline" size="sm" className="gap-1">
                      View Profile <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}