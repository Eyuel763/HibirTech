import { 
  StemDiscipline, 
  ProgramTrack, 
  StudentProject, 
  AcademyEvent, 
  ImpactStat 
} from '@/types/academy';

export const STEM_DISCIPLINES: StemDiscipline[] = [
  {
    id: 'coding',
    title: 'Block & Text-Based Coding',
    description: 'Foundational computational thinking starting with Scratch and transitioning to Python logic.',
    iconName: 'Code',
    category: 'coding',
    tools: ['Scratch', 'PictoBlox', 'Python'],
  },
  {
    id: 'robotics',
    title: 'Robotics & Hardware',
    description: 'Interactive hardware programming, motor driving, and physical circuit creation.',
    iconName: 'Bot',
    category: 'robotics',
    tools: ['Tinkercad', 'Arduino', 'Sensors'],
  },
  {
    id: 'iot',
    title: 'IoT & Micro-controllers',
    description: 'Connecting physical environments to live data networks using ESP32 controllers.',
    iconName: 'Radio',
    category: 'iot',
    tools: ['ESP32', 'C++', 'WebSockets'],
  },
  {
    id: 'ai-ml',
    title: 'Practical AI & Machine Learning',
    description: 'Visual model training, computer vision basics, and introductory classifier building.',
    iconName: 'Cpu',
    category: 'ai-ml',
    tools: ['Teachable Machine', 'Python', 'OpenCV Basics'],
  },
];

export const ACADEMY_PROGRAMS: ProgramTrack[] = [
  {
    slug: 'junior-innovators',
    title: 'Junior Innovators Track',
    targetAudience: 'Ages 8 - 12',
    level: 'Beginner',
    duration: '6 Weeks',
    description: 'Introduction to block programming, logic loops, interactive storytelling, and simple circuit simulation.',
    outcomes: [
      'Understand loops, variables, and logic flow',
      'Build 2D interactive maze games',
      'Simulate basic LED circuits on Tinkercad',
    ],
    featuredTools: ['Scratch', 'Tinkercad', 'PictoBlox'],
  },
  {
    slug: 'embedded-systems-lab',
    title: 'Embedded Systems & IoT Lab',
    targetAudience: 'High School & Pre-College',
    level: 'Intermediate',
    duration: '8 Weeks',
    description: 'Hands-on hardware programming using C++ and ESP32 boards to stream real-time sensor telemetry.',
    outcomes: [
      'Write hardware control firmware',
      'Integrate ultrasonic, temperature, and motion sensors',
      'Stream live hardware telemetry via WebSocket connections',
    ],
    featuredTools: ['ESP32', 'C++', 'WebSockets', 'Flutter Dashboards'],
  },
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'proj-1',
    title: 'Smart Helmet Safety System',
    studentName: 'STEM Lab Team A',
    age: 15,
    description: 'An ESP32-powered safety helmet with live WebSocket alert streaming to a Flutter dashboard.',
    tags: ['ESP32', 'Sensors', 'Flutter'],
    discipline: 'iot',
  },
  {
    id: 'proj-2',
    title: 'AI Image Gesture Classifier',
    studentName: 'Junior Lab Team',
    age: 12,
    description: 'A custom trained machine learning model that controls a maze game via hand gestures.',
    tags: ['PictoBlox', 'Teachable Machine'],
    discipline: 'ai-ml',
  },
];

export const ACADEMY_EVENTS: AcademyEvent[] = [
  {
    id: 'event-1',
    title: 'Youth Robotics & Hardware Exposition',
    date: 'October 15, 2026',
    location: 'Hibir STEM Center, Addis Ababa',
    type: 'Exposition',
    description: 'Live showcase of hardware projects built by students during the summer bootcamp.',
    registrationOpen: true,
  },
  {
    id: 'event-2',
    title: 'Introduction to Block-Coding Workshop',
    date: 'November 5, 2026',
    location: 'Virtual / Online',
    type: 'Workshop',
    description: 'A free 2-hour interactive starter session for young students beginning their coding journey.',
    registrationOpen: true,
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    label: 'Students Mentored',
    value: '250+',
    description: 'Young learners introduced to block coding & micro-controllers.',
  },
  {
    label: 'Hardware Build Hours',
    value: '1,200+',
    description: 'Hands-on laboratory and circuit design experience.',
  },
  {
    label: 'Student Projects Built',
    value: '45+',
    description: 'Functional software games, IoT systems, and AI models.',
  },
  {
    label: 'School Outreach Labs',
    value: '12',
    description: 'Partner institutions and community STEM workshops.',
  },
];