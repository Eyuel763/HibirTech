import React from 'react';
import { cn } from '@/lib/utils';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div
    className={cn(
      'rounded-xl border border-subtle bg-surface p-4 sm:p-6 shadow-sm transition-all hover:shadow-md',
      className
    )}
    {...props}
  >
    {children}
  </div>
);