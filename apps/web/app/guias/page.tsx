import { GuideCard } from '../../components/guide-card';
import { guides } from '../../lib/demo-data';

export const metadata = { title: 'Guias' };

export default function Guias() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">EDITORIAL</span>
        <h1 className="page-title">Guias de compra</h1>
        <p className="lead">Conteúdo original para entender especificações, preço, histórico e condições.</p>
        <div className="cards" style={{ marginTop: 28 }}>
          {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </div>
    </section>
  );
}