export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isComingSoon?: boolean;
}

export interface NavGroup {
  label: string;
  href?: string;
  items?: NavItem[];
}

export const PRODUCT_NAV_ITEMS: NavItem[] = [
  {
    label: 'STEM Academy',
    href: '/academy',
    badge: 'Academy',
  },
  {
    label: 'Fleet Management System',
    href: '/fleet-management',
    badge: 'Product',
  },
  {
    label: 'Software Engineering',
    href: '/technology/software-development',
    badge: 'Coming Soon',
    isComingSoon: true,
  },
];

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'STEM Academy', href: '/academy' },
  { label: 'Fleet Management', href: '/fleet-management' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV_CONFIG = {
  products: [
    { label: 'STEM Academy', href: '/academy' },
    { label: 'Fleet Management System', href: '/fleet-management' },
    { label: 'Software Engineering (Soon)', href: '/technology/software-development' },
  ],
  academy: [
    { label: 'Curriculum Tracks', href: '/academy/programs' },
    { label: 'Student Projects', href: '/academy/projects' },
    { label: 'Events & Workshops', href: '/academy/events' },
    { label: 'School Partnerships', href: '/schools/partner' },
  ],
  company: [
    { label: 'About Hibir Tech', href: '/about' },
    { label: 'Team & Leadership', href: '/team' },
    { label: 'News & Insights', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export const SITE_CONFIG = {
  name: 'Hibir Technologies',
  description: 'Empowering the next generation of African innovators through hands-on STEM education, robotics, and hardware engineering — while building enterprise-grade Fleet Management systems.',
  contactEmail: 'contact@hibirtech.com',
  location: 'Addis Ababa, Ethiopia',
};