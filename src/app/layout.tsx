import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | vanlife',
    default: 'vanlife',
  },
  description:
    'Vanlife is a van renting agency that rents all types of vans for your vacations and travels.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
