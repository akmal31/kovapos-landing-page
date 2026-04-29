import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'KovaPOS | Sistem Kasir Modern untuk Bisnis Anda',
  description: 'Sistem Point of Sales (POS) khusus untuk Salon Kecantikan dan Barbershop. Kelola komisi, membership, dan transaksi dengan mudah.',
  icons: {
    icon: 'https://storage.googleapis.com/timetraq-public/other/img/Favicon%20KovaPOS.png',
  },
  openGraph: {
    title: 'KovaPOS | Sistem Kasir Modern untuk Bisnis Anda',
    description: 'Sistem Point of Sales (POS) khusus untuk Salon Kecantikan dan Barbershop. Kelola komisi, membership, dan transaksi dengan mudah.',
    images: [
      {
        url: 'https://storage.googleapis.com/timetraq-public/other/img/kova_preview_1',
        width: 1200,
        height: 630,
        alt: 'KovaPOS Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://storage.googleapis.com/timetraq-public/other/img/kova_preview'],
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
