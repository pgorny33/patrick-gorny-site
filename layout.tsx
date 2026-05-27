import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patrick Gorny | New York Residential Advisory',
  description: 'Patrick Gorny, Founder of PG Residential at Corra Realty Group. Buyer advisory, seller representation, and development advisory in New York City.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
