'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  Clock, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ACADEMY_PROGRAMS } from '@/data/academyData';

export default function ProgramsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredPrograms = ACADEMY_PROGRAMS.filter((program) => {
    const matchesSearch = 
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.featuredTools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-16 pb-16 border-b border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
            <Badge variant="primary" className="py-1 px-3.5 text-xs sm:text-sm">
              <GraduationCap className="w-4 h-4 mr-1.5 inline-block" /> Curriculum & Tracks
            </Badge>
            <h1 className="text-secondary leading-tight">
              STEM Academy <span className="text-primary">Programs Directory</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Explore our structured learning pathways, designed to transform young learners from block-coding novices to embedded hardware builders.
            </p>
          </div>
        </Container>
      </Section>

      {/* FILTER & SEARCH BAR */}
      <Section className="bg-surface py-8 border-b border-subtle">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search programs, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-subtle bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
              />
            </div>

            {/* Level Selector Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs font-semibold text-muted mr-1">Level:</span>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                    selectedLevel === level
                      ? 'bg-primary text-white'
                      : 'bg-muted-bg text-secondary hover:bg-subtle'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* PROGRAM LISTINGS */}
      <Section className="bg-surface">
        <Container>
          <div className="max-w-5xl mx-auto">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted text-base">No programs matched your search criteria.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('All');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPrograms.map((program) => (
                  <Card key={program.slug} className="p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="primary">{program.level}</Badge>
                        <span className="text-xs font-semibold text-muted flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-primary" /> {program.targetAudience}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-secondary">{program.title}</h2>
                        <div className="flex items-center gap-2 text-xs text-primary font-medium mt-1">
                          <Clock className="w-3.5 h-3.5" /> {program.duration}
                        </div>
                      </div>

                      <p className="text-sm text-muted leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-subtle">
                        <p className="text-xs font-bold text-secondary">Learning Outcomes:</p>
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="text-xs text-muted flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-subtle mt-6 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {program.featuredTools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-[10px] font-mono">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/academy/programs/${program.slug}`}>
                        <Button variant="outline" size="sm" className="gap-1">
                          View Track <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
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