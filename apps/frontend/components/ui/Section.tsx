import React from 'react';
import { cn } from '@/lib/utils';

export const Section: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, children, ...props }) => (
  <section className={cn('py-8 sm:py-10 md:py-12', className)} {...props}>
    {children}
  </section>
);