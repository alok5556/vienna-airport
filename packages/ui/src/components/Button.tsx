import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70',
      className
    )}
    {...props}
  />
);
