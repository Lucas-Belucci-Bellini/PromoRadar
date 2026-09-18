import { notFound } from 'next/navigation';
import { AffiliateNotice } from '../../../components/affiliate-notice';
import { catalogRepository } from '../../../lib/repository';
import { deals, formatBRL } from '../../../lib/demo-data';

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export default async function Oferta({ params }: { params: { slug: string } }) {
  const deal = await catalogRepository.findDeal(params.slug);
  if (!deal) notFound();

  const discount = deal.previousPrice && deal.previousPrice > deal.price
    ? Math.round((1 - deal.price / deal.previousPrice) * 100)
    : null;

  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">{deal.category.toUpperCase()}</span>
        <h1 className="page-title">{deal.title}</h1>
        <div className="meta"><span>Fonte: {deal.sourceLabel}</span><span>•</span><span>Estado: {deal.status}</span></div>
        <div className="stat-grid">
          <div className="stat"><strong>{formatBRL(deal.price)}</strong><span>preço demonstrativo</span></div>
          <div className="stat"><strong>{discount ? discount + '%' : '—'}</strong><span>desconto ilustrativo</span></div>
          <div className="stat"><strong>—</strong><span>frete real</span></div>
          <div className="stat"><strong>—</strong><span>histórico real</span></div>
        </div>
        <AffiliateNotice />
        <article className="article">
          <h2>Análise</h2>
          <p>{deal.description}</p>
          <h3>Contexto</h3>
          <p>{deal.note}</p>
          <h3>Futura versão operacional</h3>
          <p>Esta página receberá variante, vendedor, disponibilidade, custo total, fonte e histórico quando as integrações autorizadas estiverem conectadas.</p>
        </article>
      </div>
    </section>
  );
}
