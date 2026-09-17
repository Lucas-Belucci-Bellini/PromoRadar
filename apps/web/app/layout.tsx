import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PromoRadar — Ofertas verificadas e guias de compra',
  description: 'Compare ofertas, entenda preços e acompanhe oportunidades de compra com transparência.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
