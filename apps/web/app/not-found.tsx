import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="page-title">Esta página não existe.</h1>
        <p className="lead">O endereço pode estar incorreto ou o registro ainda não faz parte do catálogo.</p>
        <Link className="button primary" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
