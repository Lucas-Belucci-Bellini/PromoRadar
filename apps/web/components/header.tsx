import Link from 'next/link';

export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="mark">PR</span>
          <span>PromoRadar</span>
        </Link>
        <nav className="links" aria-label="Navegação principal">
          <Link href="/ofertas">Ofertas</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/guias">Guias</Link>
          <Link href="/metodologia">Metodologia</Link>
          <Link href="/sobre">Sobre</Link>
          <Link className="nav-cta" href="/alertas">Alertas</Link>
        </nav>
      </div>
    </header>
  );
}
