import { SearchDeals } from '../../components/search-deals';

export const metadata = { title: 'Buscar' };

export default function Busca() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">BUSCA</span>
        <h1 className="page-title">Encontre um produto.</h1>
        <p className="lead">Pesquise no catálogo demonstrativo e veja como a experiência funcionará quando dados reais estiverem conectados.</p>
        <SearchDeals />
      </div>
    </section>
  );
}
