import { Cormorant, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

// Using Cormorant as a replacement for Freight Display Pro
const freight = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-freight',
  weight: ['300', '400', '500', '600', '700'],
});

// Using Montserrat as a replacement for Futura PT
const futura = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-futura',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Lauryn Hudson | Software Engineer',
  description: 'Professional portfolio of Lauryn Hudson, Software Engineer specializing in full-stack development.',
  icons: {
    icon: '/assets/LH.png',
    apple: '/assets/LH.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${futura.variable} ${freight.variable}`}>
      <body className="text-text-primary bg-white">
        {children}
      </body>
    </html>
  );
}