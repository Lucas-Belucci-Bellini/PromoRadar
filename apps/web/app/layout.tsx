import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'PromoRadar — Comprar melhor começa por comparar',
    template: '%s | PromoRadar',
  },
  description:
    'Ofertas, histórico de preços e conteúdo editorial para ajudar você a comparar antes de comprar.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="container nav">
            <Link className="brand" href="/">
              <span className="mark">PR</span>
              <span>PromoRadar</span>
            </Link>
            <nav className="links" aria-label="Navegação principal">
              <Link href="/ofertas">Ofertas</Link>
              <Link href="/guias">Guias</Link>
              <Link href="/metodologia">Metodologia</Link>
              <Link href="/sobre">Sobre</Link>
              <Link className="nav-cta" href="/alertas">Alertas</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <Link className="brand" href="/">
                <span className="mark">PR</span>
                <span>PromoRadar</span>
              </Link>
              <p>Comparação com contexto, não apenas preço.</p>
            </div>
            <div className="footer-links">
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/privacidade">Privacidade</Link>
              <Link href="/termos">Termos</Link>
              <Link href="/transparencia">Transparência</Link>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} PromoRadar</span>
            <span>Dados demonstrativos enquanto as fontes reais não estiverem conectadas.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
