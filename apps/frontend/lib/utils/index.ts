import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatCurrency(amount?: number | string, currency = 'ETB'): string {
  if (amount === undefined || amount === null) return 'Contact for Pricing';
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return `${num.toLocaleString()} ${currency}`;
}