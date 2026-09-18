import Link from 'next/link';
import { siteConfig } from '../lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <span className="mark">PR</span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="muted">{siteConfig.description}</p>
          <p className="affiliate-note">
            {siteConfig.affiliateEnabled
              ? 'Alguns links podem gerar comissão por compras qualificadas.'
              : 'Links de afiliado estão desativados nesta versão.'}
          </p>
        </div>
        <div className="footer-links">
          <Link href="/ofertas">Ofertas</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/guias">Guias</Link>
          <Link href="/metodologia">Metodologia</Link>
          <Link href="/transparencia">Transparência</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/termos">Termos</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Preços e disponibilidade devem ser confirmados na fonte.</span>
      </div>
    </footer>
  );
}
