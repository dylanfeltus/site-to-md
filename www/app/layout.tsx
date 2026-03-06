import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'site-to-md | Make your site AI-agent-readable',
  description: 'Make any website AI-agent-readable. Generates /llms.txt + clean markdown for every page. One command. Zero config. Open source.',
  keywords: ['llms.txt', 'AI', 'agents', 'markdown', 'SEO', 'AEO', 'site-to-md'],
  authors: [{ name: 'Dylan Feltus', url: 'https://stratuslabs.io' }],
  openGraph: {
    title: 'site-to-md | Make your site AI-agent-readable',
    description: 'Make any website AI-agent-readable. Generates /llms.txt + clean markdown for every page.',
    url: 'https://sitetomd.com',
    siteName: 'site-to-md',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'site-to-md | Make your site AI-agent-readable',
    description: 'Make any website AI-agent-readable. Generates /llms.txt + clean markdown for every page.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
