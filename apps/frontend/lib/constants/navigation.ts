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
    label: 'Fleet Management System',
    href: '/fleet-management',
    badge: 'Product',
  },
  {
    label: 'STEM Academy',
    href: '/academy',
    badge: 'Academy',
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
  { label: 'Fleet Management', href: '/fleet-management' },
  { label: 'STEM Academy', href: '/academy' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV_CONFIG = {
  products: [
    { label: 'Fleet Management System', href: '/fleet-management' },
    { label: 'STEM Academy', href: '/academy' },
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
  description: 'Building high-impact technology products including Fleet Management Systems and empowering the next generation through STEM education in Ethiopia.',
  contactEmail: 'contact@hibirtech.com',
  location: 'Addis Ababa, Ethiopia',
};