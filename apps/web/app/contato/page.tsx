export const metadata = { title: 'Contato' };

export default function Contato() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">CONTATO</span>
        <h1 className="page-title">Fale com o PromoRadar.</h1>
        <article className="article">
          <p className="lead">Este canal será usado para correções de conteúdo, dúvidas e sugestões.</p>
          <h2>Antes da publicação definitiva</h2>
          <p>Será configurado um endereço oficial e um fluxo de atendimento. Nesta fase não há envio automático de mensagens.</p>
        </article>
      </div>
    </section>
  );
}