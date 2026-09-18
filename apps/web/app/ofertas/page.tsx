import { DealCard } from '../../components/deal-card';
import { deals } from '../../lib/demo-data';

export const metadata = { title: 'Ofertas' };

export default function Ofertas() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">CATÁLOGO</span>
        <h1 className="page-title">Ofertas e referências.</h1>
        <p className="lead">A interface está preparada para dados reais, mas os registros atuais são demonstrativos.</p>
        <div className="notice">Não use os valores desta página como cotação atual de uma loja.</div>
        <div className="cards" style={{ marginTop: 28 }}>
          {deals.map((deal) => <DealCard key={deal.slug} deal={deal} />)}
        </div>
      </div>
    </section>
  );
}
