import { notFound } from 'next/navigation';
import { findGuide, guides } from '../../../lib/demo-data';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = findGuide(params.slug);
  return { title: guide?.title || 'Guia' };
}

export default function Guia({ params }: { params: { slug: string } }) {
  const guide = findGuide(params.slug);
  if (!guide) notFound();

  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">GUIA DE COMPRA</span>
        <h1 className="page-title">{guide.title}</h1>
        <article className="article">
          <p className="lead">{guide.excerpt}</p>
          <h2>O princípio</h2>
          <p>Uma boa comparação preserva produto, variante, preço, frete, condição de pagamento, vendedor, fonte e histórico.</p>
          <h2>Checklist</h2>
          <p>Produto exato, preço à vista, parcelamento, frete, disponibilidade, vendedor, garantia, fonte e horário de verificação.</p>
          <h2>Nota editorial</h2>
          <p>Este conteúdo é informativo e não constitui promessa de economia ou recomendação individual.</p>
        </article>
      </div>
    </section>
  );
}
