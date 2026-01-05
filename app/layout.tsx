import type { Metadata } from 'next'
import LegacyShell from './components/LegacyShell'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connor Mcneely - Leadership & Legacy',
  description:
    'Empowering leaders to build lasting legacies through coaching, mentorship, and community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LegacyShell>{children}</LegacyShell>
      </body>
    </html>
  )
}
