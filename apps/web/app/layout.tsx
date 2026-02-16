import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vienna Airport',
  description: 'Airport services, bookings and passenger information',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
