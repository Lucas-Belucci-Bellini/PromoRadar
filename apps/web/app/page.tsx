const deals = [
  {name:'Notebook para estudos e desenvolvimento',type:'GUIA + OFERTAS',price:'A partir de R$ 2.499',desc:'O que conferir em memória, armazenamento, tela e garantia antes de comprar.'},
  {name:'SSD NVMe 1 TB',type:'ARMAZENAMENTO',price:'Faixa de referência',desc:'Aprenda a comparar capacidade, interface, desempenho e custo por GB.'},
  {name:'Monitor 24" Full HD',type:'PERIFÉRICOS',price:'Faixa de referência',desc:'Critérios para comparar painel, taxa de atualização, conectividade e ergonomia.'},
];

export default function Home(){
 return <>
  <header className="header"><div className="container nav"><a className="brand" href="/"><span className="mark">PR</span>PromoRadar</a><nav className="links"><a href="/ofertas">Ofertas</a><a href="/guias">Guias</a><a href="/metodologia">Metodologia</a><a href="/sobre">Sobre</a></nav></div></header>
  <main>
   <section className="hero"><div className="container hero-grid"><div><span className="eyebrow">RADAR DE COMPRAS</span><h1>Comprar melhor começa por <span>comparar.</span></h1><p className="lead">O PromoRadar organiza ofertas, histórico e conteúdo editorial para ajudar você a entender o preço antes de clicar em comprar.</p><div className="actions"><a className="button primary" href="/ofertas">Explorar ofertas</a><a className="button secondary" href="/metodologia">Ver metodologia</a></div><p className="muted">Nesta versão, o catálogo é demonstrativo e não representa preços em tempo real.</p></div><div className="panel"><div className="panel-top"><span>RADAR STATUS</span><span>● DEMO</span></div><div className="score">— <small>/ 100</small></div><h2>Análise de oferta</h2><div className="rule"><span>Produto exato</span><strong>A conferir</strong></div><div className="rule"><span>Histórico</span><strong>Planejado</strong></div><div className="rule"><span>Fonte</span><strong>Demonstrativa</strong></div><div className="notice">O score real será calculado pelo núcleo de regras quando as fontes autorizadas e o histórico estiverem conectados.</div></div></div></section>
   <section className="section"><div className="container"><span className="eyebrow">PONTO DE PARTIDA</span><h2>Explore por necessidade.</h2><div className="cards">{deals.map(d=><article className="card" key={d.name}><span className="tag">{d.type}</span><h3>{d.name}</h3><p>{d.desc}</p><strong className="price">{d.price}</strong></article>)}</div></div></section>
   <section className="section"><div className="container"><span className="eyebrow">TRANSPARÊNCIA</span><h2>Sem esconder o que está por trás do preço.</h2><p className="lead">Cada oferta real deverá ter fonte, data de verificação, variante do produto e contexto de preço. Links comerciais, quando existirem, serão identificados separadamente.</p><div className="notice">As ofertas exibidas hoje são apenas demonstrações. Nenhum dado desta página deve ser interpretado como preço atual de uma loja.</div></div></section>
  </main>
  <footer className="footer"><div className="container"><div className="footer-links"><a href="/sobre">Sobre</a><a href="/contato">Contato</a><a href="/privacidade">Privacidade</a><a href="/termos">Termos</a><a href="/transparencia">Transparência</a></div><p>PromoRadar — projeto independente de comparação e conteúdo de compras.</p></div></footer>
 </>
}
