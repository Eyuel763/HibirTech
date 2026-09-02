import React from 'react';
import { cn } from '@/lib/utils';

export const Section: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, children, ...props }) => (
  <section className={cn('py-10 sm:py-16 md:py-20', className)} {...props}>
    {children}
  </section>
);