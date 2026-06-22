import { Bricolage_Grotesque, Schibsted_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
});

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-schibsted',
  weight: ['400', '500', '600', '700'],
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument',
  weight: ['400'],
  style: ['normal', 'italic'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Lauryn Hudson',
  description: 'Lauryn Hudson — Cofounder & CEO of MOVE Wellness Club. Software Engineer, Community Builder, Speaker.',
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
    <html
      lang="en"
      className={`${bricolage.variable} ${schibsted.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
