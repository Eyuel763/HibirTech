export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'For Schools', href: '/schools' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const SITE_CONFIG = {
  name: 'Hibir Technologies',
  description: 'Empowering future innovators through STEM education, robotics, and high-impact technology solutions in Ethiopia.',
  contactEmail: 'contact@hibirtech.com',
  location: 'Addis Ababa, Ethiopia',
};