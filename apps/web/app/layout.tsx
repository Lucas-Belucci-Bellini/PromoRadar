import './globals.css';
import type { Metadata } from 'next';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'PromoRadar — Comprar melhor começa por comparar',
    template: '%s | PromoRadar',
  },
  description: 'Ofertas, histórico de preços e conteúdo editorial para ajudar você a comparar antes de comprar.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
