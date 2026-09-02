import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Bot, 
  Radio, 
  GraduationCap, 
  Laptop, 
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  TrendingUp,
  Award,
  Users,
  Building2,
  Newspaper,
  CheckCircle2
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

const TECH_SOLUTIONS = [
  {
    title: 'Custom Software Development',
    description: 'Scalable web and mobile applications tailored for enterprise and educational institutions.',
    icon: Zap,
    link: '/technology/software-development',
  },
  {
    title: 'Artificial Intelligence & Data',
    description: 'Intelligent automation, predictive models, and machine learning solutions.',
    icon: Bot,
    link: '/technology/artificial-intelligence',
  },
  {
    title: 'IoT & Embedded Systems',
    description: 'Smart hardware integration and connected ecosystem solutions for real-world impact.',
    icon: Radio,
    link: '/technology/iot',
  },
];

const FEATURED_PROGRAMS = [
  {
    id: '1',
    title: 'Junior Robotics & Coding',
    category: 'STEM Academy',
    ageRange: 'Ages 8-14',
    duration: '8 Weeks',
    description: 'Hands-on hardware assembly, Scratch block logic, and introductory Python programming.',
    badge: 'Popular',
  },
  {
    id: '2',
    title: 'Full-Stack Web Engineering',
    category: 'Career Acceleration',
    ageRange: 'Ages 16+',
    duration: '12 Weeks',
    description: 'Master modern web stacks, Django REST API backend design, and Next.js frontend deployment.',
    badge: 'Intensive',
  },
  {
    id: '3',
    title: 'AI & Embedded Hardware Lab',
    category: 'Advanced Innovation',
    ageRange: 'Ages 14-18',
    duration: '10 Weeks',
    description: 'Building micro-controller IoT systems integrated with cloud computer vision models.',
    badge: 'Advanced',
  },
];

const FEATURED_PROJECTS = [
  {
    id: '1',
    title: 'Smart Helmet Safety System',
    category: 'IoT & Hardware',
    description: 'An ESP32-powered IoT safety helmet featuring real-time telemetry, accident detection, and Flutter dashboard.',
    impact: 'Engineered for industrial safety and real-time monitoring.',
  },
  {
    id: '2',
    title: 'eKiray Digital Lease Platform',
    category: 'Enterprise Software',
    description: 'A modular enterprise platform automating lease registration, digital contracts, and verification.',
    impact: 'Streamlining civil documentation for urban municipalities.',
  },
  {
    id: '3',
    title: 'Reunite Hub Platform',
    category: 'Web Architecture',
    description: 'A full-stack web application designed for rapid public dynamic data matching and communication.',
    impact: 'High-concurrency database throughput with Django APIs.',
  },
];

const UPCOMING_EVENTS = [
  {
    id: '1',
    title: 'Annual Youth Robotics Competition 2026',
    date: 'Oct 15, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Addis Ababa Tech Hub',
    category: 'Competition',
  },
  {
    id: '2',
    title: 'Intro to Embedded Systems Workshop',
    date: 'Nov 02, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Hibir Main Lab / Virtual',
    category: 'Workshop',
  },
];

const IMPACT_METRICS = [
  { label: 'Students Trained', value: '500+', icon: Users },
  { label: 'Partner Schools', value: '15+', icon: Building2 },
  { label: 'Projects Built', value: '45+', icon: Award },
  { label: 'Employment Rate', value: '92%', icon: TrendingUp },
];

const PARTNERS = [
  'Addis Science & Tech University',
  'Ministry of Innovation & Tech',
  'National Robotics League',
  'TechEthio Labs',
];

const NEWS_ITEMS = [
  {
    id: '1',
    title: 'Expanding STEM Education Across Regional Schools',
    date: 'August 28, 2026',
    snippet: 'Hibir Tech initiates new hardware kit distribution program for secondary school robotics clubs.',
    category: 'Announcement',
  },
  {
    id: '2',
    title: 'Building Enterprise Microservices with Django & React',
    date: 'August 14, 2026',
    snippet: 'Insights and best practices from our software development team on modular monoliths vs microservices.',
    category: 'Engineering',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <Section className="bg-gradient-to-b from-muted-bg/50 to-background pt-12 sm:pt-20 pb-16 border-b border-subtle">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="flex flex-col gap-5 text-center lg:text-left max-w-2xl">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="primary" className="py-1 px-3 text-xs sm:text-sm">
                  🚀 Innovating STEM & Software in Ethiopia
                </Badge>
              </div>
              <h1 className="text-secondary leading-tight">
                Empowering the Next Generation of <span className="text-primary">Tech Innovators</span>
              </h1>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Hibir Technologies bridges practical STEM education with enterprise-grade software development, building high-impact technology solutions for individuals, schools, and organizations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" fullWidth>
                    Explore STEM Programs
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" fullWidth>
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full aspect-video sm:aspect-square max-w-md rounded-2xl bg-secondary text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="flex items-center justify-between z-10">
                  <Badge variant="accent">Hibir Lab</Badge>
                  <span className="text-xs text-slate-400">Addis Ababa, ET</span>
                </div>
                <div className="z-10 my-8">
                  <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Building Future Tech</p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold">Robotics, AI, & Enterprise Engineering</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-700/80 pt-4 z-10">
                  <div>
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-xs text-slate-400">Students Trained</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">20+</p>
                    <p className="text-xs text-slate-400">Deployed Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. WHAT HIBIR DOES */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-3">What Hibir Does</h2>
            <p className="text-muted text-base">
              We operate at the intersection of practical technology education and custom software engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col justify-between p-6 sm:p-8 border-l-4 border-l-primary">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-secondary">STEM & Robotics Academy</h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  Interactive curricula designed for young minds and aspiring engineers. From block programming and IoT hardware buildouts to advanced web development.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/programs" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  View Academy Curriculums <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            <Card className="flex flex-col justify-between p-6 sm:p-8 border-l-4 border-l-secondary">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 text-secondary flex items-center justify-center">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-secondary">Enterprise Tech Solutions</h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  Delivering robust, modern software architectures for businesses, educational institutions, and government initiatives.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/technology" className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Explore Enterprise Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. TECHNOLOGY SOLUTIONS OVERVIEW */}
      <Section className="bg-muted-bg/40">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">Capability Overview</Badge>
              <h2>Technology Solutions</h2>
            </div>
            <Link href="/technology">
              <Button variant="outline" size="sm">Explore All Services</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_SOLUTIONS.map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <Card key={idx} className="flex flex-col gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-primary flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4>{tech.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{tech.description}</p>
                  <Link href={tech.link} className="text-primary font-medium text-sm mt-auto pt-2 hover:underline inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. STEM ACADEMY SHOWCASE */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <Badge variant="accent" className="w-fit">STEM Innovation</Badge>
              <h2>Building the Future, One Engineer at a Time</h2>
              <p className="text-muted leading-relaxed">
                Our STEM Academy provides students with hands-on experience using industry-standard tools and hardware. We cultivate problem-solving, computational thinking, and team collaboration.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-secondary font-medium pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Hardware-in-the-Loop Robotics Kits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Age-Appropriate Progressive Learning Tracks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Mentorship from Active Software Engineers
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/schools">
                  <Button variant="primary">Bring Hibir to Your School</Button>
                </Link>
              </div>
            </div>
            <div className="bg-muted-bg p-8 rounded-2xl border border-subtle flex flex-col gap-4">
              <h3 className="text-lg font-bold text-secondary">Academy Impact Spotlight</h3>
              <p className="text-sm text-muted">
                Our hands-on programs use Scratch, Tinkercad, Python, and micro-controller hardware to spark passion for engineering in young minds.
              </p>
              <div className="p-4 bg-surface rounded-xl border border-subtle flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Practical Hardware Labs</p>
                  <p className="text-xs text-muted">Students build and program their own robotics projects.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. FEATURED PROGRAMS */}
      <Section className="bg-muted-bg/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" className="mb-2">Enrollment Open</Badge>
            <h2>Featured Programs</h2>
            <p className="text-muted text-base mt-2">
              Tailored courses built for different skill levels and age groups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROGRAMS.map((program) => (
              <Card key={program.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary">{program.category}</span>
                    <Badge variant="outline">{program.badge}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                  <p className="text-xs text-muted mb-4">{program.ageRange} • {program.duration}</p>
                  <p className="text-sm text-muted leading-relaxed">{program.description}</p>
                </div>
                <div className="pt-6 border-t border-subtle mt-6">
                  <Link href={`/programs`}>
                    <Button variant="outline" size="sm" fullWidth>
                      View Details & Enroll
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. PROJECTS & SHOWCASE */}
      <Section className="bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">Innovation Portfolio</Badge>
              <h2>Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" size="sm">View All Projects</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between">
                <div>
                  <Badge variant="accent" className="mb-3">{project.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
                </div>
                <div className="pt-4 border-t border-subtle">
                  <p className="text-xs font-semibold text-secondary">Impact:</p>
                  <p className="text-xs text-muted">{project.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. UPCOMING EVENTS */}
      <Section className="bg-muted-bg/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="primary" className="mb-2">Community & Events</Badge>
              <h2>Upcoming Workshops & Hackathons</h2>
            </div>
            <Link href="/events">
              <Button variant="outline" size="sm">View All Events</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <Card key={event.id} className="flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{event.category}</Badge>
                    <span className="text-xs font-semibold text-primary">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex flex-col gap-1.5 text-xs text-muted pt-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" /> {event.location}
                    </div>
                  </div>
                </div>
                <div className="pt-5 border-t border-subtle mt-5 flex justify-end">
                  <Link href="/events">
                    <Button variant="secondary" size="sm">Reserve Seat</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. IMPACT METRICS */}
      <Section className="bg-secondary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="accent" className="mb-2">Measured Outcomes</Badge>
            <h2 className="text-white">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/80 flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-1">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">{metric.value}</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 9. PARTNERS & ALLIANCES */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Trusted by Leading Institutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {PARTNERS.map((partner, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-subtle bg-muted-bg/30 text-center text-xs sm:text-sm font-semibold text-secondary flex items-center justify-center h-20">
                {partner}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. NEWS & INSIGHTS */}
      <Section className="bg-muted-bg/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">Latest News</Badge>
              <h2>Stories & Technical Insights</h2>
            </div>
            <Link href="/news">
              <Button variant="outline" size="sm">Read All News</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_ITEMS.map((item) => (
              <Card key={item.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-xs text-muted">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.snippet}</p>
                </div>
                <div className="pt-4 border-t border-subtle mt-4">
                  <Link href="/news" className="text-primary font-semibold text-xs hover:underline inline-flex items-center gap-1">
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11. BOTTOM CTA */}
      <Section className="bg-primary text-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Shape the Future of Tech?
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Whether you are looking to enroll in our STEM Academy, implement software solutions, or partner with us for educational impact, we are here to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Get in Touch
                </Button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" fullWidth className="border-white text-white hover:bg-white/10">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}