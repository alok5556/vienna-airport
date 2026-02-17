import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vienna Airport Platform',
  description: 'Next.js frontend for Payload + Vendure stack',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
