export type ProductStatus = 'active' | 'coming_soon';

export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'fleet' | 'education' | 'software';
  status: ProductStatus;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  ctaText: string;
  ctaHref: string;
  features: ProductFeature[];
  highlights: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'fleet-management',
    slug: 'fleet-management',
    title: 'Fleet Management System',
    tagline: 'Real-time telemetry, driver intelligence, and fleet optimization',
    category: 'fleet',
    status: 'active',
    badge: 'Core Product',
    shortDescription: 'Enterprise IoT & telemetry platform for real-time vehicle tracking, driver safety, fuel monitoring, and predictive maintenance.',
    fullDescription: 'Hibir Fleet Management is an end-to-end IoT software and hardware system designed for transportation operators, corporate fleets, and logistics companies. Powered by custom ESP32 hardware sensors, real-time WebSocket data streaming, and intelligent dashboards.',
    href: '/fleet-management',
    ctaText: 'Request Demo',
    ctaHref: '/fleet-management#demo',
    features: [
      {
        title: 'Real-Time GPS & Geofencing',
        description: 'Live vehicle tracking, speed monitoring, route history, and geofencing alerts updated in real time.',
        iconName: 'Radio',
      },
      {
        title: 'Driver Safety & Behavior Monitoring',
        description: 'Automated detection of harsh braking, rapid acceleration, idling, and driver scorecards.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Fuel Loss Prevention & Anomaly Alerts',
        description: 'Precise fuel level monitoring, consumption analytics, and instant theft anomaly notifications.',
        iconName: 'Fuel',
      },
      {
        title: 'Automated Maintenance Alerts',
        description: 'Schedule preventative maintenance based on actual mileage, engine hours, and diagnostic trouble codes.',
        iconName: 'Wrench',
      },
      {
        title: 'IoT Microcontroller Integration',
        description: 'Custom ESP32 hardware kits installed directly on vehicles, connecting seamlessly to cloud backends.',
        iconName: 'Cpu',
      },
    ],
    highlights: [
      'ESP32 Hardware Sensor Telemetry',
      'Real-Time WebSocket Dashboard',
      'Driver Safety & Behavior Monitoring',
      'Automated Maintenance Logs',
    ],
  },
  {
    id: 'stem-academy',
    slug: 'stem-academy',
    title: 'Hibir STEM Academy',
    tagline: 'Empowering the next generation of African tech innovators',
    category: 'education',
    status: 'active',
    badge: 'Educational Pillar',
    shortDescription: 'Hands-on hardware and software education bridging block-coding, robotics, microcontrollers, and practical engineering for youth.',
    fullDescription: 'Hibir STEM Academy trains young learners and students through project-based learning. From Scratch block programming to real hardware assembly with Tinkercad, Arduino, ESP32, Python, and C++, we prepare students for real-world engineering challenges.',
    href: '/academy',
    ctaText: 'Explore STEM Programs',
    ctaHref: '/academy/programs',
    features: [
      {
        title: 'Scratch to C++ & Python Progression',
        description: 'Smooth transition path from drag-and-drop Scratch logic to Python and C++ hardware programming.',
        iconName: 'Code',
      },
      {
        title: 'Hardware-in-the-Loop Labs',
        description: 'Physical microcontroller kits, sensors, and actuators where code directly controls real hardware.',
        iconName: 'Bot',
      },
      {
        title: 'School & Institutional Partnerships',
        description: 'Turnkey robotics club integration, teacher training, and lab setup for primary and secondary schools.',
        iconName: 'Building2',
      },
      {
        title: 'Project Capstone Exhibitions',
        description: 'Every cohort concludes with functional student projects presented at annual innovation expos.',
        iconName: 'Award',
      },
    ],
    highlights: [
      'Hardware-in-the-Loop Robotics Kits',
      'Scratch to C++ Progression',
      'School & Club Lab Setup',
      'Active Software Mentor Support',
    ],
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Custom Software Engineering',
    tagline: 'Scalable web, mobile, and API architecture tailored for enterprises',
    category: 'software',
    status: 'coming_soon',
    badge: 'Coming Soon',
    shortDescription: 'Tailored web, mobile, and backend systems built to scale with your business and solve your unique operational challenges.',
    fullDescription: 'Launching soon: Custom enterprise software engineering services. We build modular, secure, and maintainable software tailored for corporate clients, educational institutions, and digital transformation initiatives.',
    href: '/technology/software-development',
    ctaText: 'Join Waitlist / Inquire',
    ctaHref: '/contact?topic=software',
    features: [
      {
        title: 'Fast & Scalable Web Systems',
        description: 'High-speed Next.js frontend applications with server-side rendering, speed optimization, and clean UI.',
        iconName: 'Globe',
      },
      {
        title: 'iOS & Android Mobile Apps',
        description: 'Unified cross-platform mobile applications built with Flutter for seamless business operations.',
        iconName: 'Smartphone',
      },
      {
        title: 'Enterprise-Grade Security & Performance',
        description: 'Robust Django REST Framework backends designed for high throughput, data security, and long-term scalability.',
        iconName: 'Layers',
      },
    ],
    highlights: [
      'Fast & Scalable Web Systems',
      'iOS & Android Mobile Apps',
      'Enterprise-Grade Security & Performance',
      'Docker & CI/CD Pipelines',
    ],
  },
];

export function getActiveProducts(): Product[] {
  return PRODUCTS.filter((p) => p.status === 'active');
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
