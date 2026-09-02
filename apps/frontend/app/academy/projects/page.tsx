'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Search, 
  Code, 
  Bot, 
  Radio, 
  Cpu, 
  ArrowLeft 
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { STUDENT_PROJECTS } from '@/data/academyData';
import { DisciplineCategory } from '@/types/academy';

export default function StudentProjectsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const disciplines = [
    { label: 'All Projects', value: 'all' },
    { label: 'IoT & Embedded', value: 'iot' },
    { label: 'AI & ML', value: 'ai-ml' },
    { label: 'Robotics', value: 'robotics' },
    { label: 'Coding', value: 'coding' },
  ];

  const filteredProjects = STUDENT_PROJECTS.filter((project) => {
    const matchesDiscipline = selectedDiscipline === 'all' || project.discipline === selectedDiscipline;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDiscipline && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-10 pb-14 border-b border-subtle">
        <Container>
          <div className="mb-6">
            <Link href="/academy" className="text-xs font-semibold text-muted hover:text-primary transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Academy Overview
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <Badge variant="accent" className="py-1 px-3.5 text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block" /> Student Innovations
            </Badge>
            <h1 className="text-secondary leading-tight">
              STEM Academy <span className="text-primary">Project Showcase</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Explore hands-on software, robotics, and hardware builds created by our students during workshops and bootcamps.
            </p>
          </div>
        </Container>
      </Section>

      {/* SEARCH & FILTERS */}
      <Section className="bg-surface py-6 border-b border-subtle">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search by title, tag, or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
              />
            </div>

            {/* Discipline Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {disciplines.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setSelectedDiscipline(d.value)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                    selectedDiscipline === d.value
                      ? 'bg-primary text-white'
                      : 'bg-muted-bg text-secondary hover:bg-subtle'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* PROJECT GRID */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-5xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted text-base">No student projects matched your filter criteria.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedDiscipline('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary">
                          {project.studentName} (Age {project.age})
                        </span>
                        <Badge variant="secondary" className="uppercase text-[10px]">
                          {project.discipline}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-secondary">{project.title}</h3>
                        <p className="text-xs text-muted leading-relaxed mt-2">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-6 border-t border-subtle flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-muted-bg text-secondary px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="sm">Demo</Button>
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}