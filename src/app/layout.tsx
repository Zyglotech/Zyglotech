import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zyglo Tech Enterprise | AI, ERP, SaaS & Academy',
  description: 'Move fast. Build smart. Scale bold. Zyglo Tech Enterprise builds AI chatbots, ERP systems, web apps, and LMS experiences from Chennai.',
  metadataBase: new URL('https://www.zyglo.tech'),
  openGraph: {
    title: 'Zyglo Tech Enterprise',
    description: 'AI-driven SaaS, ERP, chatbot, and academy solutions for modern businesses.',
    type: 'website',
    url: 'https://www.zyglo.tech',
    siteName: 'Zyglo Tech Enterprise',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zyglo Tech Enterprise AI platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyglo Tech Enterprise',
    description: 'Premium AI, ERP, SaaS, and academy experiences from Chennai.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-hidden text-white">
          <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_20%)] opacity-80" />
          <div className="pointer-events-none fixed inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_25%)] opacity-80" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
