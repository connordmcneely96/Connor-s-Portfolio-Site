import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://connormcneely.com'),
  title: {
    default: 'Connor McNeely | Mechanical Engineer × AI Developer',
    template: '%s | Connor McNeely',
  },
  description:
    '5+ years designing production systems. Now building AI tools that transform engineering. Pump design, RAG systems, full-stack development.',
  keywords: [
    'Mechanical Engineer',
    'AI Developer',
    'Full-Stack Developer',
    'Machine Learning',
    'LangChain',
    'RAG Systems',
    'Pump Design',
    'API 610',
    'SolidWorks',
    'Next.js',
    'Python',
    'TypeScript',
    'React',
    'Cloudflare',
    'Louisiana Tech',
    'Pfizer',
    'John Deere',
  ],
  authors: [{ name: 'Connor McNeely', url: 'https://connormcneely.com' }],
  creator: 'Connor McNeely',
  publisher: 'Connor McNeely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://connormcneely.com',
    siteName: 'Connor McNeely Portfolio',
    title: 'Connor McNeely | Mechanical Engineer × AI Developer',
    description:
      'Engineering precision meets AI intelligence. Production-ready mechanical design and custom AI development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Connor McNeely - Mechanical Engineer × AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connor McNeely | Mechanical Engineer × AI Developer',
    description:
      'Engineering precision meets AI intelligence. Production-ready mechanical design and custom AI development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://connormcneely.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Connor McNeely',
  url: 'https://connormcneely.com',
  image: 'https://connormcneely.com/og-image.png',
  sameAs: [
    'https://github.com/connordmcneely96',
    'https://linkedin.com/in/connordmcneely',
  ],
  jobTitle: 'Mechanical Engineer & AI Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Leadership Legacy LLC',
  },
  description:
    'Mechanical engineer with 5+ years experience building AI tools that transform engineering workflows. Pump design, RAG systems, multi-agent AI.',
  knowsAbout: [
    'Mechanical Engineering',
    'Pump Design',
    'API 610',
    'AI Development',
    'Machine Learning',
    'LangChain',
    'RAG Systems',
    'Full-Stack Development',
    'React',
    'Next.js',
    'Python',
    'SolidWorks',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Louisiana Tech University',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a1628" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-primary-900 text-white font-body antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
