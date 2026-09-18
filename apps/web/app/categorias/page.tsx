import Link from 'next/link';
import { deals } from '../../lib/demo-data';

export const metadata = { title: 'Categorias' };

export default function Categorias() {
  const categories = Array.from(new Set(deals.map((deal) => deal.category)));

  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">EXPLORAR</span>
        <h1 className="page-title">Categorias.</h1>
        <p className="lead">Use categorias como ponto de partida para comparar produtos.</p>
        <div className="cards" style={{ marginTop: 28 }}>
          {categories.map((category) => (
            <Link className="card" href="/busca" key={category}>
              <span className="tag">CATEGORIA</span>
              <h3>{category}</h3>
              <p>Pesquisar registros demonstrativos desta categoria.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
