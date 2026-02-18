import type { PropsWithChildren } from 'react';
import { cn } from '../lib/cn';

export const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('rounded-xl border border-slate-200 bg-white p-6 shadow-sm', className)}>{children}</div>
);
