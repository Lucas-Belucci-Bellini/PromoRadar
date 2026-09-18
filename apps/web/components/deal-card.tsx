import Link from 'next/link';
import type { Deal } from '../lib/demo-data';
import { formatBRL } from '../lib/demo-data';

export function DealCard({ deal }: { deal: Deal }) {
  const discount = deal.previousPrice && deal.previousPrice > deal.price
    ? Math.round((1 - deal.price / deal.previousPrice) * 100)
    : null;

  return (
    <article className="card">
      <div className="row-between">
        <span className="tag">{deal.category}</span>
        <span className="tag">{deal.status.toUpperCase()}</span>
      </div>
      <h3>{deal.title}</h3>
      <p>{deal.description}</p>
      <div className="meta"><span>{deal.store}</span><span>•</span><span>{deal.sourceLabel}</span></div>
      <strong className="price">{formatBRL(deal.price)}{deal.previousPrice ? <span className="old">{formatBRL(deal.previousPrice)}</span> : null}</strong>
      {discount ? <div className="notice">Desconto ilustrativo: {discount}%</div> : null}
      <div className="actions"><Link className="button secondary" href={`/ofertas/${deal.slug}`}>Ver análise</Link></div>
    </article>
  );
}
