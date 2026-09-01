import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FirstStep Academy - Learn Digital Skills & Earn Online',
  description: 'Your first step to learning, building skills, and earning online. Master digital skills through free courses, tutorials, and resources.',
  keywords: 'online learning, digital skills, courses, tutorials, affiliate marketing, SEO, web development',
  authors: [{ name: 'FirstStep Academy' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://firststepacademy.com',
    siteName: 'FirstStep Academy',
    title: 'FirstStep Academy - Learn Digital Skills & Earn Online',
    description: 'Your first step to learning, building skills, and earning online.',
    images: [{
      url: 'https://firststepacademy.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FirstStep Academy',
    description: 'Learn digital skills and start earning online',
    images: ['https://firststepacademy.com/og-image.png'],
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
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0070F3" />
        <link rel="canonical" href="https://firststepacademy.com" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
