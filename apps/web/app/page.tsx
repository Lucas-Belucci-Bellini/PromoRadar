import Link from 'next/link';

const highlights = [
  ['Produto exato', 'Variantes diferentes não devem ser tratadas como o mesmo produto.'],
  ['Custo total', 'Preço e frete precisam ser analisados juntos quando o dado existir.'],
  ['Histórico', 'O contexto temporal ajuda a entender uma queda de preço.'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">RADAR DE COMPRAS</span>
            <h1>Comprar melhor começa por <span>comparar.</span></h1>
            <p className="lead">
              O PromoRadar organiza ofertas, contexto de preço e conteúdo editorial para você
              entender o que está comparando antes de comprar.
            </p>
            <div className="actions">
              <Link className="button primary" href="/ofertas">Explorar ofertas</Link>
              <Link className="button secondary" href="/guias">Ler guias</Link>
            </div>
            <p className="muted">
              O catálogo atual é demonstrativo e não representa preços em tempo real.
            </p>
          </div>

          <aside className="panel">
            <div className="panel-top">
              <span>RADAR STATUS</span>
              <span>● DEMO</span>
            </div>
            <div className="score">— <small>/ 100</small></div>
            <h2>Análise contextual</h2>
            <div className="rule"><span>Produto exato</span><strong>A conferir</strong></div>
            <div className="rule"><span>Preço total</span><strong>A conferir</strong></div>
            <div className="rule"><span>Histórico</span><strong>Planejado</strong></div>
            <div className="notice">
              O score real será calculado pelo núcleo Rust quando as fontes autorizadas e o histórico estiverem conectados.
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">COMO FUNCIONA</span>
          <h2>O preço é só uma parte da história.</h2>
          <div className="cards">
            {highlights.map(([title, text]) => (
              <article className="card" key={title}>
                <span className="tag">REGRA</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">TRANSPARÊNCIA</span>
          <h2>Monetização não define o preço.</h2>
          <p className="lead">
            Quando links comerciais existirem, eles serão identificados separadamente. A camada de comparação deve continuar independente da comissão.
          </p>
          <Link className="button secondary" href="/transparencia">Ver transparência</Link>
        </div>
      </section>
    </>
  );
}
