import type { Metadata } from 'next';
import { Source_Sans_3, Caveat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Script from 'next/script';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Macaw Transcribe | Private Transcription for Long Conversations',
  description:
    'Self-hosted, speaker-aware transcription for interviews, podcasts, research calls, and spoken notes. Review while processing. Own your audio.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${sourceSans.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
