'use client';

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Button({ children, className, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-xl bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700 disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
